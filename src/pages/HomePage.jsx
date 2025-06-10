import { useEffect, useState } from 'react'
import '../App.css'
import ImageSlider from '../components/ImageSlider'
import locale from '../locale.json'
import CategoryBlock from '../components/CategoryBlock'
import TopBar from '../components/TopBar'
import Footer from '../components/Footer'

let images = ["/slider/top1.jpg", "/slider/top2.jpg", "/slider/top3.jpg", "/slider/top4.jpg"]

const HomePage = () => {
	const [wipDisplay, toggleWipDisplay] = useState("")
	return (<>
		<div className="scheme-home">

			<div className={`wip-alert ${wipDisplay}`} onClick={() => { toggleWipDisplay(() => "invisible") }} dir='rtl'>
				<div style={{ alignSelf: "center" }}>
					سایت هنوز در حال ساخته شدن است. برای ثبت پیشنهادات وارد سرور دیسکور شوید
				</div>
			</div>
			<TopBar />
			<ImageSlider images={images} />
			<div className="fade" />
			<div className="bg">
				<div className="content" >
					<div className="align-items-right" dir="rtl">
						<h1 className="content-title">
							{locale.mainpagetitle}
						</h1>
						<h2 className="intro-title">
							{locale.introductiontitle}
						</h2>
						<p className="intro-text">
							{locale.intdoductiontext1}
							<br />
							<br />
							{locale.introductiontext2}
							<br />
							<br />
							{locale.introductiontext3}
						</p>
					</div>
					<div className="content-left-img">
					</div>
				</div>
				<div className="category-blocks-container">
					<CategoryBlock title="بازی های توهو" img="/homepage/games.jpg" url="games" />
					<CategoryBlock title="موزیک های توهو" img="/homepage/music.jpg" url="music" />
					<CategoryBlock title="فن گیم های توهو" img="/homepage/fangames.png" url="fangames" />
					<CategoryBlock title="مانگا های توهو" img="/homepage/manga.jpg" url="manga" />
					<CategoryBlock title="انیمه های توهو" img="/homepage/anime.jpg" url="anime" />
					<CategoryBlock title="کاراکتر های توهو" img="/homepage/characters.jpg" url="characters" />
					<CategoryBlock title="سرور دیسکورد" img="/homepage/discord.jpeg" url={locale.serverlink} blank={true} />
				</div>
				<Footer />
			</div>
		</div>
	</>
	)
}

export default HomePage
