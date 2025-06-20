import '../App.css'
import CategoryBlock from '../components/CategoryBlock'
import TopBar from '../components/TopBar'
import Footer from '../components/Footer'
import items from "../items.json"


const CharactersPage = () => {
    return (<>
        <div className="scheme-characters">

            <TopBar />
            <div className="bg">
                
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
