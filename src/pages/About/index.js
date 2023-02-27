import './style.css'
import Header from '../../components/Header/header'
import Footer from '../../components/Footer'

function Sobre () {
    return(
        <div>
            <Header/>
            <div className='about'>
                <h1>Como foi criada?</h1>
                <div className='created'>
                    <p>A loja do fulano foi criada por Victor Xavier, um entusiasta da tecnologia 
                       que viu uma oportunidade no mercado para fornecer produtos de alta qualidade
                       a preços acessíveis. Ele notou que muitas pessoas precisavam de acessórios 
                       para melhorar sua experiência com seus computadores, mas muitas vezes eram
                       confrontadas com opções caras e de baixa qualidade.
                       
                       <p>Ele decidiu mudar isso, procurando parcerias com fabricantes confiáveis
                       e selecionando cuidadosamente os melhores produtos para oferecer aos seus clientes.</p>

                       <p>A loja do fulano foi criada com o objetivo de fornecer periféricos acessíveis e confiáveis
                       para pessoas em todo o brasil.</p></p>  
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default Sobre