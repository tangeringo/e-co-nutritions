import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './brand.styles.scss';

export const Brand = () => (
    <div>
        <div className='brand-items'>
            <FontAwesomeIcon className="brand-item" icon={['fab', 'facebook']} size='2x' />
            <FontAwesomeIcon className="brand-item" icon={['fab', 'whatsapp']} size='2x' />
            <FontAwesomeIcon className="brand-item" icon={['fab', 'linkedin']} size='2x' />
            <FontAwesomeIcon className="brand-item" icon={['fab', 'instagram']} size='2x' />
        </div>
        <div className='brand-website'> website </div>
    </div>
);
