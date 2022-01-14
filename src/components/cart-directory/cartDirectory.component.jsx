import React from 'react';
import CartItem from '../cartItem/cartItem.component';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectoryCollections } from '../../redux/cart-directory/cart-directory.selectors';

import './cartDirectory.styles.scss';

const CartDirectory = ({ sections }) => {
    return (
        <div className='cart-directory-menu'>
            {sections.map(({ id, ...otherSectionProps }) => (
                <CartItem key={id} {...otherSectionProps} />
            ))}
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    sections: selectDirectoryCollections
});

export default connect(mapStateToProps)(CartDirectory);