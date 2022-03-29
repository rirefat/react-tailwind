import React from 'react';
import PricingOptions from '../PricingOptions/PricingOptions';

const Pricing = () => {
    const pricingOptions =[
        {id:1, name: 'Free', price: 0},
        {id:2, name: 'Regular', price: 99.99},
        {id:3, name: 'Premium', price: 499.99}
    ]
    return (
        <div className='mr-16 ml-16'>
            <h1 className='text-center mt-8 mb-8 text-4xl font-medium'>Pricing Table</h1>
            <div className="grid gap-5 md:grid-cols-3">
            {
                pricingOptions.map(singleOption=><PricingOptions singleOption={singleOption} key={singleOption.id}></PricingOptions>)
            }
            </div>
        </div>
    );
};

export default Pricing;