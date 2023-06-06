import './style.css'
import Header from '../../../../components/Header/header'
import Footer from '../../../../components/Footer'
import image from '../../../../images/produtos/headset-taurus.png'

function HeadsetTaurus () {
    return(
        <div>
            <Header/>
            <div className='container-headset-taurus'>
            <h1 className='title-product-headset-taurus'>Headset Gamer</h1>
            <p className='name-product-headset-taurus'>Headset Taurus Modelo E1</p>
            
            <div className='description-headset-taurus'>
                   <h2>Características:</h2>
                <p> - Iluminação RGB.</p>
                <p> - Alto falante de 40mm de diâmetro.</p>
                <p> - Fone de ouvido estéreo de 3.5mm para jogos.</p>
                <p> - Suporte PS4 e XBOX One com plug de 3.5mm.</p>
                <p> - Microfone omnidirecional sensível com ajuste de posição focada em conforto e maior desempenho.</p>   
                <p> - Acompanha cabo adaptador em Y para dispositivo móveis.</p>
            </div>

            <div className='discount-taurus'>
                <strong>-20%</strong>
            </div>
            <p className='price-taurus'>R$ 99,99</p>
            <strong className='price-now-taurus'>R$ 79,99</strong>
            <div className='parcelado-headset'>
                <p>R$ 84,52 - em até 2x</p>
            </div>

            <img src={image} alt='1' className='taurus-headset-product'/>

            <a href='https://api.whatsapp.com/send?phone=5574999089728&text=Ol%C3%A1%20Fulano%2C%20Estou%20interessado%20em%20comprar%20um%20produto%20que%20vi%20na%20sua%20loja%2C%20HEADSET%20TAURUS%20E1.%20Acredito%20que%20ele%20atender%C3%A1%20perfeitamente%20minhas%20necessidades.' target='_blank'>
                <button type='submit' className='btn-buy-headset-taurus'>COMPRAR</button>
            </a>

            </div>
            <Footer/>
        </div>
    )
}
export default HeadsetTaurus