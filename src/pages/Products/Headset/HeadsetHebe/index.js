import './style.css'
import Header from '../../../../components/Header/header'
import Footer from '../../../../components/Footer'
import Hebe from '../../../../images/produtos/headset-hebe.png'

function HeadsetHebe() {
    return(
        <div>
            <Header/>
            <div className='container-headset-hebe'>
            <h1 className='title-product-headset-hebe'>Headset Gamer</h1>
            <p className='name-product-headset-hebe'>Headset Hebe Modelo E2</p>
            
            <div className='description-headset-hebe'>
                <p>Verdadeiro RGB projetado para fornecer
                   iluminação impressionante com efeitos de 
                   vibração.</p>
                   <h2>Características:</h2>
                <p> - Alto falante aprimorado de 40mm.</p>
                <p> - Microfone omnidirecional com cancelamento de ruído.</p>
                <p> - Com Bass Impact (conversor de tons graves baixos em pulsos, permitindo sentir as vibrações do jogo).</p>   
            </div>

            <div className='discount-hebe'>
                <strong>-11%</strong>
            </div>
            <p className='price-hebe'>R$ 179,99</p>
            <strong className='price-now-hebe'>R$ 159,99</strong>
            <div className='parcelado-headset-hebe'>
                <p>R$ 174,45 - em até 6x</p>
            </div>

            <img src={Hebe} alt='2' className='headset-product'/>
            
            <a href='https://api.whatsapp.com/send?phone=5574999089728&text=Ol%C3%A1%20Fulano%2C%20Estou%20interessado%20em%20comprar%20um%20produto%20que%20vi%20na%20sua%20loja%2C%20HEADSET%20HEBE%20E2.%20Acredito%20que%20ele%20atender%C3%A1%20perfeitamente%20minhas%20necessidades.' target='_blank'>
                <button type='submit' className='btn-buy-headset-hebe'>COMPRAR</button>
            </a>

            </div>
            <Footer/>
        </div>
    )
}
export default HeadsetHebe