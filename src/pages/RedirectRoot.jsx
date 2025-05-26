import { useEffect } from "react"
import { useNavigate } from "react-router"

const RedirectRoot = () => {

    const navigate = useNavigate()
    useEffect(() => {

        navigate("/home")
    }, [])
    return (<></>)
}

export default RedirectRoot