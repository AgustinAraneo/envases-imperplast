import React from 'react'
import Home from './Home'
import ProductosHome from './ProductosHome'
import FraseHome from './FraseHome'
import NosotrosHome from './NosotrosHome'
import FooterDesktop from '../ui/Footer'
import ContactoHome from './ContactoHome'
import ScrollButton from '../ui/ScrollButton'


const Prueba = () => {
    return (
        <div className='fadeIn'>
            <ScrollButton />
            <Home />
            <ProductosHome />
            <NosotrosHome />
            <ContactoHome />
            <FraseHome />
            <FooterDesktop />
        </div>
    )
}

export default Prueba