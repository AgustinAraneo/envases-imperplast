import Contacto from '@/components/desktop/Contacto'
import FooterDesktop from '@/components/ui/Footer'
import ScrollButton from '@/components/ui/ScrollButton'
import React from 'react'

const contacto = () => {
    return (
        <div>
            <ScrollButton />
            <Contacto />
            <FooterDesktop />
        </div>
    )
}

export default contacto