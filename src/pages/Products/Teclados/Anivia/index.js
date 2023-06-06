import './style.css'
import Header from '../../../../components/Header/header'
import Footer from '../../../../components/Footer'
import image1 from '../../../../images/produtos/teclado-anivia.png'

export default function Anivia () {
    return(
        <div>
            <Header/>
            <div className='container-keyboard-anivia'>
            <h1 className='title-product-keyboard'>Teclado Mecânico Redragon</h1>
            <p className='name-product-keyboard-anivia'>Redragon Anivia Low Profile RGB - Preto</p>
            
            <div className='description-keyboard-anivia'>
                <p>Teclado Mecânico Gamer Anivia RGB - Switch Red - Low Profile.</p>
                <h2>Características:</h2>
                <p>- Teclas para jogos de alto desempenho.</p>
                <p>- Keycaps super slim.</p>
                <p>- Formato: 60%.</p>
                <p>- Comprimento do cabo: 1,8m</p>  
                <p>- Conectividade: WIRED.</p>
            </div>

            <div className='discount-keyboard-anivia'>
                <strong>-10%</strong>
            </div>
            <p className='price-keyboard-draonic'>R$279,99</p>
            <strong className='price-now-keyboard-draonic'>R$249,99</strong>
            <div className='parcelado-teclado-rainbow'>
                <p>R$ 281,11 - em até 10x</p>
            </div>

           <a target='_blank' href='https://wa.link/5cd2vw'>
            <button type='submit' className='btn-buy-keyboard-draonic'>COMPRAR</button>
           </a>
                <img src={image1} alt='1' className='product-keyboard-anivia'/>

            </div>
            <Footer/>
        </div>
    )
}
