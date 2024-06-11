import "./persondetails.css";

export const PersonDetails = ({ name, age }) => {
    return (
        <div className="pers">
            <h3>Name: {name}</h3>
            <h3>Age: {age}</h3>
        </div>
    )
}
