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
                    return <><div className="text-3xl dejavu">
                        {category.altname || category.name}

                        </div>
                        <div key={category.name} className="category-blocks-container">
                        {category.items?.map((character) => {
                            return <CategoryBlock key={character.name} class="dejavu" title={character.name} img={character.prt} url={character.url} />
                        })}
                        </div></>
                })}
                <Footer />
            </div>
        </div>
    </>
    )
}

export default CharactersPage
