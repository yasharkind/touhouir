import '../App.css'
import CategoryBlock from '../components/CategoryBlock'
import TopBar from '../components/TopBar'
import Footer from '../components/Footer'
import items from "../items.json"
import { Helmet } from 'react-helmet'


const CharactersPage = () => {
    return (<>
    <Helmet>
        <title>شخصیت‌های توهو | بیوگرافی به فارسی</title>
        <meta name='description' content="معرفی شخصیت‌های اصلی و محبوب توهو. داستان، قدرت‌ها و رابطه‌ها به فارسی." />
        <meta property="og:title" content="touhou iran" />
        <meta property="og:description" content="معرفی شخصیت‌های توهو" />
        <meta property="og:image" content="https://touhou.ir/icon.png" />
        <meta property="og:url" content="https://touhou.ir" />
    </Helmet>
        <div className="scheme-characters">

            <TopBar />
            <div className="bg">
                <h1>
                    شخصیت‌های توهو
                </h1>
                <br />
                {items.charitems.map(category => {
                    {if (!category.items) return}
                    return <><div className="text-3xl dejavu color-7">
                        {category.altname || category.name}

                        </div>
                        <div key={category.name} className="category-blocks-container">
                        {category.items?.map((character) => {
                            return <CategoryBlock key={character.name} class="dejavu" title={character.name} img={character.prt} url={character.url} />
                        })}
                        
                        </div></>
                })}
                <a href="https://www.pixiv.net/en/users/4920496" target="_blank" className="lg:text-3xl md:text-4xl sm:text-xl color-2">
                        منبع همه ی آرت های این صفحه
                        </a>
                <Footer />
            </div>
        </div>
    </>
    )
}

export default CharactersPage
