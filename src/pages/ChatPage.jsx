import '../index.css'
import '../App.css'
import { useEffect, useRef, useState } from 'react'

const backendws = "ws://chat.touhou.ir:3000/ws"
const backendupload = "http://chat.touhou.ir:3000/upload"

const classifyMessage = (msg) => {
    const urlPattern = /^http:\/\/[^\/]+\/files\/.+(\.(jpg|jpeg|png))$/;
    console.log(urlPattern.test(msg))
    console.log(msg)
    if (urlPattern.test(msg)){
        return "image"
    }
}

const ChatPage = () => {
    const ws = useRef(null)
    const [_messages, setMessages] = useState([])
    const audioRef = useRef(null)
    const nameRef = useRef(null)
    const passwordRef = useRef(null)
    const messageRef = useRef(null)
    const fileRef = useRef(null)
    
    useEffect(() => {
        
        console.log("refreshed")
        let storageName = localStorage.getItem("name" || "")
        let storagePassword = localStorage.getItem("password" || "")
        nameRef.current.value = storageName
        passwordRef.current.value = storagePassword
    

        ConnectToWs()
        const interval = setInterval(() => {
            if (!(ws.current?.readyState == WebSocket.OPEN || ws.current?.readyState == WebSocket.CONNECTING))
                ConnectToWs()
        }
        , 5000, 0)
        

        return () => {
            ws.current?.close()
            clearInterval(interval)
        }
    }, [])



    const ConnectToWs = () => {
        ws.current = new WebSocket(backendws)

        ws.current.onopen = () => {
            setMessages(_ => [])
            console.log("connection established")
        }

        ws.current.onmessage = (event) => {
            audioRef.current.play()
            console.log(event.data)
            const obj = JSON.parse(event.data)
            
            setMessages(l => l.concat(obj))
        }
    }
    const SendToWs = () => {
        if (fileRef.current?.files[0]){
            const reader = new FileReader()
            reader.onload = e => {
                console.log(e.target.result)
                const formData = new FormData()
                formData.append('file', fileRef.current.files[0])
                formData.append('sender', nameRef.current.value)
                formData.append('password', passwordRef.current.value)
                fetch(backendupload, {"method": "POST", "body": formData})
                fileRef.current.value = ""
            }
            reader.readAsArrayBuffer(fileRef.current?.files[0])
            
        }
        
        if (ws.current?.readyState === WebSocket.OPEN) {
            if(nameRef.current.value && passwordRef.current.value && messageRef.current.value) {
                let wsJson = {"sender": nameRef.current.value, "password": passwordRef.current.value, "content": messageRef.current.value}
                ws.current.send(JSON.stringify(wsJson))
                messageRef.current.value = ""
            }
        } else {
            console.warn("WebSocket not connected")
        }
    }
    
    var lastSender = ""
    return <>
    <audio
        ref={audioRef}
        src="/chatpage/send.ogg"
        preload="auto"
      />
        <div className='flex flex-col h-dvh scheme-home'>``
            <div className="w-full h-9/10 max-h-9/10 overflow-auto flex flex-col-reverse p-4" >
                {_messages.toReversed().map(message => {
                    if (classifyMessage(message.content) === "image") {
                        var border = lastSender == message.sender ? "chat-message mt-2 pt-2" : ""
                        lastSender = message.sender
                        return <div className={`${border} dejavu mt-2`}>
                        {border ? message.sender : ""}
                        <img src={message.content} className='w-1/2'/></div>
                    }
                    return <div className={`color-4 dejavu ${border}`} dir="auto">
                        {message.time}-{message.sender}: {message.content}
                    </div>
                })}
            </div>
            <div className="w-full h-1/10 min-h-[120px] bg-1 content-center" >
                <div className="flex flex-row m-auto">
                    <div className='flex-col flex min-w-[100px] w-1/10 rounded-xl mr-1 ml-1'>
                    <input ref={nameRef} placeholder="name"  type="text" className='rounded-xl color-3 bg-1 dejavu' onChange={a => { localStorage.setItem("name", a.target.value) }} />
                    <input ref={passwordRef} placeholder="password"  type="password" className='rounded-xl color-3 bg-1 dejavu' onChange={a => { localStorage.setItem("password", a.target.value)}} />
                    </div>

                    <div className='w-full flex flex-row items-center '>
                    <div className="w-full flex flex-col">
                    <input ref={messageRef} placeholder='message' type="text" className='w-full color-3 bg-1 dejavu max-h-[50px] rounded-xl' onKeyDown={k => { if (k.key == "Enter") SendToWs()}}/>
                    <input ref={fileRef} type='file' onChange={a => {console.log(a.target.files[0])}}/>
                    </div>
                    <button className='absolute right-[10px] bottom-[5px] bg-2 h-[50px] w-[50px] ml-1 mr-1 rounded-xl' onClick={_ => {SendToWs()}}>
                    <img src="/chatpage/send.png" className='scale-[3]'/>
                    </button>
                    </div>  
                </div>
            </div>
        </div>
    </>
}

export default ChatPage