import React from 'react'
import Navbar from '../ui/Navbar'
import FormContacto from './FormContacto'
import Map from '../ui/Map'
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { HiOutlineHome } from "react-icons/hi"

const Contacto = () => {
    const generateWhatsAppMessage = () => {
        const message = encodeURIComponent('Hola! Me comunico contigo a través de la página... bla bla');
        const phoneNumber = '5491165035032';
        return `https://wa.me/${phoneNumber}?text=${message}`;
    };



    return (
        <div className='h-full'>
            <Navbar />
            <div className='mt-[3.5%] flex justify-center'>
                <h1 className='mx-auto text-left font-bold 2xl:text-6xl text-4xl'>¡Contáctanos y obtén más información!</h1>
                {/* <p className='w-[85%] text-justify mt-6 text-lg font-medium'>Completa el siguiente formulario para recibir una atención personalizada. Estamos aquí para responder todas tus preguntas y brindarte la información que necesitas. Cuéntanos tus necesidades y requerimientos, y nuestro equipo estará encantado de ayudarte en lo que podamos. ¡Esperamos con ansias poder colaborar contigo!</p> */}
            </div>
            <div className='mb-10'>
                <FormContacto />
            </div>
            <div className='bg-gray-100'>
                <h3 className='flex justify-center text-left font-bold 2xl:text-6xl text-4xl pt-16'>¡Encuéntranos en nuestras oficinas!</h3>
                <Map />
                <div className="flex grid-cols-4 text-4xl pt-16 pb-20 mx-[15rem] font-medium">
                    <div className="w-[30%] mx-auto hover:text-blue-900 transition duration-500 hover:scale-105">
                        <a
                            href="https://www.instagram.com/envases.imperplast/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaInstagram className="mx-auto" />
                            <p className="pt-4 mx-auto text-xl text-center">@envases.imperplast</p>
                        </a>
                    </div>
                    <div className="w-[30%] mx-auto hover:text-blue-900 transition duration-500 hover:scale-105">
                        <a href={generateWhatsAppMessage()} target="_blank" rel="noopener noreferrer">
                            <FaWhatsapp className="mx-auto" />
                            <p className="pt-4 mx-auto text-xl text-center">
                                (+54) 11 6503-5032
                            </p>
                        </a>
                    </div>
                    <div className="w-[30%] mx-auto hover:text-blue-900 transition duration-500 hover:scale-105">
                        <a href="mailto:franco.imperplast@gmail.com" target="_blank" rel="noopener noreferrer">
                            <FiMail className="mx-auto" />
                            <p className="pt-4 mx-auto text-xl text-center">
                                franco.imperplast@gmail.com
                            </p>
                        </a>
                    </div>
                    <div className="w-[30%] mx-auto hover:text-blue-900 transition duration-500 hover:scale-105">
                        <a href="https://www.google.com/maps?ll=-34.711057,-58.393428&z=16&t=m&hl=es-419&gl=AR&mapclient=embed&q=E.+Del+Valle+Iberlucea+3262+B1826+DTR+Provincia+de+Buenos+Aires" target="_blank" rel="noopener noreferrer">
                            <HiOutlineHome className="mx-auto" />
                            <p className="pt-4 mx-auto text-xl text-center">
                                Del Valle Iberlucea 3262 (6to B), Lanus Oeste.
                            </p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacto