import './style.css'
import Header from '../../../../../components/Header/header'
import Footer from '../../../../../components/Footer'
import image from '../../../../../images/produtos/hero-branco-roxo.webp'
import { Link } from 'react-router-dom'

function HeadsetHeroBrancoRoxo () {
    return (
        <div>
            <Header/>

            <div className='container-headset-hero-purple'>
            <h1 className='title-product-headset-hero-purple'>Headset Gamer</h1>
            <p className='name-product-headset-hero-purple'>Headset Redragon Hero Branco com Roxo H530-WP</p>
            
            <div className='description-headset-hero'>
                   <h2>Características:</h2>
                <p> - Controladora integrada para maior praticidade durante o uso.</p>
                <p> - Microfone com redução de ruído de fundo para captação clara e limpa.</p>
                <p> - Som estéreo de alta qualidade com drivers de 53mm.</p>   
            </div>

            <div className='discount-hero-purple'>
                <strong>-14%</strong>
            </div>
            <p className='price-hero'>R$ 239,99</p>
            <strong className='price-now-hero'>R$ 204,99</strong>

            <Link to='/headset-hero'>
                <button className='white-hero-change2' type='submit'></button>
            </Link>

            <button className='white-purple-hero-change2' type='submit'></button>

            <Link to='/headset-hero-branco-vermelho'>
                <button className='white-red-hero-change2' type='submit'></button>
            </Link>

            <img src={image} alt='1' className='product-headset-purple'/>

            <a href='https://wa.link/8ghyba' target='_blank'>
                <button type='submit' className='btn-buy-headset-hero-purple'>COMPRAR</button>
            </a>
            </div>
            <Footer/>
        </div>
    )
}
export default HeadsetHeroBrancoRoxo