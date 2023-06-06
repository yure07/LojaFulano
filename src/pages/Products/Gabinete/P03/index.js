import './style.css'
import Header from '../../../../components/Header/header'
import Footer from '../../../../components/Footer'
import image from '../../../../images/produtos/gabinete-p03.png'


export default function P03 () {
    return (
        <div>
            <Header/>
            <div className='container-gabinete-p03'>
            <h1 className='title-product-mousepad-tokyo'>Gabinete Gamer</h1>
            <p className='name-product-gabinete-p03'>Gabinete T-DAGGER TGC-P03 Branco </p>
            
            <div className='description-gabinete'>
                <p> <p>Gabinete Gamer T-DAGGER P03, Mid Tower, RGB, Branco.</p> 
                <h2>Características:</h2>
                <p>- Painel frontal texturizado e com iluminação RGB integrada.</p> 
                <p>- Janela lateral em acrílico para exibir os componentes internos.</p>
                <p>- Filtro de poeira magnético instalado no topo do gabinete.</p>
                <p>- Aberturas laterais no painel frontal para a entrada de ar resultando
                     em um bom fluxo de ar e ventilação dos componentes internos.</p>
                </p>
            </div>

            <div className='discount-gabinete-p03'>
                <strong>-13%</strong>
            </div>
            <p className='price-mousepad-tokyo'>R$219,99</p>
            <strong className='price-now-mousepad-tokyo'>R$189,99</strong>
            <div className='parcelado-gabinete'>
                <p>R$ 213,64 - em até 10x</p>
            </div>

            <img src={image} alt='1' className='product-gabinete-p03'/>
           <a target='_blank' href='https://wa.link/yfo645'>
            <button type='submit' className='buy-buy'>COMPRAR</button>
           </a>
            </div>
          <Footer/>
        </div>
    )
}
