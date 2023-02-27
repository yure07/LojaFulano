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
                <strong>-16%</strong>
            </div>
            <p className='price-scylla'>R$ 219,99</p>
            <strong className='price-now-scylla'>R$ 184,99</strong>

            <button className='headset-scylla-white-2' type='submit'></button>

            <Link to='/headset-scylla'>
                <button className='headset-scylla-black-2' type='submit'></button>
            </Link>

            <img src={image} alt='1' className='pg-product-headset-scylla'/>

            <a href='https://wa.link/k26tro' target='_blank'>
                <button type='submit' className='btn-buy-headset-scylla'>COMPRAR</button>
            </a>

            </div>
            <Footer/>
        </div>
    )
}
export default HeadsetScyllaBranco