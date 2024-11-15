import CareScale from './CareScale'
import '../styles/PlantItem.css'


function handleClick(plantName){
    alert(`You want to buy 1 ${plantName}. Great Choice`)
}



function PlantItem({ id, cover, name, water, light }) {
    function handleCareScale(plantName){
        if (plantName.water === 1){
            alert(`${plantName} needs low amount of water`)
        }
    }
	return (
		<li key={id} className='jh-plant-item' >
			<img className='jh-plant-item-cover' src={cover} alt={`${name} cover`} onClick={() => handleClick(name)} />
			{name}
			<div>
				<CareScale careType='water' scaleValue={water} onClick={()=> handleCareScale(name)} />
				<CareScale careType='light' scaleValue={light} />
			</div>
		</li>
	)
}

export default PlantItem