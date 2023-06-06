import './style.css'
import Header from '../../../../components/Header/header'
import Footer from '../../../../components/Footer'
import image1 from '../../../../images/produtos/produto-teclado.png'

function Teclado () {
    return(
        <div>
            <Header/>
            <div className='container-keyboard'>
            <h1 className='title-product-keyboard'>Teclado Mecânico Redragon</h1>
            <p className='name-product-keyboard'>Redragon Switch Azul</p>
            
            <div className='description-keyboard'>
                <p>K606R (PT-BLUE) - Teclado Gamer Mecânico
                   Lakshmi Rainbow PTO Switch Azul ABNT2.</p>
                <p>O Lakshmi é um modelo muito portátil para aqueles usuários
                   que buscam praticidade na hora levar seus equipamentos. 
                   Sem deixar de lado a qualidade na sua construção</p>   
            </div>

            <div className='discount-keyboard'>
                <strong>-25%</strong>
            </div>
            <p className='price-keyboard'>R$274,99</p>
            <strong className='price-now-keyboard'>R$204,99</strong>

            <div className='parcelado'>
                <p>R$ 230,51 - em até 10x</p>
            </div>

           <a href='https://api.whatsapp.com/send?phone=5574999089728&text=Ol%C3%A1%20Fulano%2C%20Estou%20interessado%20em%20comprar%20um%20produto%20que%20vi%20na%20sua%20loja%2C%20Teclado%20Mec%C3%A2nico%20Redragon.%20Acredito%20que%20ele%20atender%C3%A1%20perfeitamente%20minhas%20necessidades.' target='_blank'>
            <button type='submit' className='btn-buy-keyboard'>COMPRAR</button>
           </a>
                <img src={image1} alt='1' className='product-keyboard'/>
            </div>
            <Footer/>
        </div>
    )
}
export default Teclado