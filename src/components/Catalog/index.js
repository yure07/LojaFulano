import './style.css'

// PRODUTOS //

// TECLADOS //
import teclado from '../../images/produtos/produto-teclado.png'
import tecladoAkko from '../../images/produtos/teclado-akko.jpg'
import tecladoDoubleSwitch from '../../images/produtos/dar-avenger-rainbow.png'
import tecladoWhite from '../../images/produtos/teclado-mecanico-redragon-white.png'

// MOUSEPADS //
import mousePadDracula from '../../images/produtos/Tokyo-Mouse-Pad-Dracula.png'
import mousePadTokyo from '../../images/produtos/Tokyo-Mouse-Pad.png'
import mousePadLondon from '../../images/produtos/Tokyo-Mouse-Pad-London.png'
import mousePadKulun from '../../images/produtos/mousepad-kunlun.png'
import mousePadFlick from '../../images/produtos/mousepad-redragon-flick.png'
import mousePadTaurus from '../../images/produtos/mousepad-redragon-taurus.webp'

// CABO TECLADO //
import caboBlue from '../../images/produtos/cabo-akko-blue.png'
import caboPink from '../../images/produtos/cabo-akko-pink.png'

// GABINETES //
import gabineteG25b from '../../images/produtos/gabinete-g25b.png'
import gabineteG28b from '../../images/produtos/gabinete-g28b.png'

// MOUSES //
import mouseImperial from '../../images/produtos/mouse_imperial.webp'
import mouseStorm from '../../images/produtos/mouse_gamer_rmouse_storm.png'
import mouseReaping from '../../images/produtos/mouse_reaping.png'
import mouseCobraPreto from '../../images/produtos/mouse-redragon-cobra-preto.webp'
import mouseCobraFPSBranco from '../../images/produtos/mouse-cobra-branco.png'
import mouseCobraFPSPreto from '../../images/produtos/Mouse-redragon-cobra-FPS.png'
import mouseStormLunar from '../../images/produtos/mouse-storm-lunar.webp'

// HEADSETS //
import MinosPreto from '../../images/produtos/headset-minos-preto.png'
import Hylas from '../../images/produtos/Hylas.png'
import Scylla from '../../images/produtos/headset-scylla-preto.png'
import HeroBranco from '../../images/produtos/hero-branco.webp'
import Hebe from '../../images/produtos/headset-hebe.png'
import Taurus from '../../images/produtos/headset-taurus.png'
import {Link} from 'react-router-dom'


