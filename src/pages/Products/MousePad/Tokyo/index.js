import './style.css'
import Header from '../../../../components/Header/header'
import Footer from '../../../../components/Footer/index'
import {Link} from 'react-router-dom'
import image1 from '../../../../images/produtos/Tokyo-Mouse-Pad.png'

function Tokyo () {
    return(
        <div>
            <Header/>
            <div className='container-mousepad-tokyo'>
            <h1 className='title-product-mousepad-tokyo'>Mousepad Akko</h1>
            <p className='name-product-mousepad-tokyo'>Mousepad Akko - World Tour Tokio R2 </p>
            
            <div className='description-mousepad-tokyo'>
                <p> <p>Mousepad Extragrande 900x400mm.</p> O Mousepad da série Akko R2 conta com um design exclusivo
                   e com o tamanho extra grande com laterais estendidas que se encaixa perfeitamente
                   na sua area de trabalho permitindo movimentos preciosos do mouse sem limite.
                </p>
            </div>

            <div className='discount-mousepad-tokyo'>
                <strong>-12%</strong>
            </div>
            <p className='price-mousepad-tokyo'>R$175,99</p>
            <strong className='price-now-mousepad-tokyo'>R$154,99</strong>
            <div className='parcelado-mousepad'>
                <p>em até 6x de R$ 28,17</p>
            </div>

           <a target='_blank' href='https://api.whatsapp.com/send?phone=5574999089728&text=Ol%C3%A1%20Fulano%2C%20Estou%20interessado%20em%20comprar%20um%20produto%20que%20vi%20na%20sua%20loja%2C%20Mousepad%20Akko%20World%20Tour%20Tokio%20R2.%20Acredito%20que%20ele%20atender%C3%A1%20perfeitamente%20minhas%20necessidades.'>
            <button type='submit' className='buy-buy'>COMPRAR</button>
           </a>
            <img src={image1} alt='1' className='product-mousepad-tokyo'/>

            <Link to='/mousepad-dracula'>
                <button className='dracula-mousepad' type='submit'></button>
            </Link>

            <button className='tokyo-mousepad' type='submit'></button>

            <Link to='/mousepad-london'>
                <button className='london-mousepad' type='button'></button>
            </Link>
            </div>

            <div className='space-footer'>
                <Footer/>
            </div>
        </div>
    )
}
export default Tokyo