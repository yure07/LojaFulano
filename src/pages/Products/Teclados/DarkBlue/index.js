import './style.css'
import Header from '../../../../components/Header/header'
import Footer from '../../../../components/Footer'
import image1 from '../../../../images/produtos/dar-avenger-rainbow.png'

export default function DarkBlue () {
    return(
        <div>
            <Header/>
            <div className='container-keyboard-dark-blue'>
            <h1 className='title-product-keyboard-dark-blue'>Teclado Mecânico Redragon</h1>
            <p className='name-product-keyboard-dark-blue'> Dark Avenger Rainbow</p>
            
            <div className='description-keyboard-dark-blue'>
                <p>Teclado Mecânico Redragon, Switch blue - K568R (PT-Blue).</p>
                <p>Teclado no formato TKL resultando em mais espaço na mesa para o movimento do mouse.<br/>
                Keycaps feitas com o método Doubleshot Injection resultando em legendas duradouras.<br/>
                Layout ABNT2 feito especialmente para o mercado brasileiro.</p>   
            </div>

            <div className='discount-keyboard-dark-blue'>
                <strong>-16%</strong>
            </div>
            <p className='price-keyboard-dark-blue'>R$249,99</p>
            <strong className='price-now-keyboard-dark-blue'>R$209,99</strong>
            <div className='parcelado-teclado-rainbow'>
                <p>R$ 236,13 - em até 10x</p>
            </div>

            <a target='_blank' href='https://wa.link/c3t18p'>
                <button type='submit' className='btn-buy-keyboard-dark-blue'>COMPRAR</button>
            </a>

            <img src={image1} alt='1' className='product-keyboard-dark-blue'/>
            </div>
            <Footer/>
        </div>
    )
}