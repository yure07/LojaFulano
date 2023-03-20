import './style.css'
import image1 from '../../images/lobby.png'
import image2 from '../../images/formas-pagamento.png'
import image3 from '../../images/google-safe-browsing.png'

import discordIcon from '../../images/sociais/discord.png'
import instagramIcon from '../../images/sociais/instagram.png'
import zapIcon from '../../images/sociais/zap.png' 

function Footer () {
    return(
        <footer className='footer-container'>
          
          <div className='images'>
           <img src={image1} alt='1' className='menu'/>
           <img src={image2} alt='2' className='payments'/>
           <a target='_blank' href='https://transparencyreport.google.com/safe-browsing/search?url=https:%2F%2Flojadofulano.com&hl=pt_BR'>
           <img src={image3} alt='3' className='securities'/>
           </a>
           
           <div className='column'>

            <a target='_blank' href='https://discord.gg/BhqdwJtvNg'>
              <img src={discordIcon} alt='4' className='discord-icon'/>
            </a>

            <a href='https://www.instagram.com/loja_dofulano/' target='_blank'>
              <img src={instagramIcon} alt='5' className='contact'/>
            </a>

            <a target='_blank' href='https://wa.link/3twz30'>
              <img src={zapIcon} alt='6' className='contact'/>
            </a>
           </div>
          </div>

          <div className='credits'>
          <p>DESIGN POR: <a href='http://vstectity.com/' target='_blank'><strong>VSTECTITY</strong></a></p>
          <p>PROGRAMAÇÃO POR: <a href='https://yurerafael.dev/' target='_blank'> <strong>YURE RAFAEL</strong></a></p>
          </div>
        </footer>
    )
}
export default Footer