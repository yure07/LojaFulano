import './style.css'
import Header from '../../../../components/Header/header'
import Footer from '../../../../components/Footer'
import image from '../../../../images/produtos/kit-tactile.png'

export default function Redragon () {
    return(
        <div>
            <Header/>
            <div className='container-keycap-a107'>
                <h1 className='title-product-keycap-a107'>KIT SWITCH TACTILE</h1>
                <p className='name-product-switch-redragon'>Switch Para Teclado Mecânico - A113B</p>
                
                <div className='description-keycap-a107'>
                    <p>Kit Switch Redragon Tactile - A113B. 
                        <h2>Características:</h2>
                    <p>- Durabilidade: 50 milhões.</p>
                    <p>- Força de Atuação: 40 gf ± 10gf.</p>
                    <p>- Percurso Total: 4,0 ± 0,4 mm.</p>
                    <p>- 24x Switch para Teclado Mecânico Redragon Tactile.</p>
                    </p>
                </div>

                <div className='discount-switch-redragon'>
                    <strong>-20%</strong>
                </div>
                <p className='price-keycap-a107'>R$89,99</p>
                <strong className='price-now-keycap-a107'>R$71,50</strong>
                <div className='parcelado-kit-a107'>
                    <p>R$ 75,58 - em até 2x</p>
                </div>

                <img src={image} alt='1' className='switch-redragon'/>

            <a target='_blank' href='https://wa.link/3vzbo6'>
                <button type='submit' className='btn-buy-keycap-a107'>COMPRAR</button>
            </a>

                </div>
                <Footer/>
        </div>
    )
}