function Catalog() {
    return(
        <div className='catalog'> 
         <div className='cards-products-container'>

          <div className='card-product'> 
          <Link to='/produto-teclado-redragon'>
          <img src={teclado} alt='1' className='teclado'/>
          <p className='product-name'>TECLADO MECÂNICO REDRAGON</p>
          <p className='info-product'>Redragon Switch Azul</p>
          <div className='discount'>
            <strong>-25%</strong>
          </div>
          <p className='price'>R$ 274,99</p>
          <strong className='price-now'>R$ 204,99</strong>
          </Link>
          </div>
      
          <div className='card-product'>
          <Link to='/mousepad-tokyo'>
            <img src={mousePadTokyo} alt='2' className='mousepad-tokyo'/>
          <p className='product-name'>MOUSEPAD AKKO</p>
          <p className='info-product'>AKKO - World Tour Tokio R2</p>
          <div className='discount'>
            <strong>-12%</strong>
          </div>
          <p className='price'>R$ 175,99</p>
          <strong className='price-now'>R$ 154,99</strong>
          </Link>
          </div>

          <div className='card-product'>
          <Link to='/keyboard-cable-blue'>
            <img src={caboBlue} alt='3' className='cable-pink'/>
            <p className='product-name'>CABO TECLADO</p>
            <p className='info-product'>Cabo Enrolado Modelo Blue Akko</p>
          <div className='discount'>
            <strong>-28%</strong>
          </div>
          <p className='price'>R$ 69,99</p>
          <strong className='price-now'>R$ 49,99</strong>
          </Link>
          </div>

          <div className='card-product'>
          <Link to='/produto-teclado-akko'>
            <img src={tecladoAkko} alt='4' className='teclado'/>
          <p className='product-name'>TECLADO MECÂNICO AKKO</p>
          <p className='info-product'id='keyboard-info'>Switch Akko Pink </p>
          <div className='discount'>
            <strong>-17%</strong>
          </div>
          <p className='price'>R$ 726,90</p>
          <strong className='price-now'>R$ 599,99</strong>
          </Link>
          </div>

          <div className='card-product'>
          <Link to='/mousepad-dracula'>
            <img src={mousePadDracula} className='mousepad-dracula-london' alt='5'/>
          <p className='product-name'>MOUSEPAD AKKO</p>
          <p className='info-product'>Akko - Dracula Castle</p>
          <div className='discount'>
            <strong>-12%</strong>
          </div>
          <p className='price'>R$ 175,99</p>
          <strong className='price-now'>R$ 154,99</strong>
          </Link>
          </div>

          <div className='card-product'>
          <Link to='/mousepad-london'>
            <img src={mousePadLondon} className='mousepad-dracula-london' alt='6' />
          <p className='product-name'>MOUSEPAD AKKO</p>
          <p className='info-product'id='keyboard-info'> Akko - World Tour London</p>
          <div className='discount'>
            <strong>-12%</strong>
          </div>
          <p className='price'>R$ 175,99</p>
          <strong className='price-now'>R$ 154,99</strong>
          </Link>
          </div>

          <div className='card-product'>
          <Link to='/keyboard-cable-pink'>
            <img src={caboPink} alt='7' className='cable-pink'/>
          <p className='product-name'>CABO TECLADO</p>
          <p className='info-product'>Cabo Enrolado Modelo Pink Akko</p>
          <div className='discount'>
            <strong>-28%</strong>
          </div>
          <p className='price'>R$ 69,99</p>
          <strong className='price-now'>R$ 49,99</strong>
          </Link>
          </div>

          <div className='card-product'>
          <Link to='/headset-hebe'>
            <img src={Hebe} alt='8' className='headset'/>
          <p className='product-name'>HEADSET HEBE E2</p>
          <p className='info-product'>Headset Gamer E2</p>
          <div className='discount'>
            <strong>-11%</strong>
          </div>
          <p className='price'>R$ 179,99</p>
          <strong className='price-now'>R$ 159,99</strong>
          </Link>
          </div>

          <div className='card-product'>
            <Link to='/headset-scylla'>
              <img src={Scylla} alt='9' className='headset'/>
          <p className='product-name'>HEADSET SCYLLA</p>
          <p className='info-product'>Headset Gamer Scylla</p>
          <div className='discount'>
            <strong>-20%</strong>
          </div>
          <p className='price'>R$ 149,99</p>
          <strong className='price-now'>R$ 119,99</strong>
            </Link>
          </div>

          <div className='card-product'>
          <Link to='/headset-minos'>
            <img src={MinosPreto} alt='10' className='headset'/>
          <p className='product-name'>HEADSET MINOS</p>
          <p className='info-product'>Headset Gamer Minos</p>
          <div className='discount'>
            <strong>-10%</strong>
          </div>
          <p className='price'>R$ 199,99</p>
          <strong className='price-now'>R$ 179,99</strong>
          </Link>
          </div>

          <div className='card-product'>
          <Link to='/headset-hylas'>
            <img src={Hylas} alt='11' className='headset'/>
          <p className='product-name'>HEADSET HYLAS</p>
          <p className='info-product'>Headset Gamer Hylas</p>
          <div className='discount'>
            <strong>-16%</strong>
          </div>
          <p className='price'>R$ 149,99</p>
          <strong className='price-now'>R$ 124,99</strong>
          </Link>
          </div>

          <div className='card-product'>
            <Link to='/headset-taurus'>
              <img src={Taurus} alt='12' className='headset'/>
          <p className='product-name'>HEADSET TAURUS E1</p>
          <p className='info-product'>Headset Gamer Taurus</p>
          <div className='discount'>
            <strong>-20%</strong>
          </div>
          <p className='price'>R$ 99,99</p>
          <strong className='price-now'>R$ 79,99</strong>
            </Link>
          </div>

          <div className='card-product'>
            <Link to='/headset-hero'>
              <img src={HeroBranco} alt='13' className='headset'/>
          <p className='product-name'>HEADSET HERO</p>
          <p className='info-product'>Headset Gamer Hero Branco</p>
          <div className='discount'>
            <strong>-10%</strong>
          </div>
          <p className='price'>R$ 299,99</p>
          <strong className='price-now'>R$ 269,99</strong>
            </Link>
          </div>

          <div className='card-product'>
            <Link to='gabinete-gamer-g25b/'>
              <img src={gabineteG25b} alt='14' className='gabinete'/>
          <p className='product-name'>GABINETE GAMER</p>
          <p className='info-product'>Gabinete T-DAGGER G25B Preto</p>
          <div className='discount'>
            <strong>-10%</strong>
          </div>
          <p className='price'>R$ 299,99</p>
          <strong className='price-now'>R$ 219,99</strong>
            </Link>
          </div>

          <div className='card-product'>
            <Link to='/gabinete-gamer-g28b'>
              <img src={gabineteG28b} alt='15' className='gabinete'/>
          <p className='product-name'>GABINETE GAMER</p>
          <p className='info-product'>Gabinete T-DAGGER G28B Preto</p>
          <div className='discount'>
            <strong>-10%</strong>
          </div>
          <p className='price'>R$ 299,99</p>
          <strong className='price-now'>R$ 219,99</strong>
            </Link>
          </div>

          <div className='card-product'>
            <Link to='/mouse-reaping'>
              <img src={mouseReaping} alt='16' className='mouse-reaping'/>
          <p className='product-name'>MOUSE GAMER</p>
          <p className='info-product'>Mouse Redragon Reaping Elite Preto</p>
          <div className='discount'>
            <strong>-13%</strong>
          </div>
          <p className='price'>R$ 239,99</p>
          <strong className='price-now'>R$ 209,99</strong>
            </Link>
          </div>

          <div className='card-product'>
            <Link to='/mouse-storm'>
              <img src={mouseStorm} alt='17' className='mouses'/>
          <p className='product-name'>MOUSE GAMER</p>
          <p className='info-product'>Mouse Redragon Storm Elite</p>
          <div className='discount'>
            <strong>-11%</strong>
          </div>
          <p className='price'>R$ 219,99</p>
          <strong className='price-now'>R$ 194,99</strong>
            </Link>
          </div>

          <div className='card-product'>
            <Link to='/mouse-imperial'>
              <img src={mouseImperial} alt='18' className='mouses'/>
          <p className='product-name'>MOUSE GAMER</p>
          <p className='info-product'>Mouse T-DAGGER Imperial Preto</p>
          <div className='discount'>
            <strong>-21%</strong>
          </div>
          <p className='price'>R$ 139,99</p>
          <strong className='price-now'>R$ 109,99</strong>
            </Link>
          </div>

          <div className='card-product'>
          <Link to='/mouse-cobra-preto'>
              <img src={mouseCobraPreto} alt='19' className='mouses'/>
          <p className='product-name'>MOUSE GAMER</p>
          <p className='info-product'>Mouse Redragon Cobra M711</p>
          <div className='discount'>
            <strong>-11%</strong>
          </div>
          <p className='price'>R$ 139,99</p>
          <strong className='price-now'>R$ 124,99</strong>
          </Link>
          </div>

          <div className='card-product'>
          <Link to='/mouse-cobra-fps-branco'>
            <img src={mouseCobraFPSBranco} alt='20' className='mouses'/>
          <p className='product-name'>MOUSE GAMER</p>
          <p className='info-product'>Mouse Redragon Cobra FPS - M711W</p>
          <div className='discount'>
            <strong>-8%</strong>
          </div>
          <p className='price'>R$ 209,99</p>
          <strong className='price-now'>R$ 194,99</strong>
          </Link>
          </div>

          <div className='card-product'>
          <Link to='/mouse-cobra-fps-preto'>
            <img src={mouseCobraFPSPreto} alt='21' className='mouse-reaping'/>
          <p className='product-name'>MOUSE GAMER</p>
          <p className='info-product'>Mouse Redragon Cobra FPS Preto - M711B</p>
          <div className='discount'>
            <strong>-10%</strong>
          </div>
          <p className='price'>R$ 219,99</p>
          <strong className='price-now'>R$ 194,99</strong>
          </Link>
          </div>

          <div className='card-product'>
          <Link to='/mousepad-kunlun'>
            <img src={mousePadKulun} alt='22' className='mousepad-new'/>
          <p className='product-name'>MOUSEPAD REDRAGON</p>
          <p className='info-product'>Mousepad Redragon Kunlun EXT Preto</p>
          <div className='discount'>
            <strong>-25%</strong>
          </div>
          <p className='price'>R$ 119,99</p>
          <strong className='price-now'>R$ 89,99</strong>
          </Link>
          </div>

          <div className='card-product'>
          <Link to='/mousepad-flick'>
            <img src={mousePadFlick} alt='23' className='mousepad-flick'/>
          <p className='product-name'>MOUSEPAD REDRAGON</p>
          <p className='info-product'>Mousepad Redragon Flick L Preto</p>
          <div className='discount'>
            <strong>-20%</strong>
          </div>
          <p className='price'>R$ 99,99</p>
          <strong className='price-now'>R$ 79,99</strong>
          </Link>
          </div>
          
          <div className='card-product'>
            <img src={tecladoDoubleSwitch} alt='24' className='teclado-double-switch'/>
          <p className='product-name'>TECLADO GAMER</p>
          <p className='info-product'>Teclado Mecânico Redragon Dark Avenger Rainbow (PT-BLUE)</p>
          <div className='discount'>
            <strong>-16%</strong>
          </div>
          <p className='price'>R$ 249,99</p>
          <strong className='price-now'>R$ 209,99</strong>

          </div>

          <div className='card-product'>
            <img src={tecladoWhite} alt='25' className='teclado-white'/>
          <p className='product-name'>TECLADO GAMER</p>
          <p className='info-product'>Teclado Mecânico Redragon Dark Avenger Rainbow Lunar White</p>
          <div className='discount'>
            <strong>-22%</strong>
          </div>
          <p className='price'>R$ 269,99</p>
          <strong className='price-now'>R$ 209,99</strong>

          </div>

          <div className='card-product'>
            <img src={mouseStormLunar} alt='26' className='mouses'/>
          <p className='product-name'>MOUSE GAMER</p>
          <p className='info-product'>Mouse Storm RGB Lunar White</p>
          <div className='discount'>
            <strong>-15%</strong>
          </div>
          <p className='price'>R$ 189,99</p>
          <strong className='price-now'>R$ 159,99</strong>

          </div>

          <div className='card-product'>
            <img src={mousePadTaurus} alt='27' className='mousepad-tokyo'/>
          <p className='product-name'>MOUSEPAD REDRAGON</p>
          <p className='info-product'>Mousepad EXT Taurus Speed</p>
          <div className='discount'>
            <strong>-27%</strong>
          </div>
          <p className='price'>R$ 89,99</p>
          <strong className='price-now'>R$ 64,99</strong>
          </div>

         </div>
        </div>
    )
}
export default Catalog