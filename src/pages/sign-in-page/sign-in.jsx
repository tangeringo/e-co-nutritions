import React from 'react';

import './sign-in-page.styles.scss';
import Signin from '../../components/sign-in/sign-in.component';

const SigninPage = () => (
    <div className='signin-aligning'>
        <div className='signin'>
            <Signin />
        </div>
    </div>
);

export default SigninPage;