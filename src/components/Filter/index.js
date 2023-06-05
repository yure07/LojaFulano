import './filter.css'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

export default function Filter () {

useEffect(()=>{
    
    let link = document.querySelectorAll('a');
    for (var i=0; i<link.length; i++) {
        link[i].removeAttribute("target");
    }

},[])

    return(
        <div className='container-filter'>
            {<ul>
                <li> <Link to={"/filter/mouses"} target='_blank'> Mouses </Link> </li> <hr/>
                <li> <Link to={"/filter/teclados"} target='_blank'> Teclados </Link> </li> <hr/>
                <li> <Link to={"/filter/headsets"} target='_blank'> Headsets </Link> </li> <hr/>
                <li> <Link to={"/filter/mousepads"} target='_blank'> Mousepads </Link> </li> <hr/>
                <li> <Link to={"/filter/gabinetes"} target='_blank'> Gabinetes </Link> </li> <hr/>
                <li> <Link to={"/filter/switches"} target='_blank'> Switches </Link> </li> <hr/>
                <li> <Link to={"/filter/cabo-teclado"} target='_blank'> Cabos para Teclado </Link> </li> <hr/>
                <li> <Link to={"/filter/kits"} target='_blank'> Kits </Link> </li> <hr/>
                <li> <Link to={"/filter/soundbar"} target='_blank'> SoundBar </Link> </li> <hr/>
            </ul>}
        </div>
    )
}