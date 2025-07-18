
import { createRoot } from 'react-dom/client'

import './index.css'
import HomePage from './pages/HomePage.jsx'
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router'
import RedirectRoot from './pages/RedirectRoot.jsx'
import WIP from './pages/WIP.jsx'
import "flowbite/dist/flowbite.css";
import CharactersPage from './pages/CharactersPage.jsx'
import items from "./items.json"
import BaseCharacterPage from './pages/Characters/BaseCharacterPage.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path=""  element={<RedirectRoot />} />
            <Route path='home' element={<HomePage />} />
            <Route path='games' element={<WIP />} >
                <Route path="*" element={<WIP />} />
            </Route>
            <Route path='music' element={<WIP />} />
            <Route path='fangames' element={<WIP />} />
            <Route path='manga' element={<WIP />} />
            <Route path='anime' element={<WIP />} />
            <Route path='characters' element={<CharactersPage />} />
            {
                items.charitems.map((v) => {
                    return v.items?.map(char => {
                        return <Route path={`characters/${char.name.toLowerCase()}`} element={<BaseCharacterPage items={char} />}/>
                })
                })
                
            }
            {/* <Route path='characters/reimu' element={<Reimu />} />
            <Route path='characters/marisa' element={<Marisa />} /> */}
            <Route path="*" element={<WIP />} />
        </Routes>
    </BrowserRouter>
)
