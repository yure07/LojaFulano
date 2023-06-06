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
            
            <div className='description-mouse-redragon'>
                <p>Mouse Gamer Reaping Elite, Redragon - M987P-K.
                    <h2>Características:</h2> 
                  <p>Equipado com o sensor profissional de altíssimo desempenho
                    PIXART PWM 3389 de até 32000 DPI o mouse Reaping eleva a sua 
                    experiência dentro dos games. Carcaça com design em colmeia ultraleve e cabo ultraleve.</p>
                </p>
            </div>

            <div className='discount-mouse-reaping'>
                <strong>-13%</strong>
            </div>
            <p className='price-mouse-redragon'>R$239,99</p>
            <strong className='price-now-mouse-redragon'>R$209,99</strong>
            <div className='parcelado-mouse-reaping'>
                <p>R$ 236,13 - em até 10x</p>
            </div>

            <img src={image} alt='1' className='mouse'/>

           <a target='_blank' href='https://api.whatsapp.com/send?phone=5574999089728&text=Ol%C3%A1%20Fulano%2C%20Estou%20interessado%20em%20comprar%20um%20produto%20que%20vi%20na%20sua%20loja%2C%20Mouse%20Reaping%20Elite%20RGB%20PTO.%20Acredito%20que%20ele%20atender%C3%A1%20perfeitamente%20minhas%20necessidades.'>
            <button type='submit' className='btn-buy-mouse-reaping'>COMPRAR</button>
           </a>

            </div>
            <Footer/>
        </div>
    )
}
export default Reaping