import React from 'react'
import { RiInnovationsLine, RiRecycle2Line, RiCustomerService2Line } from 'react-icons/ri';

const Testing = () => {
    return (
        <div>
            <div className='flex flex-auto'>
                <div className='flex-auto flex flex-col items-center justify-center'>
                    <h4 className='text-2xl font-bold mb-2'>Innovación constante</h4>
                    <div className='flex items-center'>
                        <RiInnovationsLine size={24} className='mr-2' />
                        <p>En Envases Imperplast, nos apasiona la innovación...</p>
                    </div>
                </div>
                <div className='flex-auto flex flex-col items-center justify-center'>
                    <h4 className='text-2xl font-bold mb-2'>Sostenibilidad ambiental</h4>
                    <div className='flex items-center'>
                        <RiRecycle2Line size={24} className='mr-2' />
                        <p>En Envases Imperplast, nos preocupamos por el medio ambiente...</p>
                    </div>
                </div>
                <div className='flex-auto flex flex-col items-center justify-center'>
                    <h4 className='text-2xl font-bold mb-2'>Excelencia en el servicio al cliente</h4>
                    <div className='flex items-center'>
                        <RiCustomerService2Line size={24} className='mr-2' />
                        <p>En Envases Imperplast, el servicio al cliente es nuestra máxima prioridad...</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testing