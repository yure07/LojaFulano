import './style.css'
import Header from '../../../../components/Header/header'
import Footer from '../../../../components/Footer'
import image1 from '../../../../images/produtos/cabo-akko-blue.png'
import { Link } from 'react-router-dom'

function CaboBlue () {
    return(
        <div>
          <Header/>

          <div className='container-cable-blue'>
            <h1 className='title-product-cable-blue'>Cabo Para Teclado</h1>
            <p className='name-product-cable-blue'>Cabo Enrolado Akko - Modelo Blue </p>
            
            <div className='description-cable-blue'>
                <p>Detalhes que fazem toda a diferença. 
                  O Coiled Cable foi feito especialmente para que ambas as extremidades 
                  fiquem planas em sua mesa, dando uma estética personalizada e mais clean no seu setup.
                  <p>Feito no Material TPU. Com conector de liga de zinco USB-A para USB-C</p>
                </p>
            </div>

            <div className='discount-cable-blue'>
                <strong>-28%</strong>
            </div>
            <p className='price-cable-blue'>R$69,99</p>
            <strong className='price-now-cable-blue'>R$49,99</strong>

          <a target='_blank' href='https://wa.link/fouxgv'>
            <button type='submit' className='btn-buy-cable-blue'>COMPRAR</button>
          </a>

            <img src={image1} alt='1' className='pg-product-cable-blue'/>

            <button className='cable-pink-change' type='submit'></button>
            
            <Link to='/keyboard-cable-pink'>
              <button className='cable-change-to-blue' type='submit'></button>
            </Link>

            </div>
            <Footer/>  
        </div>
    )
}
export default CaboBlue