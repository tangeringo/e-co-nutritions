import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import { ReactComponent as GoogleLogo } from '../../assets/google-sign-in-logo.svg';

import './sign-in.styles.scss';

class Signin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: ''});
        } catch (error) {
            console.log(error)
        }
    } 

    handleChange = (event) => {
        const { name, value } = event.target;

        this.setState({ [name]: value})
    }

    render() {
        return (
            <div className='sign-in'>
                <h2 className='signin-title'> Sign In </h2>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name="email" 
                        type="email" 
                        value={this.state.email} 
                        required 
                        placeholder="e m a i l"
                        handleChange={this.handleChange} 
                    />
                    <FormInput 
                        name="password" 
                        type="password" 
                        value={this.state.password}     
                        placeholder="password"               
                        handleChange={this.handleChange}
                        required 
                    />
                    <div className='buttons'>
                        <CustomButton type="submit"> Sign In </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignin> 
                        <GoogleLogo/> <span className='google-describtion'> Google </span>
                        </CustomButton>
                    </div>
                    
                </form>
            </div>
        );
    }
}

export default Signin;