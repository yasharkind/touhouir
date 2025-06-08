import { useEffect, useState } from 'react'
import '../App.css'
import ImageSlider from '../components/ImageSlider'
import locale from '../locale.json'
import CategoryBlock from '../components/CategoryBlock'
import TopBar from '../components/TopBar'
import Footer from '../components/Footer'


const CharactersPage = () => {
    return (<>
        <div className="scheme-characters">

            <TopBar />
            <div className="bg">
                <div className="text-3xl dejavu">Main</div>
                <div className="category-blocks-container">
                    <CategoryBlock class="dejavu" title="Reimu" img="/chars/reimu/portrait.png" url="/characters/reimu" />
                    <CategoryBlock class="dejavu" title="Marisa" img="/chars/marisa/portrait.png" url="/characters/marisa" />
                </div>
                <div className="text-3xl dejavu">Touhou 6</div>
                <div className="category-blocks-container">
                    <CategoryBlock class="dejavu" title="Cirno" img="/chars/cirno/portrait.png" url="/characters/cirno" />
                    <CategoryBlock class="dejavu" title="Remilia" img="/chars/remilia/portrait.png" url="/characters/remilia" />
                    <CategoryBlock class="dejavu" title="Flandre" img="/chars/flandre/portrait.png" url="/characters/flandre" />
                    <CategoryBlock class="dejavu" title="Sakuya" img="/chars/sakuya/portrait.png" url="/characters/sakuya" />
                    <CategoryBlock class="dejavu" title="Patchouli" img="/chars/patchouli/portrait.png" url="/characters/patchouli" />
                    <CategoryBlock class="dejavu" title="Meiling" img="/chars/meiling/portrait.png" url="/characters/meiling" />
                </div>
                <Footer />
            </div>
        </div>
    </>
    )
}

export default CharactersPage
