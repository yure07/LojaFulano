import './style.css'
import Header from '../../../../components/Header/header'
import Footer from '../../../../components/Footer'
import image1 from '../../../../images/produtos/teclado-lakshmi.png'

export default function Lakshmi () {
    return(
        <div>
            <Header/>
            <div className='container-keyboard-lakshmi'>
            <h1 className='title-product-keyboard'>Teclado Mecânico Redragon</h1>
            <p className='name-product-keyboard-lakshmi'>Redragon Lakshmi 60% - Branco e Rosa</p>
            
            <div className='description-keyboard-lakshmi'>
                <p> -Teclado Gamer Mecânico
                   Lakshmi 60% - Switch Azul.
                   <h2>Características:</h2>
                   <p>- Keycaps feitas com o método de double shot injection para a longevidade das marcações.</p>
                   <p>- Conectividade: Cabo USB-C para USB-A removível.</p>
                   <p>- Switches: Redragon MK II Blue.</p>
                   <p>- Comprimento do cabo: 1.5m aproximadamente.</p>
                </p>
                  
            </div>

            <div className='discount-keyboard-lakshmi'>
                <strong>-12%</strong>
            </div>
            <p className='price-keyboard'>R$249,99</p>
            <strong className='price-now-keyboard'>R$218,99</strong>
            <div className='parcelado-teclado-lakshmi'>
                <p>R$ 246,25 - em até 10x</p>
            </div>

           <a target='_blank' href='https://wa.link/3slz22'>
            <button type='submit' className='btn-buy-keyboard-lakshmi'>COMPRAR</button>
           </a>
                <img src={image1} alt='1' className='product-keyboard-lakshmi'/>

            </div>
            <Footer/>
        </div>
    )
}