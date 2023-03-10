import { Routes, Route } from 'react-router-dom'

// -- ROTAS -- //

// -- PRINCIPAIS -- //
import Home from '../pages/Home'
import About from '../pages/About'

// --CABO TECLADO -- //
import CaboTeclado from '../pages/Products/CaboTeclado'
import CaboBlue from '../pages/Products/CaboTeclado/CaboBlue'

// -- MOUSEPADS -- //
import Dracula from '../pages/Products/MousePad/Dracula'
import London from '../pages/Products/MousePad/London'
import Tokyo from '../pages/Products/MousePad/Tokyo'
import Kunlun from '../pages/Products/MousePad/Kunlun'
import Flick from '../pages/Products/MousePad/Flick'
import Taurus from '../pages/Products/MousePad/Taurus'

// -- TECLADOS -- //
import TecladoRedragon from '../pages/Products/Teclados/TecladoRedragon'
import TecladoAkko from '../pages/Products/Teclados/TecladoAkko'
import DarkBlue from '../pages/Products/Teclados/DarkBlue'
import DarkWhite from '../pages/Products/Teclados/DarkWhite'
import DarkRed from '../pages/Products/Teclados/DarkRed'

// -- HEADSETS -- //
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

// -- GANINETES -- //
import G25B from '../pages/Products/Gabinete/G25B'
import G28B from '../pages/Products/Gabinete/G28B'

// -- MOUSES -- //
import Reaping from '../pages/Products/Mouses/Reaping'
import Storm from '../pages/Products/Mouses/Storm'
import StormLunar from '../pages/Products/Mouses/StormLunar'
import Imperial from '../pages/Products/Mouses/Imperial'
import CobraFPSBranco from '../pages/Products/Mouses/CobraFPSBranco'
import CobraFPSPreto from '../pages/Products/Mouses/CobraFPSPreto'
import CobraPreto from '../pages/Products/Mouses/CobraPreto'

 function RoutesApp() {
    return(
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/sobre' element={<About/>}/>
        <Route path='/keyboard-cable-pink' element={<CaboTeclado/>}/>
        <Route path='/keyboard-cable-blue' element={<CaboBlue/>}/>
        <Route path='/produto-teclado-redragon' element={<TecladoRedragon/>}/>
        <Route path='/produto-teclado-akko' element={<TecladoAkko/>}/>
        <Route path='/teclado-dark-switch-blue' element={ <DarkBlue/> }/>
        <Route path='/teclado-dark-switch-red' element={ <DarkRed/> }/>
        <Route path='/teclado-dark-white' element={ <DarkWhite/> }/>
        <Route path='/mousepad-tokyo' element={<Tokyo/>}/>
        <Route path='/mousepad-dracula' element={<Dracula/>}/>
        <Route path='/mousepad-london' element={<London/>}/>
        <Route path='/mousepad-kunlun' element={ <Kunlun/> }/>
        <Route path='/mousepad-flick' element={ <Flick/> }/>
        <Route path='/mousepad-taurus' element={ <Taurus/> }/>
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
        <Route path='/mouse-storm-lunar' element={ <StormLunar/> }/>
        <Route path='/mouse-imperial' element={ <Imperial/> }/>
        <Route path='/mouse-cobra-fps-preto' element={ <CobraFPSPreto/> }/>
        <Route path='/mouse-cobra-preto' element={ <CobraPreto/> }/>
        <Route path='/mouse-cobra-fps-branco' element={ <CobraFPSBranco/> }/>
    </Routes>
    )
}

export default RoutesApp