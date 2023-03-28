import './style.css'
import Header from '../../../../components/Header/header'
import Footer from '../../../../components/Footer'
import image from '../../../../images/produtos/keycap-oem.png'

export default function Akko () {
    return(
        <div>
            <Header/>
            <div className='container-keycap-a107'>
                <h1 className='title-product-keycap-a130'>KIT KEYCAPS AKKO</h1>
                <p className='name-product-keycap-akko'>Kit Completo de Teclas Akko</p>
                
                <div className='description-keycap-akko'>
                    <p>Keycaps Profile OEM Retro R2 (38-Key). 
                        <h2>Características:</h2>
                    <p>- Keycaps Foscas na parte de baixo e pretas em cima.</p>
                    <p>- Compatível com Switches MX e similares.</p>
                    <p>- Confeccionados em plástico PTB para maior duração.</p>
                    <p>- Também são double-shot, o que ajudam a diminuir ruídos indesejados.</p>
                    </p>
                </div>

                <div className='discount-keycap-akko'>
                    <strong>-28%</strong>
                </div>
                <p className='price-keycap-a107'>R$69,99</p>
                <strong className='price-now-keycap-a107'>R$49,99</strong>

                <img src={image} alt='1' className='keycap-a130'/>

            <a target='_blank' href='https://wa.link/mw6wql'>
                <button type='submit' className='btn-buy-keycap-a107'>COMPRAR</button>
            </a>

                </div>
                <Footer/>
        </div>
    )
}