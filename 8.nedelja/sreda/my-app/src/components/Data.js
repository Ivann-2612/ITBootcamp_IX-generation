import ShoppingItem from './ShoppingItem'

   const Data = () => {
    let shoppingitems =    
    [
        {
            'id': 1,
            'name':'butter',
            'price':100
        },
        {
            'id': 2,
            'name':'bread',
            'price':50
        },{
            'id': 3,
            'name':'cream',
            'price':70
        },{
            'id': 4,
            'name':'cake',
            'price':20    
        },
        {
            'id': 5,
            'name':'mango',
            'price':10    
        }
    ]
    return (
        shoppingitems.map(item => <ShoppingItem shoppItem={item} />)
    )
   }
export default Data

