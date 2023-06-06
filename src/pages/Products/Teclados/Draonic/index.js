import './style.css'
import Header from '../../../../components/Header/header'
import Footer from '../../../../components/Footer'
import image1 from '../../../../images/produtos/teclado-draconic.png'

export default function Draonic () {
    return(
        <div>
            <Header/>
            <div className='container-keyboard-draonic'>
            <h1 className='title-product-keyboard'>Teclado Mecânico Redragon</h1>
            <p className='name-product-keyboard-draonic'>Redragon Draconic Pro Branco e Rosa</p>
            
            <div className='description-keyboard-draonic'>
                <p>Teclado Gamer Mecânico
                Redragon Draconic Pro Branco e Rosa - Wireless.</p>
                <p>Com um layout exclusivo ABNT2 60%, o Draconic Pro é feito com o público brasileiro em mente.</p>   
                <h2>Características:</h2>
                <p>- Keycaps: Double Shot Injection.</p>
                <p>- Conectividade: USB Tipo C,  Bluetooth, 2,4G wireless. </p>
                <p>- Cabo removível: Sim.</p>
                <p>- Iluminação: Redragon Chroma.</p>
                <strong>ATENÇÃO: PARA USO DA FUNCIONALIDADE BLUETOOTH SE FAZ NECESSÁRIO QUE O EQUIPAMENTO JÁ POSSUA ESSA CONEXÃO NATIVA.O DRACONIC PRO NÃO ACOMPANHA ADAPTADOR PARA CONEXÃO BLUETOOTH. </strong>
            </div>

            <div className='discount-keyboard-draonic'>
                <strong>-7%</strong>
            </div>
            <p className='price-keyboard-draonic'>R$379,99</p>
            <strong className='price-now-keyboard-draonic'>R$349,99</strong>
            <div className='parcelado-teclado-rainbow'>
                <p>R$ 393,36 - em até 10x</p>
            </div>

           <a target='_blank' href='https://wa.link/8cn07t'>
            <button type='submit' className='btn-buy-keyboard-draonic'>COMPRAR</button>
           </a>
                <img src={image1} alt='1' className='product-keyboard-draonic'/>

            </div>
            <Footer/>
        </div>
    )
}
