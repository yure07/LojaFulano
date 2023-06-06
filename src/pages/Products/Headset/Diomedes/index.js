import './style.css'
import Header from '../../../../components/Header/header'
import Footer from '../../../../components/Footer'
import image from '../../../../images/produtos/headset-diomedes.png'

export default function HeadsetDiomedes() {
    return(
        <div>
            <Header/>
            <div className='container-headset-hebe'>
            <h1 className='title-product-headset-hebe'>Headset Gamer</h1>
            <p className='name-product-headset-diomedes'>Headset Redragon Diomedes Preto H-388</p>
            
            <div className='description-headset-hebe'>
                <p>Fones de ouvido com 7.1 canais de som com experiência sonora imersiva.</p>
                   <h2>Características:</h2>
                <p> - Microfone removível.</p>
                <p> - Frequência de resposta: 20 a 20KHz.</p>
                <p> - A alça de cabeça ajustável proporciona conforto durante horas de jogos.</p>   
            </div>

            <div className='discount-diomedes'>
                <strong>-12%</strong>
            </div>
            <p className='price-hebe'>R$ 269,99</p>
            <strong className='price-now-hebe'>R$ 234,99</strong>
            <div className='parcelado-headset'>
                <p>R$ 264,24 - em até 10x</p>
            </div>

            <img src={image} alt='2' className='headset-product-diomedes'/>
            
            <a target='_blank' href='https://wa.link/ou23pw'>
                <button type='submit' className='btn-buy-headset-hebe'>COMPRAR</button>
            </a>

            </div>
            <Footer/>
        </div>
    )
}
