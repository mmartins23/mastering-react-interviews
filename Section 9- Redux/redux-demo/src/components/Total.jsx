import { useSelector } from 'react-redux';


const Total = () => {
    const total = useSelector(state => state.total);
    const loginDet = useSelector(state => state.loginDet);

    return (
        <div className="customDiv">
            <h3>Total Component - User:- {loginDet}</h3>
            <hr />
            <h2>Total: {total}</h2>
        </div>
    )
}

export default Total