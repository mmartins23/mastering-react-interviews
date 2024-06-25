const Cart = () => {
    const cart = [{pName: 'Apple', price: 10}, {pName: 'Banana', price: 20}]
    return (
        <div className="customDiv">
            <h3>Cart Component</h3>
            <hr />
            <ul>
            {
                cart.map((product, index) => {
                    return (
                        <li key={index}>{product.pName}</li>
                    )
                })
            }
            </ul>
        </div >
    )
}

export default Cart