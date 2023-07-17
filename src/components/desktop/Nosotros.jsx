import React, {useEffect} from 'react';
import Navbar from '../ui/Navbar';
import { MdOutlineTurnedInNot, MdGppGood } from 'react-icons/md';
import { RiRecycleLine } from 'react-icons/ri';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Nosotros = () => {
    
    useEffect(() => {
        AOS.init({
            easing: 'ease-out', // Efecto de animación
            once: true, // Para que la animación solo se ejecute una vez
            mirror: false, // Para deshabilitar la animación inversa
        });
    }, []);

    return (
        <div className='h-full bg-white fadeIn'>
            <div className='h-full'>
                <Navbar />
                <div className='relative flex flex-auto h-fit'>
                    <div className='w-[50%] flex justify-center flex-col'>
                        <h3 className='w-2/3 mx-auto text-left font-bold text-6xl mt-[20%]'>
                            Sobre Nosotros
                        </h3>
                        <p className='w-2/3 pr-2 mx-auto mt-10 text-lg font-medium text-justify'>
                            Envases Imperplast es una empresa argentina líder en soluciones de
                            packaging, especializada en la fabricación y venta de bolsas para el agro,
                            envases al vacío y bolsas de poliestireno. Nuestro enfoque se centra en
                            proporcionar respuestas eficientes y soluciones innovadoras para envasar
                            productos agropecuarios a nivel nacional e internacional. Con una amplia
                            experiencia en el sector, nos destacamos por nuestra calidad, compromiso
                            con la sostenibilidad y satisfacción del cliente. Nuestra visión es
                            convertirnos en un actor global integrado en soluciones de packaging,
                            consolidando nuestra reputación como proveedores confiables y de confianza.
                        </p>
                    </div>
                    <div className='flex items-center absolute top-10 2xl:right-[11.5%] xl:right-[4%] right-[7.5%]'>
                        <img
                            src='/images/test.jpg'
                            alt='Product'
                            className='2xl:w-[40rem] 2xl:h-[40rem] w-[35rem] h-[35rem] lg:w-[34rem] lg:h-[34rem] object-cover'
                        />
                    </div>
                </div>
                <div data-aos="fade-right" data-aos-duration="3000" data-aos-delay="500" className='flex flex-auto pt-[17%] pb-[10%] w-[90%] mx-auto'>
                    <div className='flex flex-col items-center flex-auto'>
                        <div className='flex items-center mb-4'>
                            <div className='bg-black rounded-full p-[6px]'>
                                <MdOutlineTurnedInNot className='w-6 h-6 text-white' />
                            </div>
                            <h4 className='ml-2 text-2xl font-bold'>Innovación Constante</h4>
                        </div>
                        <p className='text-justify w-[80%] font-medium text-sm'>Nos apasiona la innovación. Estamos comprometidos en buscar constantemente nuevas formas de mejorar nuestros productos y procesos. </p>
                    </div>
                    <div className='flex flex-col items-center flex-auto'>
                        <div className='flex items-center mb-4'>
                            <div className='bg-black rounded-full p-[6px]'>
                                <RiRecycleLine className='w-6 h-6 text-white' />
                            </div>
                            <h4 className='ml-2 text-2xl font-bold'>Sostenibilidad Ambiental</h4>
                        </div>
                        <p className='text-justify w-[80%] font-medium text-sm'>Nos preocupamos por el medio ambiente, por eso nos esforzamos por utilizar materiales reciclables y promovemos prácticas de reciclaje en toda nuestra cadena de suministro. </p>
                    </div>
                    <div className='flex flex-col items-center flex-auto'>
                        <div className='flex items-center mb-4'>
                            <div className='bg-black rounded-full p-[6px]'>
                                <MdGppGood className='w-6 h-6 text-white' />
                            </div>
                            <h4 className='ml-2 text-2xl font-bold'>Excelente Atención</h4>
                        </div>
                        <p className='text-justify w-[80%] font-medium text-sm'>El servicio al cliente es nuestra máxima prioridad. Nos enorgullece ofrecer un servicio ágil, confiable y personalizado a nuestros clientes.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nosotros;
