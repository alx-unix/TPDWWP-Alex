import plantList from '../data/plantList.js'
import '../styles/ShoppingList.css'

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
                    {plant.name} {plant.isBestSale && <span>🔥</span>} {plant.isSpecialOffer && <div className="jh-sales">Sale</div>}
                </li>
            ))}
        </ul>
    </div>
    )
}

export default ShoppingList