import './style.css'
import Header from '../../../../components/Header/header'
import Footer from '../../../../components/Footer'
import image from '../../../../images/produtos/headset-scylla-preto.png'
import { Link } from 'react-router-dom'

function HeadsetScylla () {
    return(
        <div>
            <Header/>
            <div className='container-headset-scylla'>
            <h1 className='title-product-headset-scylla'>Headset Gamer</h1>
            <p className='name-product-headset-scylla'>Headset Redragon Scylla Preto H901</p>
            
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
            <p className='price-scylla'>R$ 149,99</p>
            <strong className='price-now-scylla'>R$ 119,99</strong>

            <Link to='/headset-scylla-branco'>
                <button className='headset-scylla-white' type='submit'></button>
            </Link>

            <img src={image} alt='1' className='pg-product-headset-scylla'/>

            <button className='headset-scylla-black' type='submit'></button>

            <a href='https://wa.link/7q1wuf' target='_blank'>
                <button type='submit' className='btn-buy-headset-scylla'>COMPRAR</button>
            </a>

            </div>
            <Footer/>
        </div>
    )
}
export default HeadsetScylla