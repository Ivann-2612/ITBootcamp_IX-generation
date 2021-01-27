
import ShoppingItems from "./Data"

const ShoppingList = ({ name }) => {
    return (
        <div>
            <h1>Shopping list is for: {name}</h1>
            <ShoppingItems />
        </div>
    )
}

export default ShoppingList
