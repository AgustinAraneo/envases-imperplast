import Nosotros from '@/components/desktop/Nosotros'
import FooterDesktop from '@/components/ui/Footer'
import ScrollButton from '@/components/ui/ScrollButton'
import React from 'react'

const nosotros = () => {
    return (
        <div className='relative'>
            <ScrollButton />
            <Nosotros />
            <FooterDesktop />
        </div>
    )
}

export default nosotros