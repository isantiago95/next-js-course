"use client";

import React from 'react';

const ClientPage = () => {
    const [count, setCount] = React.useState(0);
    console.log('client component');
    return (
        <div>
            <h1 className='text-7xl'>
                {count}
            </h1>

            <button className='btn btn-primary' onClick={() => setCount(count => count + 1)}>increase</button>
        </div>
    );
};

export default ClientPage;