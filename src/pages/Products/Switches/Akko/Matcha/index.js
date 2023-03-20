import './style.css'
import Header from '../../../../../components/Header/header'
import Footer from '../../../../../components/Footer'
import image from '../../../../../images/produtos/switch-matcha.png'

export default function Matcha () {
    return(
        <div>
            <Header/>
            <div className='container-keycap-a107'>
                <h1 className='title-product-keycap-a107'>KIT SWITCH AKKO</h1>
                <p className='name-product-switch-akko-rose'>Switch Para Teclado Mecânico</p>
                
                <div className='description-switch-akko-rose'>
                    <p>Kit Switch Akko Matcha Green - Kit com 45. 
                        <h2>Características:</h2>
                    <p>- Tipo: Linear.</p>
                    <p>- Força de Atuação: 50gf ± 5gf.</p>
                    <p>- Percurso Total: 4,0 ± 0,4 mm.</p>
                    <p>- Pré-percurso: 2,0 ± 0,4 mm.</p>
                    </p>
                </div>

                <div className='discount-switch-akko-rose'>
                    <strong>-20%</strong>
                </div>
                <p className='price-switch-akko-rose'>R$89,99</p>
                <strong className='price-now-switch-akko-rose'>R$71,99</strong>

                <img src={image} alt='1' className='switch-akko-rose'/>

            <a target='_blank'>
                <button type='submit' className='btn-buy-switch-akko-rose'>COMPRAR</button>
            </a>

                </div>
                <Footer/>
        </div>
    )
}

