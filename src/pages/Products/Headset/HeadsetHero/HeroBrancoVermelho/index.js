import './style.css'
import Header from '../../../../../components/Header/header'
import Footer from '../../../../../components/Footer'
import image from '../../../../../images/produtos/hero-branco-vermelho.webp'
import { Link } from 'react-router-dom'

function HeadsetHeroBrancoVermelho () {
    return (
        <div>
            <Header/>

            <div className='container-headset-hero-red'>
            <h1 className='title-product-headset-hero-red'>Headset Gamer</h1>
            <p className='name-product-headset-hero-red'>Headset Redragon Hero Branco com Vermelho H530-WP</p>
            
            <div className='description-headset-hero-red'>
                   <h2>Características:</h2>
                <p> - Controladora integrada para maior praticidade durante o uso.</p>
                <p> - Microfone com redução de ruído de fundo para captação clara e limpa.</p>
                <p> - Som estéreo de alta qualidade com drivers de 53mm.</p>   
            </div>

            <div className='discount-hero-red'>
                <strong>-14%</strong>
            </div>
            <p className='price-hero'>R$ 239,99</p>
            <strong className='price-now-hero'>R$ 204,99</strong>

            <Link to='/headset-hero'>
                <button className='white-hero-change1' type='submit'></button>
            </Link>

            <Link to='/headset-hero-branco-roxo'>
                <button className='white-purple-hero-change1' type='submit'></button>
            </Link>

            <button className='white-red-hero-change1' type='submit'></button>

            <img src={image} alt='1' className='product-headset-red'/>

            <a href='https://wa.link/7lhgqa' target='_blank'>
                <button type='submit' className='btn-buy-headset-hero-red'>COMPRAR</button>
            </a>
            </div>
            <Footer/>
        </div>
    )
}
export default HeadsetHeroBrancoVermelho