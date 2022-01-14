import React from 'react';
import CollecitonItem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss';

const Collection_Preview = ({ title, items }) => (
    <div className='collection-preview'>
        <h1 className='title'> {title.toUpperCase()} </h1>
        <div className='preview'>
            {
                items
                .filter((item, index) => index < 4)
                .map(({ id, ...itemProps}) => (
                    <CollecitonItem key={id} {...itemProps}> </CollecitonItem>
            ))}
        </div>
    </div>
);

export default Collection_Preview;