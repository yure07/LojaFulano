import './style.css'
import Header from '../../../../components/Header/header'
import Footer from '../../../../components/Footer'
import image from '../../../../images/produtos/gabinete-g25b.png'


function G25B () {
    return (
        <div>
            <Header/>
            <div className='container-gabinete'>
            <h1 className='title-product-mousepad-tokyo'>Gabinete Gamer</h1>
            <p className='name-product-gabinete'>Gabinete Gamer TDAGGER TGC-G25B Preto </p>
            
            <div className='description-gabinete'>
                <p> <p>Gabinete Gamer T-DAGGER G25B, Mid Tower, RGB, Preto.</p> Gabinete mid tower de alto desempenho 
                com painel lateral de acrílico para mostrar o interior de seu equipamento. 
                Com um painel frontal texturizado com entradas de ar geométricas no estilo mesh com iluminação RGB. 
                </p>
            </div>

            <div className='discount-gabinete'>
                <strong>-18%</strong>
            </div>
            <p className='price-mousepad-tokyo'>R$269,99</p>
            <strong className='price-now-mousepad-tokyo'>R$219,99</strong>

            <img src={image} alt='1' className='product-gabinete'/>
           <a href='https://wa.link/dke14s' target='_blank'>
            <button type='submit' className='buy-buy'>COMPRAR</button>
           </a>
            </div>
          <Footer/>
        </div>
    )
}
export default G25B