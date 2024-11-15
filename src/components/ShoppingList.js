import plantList from '../data/plantList.js'
import '../styles/ShoppingList.css'
import CareScale from '../components/CareScale.js'

function ShoppingList(){
    const categories = plantList.reduce(
        (acc,plant) => 
            acc.includes(plant.category) ? acc: acc.concat(plant.category),
        []
    )

    return (
    <div className='plant-categories'>
        <h3>Plant Categories</h3>
        <ul>
            {categories.map((cat) =>(
                <li key={cat}>{cat}</li>
            ))}
        </ul>
        <h3>Plants</h3>
        <ul className='jh-plant-list'>
            {plantList.map((plant)=>(
                <li key={plant.id} className='jh-plant-item'>
                    {plant.isBestSale && <span>🔥</span>} 
                    {plant.name} 
                    {plant.isSpecialOffer && <div className="jh-sales">Sale</div>}
                    <CareScale careType='water' scaleValue={plant.water} />
                    <CareScale careType='light' scaleValue={plant.light} />
                </li>
            ))}
        </ul>
    </div>
    )
}

export default ShoppingList