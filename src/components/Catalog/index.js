import './style.css'

import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

function Catalog() {
  const [produtos, setProdutos] = useState([])

  const requisition = async function () {
    await axios.get('../data/db.json')
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
        <div className='catalog'> 
         <div className='cards-products-container'>

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
    )
}
export default Catalog