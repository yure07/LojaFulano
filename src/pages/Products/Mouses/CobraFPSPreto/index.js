import './style.css'
import Header from '../../../../components/Header/header'
import Footer from '../../../../components/Footer'

export default function CobraFPSPreto () {
    return(
        <div>
            <Header/>
            <div className='container-redragon'>
            <h1 className='title-product-redragon'>MOUSE REDRAGON</h1>
            <p className='name-product-cobra-white'>Mouse Redragon Cobra FPS M711W</p>
            
            <div className='description-mouse-redragon'>
                <p>Mouse Gamer Reaping Elite, Redragon - M987P-K.
                    <h2>Características:</h2> 
                  <p>Equipado com o sensor profissional de altíssimo desempenho
                    PIXART PWM 3389 de até 32000 DPI o mouse Reaping eleva a sua 
                    experiência dentro dos games. Carcaça com design em colmeia ultraleve e cabo ultraleve.</p>
                </p>
            </div>

            <div className='discount-mouse-reaping'>
                <strong>-13%</strong>
            </div>
            <p className='price-mouse-redragon'>R$239,99</p>
            <strong className='price-now-mouse-redragon'>R$209,99</strong>

            <img  alt='1' className='mouse-cobra-white'/>

           <a target='_blank' href=''>
            <button type='submit' className='btn-buy-mouse-reaping'>COMPRAR</button>
           </a>

            </div>
            <Footer/>
        </div>
    )
}