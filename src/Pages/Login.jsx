import React from 'react';
import FormLogin from '../Components/LoginComponents/FormLogin';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

function Login() {
    
    return(
        <div>
            <Header />
            <h1>Por favor ingrese sus datos</h1>
            <FormLogin />
            <Footer />
        </div>
    )
}

export default Login