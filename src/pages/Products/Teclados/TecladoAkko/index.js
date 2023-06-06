import './style.css'
import Header from '../../../../components/Header/header'
import Footer from '../../../../components/Footer'
import image1 from '../../../../images/produtos/teclado-akko.jpg'

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
            <div className='parcelado-teclado-akko'>
                <p>R$ 674,68 - em até 10x </p>
            </div>

            <a target='_blank' href='https://api.whatsapp.com/send?phone=5574999089728&text=Ol%C3%A1%20Fulano%2C%20Estou%20interessado%20em%20comprar%20um%20produto%20que%20vi%20na%20sua%20loja%2C%20Teclado%20Akko%20World%20Tour%20Tokio%20R1%203087.%20Acredito%20que%20ele%20atender%C3%A1%20perfeitamente%20minhas%20necessidades.'>
                <button type='submit' className='btn-buy-keyboard-akko'>COMPRAR</button>
            </a>

            <img src={image1} alt='1' className='product-keyboard-akko'/>
            </div>
            <Footer/>
        </div>
    )
}
export default TecladoAkko