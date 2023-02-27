import { Routes, Route } from 'react-router-dom'

// -- ROTAS -- //
import Home from '../pages/Home'
import About from '../pages/About'
import CaboTeclado from '../pages/Products/CaboTeclado'
import CaboBlue from '../pages/Products/CaboTeclado/CaboBlue'
import Tokyo from '../pages/Products/MousePad/Tokyo'
import TecladoRedragon from '../pages/Products/TecladoRedragon'
import TecladoAkko from '../pages/Products/TecladoAkko'
import Dracula from '../pages/Products/MousePad/Dracula'
import London from '../pages/Products/MousePad/London'
import HeadsetHebe from '../pages/Products/Headset/HeadsetHebe'
import HeadsetScylla from '../pages/Products/Headset/HeadsetScyllaPreto'
import HeadsetScyllaBranco from '../pages/Products/Headset/HeadsetScyllaPreto/ScyllaBranco'
import HeadsetMinos from '../pages/Products/Headset/HeadsetMinosPreto'
import HeadsetMinosBranco from '../pages/Products/Headset/HeadsetMinosPreto/MinosBranco'
import HeadsetHylas from '../pages/Products/Headset/HeadsetHylas'
import HeadsetTaurus from '../pages/Products/Headset/HeadsetTaurus'
import HeadsetHero from '../pages/Products/Headset/HeadsetHero'
import HeadsetHeroBrancoRoxo from '../pages/Products/Headset/HeadsetHero/HeroBrancoRoxo'
import HeadsetHeroBrancoVermelho from '../pages/Products/Headset/HeadsetHero/HeroBrancoVermelho'
import G25B from '../pages/Products/Gabinete/G25B'
import G28B from '../pages/Products/Gabinete/G28B'
import Reaping from '../pages/Products/Mouses/Reaping'
import Storm from '../pages/Products/Mouses/Storm'
import Imperial from '../pages/Products/Mouses/Imperial'

 function RoutesApp() {
    return(
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/sobre' element={<About/>}/>
        <Route path='/keyboard-cable-pink' element={<CaboTeclado/>}/>
        <Route path='/keyboard-cable-blue' element={<CaboBlue/>}/>
        <Route path='/produto-teclado-redragon' element={<TecladoRedragon/>}/>
        <Route path='/produto-teclado-akko' element={<TecladoAkko/>}/>
        <Route path='/mousepad-tokyo' element={<Tokyo/>}/>
        <Route path='/mousepad-dracula' element={<Dracula/>}/>
        <Route path='/mousepad-london' element={<London/>}/>
        <Route path='/headset-hebe' element={<HeadsetHebe/>}/>
        <Route path='/headset-scylla' element={<HeadsetScylla/>}/>
        <Route path='/headset-scylla-branco' element={ <HeadsetScyllaBranco/> }/>
        <Route path='/headset-minos' element={<HeadsetMinos/>}/>
        <Route path='/headset-minos-branco' element={ <HeadsetMinosBranco/> }/>
        <Route path='/headset-hylas' element={<HeadsetHylas/>}/>
        <Route path='/headset-taurus' element={<HeadsetTaurus/>}/>
        <Route path='/headset-hero' element={<HeadsetHero/>}/>
        <Route path='/headset-hero-branco-roxo' element={ <HeadsetHeroBrancoRoxo/> }/>
        <Route path='/headset-hero-branco-vermelho' element={ <HeadsetHeroBrancoVermelho/> }/>
        <Route path='/gabinete-gamer-g25b' element={ <G25B/> }/>
        <Route path='/gabinete-gamer-g28b' element={ <G28B/> }/>
        <Route path='/mouse-reaping' element={ <Reaping/> }/>
        <Route path='/mouse-storm' element={ <Storm/> }/>
        <Route path='/mouse-imperial' element={ <Imperial/> }/>
    </Routes>
    )
}

export default RoutesApp