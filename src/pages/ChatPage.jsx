import '../index.css'
import '../App.css'
import { useRef, useState } from 'react'

const backendws = "ws://5.10.248.171:3000/ws"

const ChatPage = () => {
    const ws = useRef(null)
    const [_name, setName] = useState("")
    const [_messages, setMessages] = useState([])
    const audioRef = useRef(null);
    
    useState(() => {
        console.log("refreshed")
        setName(_ => localStorage.getItem("name") || "")

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



    const SendToWs = (__input) => {
        if (ws.current?.readyState === WebSocket.OPEN) {
            ws.current.send(_name + ": " + __input)
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
        <div className='flex flex-col h-screen scheme-home'>
            <div className="w-full h-9/10 max-h-9/10 overflow-auto flex flex-col-reverse p-4" >
                {_messages.toReversed().map(message => {
                    return <div className='color-4' dir="auto">
                        {message}
                    </div>
                })}
            </div>
            <div className="w-full h-1/10 bg-1 content-center" >
                <div className="flex flex-row m-auto">
                    <input placeholder="name" value={_name} type="text" className='min-w-[100px] w-1/10 color-3 bg-1 dejavu' onChange={a => { localStorage.setItem("name", a.target.value); setName(_ => a.target.value) }} />
                    <input placeholder='message' value={_input} type="text" className='w-full color-3 bg-1 dejavu' onKeyDown={k => { if (_name && _input && k.key === "Enter") { SendToWs(_input); setInput(_ => "");  }}} onChange = { a => setInput(_ => a.target.value)}/>
                    <button className='bg-2' onClick={_ => { if(_name && _input) SendToWs(_input) }} />
                </div>
            </div>
        </div>
    </>
}

export default ChatPage