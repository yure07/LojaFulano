import './style.css'
import Header from '../../../../components/Header/header'
import Footer from '../../../../components/Footer'
import image from '../../../../images/produtos/mouse-storm-lunar.webp'

export default function StormLunar () {
    return(
        <div>
            <Header/>
            <div className='container-storm'>
            <h1 className='title-product-redragon'>MOUSE REDRAGON</h1>
            <p className='name-product-storm-lunar'>Mouse Redragon Storm RGB Lunar White</p>
            
            <div className='description-mouse-storm'>
                <p>Mouse Redragon Storm Lunar White - M808W-RGB. 
                 <h2> Características </h2>
                  <p>- Graças a seu design no estilo colméia, o Storm Lunar pesa apenas 88g.</p>
                  <p>- Com DPI Mínimo de 100 e DPI Máximo de 12400.</p>
                  <p>- Equipado com o sensor Pixart PWM 3327 elevando sua experiência dentro dos games.</p>
                </p>
            </div>

            <div className='discount-storm-lunar'>
                <strong>-15%</strong>
            </div>
            <p className='price-mouse-storm-lunar'>R$189,99</p>
            <strong className='price-now-mouse-storm'>R$159,99</strong>
            <div className='parcelado-mouse'>
                <p>R$ 174,45 - em até 6x</p>
            </div>

            <img src={image} alt='1' className='mouse-storm-lunar' />

           <a target='_blank' href='https://wa.link/5wjjjd'>
            <button type='submit' className='btn-buy-mouse-storm'>COMPRAR</button>
           </a>

            </div>
            <Footer/>
        </div>
    )
}