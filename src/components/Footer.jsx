import locale from "../locale.json"

const Footer = () => {
    return (
        <>
            <div className="footer-container">
                <div className="m32">
                    <div className="footer-text">
                        {locale.footertext}
                    </div>
                    <a href={locale.serverlink}>
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
                                    <img src="/footer/remilia.gif"/>
                                </div>
                            </div>
                            <iframe className="discord-iframe" src="https://discord.com/widget?id=721026661990137947&theme=dark" width="250" height="350" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts" />
                        </div>
                    </div>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Footer