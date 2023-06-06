import './style.css'
import Header from '../../../../components/Header/header'
import Footer from '../../../../components/Footer'
import image from '../../../../images/produtos/mouse-redragon-cobra-preto.webp'

export default function CobraPreto () {
    return(
        <div>
            <Header/>
            <div className='container-redragon'>
            <h1 className='title-product-redragon'>MOUSE REDRAGON</h1>
            <p className='name-product-cobra-black'>Mouse Redragon Cobra Preto</p>
            
            <div className='description-mouse-redragon'>
                <p>Mouse Redragon Cobra, Preto - M711.
                    <h2>Características:</h2> 
                  <p>Equipado com o sensor profissional de altíssimo desempenho
                    PIXART PWM 3325 de até 10000 DPI e 7 diferentes modos de iluminação, o mouse Redragon Cobra eleva a sua 
                    experiência dentro dos games.</p>
                </p>
            </div>

            <div className='discount-mouse-cobra-black'>
                <strong>-11%</strong>
            </div>
            <p className='price-mouse-redragon'>R$139,99</p>
            <strong className='price-now-mouse-redragon'>R$124,99</strong>
            <div className='parcelado-mouse-cobra'>
                <p>R$ 136,29 - em até 6x</p>
            </div>

            <img src={image} alt='1' className='mouse-cobra-black'/>

           <a target='_blank' href='https://wa.link/3nnl4y'>
            <button type='submit' className='btn-buy-mouse-reaping'>COMPRAR</button>
           </a>

            </div>
            <Footer/>
        </div>
    )
}