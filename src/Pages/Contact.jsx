import React from 'react';
import FormContact from '../Components/ContactComponents/FormContact';
import Header from '../Components/Header';
import Footer from '../Components/Footer';


function Contact() {
    return(
        <div>
            <Header />
            <h1>Contactenos mediante correo o telefono</h1>
            <FormContact />
            <Footer />
        </div>
    )
}
export default Contact