import './style.css'
import Header from '../../../../components/Header/header'
import Footer from '../../../../components/Footer'
import image from '../../../../images/produtos/mouse_imperial.webp'

function Imperial () {
    return(
        <div>
            <Header/>

            <div className='container-imperial'>
            <h1 className='title-product-imperial'>MOUSE IMPERIAL</h1>
            <p className='name-product-imperial'>Mouse Gamer Imperial</p>
            
            <div className='description-mouse-imperial'>
                <p>Mouse Gamer Imperial, TDAGGER Preto - TGM310. 
                    <h2>Características:</h2>
                  <p>- Botão de disparos (um clique para três disparos).</p>
                  <p>- 8 Botões programáveis com um botão extra na lateral para atalhos e macros na ponta dos dedos.</p>
                  <p>- 7 efeitos de retroiluminação RGB trazendo mais brilho para seu setup.</p>
                </p>
            </div>

            <div className='discount-imperial-mouse'>
                <strong>-21%</strong>
            </div>
            <p className='price-mouse-imperial'>R$139,99</p>
            <strong className='price-now-mouse-imperial'>R$109,99</strong>
            <div className='parcelado-mouse-imperial'>
                <p>R$ 119,93 - em até 6x</p>
            </div>

            <img src={image} alt='1' className='mouse-imperial'/>

           <a target='_blank' href='https://api.whatsapp.com/send?phone=5574999089728&text=Ol%C3%A1%20Fulano%2C%20Estou%20interessado%20em%20comprar%20um%20produto%20que%20vi%20na%20sua%20loja%2C%20Mouse%20Gamer%20Imperial%2C%20TDAGGER%2C%20PTO-%20T-TGM310.%20Acredito%20que%20ele%20atender%C3%A1%20perfeitamente%20minhas%20necessidades.'>
            <button type='submit' className='btn-buy-mouse-imperial'>COMPRAR</button>
           </a>

            </div>
            <Footer/>
        </div>
    )
}
export default Imperial