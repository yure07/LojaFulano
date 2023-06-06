import './style.css'
import Header from '../../../components/Header/header'
import Footer from '../../../components/Footer'
import image from '../../../images/produtos/sound-bar.png'


export default function SoundBar () {
    return(
        <div>
            <Header/>
            <div className='container-keycap-a107'>
                <h1 className='title-soundbar'>SOUNDBAR ADIEMUS</h1>
                <p className='name-product-soundbar'>Caixa de Som Soundbar - GS560</p>
                
                <div className='description-soundbar'>
                    <p>Caixa de Som SoundBar Gamer Adiemus - GS560. 
                        <h2>Características:</h2>
                    <p>- Potência: 6W RMS</p>
                    <p>- Com 4 diferentes modos de retroiluminação incluem iluminação LED dinâmica e estática.</p>
                    <p>- Cerca de 40,64 cm de tamanho compacto adequado para o seu sistema de áudio.</p>
                    <p>- Alimentado por USB com áudio de 3,5 mm e cabos de microfone. Além de possuir a Frequência de 150Hz ~ 20kHz e a elação sinal-ruído de até 65db.</p>
                    </p>
                </div>

                <div className='discount-soundbar'>
                    <strong>-13%</strong>
                </div>
                <p className='price-keycap-a107'>R$149,99</p>
                <strong className='price-now-keycap-a107'>R$129,99</strong>
                <div className='parcelado-kit-a107'>
                    <p>R$ 41,74 - em até 6x</p>
                </div>

                <img src={image} alt='1' className='product-soundbar'/>

            <a target='_blank' href='https://wa.link/3wlgdz'>
                <button type='submit' className='btn-buy-keycap-a107'>COMPRAR</button>
            </a>

                </div>
                <Footer/>
        </div>
    )
}