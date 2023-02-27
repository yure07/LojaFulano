import './style.css'
import Header from '../../../../components/Header/header'
import Footer from '../../../../components/Footer'
import image from '../../../../images/produtos/hero-branco.webp'
import { Link } from 'react-router-dom'

function HeadsetHero () {
    return(
        <div>
            <Header/>
            <div className='container-headset-hero'>
            <h1 className='title-product-headset-hero'>Headset Gamer</h1>
            <p className='name-product-headset-hero'>Headset Redragon Hero Branco H530-W</p>
            
            <div className='description-headset-hero'>
                   <h2>Características:</h2>
                <p> - Controladora integrada para maior praticidade durante o uso.</p>
                <p> - Microfone com redução de ruído de fundo para captação clara e limpa.</p>
                <p> - Som estéreo de alta qualidade com drivers de 53mm.</p>   
            </div>

            <div className='discount-hero'>
                <strong>-10%</strong>
            </div>
            <p className='price-hero'>R$ 299,99</p>
            <strong className='price-now-hero'>R$ 269,99</strong>

            <button className='white-hero' type='submit'></button>

            <Link to='/headset-hero-branco-roxo'>
                <button className='white-purple-hero' type='submit'></button>
            </Link>

            <Link to='/headset-hero-branco-vermelho'>
                <button className='white-red-hero' type='submit'></button>
            </Link>

            <img src={image} alt='1' className='product-headset-black'/>

            <a href='https://wa.link/4ianwf' target='_blank'>
                <button type='submit' className='btn-buy-headset-hero'>COMPRAR</button>
            </a>
            </div>
            <Footer/>
        </div>
    )
}
export default HeadsetHero