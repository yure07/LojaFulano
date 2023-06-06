import './style.css'
import Header from "../../../../../components/Header/header";
import Footer from "../../../../../components/Footer";
import image1 from '../../../../../images/produtos/akko-jelly-black.jpg'

export default function JellyBlack() {
    return(
        <div>
            <Header/>
            <div className='container-keyboard-akko'>
            <h1 className='title-product-keyboard-akko-jellyw'>Teclado Mecânico Akko 3068 V2</h1>
            <p className='name-product-keyboard-akko-jellyw'>Switch Jelly Pink - 65% RGB Black</p>
            
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
            <div className='parcelado-teclado-3068'>
                <p>R$ 562,23 - em até 10x</p>
            </div>

            <a target='_blank' href='https://wa.link/lywbdv'>
                <button type='submit' className='btn-buy-keyboard-akko-jellyw'>COMPRAR</button>
            </a>

            <img src={image1} alt='1' className='product-keyboard-akko-jellyb'/>
            </div>
            <Footer/>
        </div>
    )
}