import React from 'react';
import './sign-in-and-sign-up.styles.scss';
import { Switch } from 'react-router-dom';
import SignIn from '../../components/sign-in/sign-in.component';

const SignInAndSignUpPage = ()=>(
    <div className="sign-in-and-sign-up" >
    <SignIn /> 
    </div>
);

export default SignInAndSignUpPage;