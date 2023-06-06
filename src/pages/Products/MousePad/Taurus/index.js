import './style.css'
import Header from "../../../../components/Header/header"
import Footer from "../../../../components/Footer"
import image1 from '../../../../images/produtos/mousepad-redragon-taurus.webp'

export default function Taurus () {
    return(
        <div>
            <Header/>
            <div className='container-mousepad-taurus'>
            <h1 className='title-product-mousepad-kunlun'>Mousepad Redragon</h1>
            <p className='name-product-mousepad-taurus'>Mousepad Redragon EXT Taurus Speed </p>
            
            <div className='description-mousepad-kunlun'>
                <p> <p>Mousepad Redragon Taurus, Speed - P018</p> O Mousepad Redragon Taurus conta com um 
                tamanho de 930x300mm. As bordas costuradas evitam o desgaste e protegem contra o descascamento da superfície, além de 
                ser grande o suficiente para caber tanto, mouse, teclado de jogos e outros itens que você gosta de manter em sua mesa,
                e sua superfície super fina e de alta densidade é à prova d'água, lavável e fácil de limpar
                </p>
            </div>

            <div className='discount-mousepad-taurus'>
                <strong>-27%</strong>
            </div>
            <p className='price-mousepad-kunlun'>R$89,99</p>
            <strong className='price-now-mousepad-kunlun'>R$64,99</strong>
            <div className='parcelado-mousepad-taurus'>
                <p>R$ 68,70 - em até 2x</p>
            </div>

           <a target='_blank' href='https://wa.link/rh96bj'>
            <button type='submit' className='btn-buy-mousepad-kunlun'>COMPRAR</button>
           </a>

            <img src={image1} alt='1' className='product-mousepad-taurus'/>

            </div>
            <Footer/>
        </div>
    )
}