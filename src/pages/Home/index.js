import './home.css' 

import Header from '../../components/Header/header'
import Filter from '../../components/Filter'
import Background from '../../components/Background'
import Catalog from '../../components/Catalog'
import Footer from '../../components/Footer'

function Home() {
    return(
        <div className ='container'>
            <div className='header'>
             <Header/>
             <Filter/>
            </div>
            <Background/> 
            <Catalog/>
            <Footer/>    
            
        </div>
    )
}
export default Home