import './style.css'
import Header from "../../../../components/Header/header"
import Footer from "../../../../components/Footer"
import image1 from '../../../../images/produtos/mousepad-kunlun.png'

export default function Kunlun () {
    return(
        <div>
            <Header/>
            <div className='container-mousepad-kunlun'>
            <h1 className='title-product-mousepad-kunlun'>Mousepad Redragon</h1>
            <p className='name-product-mousepad-kunlun'>Mousepad Redragon Kunlun Preto </p>
            
            <div className='description-mousepad-kunlun'>
                <p> <p>Mousepad Redragon KUNLUN, Control, Preto - P005A.</p> O Mousepad Redragon Kunlun conta com um 
                tamanho de 700x350mm. Feito de pano de seda para garantir que o mouse se mova perfeitamente e 
                bordas com costura reforçada para durabilidade muito superior aos Mousepads convencionais, além
                do seu design único.
                </p>
            </div>

            <div className='discount-mousepad-kunlun'>
                <strong>-25%</strong>
            </div>
            <p className='price-mousepad-kunlun'>R$119,99</p>
            <strong className='price-now-mousepad-kunlun'>R$89,99</strong>
            <div className='parcelado-mousepad-kunlun'>
                <p>R$ 95,13 - em até 2x</p>
            </div>

           <a target='_blank' href='https://wa.link/ojjy1v'>
            <button type='submit' className='btn-buy-mousepad-kunlun'>COMPRAR</button>
           </a>

            <img src={image1} alt='1' className='product-mousepad-kunlun'/>

            </div>
            <Footer/>
        </div>
    )
}