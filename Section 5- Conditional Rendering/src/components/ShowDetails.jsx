import React, { useState } from 'react';

const ShowDetails = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(prevState => !prevState);
    };

    return (
        <div>
            <button onClick={toggleVisibility}>
                {isVisible ? 'Hide Details' : 'Show Details'}
            </button>
            {isVisible && (
                <div>
                    <h1>Details</h1>
                    <p>Here are some detailed information...</p>
                </div>
            )}
        </div>
    );
};

export default ShowDetails;
