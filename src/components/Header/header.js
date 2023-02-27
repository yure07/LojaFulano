import './style.css'
import {Link} from 'react-router-dom'
import image1 from '../../images/lobby.png'

function Header() {
  return(
    <header className='header-container'>
      <div className='itens'>
        <a href='/' className='icon' id='home-icon'>HOME</a>
        <a href='/' className='info' id='home-header'>HOME </a>

        <a href='https://www.instagram.com/loja_dofulano/' target='_blank' className='icon' id='contact-icon'>PHONE</a>
        <a href='https://www.instagram.com/loja_dofulano/' target='_blank' className='info' id='contact-header'> CONTATO </a>

        <a href='/sobre' className='icon' id='about-icon'>info-circle</a>
        <a href='/sobre' className='info' id='about-header'> SOBRE </a>
      </div>

      <div className='img-lobby'>
        <Link to='/'>
        <img src={image1} alt='1' className='logo-title'/>
        </Link>
      </div> 

    </header>
  )
}
export default Header