import plantList from '../data/plantList'
import '../styles/ShoppingList.css'
import PlantItem from './PlantItem'

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
            {plantList.map(({id,cover,name,water,light})=>(
                <PlantItem 
                id={id} 
                name={name}
                cover={cover}
                water={water}
                light={light}
                />
            ))}
        </ul>
    </div>
    )
}

export default ShoppingList