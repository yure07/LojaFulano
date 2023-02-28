import './style.css'
import Header from '../../../../components/Header/header'
import Footer from '../../../../components/Footer'
import image from '../../../../images/produtos/gabinete-g28b.png'

function G28B () {
    return (
        <div>
            <Header/>
            <div className='container-gabinete'>
            <h1 className='title-product-mousepad-tokyo'>Gabinete Gamer</h1>
            <p className='name-product-gabinete'>Gabinete Gamer TDAGGER TGC-G28B Preto </p>
            
            <div className='description-gabinete'>
                <p> <p>Gabinete Gamer T-DAGGER G28B RGB, Lateral Acrílico Preto.</p> 
                       Gabinete Mid Tower com Painel frontal de metal,
                       Iluminação RGB no painel frontal e Janela lateral de acrílico.
                       É perfeito para quem procura um gabinete
                       espaçoso para ótimas configurações de montagem, sem deixar de lado uma ótima aparência.
                </p>
            </div>

            <div className='discount-gabinete'>
                <strong>-18%</strong>
            </div>
            <p className='price-mousepad-tokyo'>R$269,99</p>
            <strong className='price-now-mousepad-tokyo'>R$219,99</strong>

            <img src={image} alt='1' className='product-gabinete'/>

           <a href='https://wa.link/py0kc4' target='_blank'>
            <button type='submit' className='buy-buy'>COMPRAR</button>
           </a>
            </div>
          <Footer/>
        </div>
    )
}
export default G28B