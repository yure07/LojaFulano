import './style.css'
import Header from '../../../../components/Header/header'
import Footer from '../../../../components/Footer'
import image1 from '../../../../images/produtos/teclado-dark-260.png'

export default function DarkRed () {
    return(
        <div>
            <Header/>
            <div className='container-keyboard-dark-blue'>
            <h1 className='title-product-keyboard-dark-blue'>Teclado Mecânico Redragon</h1>
            <p className='name-product-keyboard-dark-blue'> Dark Avenger Rainbow</p>
            
            <div className='description-keyboard-dark-blue'>
                <p>Teclado Mecânico Redragon, Switch Red - K568WR (PT-Red).</p>
                <p> O teclado Dark Avenger é a definição da qualidade e desempenho em teclados mecânicos,
                trazendo o Layout ABNT2 e o Switch Outemu MK2 Red e com
                construção robusta em plástico ABS para maior Durabilidade e 
                Keycaps Double Shot Injection.</p>   
            </div>

            <div className='discount-keyboard-dark-red'>
                <strong>-13%</strong>
            </div>
            <p className='price-keyboard-dark-red'>R$299,99</p>
            <strong className='price-now-keyboard-dark-blue'>R$259,99</strong>
            <div className='parcelado-teclado-rgb'>
                <p>R$ 292,35 - em até 10x</p>
            </div>

            <a target='_blank' href='https://wa.link/jqgada'>
                <button type='submit' className='btn-buy-keyboard-dark-blue'>COMPRAR</button>
            </a>

            <img src={image1} alt='1' className='product-keyboard-dark-red'/>
            </div>
            <Footer/>
        </div>
    )
}