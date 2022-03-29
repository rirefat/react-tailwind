import React from 'react';

const PricingOptions = (props) => {
    const {name, price}=props.singleOption;
    console.log(name, price)
    return (
        <div className='text-center bg-indigo-300 rounded-xl pt-5 pb-5 shadow-2xl'>
            <h1 className='text-4xl font-semibold mt-5 mb-5'>{name}</h1>
            <h3 className='text-2xl'>${price}<span className='text-gray-600'>/mo</span></h3>
            <button className='bg-white p-2 mt-4 rounded-xl text-xl w-3/4 hover:bg-indigo-900 hover:text-white'>Subscribe Now</button>
        </div>
    );
};

export default PricingOptions;