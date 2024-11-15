import '../styles/Banner.css';
import logo from '../assets/logo.png'

function Banner(){
    const title = "Jungle House";
    const currentMonth =new Date().getMonth();
    const isSpring = currentMonth>=2 && currentMonth<=5;
    const recommendation = isSpring ? (
        <div> It's time to repot.&#x1F601;</div>
    ):(
        <div>It's not time to repot.&#x1F494;</div>
    )
    return (
    <div className="jh-banner">
        <div className='jh-banner-row'>
            <img src={logo} alt='Jungle House logo' className='jh-logo'/>
            <h1 className="lmj-title">{title}</h1>
        </div>
        <div>
            {recommendation}
        </div>
    </div>
    )
}

export default Banner