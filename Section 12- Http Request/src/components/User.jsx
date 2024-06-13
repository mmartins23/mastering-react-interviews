const User = ({ user }) => {
    return (
        <div className="users">
            <h5>Name: {user.name}</h5>
            <h5>User: {user.username}</h5>
            <h5>Email: {user.email}</h5>
        </div>
    )
}

export default User