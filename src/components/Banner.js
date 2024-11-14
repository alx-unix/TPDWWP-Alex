import '../styles/Banner.css';
import logo from '../assets/logo.png'

function Banner(){
    const title = "Jungle House"

    return (
    <div className='jh-banner'>
        <img src={logo} alt='Jungle House logo' className='jh-logo'/>
        <h1>{title}</h1>
    </div>
    )
}

export default Banner