import { useState } from 'react';

const UserGreeting = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const toggleLogin = () => {
        setIsLoggedIn(prevState => !prevState);
    };

    return (
        <div>
            {isLoggedIn ? (
                <h1>Welcome back, user!</h1>
            ) : (
                <h1>Please log in.</h1>
            )}
            <button onClick={toggleLogin}>
                {isLoggedIn ? 'Log Out' : 'Log In'}
            </button>
        </div>
    );
};

export default UserGreeting;
