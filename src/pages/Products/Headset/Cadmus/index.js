import './style.css'
import Header from '../../../../components/Header/header'
import Footer from '../../../../components/Footer'
import image from '../../../../images/produtos/headset-cadmus.png'

export default function HeadsetCadmus() {
    return(
        <div>
            <Header/>
            <div className='container-headset-hebe'>
            <h1 className='title-product-headset-hebe'>Headset Gamer</h1>
            <p className='name-product-headset-cadmus'>Headset Redragon Cadmus RGB H370</p>
            
            <div className='description-headset-hebe'>
                <p>Fones de ouvido com som surround 7.1 alta imersão.</p>
                   <h2>Características:</h2>
                <p> - Design com alça de cabeça dupla.</p>
                <p> - Frequência de resposta: 20 a 20KHz.</p>
                <p> - O Headset utiliza uma unidade ativa com tamanho maior de 53 mm para
                     reforçar os graves e toda a faixa de alcance vocal, com som preciso e fiel.</p>   
            </div>

            <div className='discount-cadmus'>
                <strong>-11%</strong>
            </div>
            <p className='price-hebe'>R$ 259,99</p>
            <strong className='price-now-hebe'>R$ 229,99</strong>
            <div className='parcelado-headset'>
                <p>R$ 258,62 - em até 10x</p>
            </div>

            <img src={image} alt='1' className='headset-product-cadmus'/>
            
            <a target='_blank' href='https://wa.link/89rgxy'>
                <button type='submit' className='btn-buy-headset-hebe'>COMPRAR</button>
            </a>

            </div>
            <Footer/>
        </div>
    )
}
