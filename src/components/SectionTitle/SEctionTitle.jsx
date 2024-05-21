import React from 'react';

const SEctionTitle = ({heading, subHeading}) => {
    return (
        <div className='md:w-6/12 mx-auto'>
            <p className='text-yellow-600 text-center'> ---{subHeading}---</p>
            <h3 className='text-3xl uppercase text-center border-y-4 py-4 my-4'>{heading}</h3>
        </div>
    );
};

export default SEctionTitle;