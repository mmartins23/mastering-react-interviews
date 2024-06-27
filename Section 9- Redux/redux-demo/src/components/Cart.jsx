import { useDispatch, useSelector } from 'react-redux';


const Cart = () => {
    const cart = useSelector(state => state.pr.cart);
    const loginDet = useSelector(state => state.lr.loginDet);
    const dispatch = useDispatch();

    const deleteHandler = (index, price) => {
        dispatch({ type: 'DELETE', payLoad: { index, price } })
    }

    return (
        <div className="customDiv">
            <h3>Cart Component - User:- {loginDet}</h3>
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