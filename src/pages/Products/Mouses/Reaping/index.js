import './style.css'
import Header from '../../../../components/Header/header'
import Footer from '../../../../components/Footer'
import image from '../../../../images/produtos/mouse_reaping.png'

function Reaping () {
    return (
        <div>
            <Header/>
            <div className='container-redragon'>
            <h1 className='title-product-redragon'>MOUSE REDRAGON</h1>
            <p className='name-product-redragon'>Mouse Redragon Reaping Elite RGB Preto</p>
            
            <div className='description-cable'>
                <p>Mouse Gamer Reaping Elite, Redragon - M987P-K.
                    <h2>Características</h2> 
                  <p>Equipado com o sensor profissional de altíssimo desempenho
                    PIXART PWM 3389 de até 32000 DPI o mouse Reaping eleva a sua 
                    experiência dentro dos games. Carcaça com design em colmeia ultraleve e cabo ultraleve.</p>
                </p>
            </div>

            <div className='discount-mouse-reaping'>
                <strong>-13%</strong>
            </div>
            <p className='price-cable'>R$239,99</p>
            <strong className='price-now-cable'>R$209,99</strong>

            <img src={image} alt='1' className='mouse'/>

           <a target='_blank' href='https://wa.link/idva2z'>
            <button type='submit' className='btn-buy-mouse-reaping'>COMPRAR</button>
           </a>

            </div>
            <Footer/>
        </div>
    )
}
export default Reaping