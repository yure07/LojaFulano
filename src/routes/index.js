import { Routes, Route } from 'react-router-dom'

// -- ROTAS -- //

// -- PRINCIPAIS -- //
import Home from '../pages/Home'
import About from '../pages/About'
import Geral from '../pages/Filters/geral'

// --CABO TECLADO -- //
import CaboTeclado from '../pages/Products/CaboTeclado'
import CaboBlue from '../pages/Products/CaboTeclado/CaboBlue'
import Black from '../pages/Products/CaboTeclado/Aviator/Black'
import Sakura from '../pages/Products/CaboTeclado/Aviator/Sakura/index.js'
import Macaw from '../pages/Products/CaboTeclado/Aviator/Macaw'
import LosAngeles from '../pages/Products/CaboTeclado/Aviator/LosAngeles'

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
import E2 from '../pages/Products/Teclados/Gamdias/E2'
import E3 from '../pages/Products/Teclados/Gamdias/E3'
import Bora from '../pages/Products/Teclados/Tdagger'
import JellyWhite from '../pages/Products/Teclados/Akko/JellyWhite'
import JellyBlack from '../pages/Products/Teclados/Akko/JellyBlack'
import Draonic from '../pages/Products/Teclados/Draonic'
import Anivia from '../pages/Products/Teclados/Anivia'
import Optico from '../pages/Products/Teclados/Optico'
import Lakshmi from '../pages/Products/Teclados/Lakshmi'

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
import Hyperx from '../pages/Products/Headset/Hyperx'
import Motorola from '../pages/Products/Headset/Motorola'
import HeadsetDiomedes from '../pages/Products/Headset/Diomedes'
import HeadsetCadmus from '../pages/Products/Headset/Cadmus'

// -- GANINETES -- //
import G25B from '../pages/Products/Gabinete/G25B'
import G28B from '../pages/Products/Gabinete/G28B'
import P03 from '../pages/Products/Gabinete/P03'

// -- MOUSES -- //
import Reaping from '../pages/Products/Mouses/Reaping'
import Storm from '../pages/Products/Mouses/Storm'
import StormLunar from '../pages/Products/Mouses/StormLunar'
import Imperial from '../pages/Products/Mouses/Imperial'
import CobraFPSBranco from '../pages/Products/Mouses/CobraFPSBranco'
import CobraFPSPreto from '../pages/Products/Mouses/CobraFPSPreto'
import CobraPreto from '../pages/Products/Mouses/CobraPreto'
import StormPro from '../pages/Products/Mouses/StormPro'

import KitMousePad from '../pages/Products/KitMousePad'

// -- KEYCAPS -- //
import A107 from '../pages/Products/Keycaps/A107'
import A130 from '../pages/Products/Keycaps/A130'
import Akko from '../pages/Products/Keycaps/Akko'

// -- SWITCHES -- //
import Redragon from '../pages/Products/Switches/Redragon'
import Rose from '../pages/Products/Switches/Akko/Rose'
import Matcha from '../pages/Products/Switches/Akko/Matcha'
import Vintage from '../pages/Products/Switches/Akko/Vintage'
import Lavander from '../pages/Products/Switches/Akko/Lavander'

// -- SOUNDBAR -- //
import SoundBar from '../pages/Products/SoundBar'

 function RoutesApp() {
    return(
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/sobre' element={<About/>}/>
        <Route path="/filter/:name" element={ <Geral/> }/>

        <Route path='/keyboard-cable-pink' element={<CaboTeclado/>}/>
        <Route path='/keyboard-cable-blue' element={<CaboBlue/>}/>
        <Route path='/keyboard-cable-aviator-black' element={ <Black/> }/>
        <Route path='/keyboard-cable-aviator-sakura' element={ <Sakura/> }/>
        <Route path='/keyboard-cable-aviator-macaw' element={ <Macaw/> }/>
        <Route path='/keyboard-cable-aviator-los-angeles' element={ <LosAngeles/> }/>

        <Route path='/produto-teclado-redragon' element={<TecladoRedragon/>}/>
        <Route path='/produto-teclado-akko' element={<TecladoAkko/>}/>
        <Route path='/teclado-dark-switch-blue' element={ <DarkBlue/> }/>
        <Route path='/teclado-dark-switch-red' element={ <DarkRed/> }/>
        <Route path='/teclado-dark-white' element={ <DarkWhite/> }/>
        <Route path='/gamdias-e2' element={ <E2/> }/>
        <Route path='/gamdias-e3' element={ <E3/> }/>
        <Route path='/teclado-tdagger-bora' element={ <Bora/> }/>
        <Route path='/teclado-akko-jelly-white' element={ <JellyWhite/> }/>
        <Route path='/teclado-akko-jelly-black' element={ <JellyBlack/> }/>
        <Route path='/teclado-redragon-draonic-pro' element={ <Draonic/> }/>
        <Route path='/teclado-redragon-anivia' element={ <Anivia/> }/>
        <Route path='/teclado-redragon-optico' element={ <Optico/> }/>
        <Route path='/teclado-redragon-lakshmi' element={ <Lakshmi/> }/>

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
        <Route path='/headset-hyperx' element={ <Hyperx/> }/>
        <Route path='/headphone-motorola' element={ <Motorola/> }/>
        <Route path='/headset-diomedes' element={ <HeadsetDiomedes/> }/>
        <Route path='/headset-cadmus' element={ <HeadsetCadmus/> }/>

        <Route path='/gabinete-gamer-g25b' element={ <G25B/> }/>
        <Route path='/gabinete-gamer-g28b' element={ <G28B/> }/>
        <Route path='/gabinete-gamer-p03' element={ <P03/> }/>

        <Route path='/mouse-reaping' element={ <Reaping/> }/>
        <Route path='/mouse-storm' element={ <Storm/> }/>
        <Route path='/mouse-storm-lunar' element={ <StormLunar/> }/>
        <Route path='/mouse-imperial' element={ <Imperial/> }/>
        <Route path='/mouse-cobra-fps-preto' element={ <CobraFPSPreto/> }/>
        <Route path='/mouse-cobra-preto' element={ <CobraPreto/> }/>
        <Route path='/mouse-cobra-fps-branco' element={ <CobraFPSBranco/> }/>
        <Route path='/mouse-storm-pro-wireless' element={ <StormPro/> }/>

        <Route path='/kit-mouse-pad' element={ <KitMousePad/> }/>

        <Route path='/keycaps-a107' element={ <A107/> }/>
        <Route path='/keycaps-a130' element={ <A130/> }/>
        <Route path='/keycaps-akko-retro' element={ <Akko/> }/>

        <Route path='/switch-redragon' element={ <Redragon/> }/>
        <Route path='/switch-akko-rose-red' element={ <Rose/> }/>
        <Route path='/switch-akko-matcha-green' element={ <Matcha/> }/>
        <Route path='/switch-akko-vintage-white' element={ <Vintage/> }/>
        <Route path='/switch-akko-lavander' element={ <Lavander/> }/>

        <Route path='/soundbar' element={ <SoundBar/> }/>

    </Routes>
    )
}

export default RoutesApp