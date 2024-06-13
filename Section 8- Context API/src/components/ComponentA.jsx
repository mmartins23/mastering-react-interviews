import React from 'react';
import ComponentB from './ComponentB';

const ComponentA = () => {
    return (
        <div>
            Component A
            <ComponentB />
        </div>
    )
}

export default ComponentA