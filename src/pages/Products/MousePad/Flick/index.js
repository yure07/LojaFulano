import './style.css'
import Header from '../../../../components/Header/header'
import Footer from '../../../../components/Footer'
import image1 from '../../../../images/produtos/mousepad-redragon-flick.png'

export default function Flick () {
    return(
        <div>
            <Header/>
            <div className='container-mousepad-flick'>
            <h1 className='title-product-mousepad-kunlun'>Mousepad Redragon</h1>
            <p className='name-product-mousepad-flick'>Mousepad Redragon Flick L Preto. </p>
            
            <div className='description-mousepad-kunlun'>
                <p> <p>Mousepad Redragon Flick L, Speed, Preto - P031.</p> O Mousepad Redragon Flick conta com um 
                tamanho de 450x400mm. Tecido de fibras de seda entrelaçadas que garante o máximo deslizamento, 
                fundo emborrachado, antiderrapante e adaptável a qualquer superfície,
                com bordas costuradas, com pesponto duplo, para evitar que se desfiem.
                </p>
            </div>

            <div className='discount-mousepad-flick'>
                <strong>-20%</strong>
            </div>
            <p className='price-mousepad-kunlun'>R$99,99</p>
            <strong className='price-now-mousepad-kunlun'>R$79,99</strong>
            <div className='parcelado-mousepad-kunlun'>
                <p>R$ 84,52 - em até 2x</p>
            </div>

           <a target='_blank' href='https://wa.link/75mhmr'>
            <button type='submit' className='btn-buy-mousepad-kunlun'>COMPRAR</button>
           </a>

            <img src={image1} alt='1' className='product-mousepad-flick'/>

            </div>
            <Footer/>
        </div>
    )
}