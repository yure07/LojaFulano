import './style.css'
import Header from '../../../../components/Header/header'
import Footer from '../../../../components/Footer'
import image from '../../../../images/produtos/mouse_gamer_rmouse_storm.png'

function Storm () {
    return (
        <div>
            <Header/>

            <div className='container-storm'>
            <h1 className='title-product-redragon'>MOUSE REDRAGON</h1>
            <p className='name-product-storm'>Mouse Redragon Storm Elite RGB</p>
            
            <div className='description-mouse-storm'>
                <p>Mouse Gamer Storm Elite, Redragon - M988W. 
                 <h2> Características </h2>
                  <p>- Leve e Preciso. Devido ao seu design colméia, ele pesa apenas 85g.</p>
                  <p>- Com DPI Mínimo de 100 e DPI Máximo de 16000.</p>
                  <p>- Equipado com o sensor PIXART PMW 3389 elevando sua experiência dentro dos games.</p>
                </p>
            </div>

            <div className='discount-storm'>
                <strong>-11%</strong>
            </div>
            <p className='price-mouse-storm'>R$219,99</p>
            <strong className='price-now-mouse-storm'>R$194,99</strong>

            <img src={image} alt='1' className='mouse-storm' />

           <a target='_blank' href='https://wa.link/gavlub'>
            <button type='submit' className='btn-buy-mouse-storm'>COMPRAR</button>
           </a>

            </div>
            <Footer/>
        </div>
    )
}
export default Storm