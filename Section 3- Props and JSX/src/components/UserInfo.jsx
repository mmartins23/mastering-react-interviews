const UserInfo = ({ name, age, location }) => {
    return (
        <div>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Location: {location}</p>
        </div>
    );
}

export default UserInfo;