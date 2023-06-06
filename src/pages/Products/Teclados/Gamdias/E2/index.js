import './style.css'
import Header from '../../../../../components/Header/header'
import Footer from '../../../../../components/Footer'
import image from '../../../../../images/produtos/gamdias-02.png'

export default function E2 () {
    return(
        <div>
            <Header/>
            <div className='container-hermes-e2'>
                <h1 className='title-product-hermes-e2'>TECLADO GAMER HERMES E2</h1>
                <p className='name-product-hermes-e2'> Gamdias Hermes E2 - Switch Blue</p>
                
                <div className='description-hermes-e2'>
                    <p>Teclado Gamer Gamdias Hermes E2 - Switch Blue. 
                        <h2>Características:</h2>
                    <p>- Switches Certificados da Gamdias (Huano Azul: Acionamento leve, com feedback tátil e sonoro).</p>
                    <p>- Sistema N*Key Rollover para Anti-Ghosting em 100% das Teclas, com 2 macros dedicadas e 6 perfis para até 12 configurações.</p>
                    <p>- Construção Robusta em Plástico ABS para maior Durabilidade.</p>
                    <p>- Layout exclusivo para o mercado Brasileiro em ABNT2.</p>
                    </p>
                </div>

                <div className='discount-hermes-e2'>
                    <strong>-20%</strong>
                </div>
                <p className='price-hermes-e2'>R$199,99</p>
                <strong className='price-now-hermes-e2'>R$159,99</strong>
                <div className='parcelado-teclado-e2'>
                    <p>R$ 174,45 - em até 6x</p>
                </div>

                <img src={image} alt='1' className='hermes-e2'/>

            <a target='_blank' href='https://wa.link/lqflzo'>
                <button type='submit' className='btn-buy-hermes-e2'>COMPRAR</button>
            </a>

                </div>
                <Footer/>
        </div>
    )
}