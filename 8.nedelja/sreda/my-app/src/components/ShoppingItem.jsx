const styleDiv = {
        color: 'navajowhite',
        backgroundColor: '#373737',
        width:'300px',
        textAlign:'center',
        padding:'5px',
        borderBottom:'3px solid black',
        marginLeft:'15px'
}

const ShoppingItem = ({ shoppItem }) => {
    
    return (
        <div style={styleDiv}>
            <h3 key={shoppItem.id}>{shoppItem.name} : {shoppItem.price} $</h3>
        </div>
        
    )
}

export default ShoppingItem

