import React from 'react'
import Link from 'next/link'

const NosotrosHome = () => {
    return (
        <div className='h-screen bg-white relative'>
            <div className='flex flex-auto'>
                <div className='w-[50%] h-full px-10 '>
                    <img src="/images/test.jpg" alt="pruebaNosotros" className="w-auto" />
                </div>
                <div className='w-[50%] absolute left-[50%] top-[30%]'>
                    <h3 className='text-left w-2/3 mx-auto text-6xl font-bold'>Nosotros</h3>
                    <p className='text-left w-2/3 mx-auto font-medium text-lg mt-10 pr-8'>En Envases Imperplast, nos enorgullece ser líderes en la industria de envases y bolsas para el sector agrícola. Con una sólida trayectoria y dedicación, brindamos soluciones de embalaje de alta calidad que protegen y preservan los productos de nuestros clientes.</p>
                    <div className='w-2/3 mx-auto mt-5'>
                        <Link href="/nosotros">
                            <button className="border-2 border-blue-500 bg-blue-500 hover:bg-white hover:text-blue-500 hover:border-2 hover:border-blue-500 hover:rounded text-white rounded-sm text-2xl font-medium hover:font-bold w-40 h-16 transition duration-300">Conocenos</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NosotrosHome