import './style.css'
import Header from '../../../components/Header/header'
import Footer from '../../../components/Footer'
import image1 from '../../../images/produtos/cabo-akko-pink.png'
import { Link } from 'react-router-dom'

function CaboTeclado () {

    return(
        <div>
         <Header/>
         
         <div className='container-cable'>
            <h1 className='title-product-cable'>Cabo Para Teclado</h1>
            <p className='name-product-cable'>Cabo Enrolado Akko - Modelo Pink </p>

            <div className='description-cable'>
                <p>Detalhes que fazem toda a diferença. 
                  O Coiled Cable foi feito especialmente para que ambas as extremidades 
                  fiquem planas em sua mesa, dando uma estética personalizada e mais clean no seu setup.
                  <p>Feito no Material TPU. Com conector de liga de zinco USB-A para USB-C</p>
                </p>
            </div>

            <div className='discount-cable'>
                <strong>-28%</strong>
            </div>
            <p className='price-cable'>R$69,99</p>
            <strong className='price-now-cable'>R$49,99</strong>

           <a target='_blank' href='https://api.whatsapp.com/send?phone=5574999089728&text=Ol%C3%A1%20Fulano%2C%20Estou%20interessado%20em%20comprar%20um%20produto%20que%20vi%20na%20sua%20loja%2C%20CABO%20PARA%20TECLADO%20Akko%20Pink.%20Acredito%20que%20ele%20atender%C3%A1%20perfeitamente%20minhas%20necessidades.'>
            <button type='submit' className='btn-buy-cable'>COMPRAR</button>
           </a>

            <img src={image1} alt='1' className='pg-product-cable-pink'/>

            <Link to='/keyboard-cable-blue'>
                <button className='cable-pink-change1' type='submit'></button>
            </Link>

            <button className='cable-change-to-blue1' type='submit'></button>

            </div>
            
            <Footer/>
        </div>
    )
}
export default CaboTeclado