import './style.css'
import Header from '../../../../../components/Header/header'
import Footer from '../../../../../components/Footer'
import image from '../../../../../images/produtos/gamdias-03.png'

export default function E3 () {
    return(
        <div>
            <Header/>
            <div className='container-hermes-e2'>
                <h1 className='title-product-hermes-e2'>TECLADO GAMER HERMES E3</h1>
                <p className='name-product-hermes-e3'> Gamdias Hermes E3 - Switch Brown</p>
                
                <div className='description-hermes-e2'>
                    <p>Teclado Gamer Gamdias Hermes E3 - Switch Brown. 
                        <h2>Características:</h2>
                    <p>- Keycaps feitas com o método double shot injection resultando em legendas duradouras.</p>
                    <p>- Layout 60% compacto para maior praticidade durante o transporte ou então maximizar o espaço disponível na mesa.</p>
                    <p>- Iluminação RGB por tecla individual.</p>
                    <p>- Cabo USB-C para USB-A removível.</p>
                    </p>
                </div>

                <div className='discount-hermes-e3'>
                    <strong>-12%</strong>
                </div>
                <p className='price-hermes-e2'>R$399,99</p>
                <strong className='price-now-hermes-e2'>R$349,99</strong>
                <div className='parcelado-teclado-e2'>
                    <p>R$ 393,56 - em até 10x</p>
                </div>

                <img src={image} alt='1' className='hermes-e3'/>

            <a target='_blank' href='https://wa.link/gwjkdu'>
                <button type='submit' className='btn-buy-hermes-e2'>COMPRAR</button>
            </a>

                </div>
                <Footer/>
        </div>
    )
}