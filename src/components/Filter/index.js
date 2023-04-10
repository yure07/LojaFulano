import './filter.css'
import { Link } from 'react-router-dom'

export default function Filter () {
    return(
        <div className='container-filter'>
            <ul>
                <li> <Link to='/filter/mouses'> Mouses </Link> </li> <hr/>
                <li> <Link to='/filter/teclados'> Teclados </Link> </li> <hr/>
                <li> <Link to='/filter/headsets'> Headsets </Link> </li> <hr/>
                <li> <Link to='/filter/mousepads'> Mousepads </Link> </li> <hr/>
                <li> <Link to='/filter/gabinetes'> Gabinetes </Link> </li> <hr/>
                <li> <Link to='/filter/switches'> Switches </Link> </li> <hr/>
                <li> <Link to='/filter/cabo-teclado'> Cabos para Teclado </Link> </li> <hr/>
                <li> <Link to='/filter/kits'> Kits </Link> </li> <hr/>
                <li> <Link to='/filter/soundbar'> SoundBar </Link> </li> <hr/>
            </ul>
        </div>
    )
}