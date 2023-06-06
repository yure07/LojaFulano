import './style.css'
import Header from '../../../../../components/Header/header'
import Footer from '../../../../../components/Footer'
import image from '../../../../../images/produtos/switch-vintage.png'

export default function Vintage () {
    return(
        <div>
            <Header/>
            <div className='container-keycap-a107'>
                <h1 className='title-product-keycap-a107'>KIT SWITCH AKKO</h1>
                <p className='name-product-switch-akko-rose'>Switch Para Teclado Mecânico</p>
                
                <div className='description-switch-akko-rose'>
                    <p>Kit Switch Akko Vintage White - Kit com 45. 
                        <h2>Características:</h2>
                    <p>- Tipo: Linear.</p>
                    <p>- Força de Atuação: 43gf ± 5gf.</p>
                    <p>- Percurso Total: 3,0 ± 0,3 mm.</p>
                    <p>- Pré-percurso: 1,0 ± 0,6 mm.</p>
                    </p>
                </div>

                <div className='discount-switch-akko-rose'>
                    <strong>-12%</strong>
                </div>
                <p className='price-switch-akko-rose'>R$85,99</p>
                <strong className='price-now-switch-akko-rose'>R$74,99</strong>
                <div className='parcelado-switches'>
                    <p>R$ 79,27 - em até 2x</p>
                </div>

                <img src={image} alt='1' className='switch-akko-rose'/>

            <a target='_blank' href='https://wa.link/pixvjq'>
                <button type='submit' className='btn-buy-switch-akko-rose'>COMPRAR</button>
            </a>

                </div>
                <Footer/>
        </div>
    )
}

