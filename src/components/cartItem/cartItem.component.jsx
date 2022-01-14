import React from 'react';

import './cartItem.styles.scss';

const cartItem = ({ title, imageUrl }) => {
    return (
        <div className='cart-item'>
            <div className='cart-item-cart-align'></div>
            <div className='background-image'
                style={{backgroundImage: `url(${imageUrl})`
            }}>
            </div>
            <div className='cart-description'>
                <h3 className='section-title'>{title.toUpperCase()}</h3>
                <span className='section-subtitle'> SHOP NOW </span>
            </div>
        </div>
    );
}

export default cartItem;