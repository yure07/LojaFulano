import './style.css'
import Header from "../../../../../components/Header/header";
import Footer from "../../../../../components/Footer";
import image1 from '../../../../../images/produtos/akko-jelly-pink.jpg'

export default function JellyWhite () {
    return(
        <div>
            <Header/>
            <div className='container-keyboard-akko'>
            <h1 className='title-product-keyboard-akko-jellyw'>Teclado Mecânico Akko 3068 V2</h1>
            <p className='name-product-keyboard-akko-jellyw'>Switch Jelly Pink - 65% RGB White</p>
            
            <div className='description-keyboard-akko-jellyw'>
                <p>Teclado Akko Switch Jelly Pink.</p>
                <p>Teclado 65% para quem deseja mais espaço em seu setup. Com conexões USB tipo C.</p> 
                <p>Retroiluminado, ergonômico, personalização RGB, teclas marcos e remapeamento, troca quente, multimídia.</p>  
            </div>

            <div className='discount-keyboard-akko-jellyw'>
                <strong>-5%</strong>
            </div>
            <p className='price-keyboard-akko-jellyw'>R$529,99</p>
            <strong className='price-now-keyboard-akko-jellyw'>R$499,99</strong>

            <a target='_blank'>
                <button type='submit' className='btn-buy-keyboard-akko-jellyw'>COMPRAR</button>
            </a>

            <img src={image1} alt='1' className='product-keyboard-akko-jellyw'/>
            </div>
            <Footer/>
        </div>
    )
}