import useFetch from "../hooks/useFetch";

function Users() {
    const [userData] = useFetch('https://jsonplaceholder.typicode.com/users');

    return (
        <div>
            {userData &&
                userData.map((user, index) => {
                    return (
                        <div key={index} className='user-block'>
                            <div className="use-det">
                                <h3>Name: {user.name}</h3>
                                <hr />
                                <h3>Username: {user.username}</h3>
                                <hr />
                                <h3>Email: {user.email}</h3>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default Users;
