import './style.css'
import Header from '../../../../components/Header/header'
import Footer from '../../../../components/Footer'
import image1 from '../../../../images/produtos/teclado-dark-white.png'

export default function DarkWhite () {
    return(
        <div>
            <Header/>
            <div className='container-keyboard-dark-blue'>
            <h1 className='title-product-keyboard-dark-blue'>Teclado Mecânico Redragon</h1>
            <p className='name-product-keyboard-dark-white'> Dark Avenger Rainbow Lunar White</p>
            
            <div className='description-keyboard-dark-blue'>
                <p>Teclado Mecânico Redragon, Switch Red - K568WR (PT-Red).</p>
                <p>Aprimore seu desempenho nos jogos com o Dark Avenger K568 equipado com switch mecânico Red
                   de altíssima qualidade garante um tempo de resposta ágil para os mais exigentes gamers.<br/> 
                   Ativação Linear, Resistência Média, Sem Clique Audível.
                </p>   
            </div>

            <div className='discount-keyboard-dark-white'>
                <strong>-22%</strong>
            </div>
            <p className='price-keyboard-dark-blue'>R$269,99</p>
            <strong className='price-now-keyboard-dark-blue'>R$209,99</strong>
            <div className='parcelado-teclado-rainbow'>
                <p>R$ 236,13 - em até 10x</p>
            </div>

            <a target='_blank' href='https://wa.link/l3t9xe'>
                <button type='submit' className='btn-buy-keyboard-dark-blue'>COMPRAR</button>
            </a>

            <img src={image1} alt='1' className='product-keyboard-dark-white'/>
            </div>
            <Footer/>
        </div>
    )
}