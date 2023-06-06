import './style.css'
import Header from '../../../../components/Header/header'
import Footer from '../../../../components/Footer'
import image from '../../../../images/produtos/mouse-storm-preto.png'

export default function StormPro () {
    return (
        <div>
            <Header/>

            <div className='container-storm'>
            <h1 className='title-product-redragon'>MOUSE REDRAGON</h1>
            <p className='name-product-storm-pro'>Mouse Redragon Storm Pro Wireless Preto</p>
            
            <div className='description-mouse-storm'>
                <p>Storm Pro RGB Preto - sem fio. 
                 <h2> Características: </h2>
                  <p>- DPI: Até 16000 DPI.</p>
                  <p>- Botões Programáveis: 8.</p>
                  <p>- O mouse se desativará em oito minutos 
                    se não houver qualquer operação ou se você desligar o computador ou desconectar o receptor USB.
                    Para reativá-lo, clique qualquer bo9ão, exceto os botões de DPI+ e DPI-.</p>
                </p>
            </div>

            <div className='discount-storm-pro'>
                <strong>-11%</strong>
            </div>
            <p className='price-mouse-storm-pro'>R$269,99</p>
            <strong className='price-now-mouse-storm'>R$239,99</strong>
            <div className='parcelado-mouse'>
                <p>R$ 269,86 - em até 10x</p>
            </div>

            <img src={image} alt='1' className='mouse-storm-pro' />

           <a target='_blank' href='https://wa.link/092crd'>
            <button type='submit' className='btn-buy-mouse-storm'>COMPRAR</button>
           </a>

            </div>
            <Footer/>
        </div>
    )
}
