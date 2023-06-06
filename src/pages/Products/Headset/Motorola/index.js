import './style.css'
import Header from "../../../../components/Header/header";
import Footer from "../../../../components/Footer";

import image from '../../../../images/produtos/headphone-motorola.png'

export default function Motorola () {
    return(
        <div>
            <Header/>
            <div className='container-headset-taurus'>
            <h1 className='title-product-headphone-motorola'>Headphone Motorola</h1>
            <p className='name-product-headphone-motorola'>Headphone Motorola Pulse 120</p>
            
            <div className='description-headphone-motorola'>
                   <h2>Características:</h2>
                <p> - Modelo com entrada P2.</p>
                <p> - Isolamento passivo de ruído.</p>
                <p> - Modelo dobrável, leve e compacta para fácil armazenamento.</p>
                <p> - Alto-falante de 40mm.</p>
                <p> - Almofada sobre a orelha.</p>   
            </div>

            <div className='discount-motorola'>
                <strong>-26%</strong>
            </div>
            <p className='price-motorola'>R$ 149,99</p>
            <strong className='price-now-motorola'>R$ 109,99</strong>
            <div className='parcelado-headset-motorola'>
                <p>R$ 119,97 - em até 6x</p>
            </div>

            <img src={image} alt='1' className='motorola-headphone-product'/>

            <a target='_blank' href='https://wa.link/b81g0j'>
                <button type='submit' className='btn-buy-headphone-motorola'>COMPRAR</button>
            </a>

            </div>
            <Footer/>
        </div>
    )
}