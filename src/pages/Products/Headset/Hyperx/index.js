import './style.css'
import Header from "../../../../components/Header/header";
import Footer from "../../../../components/Footer";

import image from '../../../../images/produtos/headset-hyperx.png'

export default function Hyperx () {
    return(
        <div>
            <Header/>
            <div className='container-headset-taurus'>
            <h1 className='title-product-headset-taurus'>Headset Gamer</h1>
            <p className='name-product-headset-hyperx'>HyperX Cloud Stinger</p>
            
            <div className='description-headset-hyperx'>
                   <h2>Características:</h2>
                <p> - Controles deslizantes em aço, ajustáveis e duráveis.</p>
                <p> - Microfone com cancelamento de ruído que gira para colocar o microfone em mudo.</p>
                <p> - Controle de volume integrado.</p>
                <p> - Construído em Aço e Plástico.</p>
                <p> - Fator de forma dentro da orelha.</p>   
            </div>

            <div className='discount-hyperx'>
                <strong>-19%</strong>
            </div>
            <p className='price-taurus'>R$ 209,99</p>
            <strong className='price-now-taurus'>R$ 169,99</strong>
            <div className='parcelado-headset'>
                <p>R$ 185,36 - em até 6x</p>
            </div>

            <img src={image} alt='1' className='hyperx-headset-product'/>

            <a target='_blank' href='https://wa.link/r799km'>
                <button type='submit' className='btn-buy-headset-taurus'>COMPRAR</button>
            </a>

            </div>
            <Footer/>
        </div>
    )
}