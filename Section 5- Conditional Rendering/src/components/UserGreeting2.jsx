import { useState } from 'react';

const UserGreeting2 = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const toggleLogin = () => {
        setIsLoggedIn(prevState => !prevState);
    };

    const renderContent = () => {
        if (isLoggedIn) {
            return <h1>Welcome back, user!</h1>;
        } else {
            return <h1>Please log in.</h1>;
        }
    };

    return (
        <div>
            {renderContent()}
            <button onClick={toggleLogin}>
                {isLoggedIn ? 'Log Out' : 'Log In'}
            </button>
        </div>
    );
};

export default UserGreeting2;
