import './style.css'
import Header from '../../../../components/Header/header'
import Footer from '../../../../components/Footer'
import image1 from '../../../../images/produtos/Tokyo-Mouse-Pad-London.png'
import { Link } from 'react-router-dom'

function London () {
    return(
        <div>
         <Header/>
         <div className='container-mousepad-london'>
            <h1 className='title-product-mousepad-london'>Mousepad Akko</h1>
            <p className='name-product-mousepad-london'>Mousepad Akko - World Tour London </p>
            
            <div className='description-mousepad-london'>
                <p> <p>Mousepad Extragrande 900x400mm.</p> O Mousepad da Akko conta com um design exclusivo
                   e com o tamanho extra grande com laterais estendidas que se encaixa perfeitamente
                   na sua area de trabalho permitindo movimentos preciosos do mouse sem limite.
                </p>
            </div>

            <div className='discount-mousepad-london'>
                <strong>-12%</strong>
            </div>
            <p className='price-mousepad-london'>R$175,99</p>
            <strong className='price-now-mousepad-london'>R$154,99</strong>
            <div className='parcelado-mousepad'>
                <p>em até 6x de R$ 28,17</p>
            </div>

           <a target='_blank' href='https://api.whatsapp.com/send?phone=5574999089728&text=Ol%C3%A1%20Fulano%2C%20Estou%20interessado%20em%20comprar%20um%20produto%20que%20vi%20na%20sua%20loja%2C%20Mousepad%20Akko%20-%20World%20Tour%20London.%20Acredito%20que%20ele%20atender%C3%A1%20perfeitamente%20minhas%20necessidades.'>
            <button type='submit' className='btn-buy-mousepad-london'>COMPRAR</button>
           </a>
            <img src={image1} alt='1' className='product-mousepad-london'/>

            <Link to='/mousepad-dracula'>
                <button className='dracula-mousepad-london' type='submit'></button>
            </Link>

            <button className='london-mousepad-london' type='submit'></button>

            <Link to='/mousepad-tokyo'>
                <button className='tokyo-mousepad-london' type='button'></button>
            </Link>
            </div>
            <Footer/>
        </div>
    )
}
export default London