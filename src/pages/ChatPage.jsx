import '../index.css'
import '../App.css'
import { useEffect, useRef, useState } from 'react'

const backendws = "ws://chat.touhou.ir:3000/ws"
const backendupload = "http://chat.touhou.ir:3000/upload"
const backendavatars = "http://chat.touhou.ir:3000/avatar"

const classifyMessage = (msg) => {
    const imgPattern = /^http:\/\/[^\/]+\/files\/.+(\.(jpg|jpeg|png|webp|gif))$/;
    const audioPattern = /^http:\/\/[^\/]+\/files\/.+(\.(ogg|mp3))$/;
    const videoPattern = /^http:\/\/[^\/]+\/files\/.+(\.(mp4|webm))$/;
    if (imgPattern.test(msg)) {
        return "image"
    }
    if (audioPattern.test(msg)) {
        return "audio"
    }
    if (videoPattern.test(msg)) {
        return "video"
    }
}

const Profile = (props) => {
    return <div key={`1bot${props.keyy}`} className="flex flex-row items-center p-4">
        <img key={`2bot${props.keyy}`} className="rounded-[1000px] h-[50px] w-[50px] mr-2" src={`${backendavatars}/${props.sender}.png`} />
        <div key={`3bot${props.keyy}`}> {props.sender}</div>
        :
    </div>
}

const ChatPage = () => {
    const ws = useRef(null)
    const [_messages, setMessages] = useState([])
    const [selectedFile, setSelectedFile] = useState("Choose file!")
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
            const obj = JSON.parse(event.data)
            setMessages(l => l.concat(obj))
        }
    }
    const SendToWs = () => {
        if (fileRef.current?.files[0]) {
            const reader = new FileReader()
            reader.onload = e => {
                const formData = new FormData()
                formData.append('file', fileRef.current.files[0])
                formData.append('sender', nameRef.current.value)
                formData.append('password', passwordRef.current.value)
                fetch(backendupload, { "method": "POST", "body": formData })
                fileRef.current.value = ""
                setSelectedFile(_ => "Choose file!")
            }
            reader.readAsArrayBuffer(fileRef.current?.files[0])

        }

        if (ws.current?.readyState === WebSocket.OPEN) {
            if (nameRef.current.value && passwordRef.current.value && messageRef.current.value.trim()) {
                let wsJson = { "sender": nameRef.current.value, "password": passwordRef.current.value, "content": messageRef.current.value.trim() }
                ws.current.send(JSON.stringify(wsJson))
                messageRef.current.value = ""
            }
        } else {
            console.warn("WebSocket not connected")
        }
    }

    var shift = false
    return <>
        <audio
            ref={audioRef}
            src="/chatpage/send.ogg"
            preload="auto"
        />
        <div className='flex overflow-y-hidden overflow-x-hidden flex-col h-dvh scheme-home' onKeyUp={k => { if (k.key == "Shift") { shift = false } }} onKeyDown={k => { if (k.key == "Shift") { shift = true } }}>
            <div className="w-full h-9/10 max-h-9/10 overflow-auto overflow-x-hidden flex flex-col-reverse p-4" >
                {_messages.toReversed().map((message, index) => {
                    var border = "chat-message"
                    var border2 = "color-7 text-xl"
                    if (_messages.toReversed().at(index + 1)?.sender == message.sender) // scuffed
                        border = ""

                    switch (classifyMessage(message.content)) {
                        case "image":
                            return <div key={`1top${index}`} className={`${border} dejavu pt-2`}>
                                <div key={`2top${index}`} className={border2}>
                                    {border  && <Profile keyy={`3top${index}`} sender={message.sender} />}
                                </div>
                                <img key={`4top${index}`} src={message.content} className='max-w-1/2' /></div>
                        case "audio":
                            return <div key={`1top${index}`} className={`${border} dejavu pt-2`}>
                                <div key={`2top${index}`} className={border2}>
                                    ${<Profile keyy={`3top${index}`} sender={message.sender} />}
                                    {border && <Profile keyy={`4top${index}`} sender={message.sender} />}
                                </div>
                                <audio key={`5top${index}`} src={message.content} className='max-w-1/2' controls /></div>
                        case "video":
                            return <div key={`1top${index}`} className={`${border} dejavu pt-2`}>
                                <div key={`2top${index}`} className={border2}>

                                    {border && <Profile keyy={`2top${index}`} sender={message.sender} />}
                                </div>
                                <video src={message.content} key={`3top${index}`} className='max-w-1/2' controls /></div>
                    }
                    return <div key={`7idk1${index}`} className={`color-4 dejavu ${border}`} dir="ltr">
                        <div key={`6idk2${index}`} className="flex flex-row">{border &&
                            <div key={`5idk3${index}`} className='color-7 pb-2 pt-2'>
                                {<Profile keyy={`2top${index}`} sender={message.sender} />}
                            </div>}
                        </div>
                        <div key={`4idk4${index}`} className='flex flex-row item-center p-2'>
                            <div key={`3idk5${index}`} className='color-7 inline pl-2 text-xs dejavu '>
                                {message.time}
                            </div>
                            <div key={`2idk6${index}`}>
                                {message.content.split("\n").map((cnt, index2) => {
                                    return <div key={`${index2}12idk7${index}`} className="ml-2 text-l">{cnt}</div>
                                })
                                }</div></div>
                    </div>
                })}
            </div>
            <div className="w-full min-h-1/10 min-h-[120px] bg-1 content-center" >
                <div className="flex flex-row p-6">
                    <div className='flex-col flex min-w-[100px] w-1/10 rounded-xl mr-1 ml-1'>
                        <input ref={nameRef} placeholder="name" type="text" className='mr-2 mb-2 rounded-xl color-3 bg-1 dejavu' onChange={a => { localStorage.setItem("name", a.target.value) }} />
                        <input ref={passwordRef} placeholder="password" type="password" className='mr-2 rounded-xl color-3 bg-1 dejavu' onChange={a => { localStorage.setItem("password", a.target.value) }} />
                    </div>

                    <div className='w-full flex flex-row items-center '>
                        <div className="w-full flex flex-col">
                            <textarea ref={messageRef} placeholder='message' type="text" className='color-3 bg-1 dejavu max-h-[50px] rounded-xl' onKeyDown={k => { if (k.key == "Enter" && !shift) SendToWs() }} />
                            <div className='bg-2 w-fit mt-2'>
                            <input id="fileinput" className="fileinput hidden" ref={fileRef} type='file' onChange={a => { setSelectedFile(_ => a.target.files[0].name) }} />
                            <button>
                                <label for="fileinput">
                                    {selectedFile}
                                </label>
                            </button>
                            </div>
                        </div>
                        <button className='absolute right-[10px] bottom-[5px] bg-2 h-[50px] w-[50px] pl-1 pr-1 rounded-xl' onClick={_ => { SendToWs() }}>
                            <img src="/chatpage/send.png" className='scale-[3]' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default ChatPage