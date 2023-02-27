import './style.css'
import Header from '../../../../components/Header/header'
import Footer from '../../../../components/Footer'
import MinosPreto from '../../../../images/produtos/headset-minos-preto.png'
import { Link } from 'react-router-dom'

function HeadsetMinos() {
    return(
        <div>
            <Header/>
            <div className='container-headset-minos'>
            <h1 className='title-product-headset-minos'>Headset Gamer</h1>
            <p className='name-product-headset-minos'>Headset Regragon Minos Preto H210</p>
            
            <div className='description-headset-minos'>
                   <h2>Características:</h2>
                <p> - Headset USB plug and play sem necessidade de drivers.</p>
                <p> - Iluminação vermelha representando a marca com elegância.</p>
                <p> - Cabo USB de 2 metros para um bom alcance, dando mais liberdade para o usuário.</p>   
            </div>

            <div className='discount-minos'>
                <strong>-10%</strong>
            </div>
            <p className='price-minos'>R$ 199,99</p>
            <strong className='price-now-minos'>R$ 179,99</strong>

            <a href='https://wa.link/x77c6y' target='_blank'>
                <button type='submit' className='btn-buy-headset-minos'>COMPRAR</button>
            </a>

            <Link to='/headset-minos-branco'>
                <button className='headset-minos-white' type='submit'></button>
            </Link>

            <img src={MinosPreto} alt='3' className='pg-product-headset-minos'/>

            <button className='headset-minos-black' type='submit'></button>
            
            </div>
            <Footer/>
        </div>
    )
}
export default HeadsetMinos