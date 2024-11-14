import plantList from '../data/plantList.js'

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
        <ul>
            {plantList.map((plant)=>(
                <li key={plant.id}>{plant.name} {plant.isBestSale ? <span>🔥</span>: <span>👎</span>}</li>
            ))}
        </ul>
    </div>
    )
}

export default ShoppingList