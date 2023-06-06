import './style.css'
import image from '../../../images/produtos/mousepad-mouse.png'
import Header from '../../../components/Header/header'
import Footer from '../../../components/Footer'


function KitMousePad () {
    return(
        <div>
            <Header/>
            <div className='container-headset-hebe'>
            <h1 className='title-product-kit-mouse'>KIT MOUSE E MOUSEPAD</h1>
                <p className='name-product-kit-mouse'>M607-BA Kit mouse e mousepad Redragon P003</p>
                
                <div className='description-kit-mouse'>
                    <p>Kit Mouse e Mousepad Redragon - P003.
                        <h2>Características:</h2> 
                    <p>Equipado com o preciso sensor Pixart PAW3212 tendo 7200 de DPI o Mouse vem com Iluminação RGB Redragon Chroma Mk.II</p>
                    <p>O MousePad traz uma estampa minimalista com a logo da marca no lado direito e bordas costuradas em vermelho e 
                        com tamanho estendido podendo ser utilizado como base para o teclado e mouse.</p>
                    </p>
                </div>

                <div className='discount-kit-mouse'>
                    <strong>-15%</strong>
                </div>
                <p className='price-kit-mouse'>R$189,99</p>
                <strong className='price-now-kit-mouse'>R$159,99</strong>
                <div className='parcelado-kit'>
                    <p>R$ 174,45 - em até 6x</p>
                </div>
            
                <img src={image} alt='1' className='kit-product'/>
                
                

            <a target='_blank' href='https://wa.link/y4kd8d'>
                <button type='submit' className='btn-buy-kit-mouse'>COMPRAR</button>
            </a>

                </div>

            <Footer/>
        </div>
    )
}

export default KitMousePad