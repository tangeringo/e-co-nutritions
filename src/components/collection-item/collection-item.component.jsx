import React from 'react';

import './collection-item.styles.scss';

const CollecitonItem = ({ name, price, imageUrl }) => (
    <div className='collection-item'>
        <div className='image' 
        style={{
            backgroundImage: `url(${imageUrl})`
        }}
        >
        </div>
        <div className='item-description'>
            <span className='item-name'> {name} </span>
            <h4 className='price'> {price} </h4>
        </div>
    </div>
);

export default CollecitonItem;