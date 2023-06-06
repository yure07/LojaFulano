import './style.css'
import Header from '../../../../../components/Header/header'
import Footer from '../../../../../components/Footer'
import image1 from '../../../../../images/produtos/cabo-sakura.png'

export default function Sakura () {

    return(
        <div>
         <Header/>
         
         <div className='container-cable-aviator'>
            <h1 className='title-product-cable'>Cabo Para Teclado</h1>
            <p className='name-product-cable-aviator-sakura'>Cabo Enrolado Aviator - Modelo Sakura </p>

            <div className='description-cable'>
                <p>Detalhes que fazem toda a diferença. 
                    O Custom Coiled Aviator Cable possui o conector Aviator exclusivo da Akko. 
                  <h2>Características:</h2>
                  <p>- Cor: Sakura</p>
                  <p>- Comprimento do USB-A para o Aviator: 1,2m</p>
                  <p>- Comprimento do USB-C para o Aviator: 44cm</p>
                  <p>- Comprimento da parte enrolada: 12cm</p>
                </p>
            </div>

            <div className='discount-cable-aviator'>
                <strong>-10%</strong>
            </div>
            <p className='price-cable'>R$109,99</p>
            <strong className='price-now-cable'>R$98,99</strong>
            <div className='parcelado-cable-av'>
                <p>R$ 104,64 - em até 2x</p>
            </div>

           <a target='_blank' href='https://wa.link/6p9y2x'>
            <button type='submit' className='btn-buy-cable'>COMPRAR</button>
           </a>

            <img src={image1} alt='1' className='product-cable-aviator'/>

            </div>
            
            <Footer/>
        </div>
    )
}