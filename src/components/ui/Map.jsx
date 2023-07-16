import React, { useState } from 'react';
import { FaSpinner } from 'react-icons/fa';

const Map = () => {
    const [loading, setLoading] = useState(true);

    const handleLoad = () => {
        setLoading(false);
    };

    return (
        <div style={{ position: 'relative' }}>
            {loading && (
                <div
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        zIndex: '1'
                    }}
                >
                    <FaSpinner size={50} color="grey" className='animate-spin' />
                </div>
            )}
            <div className='flex justify-center p-10'>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3279.767157560314!2d-58.39600292343937!3d-34.711052363176236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccdd7d6ee9e17%3A0x1478615bfff34d70!2sE.%20Del%20Valle%20Iberlucea%203262%2C%20B1826%20DTR%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1689522790651!5m2!1ses-419!2sar"
                    width="1100"
                    height="500"
                    style={{ border: '0' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    onLoad={handleLoad}
                ></iframe>
            </div>
        </div>
    );
};

export default Map;