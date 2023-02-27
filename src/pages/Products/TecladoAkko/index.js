import './style.css'
import Header from "../../../components/Header/header"
import Footer from "../../../components/Footer"
import image1 from '../../../images/produtos/teclado-akko.jpg'

function TecladoAkko () {
    return(
        <div>
            <Header/>
            <div className='container-keyboard-akko'>
            <h1 className='title-product-keyboard-akko'>Teclado Mecânico Akko</h1>
            <p className='name-product-keyboard-akko'>Switch Akko Pink</p>
            
            <div className='description-keyboard-akko'>
                <p>Teclado Akko World Tour Tokio R1 3087 Switch Pink.</p>
                <p>Modelo padrão da versão R1 Tokyo World Tour, com formato Full Size e altura ajustável. Sem Iluminação</p>   
            </div>

            <div className='discount-keyboard-akko'>
                <strong>-17%</strong>
            </div>
            <p className='price-keyboard-akko'>R$726,99</p>
            <strong className='price-now-keyboard-akko'>R$599,99</strong>

            <a target='_blank' href='https://wa.link/78c2l5'>
                <button type='submit' className='btn-buy-keyboard-akko'>COMPRAR</button>
            </a>

            <img src={image1} alt='1' className='product-keyboard-akko'/>
            </div>
            <Footer/>
        </div>
    )
}
export default TecladoAkko