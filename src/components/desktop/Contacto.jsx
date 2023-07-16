import React from 'react'
import Navbar from '../ui/Navbar'
import FormContacto from './FormContacto'
import Map from '../ui/Map'

const Contacto = () => {
    return (
        <div className='h-full'>
            <Navbar />
            <div className='mt-[3.5%] flex justify-center'>
                <h1 className='mx-auto text-left font-bold 2xl:text-6xl text-4xl'>¡Contáctanos y obtén más información!</h1>
                {/* <p className='w-[85%] text-justify mt-6 text-lg font-medium'>Completa el siguiente formulario para recibir una atención personalizada. Estamos aquí para responder todas tus preguntas y brindarte la información que necesitas. Cuéntanos tus necesidades y requerimientos, y nuestro equipo estará encantado de ayudarte en lo que podamos. ¡Esperamos con ansias poder colaborar contigo!</p> */}
            </div>
            <div className=''>
                <FormContacto />
            </div>
            <div>
                <h3 className='flex justify-center text-left mt-[4%] font-bold 2xl:text-6xl text-4xl'>¡Encuéntranos en nuestras oficinas!</h3>
                <Map />
            </div>
        </div>
    )
}

export default Contacto