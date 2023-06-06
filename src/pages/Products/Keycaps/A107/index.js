import './style.css'
import Header from '../../../../components/Header/header'
import Footer from '../../../../components/Footer'
import image from '../../../../images/produtos/keycaps-a107.png'

export default function A107 () {
    return(
        <div>
            <Header/>
            <div className='container-keycap-a107'>
                <h1 className='title-product-keycap-a107'>KIT KEYCAPS PRETO</h1>
                <p className='name-product-keycap-a107'>Kit Completo de Teclas</p>
                
                <div className='description-keycap-a107'>
                    <p>Kit Completo de Teclas Redragon Preto - A107. 
                        <h2>Características:</h2>
                    <p>- Método de impressão: Double Shot injection.</p>
                    <p>- Compatibilidade: Encaixe em cruz centralizada estilo Cherry MX e similares.</p>
                    <p>- Não compatível com switches Romer-G, Alps, Topre entre outros..</p>
                    <p>- Quantidade de teclas: 106</p>
                    </p>
                </div>

                <div className='discount-keycap-a107'>
                    <strong>-35%</strong>
                </div>
                <p className='price-keycap-a107'>R$99,99</p>
                <strong className='price-now-keycap-a107'>R$64,99</strong>
                <div className='parcelado-kit-a107'>
                    <p>R$ 68,70 - em até 2x</p>
                </div>

                <img src={image} alt='1' className='keycap-a107'/>

            <a target='_blank' href='https://wa.link/1me65r'>
                <button type='submit' className='btn-buy-keycap-a107'>COMPRAR</button>
            </a>

                </div>
                <Footer/>
        </div>
    )
}