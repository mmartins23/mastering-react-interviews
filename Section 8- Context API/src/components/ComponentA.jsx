import React from 'react';
import ComponentB from './ComponentB';

const ComponentA = ({ data }) => {
    return (
        <div>
            Component A
            <ComponentB data={data} />
        </div>
    )
}

export default ComponentA