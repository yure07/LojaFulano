import './geral.css'
import { useContext } from 'react'
import { useParams, Link } from "react-router-dom"
import { DataContext } from '../../context/Dataprovider'
import Header from "../../components/Header/header"
import Footer from "../../components/Footer"

export default function Geral (){
    const value = useContext(DataContext) 
    const params = useParams()
    const [produtos] = value.produtos 
    return(
        <>
            <Header/>

            <section className='container-filter2'>
            {produtos.map((produto)=>{
                if (produto.name === params.name){
                    return(
                    <div className='card-product-filter' key={produto.id}>
                        <Link to={`/${produto.link}`} id='link'>
                            <img src={produto.image} alt={produto.name} className={produto.class}/>
                            <strong>{produto.title}</strong>
                            <p>{produto.description}</p>
                            <div className='discount-filter'>
                                <strong>{produto.discount}</strong>
                            </div>
                            <p>R$ {produto.price}</p>
                            <p>R$ {produto.pricenow}</p>
                        </Link>
                    </div>
                    )
                }
            })
            
            
            }
            </section>

            <Footer/>
        </>
    )
}