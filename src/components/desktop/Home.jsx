import React from 'react'
import Navbar from '../ui/Navbar'

const Home = () => {
    return (
        <div className='h-screen relative'>
            <Navbar />
            <div className='w-1/3 absolute left-24 top-[25%]'>
                <h1 className='text-6xl font-bold text-left'>Tu mejor propuesta de <br /> valor.</h1>
                <p className='text-lg w-[90%] text-left mt-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <button className='border-2 border-blue-500 bg-blue-500 hover:bg-white hover:text-blue-500 hover:border-2 hover:border-blue-500 hover:rounded text-white px-8 py-4 rounded mt-12 text-2xl font-medium hover:font-bold transition duration-300'>Conoce más</button>
            </div>
        </div>
    )
}

export default Home