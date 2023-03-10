import './style.css'
import Header from "../../../../components/Header/header";
import Footer from '../../../../components/Footer';
import image from '../../../../images/produtos/mouse-cobra-branco.png'

export default function CobraFPSBranco () {

    /* function handleImage () {
        const button = document.querySelector('#avance')
        button.addEventListener('click', change())
    }
    function change () {
        const div = document.querySelector('.discount-mouse-cobra-fps-white').innerHTML
        const anotherImg = image2
        document.querySelector('.img').innerHTML = anotherImg
    } */

    return(
        <div>
            <Header/>
            <div className='container-redragon'>
            <h1 className='title-product-redragon'>MOUSE REDRAGON</h1>
            <p className='name-product-cobra-white'>Mouse Redragon Cobra FPS M711W</p>
            
            <div className='description-mouse-redragon'>
                <p>Mouse Redragon Cobra FPS Branco - M711W-FPS.
                    <h2>Características:</h2> 
                  <p>Equipado com o sensor profissional de altíssimo desempenho
                    PIXART PWM 3389 o Mouse Cobra vem com pintura exclusiva Lunar White para trazer ainda mais estilo para o seu setup.
                    Shape ergonômico oferecendo o máximo de conforto até mesmo durante longos períodos de uso.
                    </p>
                </p>
            </div>

            <div className='discount-mouse-cobra-fps-white'>
                <strong>-13%</strong>
            </div>
            <p className='price-mouse-redragon'>R$239,99</p>
            <strong className='price-now-mouse-redragon'>R$209,99</strong>

           
            <img src={image} alt='1' className='mouse-cobra-white'/>
            
            

           <a target='_blank' href='https://wa.link/oktdv0.'>
            <button type='submit' className='btn-buy-mouse-reaping'>COMPRAR</button>
           </a>

            </div>
            <Footer/>
        </div>
    )
}