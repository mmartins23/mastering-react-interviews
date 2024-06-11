import "./persondetails.css";

export const PersonDetails = ({ name, age }) => {
    return (
        <div className="pers">
            <h2>Component Based Architecture</h2>
            <h3>Name: {name}</h3>
            <h3>Age: {age}</h3>
            <hr/>
        </div>
    )
}
