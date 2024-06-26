import {useSelector} from 'react-redux';

const Purchase = () => {
    const products = useSelector(state => state.products);
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