// import React from 'react';
// import { Avatar } from "@material-tailwind/react";
// import animation from '../../contacto.json';

// const FraseHome = () => {
//     return (
//         <div className='h-auto relative font-medium pb-10'>
//             <div className='containerHome'>
//                 <div className='wave'></div>
//                 <div className='absolute bottom-10 right-0 left-0 p-10 font-sans'>
//                     <div className='flex flex-col items-center justify-center'>
//                         <p className='mb-4 text-xl'>&ldquo;Los conocimientos y habilidades son muy importantes, pero lo que diferencia a los grandes de los mediocres, es su actitud&ldquo;</p>
//                         <Avatar size='xxl' src="/images/frase.png" alt="avatar" withBorder={true} color="blue" className="p-0.5" />
//                         <p className='mt-4 font-semibold text-xl'>- Philip Kotler</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default FraseHome;

import React from 'react'
import { Avatar } from "@material-tailwind/react";

const FraseHome = () => {
    return (
        <div className='h-auto relative font-medium'>
            <div>
                <div className='bg-gray-200 absolute bottom-10 right-0 left-0 p-10 font-sans'>
                    <div className='flex flex-col items-center justify-center'>
                        <p className='mb-4 text-xl'>&ldquo;Los conocimientos y habilidades son muy importantes, pero lo que diferencia a los grandes de los mediocres, es su actitud&ldquo;</p>
                        <Avatar size='xxl' src="/images/frase.png" alt="avatar" withBorder={true} color="blue" className="p-0.5" />
                        <p className='mt-4 font-semibold text-xl'>- Philip Kotler</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FraseHome