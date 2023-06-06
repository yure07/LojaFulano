import './style.css'
import Header from '../../../../components/Header/header'
import Footer from '../../../../components/Footer'
import image1 from '../../../../images/produtos/teclado-optico.png'

export default function Optico () {
    return(
        <div>
            <Header/>
            <div className='container-keyboard-magic'>
            <h1 className='title-product-keyboard'>Teclado Óptico Redragon</h1>
            <p className='name-product-keyboard-magic'>Magic-Wand Pro RGB - Branco</p>
            
            <div className='description-keyboard-magic'>
                <p>Teclado Gamer Óptico
                    Magic-Wand Pro Switch Red ABNT2.
                    <h2>Características:</h2>
                    <p> - Sistema Anti-Ghosting N*Key Rollover.</p>
                    <p>- 18 efeitos coloridos de Iluminação RGB além de Modo Programável de Iluminação</p>
                    <p>- Conector USB Banhado a Ouro.</p>
                    <p>- Apoio de pulso magnético incluso.</p>
                    <p>- Kit de ferramentas de remoção mais 5 switches adicionais.</p>
                </p>

            </div>

            <div className='discount-keyboard-magic'>
                <strong>-7%</strong>
            </div>
            <p className='price-keyboard-draonic'>R$349,99</p>
            <strong className='price-now-keyboard-magic'>R$324,99</strong>
            <div className='parcelado-teclado-magic'>
                <p>R$ 365,44 - em até 10x</p>
            </div>

           <a target='_blank' href='https://wa.link/p20p2x'>
            <button type='submit' className='btn-buy-keyboard-magic'>COMPRAR</button>
           </a>
                <img src={image1} alt='1' className='product-keyboard-magic'/>

            </div>
            <Footer/>
        </div>
    )
}