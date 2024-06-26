const Purchase = () => {
    const products = [
        { pName: 'Apple', price: 20 },
        { pName: 'Banana', price: 3 },
        { pName: 'Orange', price: 10 },
        { pName: 'Grapes', price: 8 },
    ]
    return (
        <div className="customDiv">
            <h3>Purchase Component</h3>
            <hr/>
            <select>
                {
                    products.map((product, index) => {
                        return (
                            <option value={product.price} key={index}>
                                {product.pName} - ${product.price}
                            </option>
                        )
                    })
                }
            </select>
        </div>
    )
}

export default Purchase