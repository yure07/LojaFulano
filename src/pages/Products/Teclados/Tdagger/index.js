import './style.css'
import Header from '../../../../components/Header/header'
import Footer from '../../../../components/Footer'
import image1 from '../../../../images/produtos/teclado-bora.png'

function Bora () {
    return(
        <div>
            <Header/>
            <div className='container-keyboard-tdagger'>
            <h1 className='title-product-keyboard'>Teclado Mecânico T-Dagger</h1>
            <p className='name-product-keyboard-tdagger'> T-Dagger Bora Preto RGB</p>
            
            <div className='description-keyboard'>
                <h2>Características:</h2>
                <p> - Teclado no formato TKL sem o teclado numérico para resultar em mais espaço na mesa para os movimentos do mouse.</p>
                <p> - Inclui iluminação RGB individual por tecla que pode ser customizada tanto diretamente no teclado ou pelo software.</p>  
                <p> - Design elegante com as teclas flutuantes .</p>
                <p> - Layout ABNT2 feito especialmente para o mercado brasileiro.</p>
            </div>

            <div className='discount-keyboard-tdagger'>
                <strong>-17%</strong>
            </div>
            <p className='price-keyboard'>R$279,99</p>
            <strong className='price-now-keyboard'>R$229,99</strong>
            <div className='parcelado-teclado-rainbow'>
                <p>R$ 258,62 - em até 10x</p>
            </div>

           <a target='_blank' href='https://wa.link/i7f0av'>
            <button type='submit' className='btn-buy-keyboard-tdagger'>COMPRAR</button>
           </a>
                <img src={image1} alt='1' className='product-keyboard-tdagger'/>

            </div>
            <Footer/>
        </div>
    )
}
export default Bora
