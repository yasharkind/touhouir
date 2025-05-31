import { useNavigate } from "react-router"

const TopBarButton = (props) => {

    const navigate = useNavigate();
    return (<div className="top-bar-button" onClick={() => navigate(props.url)}>
                    <img className="top-bar-button-img" src={`/topbar/${props.icon}`} alt={props.alt} ></img>
                    <div className="top-bar-button-text">
                        {props.name}
                    </div>
                </div>)
}

const TopBar = () => {

    const navigate = useNavigate();
    return <>
        <div className="top-bar-container">
            <div className="top-bar-right">
                <TopBarButton icon="icon.png" alt="Home" url="/home" name="Home"/>
                <div className="top-bar-seperator"/>
                <TopBarButton icon="games-top.png" alt="Games" url="/games" name="Games"/>
                <div className="top-bar-seperator"/>
                <TopBarButton icon="music-top.png" alt="Music" url="/music" name="Music"/>
                
            </div>
            <div className="top-bar-left">
                <div className="logo-title" onClick={() => {navigate("/home")}}>touhou.ir</div>
            </div>
        </div>
    </>
}

export default TopBar