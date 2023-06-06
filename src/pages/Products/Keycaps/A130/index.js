import './style.css'
import Header from '../../../../components/Header/header'
import Footer from '../../../../components/Footer'
import image from '../../../../images/produtos/keycaps-a130.png'

export default function A130 () {
    return(
        <div>
            <Header/>
            <div className='container-keycap-a107'>
                <h1 className='title-product-keycap-a130'>KIT KEYCAPS SCARAB</h1>
                <p className='name-product-keycap-a130'>Kit Completo de Teclas Redragon</p>
                
                <div className='description-keycap-a130'>
                    <p>Kit Completo de Teclas Redragon Scarab - A130. 
                        <h2>Características:</h2>
                    <p>- Keycaps Foscas na parte de baixo e pretas em cima.</p>
                    <p>- Compatível com Switches MX e similares.</p>
                    <p>- Confeccionados em plástico PTB para maior duração.</p>
                    <p>- Também são double-shot, o que ajudam a diminuir ruídos indesejados.</p>
                    </p>
                </div>

                <div className='discount-keycap-a130'>
                    <strong>-20%</strong>
                </div>
                <p className='price-keycap-a107'>R$89,99</p>
                <strong className='price-now-keycap-a107'>R$71,50</strong>
                <div className='parcelado-kit-a107'>
                    <p>R$ 75,58 - em até 2x</p>
                </div>

                <img src={image} alt='1' className='keycap-a130'/>

            <a target='_blank' href='https://wa.link/z5a8f6'>
                <button type='submit' className='btn-buy-keycap-a107'>COMPRAR</button>
            </a>

                </div>
                <Footer/>
        </div>
    )
}