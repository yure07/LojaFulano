import Header from '../../../components/Header/header'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../../components/Footer'


export default function Gabinetes () {
    const [produtos, setProdutos] = useState([])

        const requisition = async function () {
            await axios.get('./../data/gabinetes.json')
            .then((response)=>{
                setProdutos(response.data)
            })
            .catch(()=>{
                console.log('Erro na requisição do arquivo JSON')
            })
        }
        useEffect(()=>{
            requisition()
        },[])
        
    return(
        <>
            <Header/>
            <div className='catalog2'> 
         <div className='card-products-container'>

        {produtos.map((produto)=>{
          return(
          <div className='card-product' key={produto.id}> 
          <Link to={produto.link}>
          <img src={produto.imagem} alt='1' className={produto.class}/>
          <p className='product-name'>{produto.name}</p>
          <p className='info-product'>{produto.description}</p>
          <div className='discount'>
            <strong>{produto.discount}</strong>
          </div>
          <p className='price'>R$ {produto.price}</p>
          <strong className='price-now'>R$ {produto.pricenow}</strong>
          </Link>
          </div>
          )
        })}
    
          </div>
         </div>
            <Footer/>
        </>
    )
}