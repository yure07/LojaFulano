import './style.css'
import Header from '../../../../components/Header/header'
import Footer from '../../../../components/Footer'
import image from '../../../../images/produtos/Mouse-redragon-cobra-FPS.png'

export default function CobraFPSPreto () {
    return(
        <div>
            <Header/>
            <div className='container-redragon'>
            <h1 className='title-product-redragon'>MOUSE REDRAGON</h1>
            <p className='name-product-cobra-fps-preto'>Mouse Redragon Cobra FPS Preto </p>
            
            <div className='description-mouse-redragon'>
                <p>Mouse Gamer Redragon King preto - M711-FPS.
                    <h2>Características:</h2> 
                  <p>O King Cobra é equipado com o sensor PIXART 3389
                    PIXART PWM 3389 de até 32000 DPI o mouse Reaping eleva a sua 
                    experiência dentro dos games. Trazendo a já amada iluminação 
                    Redragon Chroma Mark II o mouse Gamer Profissional Cobra impressiona com tanta beleza, conforto e precisão.</p>
                </p>
            </div>

            <div className='discount-mouse-cobra-fps-preto'>
                <strong>-10%</strong>
            </div>
            <p className='price-mouse-redragon'>R$219,99</p>
            <strong className='price-now-mouse-redragon'>R$194,99</strong>
            <div className='parcelado-mouse-cobra'>
                <p>R$ 219,26 - em até 10x</p>
            </div>

            <img  alt='1' className='product-mouse-cobra-fps-preto' src={image}/>

           <a target='_blank' href='https://wa.link/cjc7f3'>
            <button type='submit' className='btn-buy-mouse-reaping'>COMPRAR</button>
           </a>

            </div>
            <Footer/>
        </div>
    )
}