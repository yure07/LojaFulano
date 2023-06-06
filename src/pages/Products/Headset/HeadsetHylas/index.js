import './style.css'
import Header from '../../../../components/Header/header'
import Footer from '../../../../components/Footer'
import image from '../../../../images/produtos/Hylas.png'

function HeadsetHylas () {
    return(
        <div>
            <Header/>
            <div className='container-headset-hylas'>
            <h1 className='title-product-headset-hylas'>Headset Gamer</h1>
            <p className='name-product-headset-hylas'>Headset Redragon Hylas Rosa H260-P</p>
            
            <div className='description-headset-hylas'>
                   <h2>Características:</h2>
                <p> - Alto falante de 50mm com reprodução limpa e de qualidade.</p>
                <p> - Iluminação RGB Redragon Chroma trazendo brilho para seu setup.</p>
                <p> - Roda de volume integrada na concha para ajustes.</p>
                <p> - Microfone omnidirecional flexível com cápsula de 40mm.</p>   
                <p> - Acompanha cabo adaptador em Y para dispositivo móveis.</p>
            </div>

            <div className='discount-hylas'>
                <strong>- 11%</strong>
            </div>
            <p className='price-hylas'>R$ 139,99</p>
            <strong className='price-now-hylas'>R$ 124,99</strong>
            <div className='parcelado-headset-hebe'>
                <p>R$ 136,29 - em até 10x</p>
            </div>

            <img src={image} alt='1' className='hylas-headset-product'/>

            <a href='https://api.whatsapp.com/send?phone=5574999089728&text=Ol%C3%A1%20Fulano%2C%20Estou%20interessado%20em%20comprar%20um%20produto%20que%20vi%20na%20sua%20loja%2C%20Headset%20Gamer%20Hylas%20Rosa%2C%20Redragon%20-%20H260-P.%20Acredito%20que%20ele%20atender%C3%A1%20perfeitamente%20minhas%20necessidades.' target='_blank'>
                <button type='submit' className='btn-buy-headset-hylas'>COMPRAR</button>
            </a>

            </div>
            <Footer/>
        </div>
    )
}
export default HeadsetHylas