import locale from "../locale.json"
import AnimateEnter from "./AnimateEnter"

const ResourceContent = (props) => {
    return (
        <div className="resource-content-container">
            <div className="resource-content-title" dir="rtl" >{props.title}</div>
            <a className="resource-content-link" target="_blank" href={props.link}>{props.linkTitle}</a>
        </div>
    )
}

const Footer = () => {
    return (
        <>
            <div className="footer-container">
                <AnimateEnter>
                    <a target="_blank" href={locale.serverlink}>
                        <div className="footer-discord-container">
                            <div className="discord-embed-title">
                                {locale.discordembedtitle}
                            </div>
                            <div className="discord-embed">
                                <div className="discord-server-elements">
                                    <div className="discord-server-name">
                                        touhou.ir
                                    </div>
                                    <div className="footer-discord-imgs">
                                        <img className="server-img" src="https://cdn.discordapp.com/icons/721026661990137947/a_01df922d2bf027cbbb3bc31c889685ef.gif" />
                                        <img src="/footer/remilia.gif" />
                                    </div>
                                </div>
                                <iframe className="discord-iframe" src="https://discord.com/widget?id=721026661990137947&theme=dark" width="250" height="350" allowtransparency="true" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts" />
                            </div>
                        </div>
                    </a>
                </AnimateEnter>
                <AnimateEnter>
                    <div className="footer-resources-container" >
                        <div className="footer-resources-name" dir="rtl">{locale.resourcesname}</div>
                        <div className="resource-contents" >
                            <ResourceContent title={locale.resource1name} link={locale.resource1link} linkTitle={locale.resource1linkname} />
                            <ResourceContent title={locale.resource2name} link={locale.resource2link} linkTitle={locale.resource2linkname} />
                            <ResourceContent title={locale.resource3name} link={locale.resource3link} linkTitle={locale.resource3linkname} />
                        </div>
                    </div>
                </AnimateEnter>
            </div>
            <div className="m-4 text-2xl color-3 dejavu">Touhou Project is a series created by ZUN of Team Shanghai Alice. All rights to original content belong to their respective owners.</div>
        </>
    )
}

export default Footer
