import './style.css'
import Header from '../../../../../components/Header/header'
import Footer from '../../../../../components/Footer'
import image from '../../../../../images/produtos/headset-scylla-branco.webp'
import { Link } from 'react-router-dom'

function HeadsetScyllaBranco () {
    return (
        <div>
            <Header/>

            <div className='container-headset-scylla'>
            <h1 className='title-product-headset-scylla'>Headset Gamer</h1>
            <p className='name-product-headset-scylla'>Headset Redragon Scylla Branco H210</p>
            
            <div className='description-headset-scylla'>
                <h2>Características:</h2>
                <p> - Earpads com espumas macias e confortáveis.</p>
                <p> - Drivers de 40mm com som cristalino e isolamento passivo.</p>
                <p> - Roda de volume integrada na concha para ajustes.</p>
                <p> - Construção com hastes duplas em metal com peso reduzido e de alta durabilidade.</p>
            </div>

            <div className='discount-scylla'>
                <strong>-20%</strong>
            </div>
            <p className='price-scylla'>R$ 169,99</p>
            <strong className='price-now-scylla'>R$ 129,99</strong>
            <div className='parcelado-headset-hebe'>
                <p>R$ 141,74 - em até 6x</p>
            </div>

            <button className='headset-scylla-white-2' type='submit'></button>

            <Link to='/headset-scylla'>
                <button className='headset-scylla-black-2' type='submit'></button>
            </Link>

            <img src={image} alt='1' className='pg-product-headset-scylla'/>

            <a href='https://api.whatsapp.com/send?phone=5574999089728&text=Ol%C3%A1%20Fulano%2C%20Estou%20interessado%20em%20comprar%20um%20produto%20que%20vi%20na%20sua%20loja%2C%20Headset%20Gamer%20Scylla%2C%20Redragon%2C%20Branco%20-%20H901W.%20Acredito%20que%20ele%20atender%C3%A1%20perfeitamente%20minhas%20necessidades.' target='_blank'>
                <button type='submit' className='btn-buy-headset-scylla'>COMPRAR</button>
            </a>

            </div>
            <Footer/>
        </div>
    )
}
export default HeadsetScyllaBranco