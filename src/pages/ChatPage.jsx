import '../index.css'
import '../App.css'
import { useEffect, useRef, useState } from 'react'

const backendws = "ws://chat.touhou.ir:3000/ws"

const ChatPage = () => {
    const ws = useRef(null)
    const [_name, setName] = useState("")
    const [_password, setPassword] = useState("")
    const [_messages, setMessages] = useState([])
    const audioRef = useRef(null);
    
    useEffect(() => {

        console.log("refreshed")
        setName(_ => localStorage.getItem("name") || "")
        setPassword(_ => localStorage.getItem("password") || "")

        ws.current = new WebSocket(backendws)

        ws.current.onopen = () => {
            console.log("connection established")
        }

        ws.current.onmessage = (event) => {
            audioRef.current.play()
            const message = event.data
            setMessages(l => l.concat(message))
        }

        return () => {
            ws.current?.close()
        }
    }, [])
    const [_input, setInput] = useState("")



    const SendToWs = (name, password, message) => {
        if (ws.current?.readyState === WebSocket.OPEN) {
            var wsJson = {"sender": name, "password": password, "content": message}
            console.log(wsJson);
            ws.current.send(JSON.stringify(wsJson))
        } else {
            console.warn("WebSocket not connected")
        }
    }
    return <>
    <audio
        ref={audioRef}
        src="/chatpage/send.ogg"
        preload="auto"
      />
        <div className='flex flex-col h-dvh scheme-home'>
            <div className="w-full h-9/10 max-h-9/10 overflow-auto flex flex-col-reverse p-4" >
                {_messages.toReversed().map(message => {
                    return <div className='color-4 dejavu' dir="auto">
                        {message}
                    </div>
                })}
            </div>
            <div className="w-full h-1/10 min-h-[120px] bg-1 content-center" >
                <div className="flex flex-row m-auto">
                    <div className='flex-col flex min-w-[100px] w-1/10 rounded-xl mr-1 ml-1'>
                    <input placeholder="name" value={_name} type="text" className='rounded-xl color-3 bg-1 dejavu' onChange={a => { localStorage.setItem("name", a.target.value); setName(_ => a.target.value) }} />
                    <input placeholder="password" value={_password} type="password" className='rounded-xl color-3 bg-1 dejavu' onChange={a => { localStorage.setItem("password", a.target.value); setPassword(_ => a.target.value) }} />
                    </div>

                    <div className='w-full flex flex-row items-center'>
                    <input placeholder='message' value={_input} type="text" className='w-full color-3 bg-1 dejavu max-h-[50px] rounded-xl' onKeyDown={k => { if (_name && _password && _input && k.key === "Enter") { SendToWs(_name, _password, _input); setInput(_ => "");  }}} onChange = { a => setInput(_ => a.target.value)}/>
                    
                    <button className='bg-2 h-[50px] w-[50px] ml-1 mr-1 rounded-xl' onClick={_ => {{ if(_name && _password && _input) SendToWs(_name, _password ,_input); setInput(_ => "")}}}>
                    <img src="/chatpage/send.png" className='scale-[3]'/>
                    </button>
                    </div>  
                </div>
            </div>
        </div>
    </>
}

export default ChatPage