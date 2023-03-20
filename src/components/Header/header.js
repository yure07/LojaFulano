import './style.css'
import {Link} from 'react-router-dom'

import image1 from '../../images/lobby.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faInfoCircle, faPhoneFlip} from '@fortawesome/free-solid-svg-icons'

function Header() {
  return(
    <header className='header-container'>
      
    
      <div className='itens'>
        <a href='/' className='info' id='home-header'>
          <i><FontAwesomeIcon icon={faHome} /></i>
        HOME
        </a>

        <a href='https://www.instagram.com/loja_dofulano/' target='_blank' className='info' id='contact-header'> 
        <i><FontAwesomeIcon icon={faPhoneFlip} /></i>
        CONTATO 
        </a>


        <a href='/sobre' className='info' id='about-header'> 
        <i><FontAwesomeIcon icon={faInfoCircle} /></i>
        SOBRE 
        </a>
      </div>
    

      <div className='img-lobby'>
        <Link to='/'>
        <img src={image1} alt='2' className='logo-title'/>
        </Link>
      </div> 

    </header>
  )
}
export default Header