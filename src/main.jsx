
import { createRoot } from 'react-dom/client'
import './index.css'
import HomePage from './pages/HomePage.jsx'
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router'
import RedirectRoot from './pages/RedirectRoot.jsx'
import WIP from './pages/WIP.jsx'
import "flowbite/dist/flowbite.css";

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path=""  element={<RedirectRoot />} />
            <Route path='home' element={<HomePage />} />
            <Route path='games' element={<WIP />} />
            <Route path='music' element={<WIP />} />
            <Route path='fangames' element={<WIP />} />
            <Route path='manga' element={<WIP />} />
            <Route path='anime' element={<WIP />} />
            <Route path='characters' element={<WIP />} />
        </Routes>
    </BrowserRouter>
)
