import { useDispatch, useSelector } from 'react-redux';


const Cart = () => {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const deleteHandler = (index, price) => {
        dispatch({ type: 'DELETE', payLoad: {index, price} })
    }

    return (
        <div className="customDiv">
            <h3>Cart Component</h3>
            <hr />
            <ul>
                {
                    cart.map((product, index) => {
                        return (
                            <li
                                key={index}
                                onClick={() => deleteHandler(index, product.price)}
                            >{product.pName}</li>
                        )
                    })
                }
            </ul>
        </div >
    )
}

export default Cart