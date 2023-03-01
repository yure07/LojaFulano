import './style.css'
import image1 from '../../images/Bg-1.jpg'
import image2 from '../../images/BG-2.jpg'
import image3 from '../../images/BG-4.jpg'
import image4 from '../../images/BG-3.jpg'

function Background () {
    return(
      <div className='background-container-main'>
        <div className='galery'>
              <div className='pictures'> 
                <img src={image1} alt='1' className='carousel'/>
                <img src={image2} alt='2' className='carousel'/>
                <img src={image3} alt='3' className='carousel'/>
                <img src={image4} alt='4' className='carousel'/>
                <img src={image1} alt='5' className='carousel'/>
              </div>
            </div>
      </div>
    )
}
export default Background