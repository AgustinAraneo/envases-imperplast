import React from 'react'
import Lottie from 'react-lottie'
import animation from '../../contacto.json'
import Link from 'next/link'

const gifCv = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
        preserveAspectRatio: ``
    }
}

const ContactoHome = () => {
    return (
        <div className='h-[1000px] bg-gray-100 relative font-medium'>
            <div>
                <div>
                    <div className='flex flex-col absolute top-[10%] left-10 right-0 p-10'>
                        <h3 className='font-bold 2xl:text-5xl xl:text-3xl lg:text-2xl w-[40%] mb-10 text-left'>¿Necesitas productos de calidad para proteger y conservar tus productos agrícolas?</h3>
                        <Link href="/contacto">
                            <button className="border-2 border-blue-500 bg-blue-500 hover:bg-white hover:text-blue-500 hover:border-2 hover:border-blue-500 hover:rounded text-white rounded-sm text-2xl font-medium hover:font-bold w-40 h-16 transition duration-300">Contactanos</button>
                        </Link>
                    </div>
                    <div style={{ width: '25%', margin: '0 auto' }} className='absolute top-10 right-[12.5%]'>
                        <Lottie options={gifCv} isClickToPauseDisabled ariaRole="img" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactoHome