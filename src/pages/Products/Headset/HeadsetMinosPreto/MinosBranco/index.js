import './style.css'
import Header from '../../../../../components/Header/header'
import Footer from '../../../../../components/Footer'
import image from '../../../../../images/produtos/headset-minos-branco.webp'
import { Link } from 'react-router-dom'

function HeadsetMinosBranco () {
    return (
        <div>
            <Header/>
            <div className='container-headset-minos-white'>
            <h1 className='title-product-headset-minos-white'>Headset Gamer</h1>
            <p className='name-product-headset-minos-white'>Headset Regragon Minos Branco H210W</p>
            
            <div className='description-headset-minos-white'>
                   <h2>Características:</h2>
                <p> - Headset USB plug and play sem necessidade de drivers.</p>
                <p> - Iluminação vermelha representando a marca com elegância.</p>
                <p> - Cabo USB de 2 metros para um bom alcance, dando mais liberdade para o usuário.</p>   
            </div>

            <div className='discount-minos-white'>
                <strong>-16%</strong>
            </div>
            <p className='price-minos-white'>R$ 219,99</p>
            <strong className='price-now-minos-white'>R$ 184,99</strong>
            <div className='parcelado-headset-hebe'>
                <p>R$ 208,02 - em até 10x</p>
            </div>

            <a href='https://api.whatsapp.com/send?phone=5574999089728&text=Ol%C3%A1%20Fulano%2C%20Estou%20interessado%20em%20comprar%20um%20produto%20que%20vi%20na%20sua%20loja%2C%20Headset%20Gamer%20Minos%2C%20Redragon%2C%20Branco-%20H210W.%20Acredito%20que%20ele%20atender%C3%A1%20perfeitamente%20minhas%20necessidades.' target='_blank'>
                <button type='submit' className='btn-buy-headset-minos-white'>COMPRAR</button>
            </a>

            <button className='headset-minos-white-change' type='submit'></button>

            <img src={image} alt='1' className='headset-minos-product'/>

            <Link to='/headset-minos'>
                <button className='headset-minos-black-change' type='submit'></button>
            </Link>
            </div>
            <Footer/>
        </div>
    )
}
export default HeadsetMinosBranco