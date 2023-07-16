import { useState } from 'react';
import emailjs from '@emailjs/browser';

function FormContacto() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [telefono, setTelefono] = useState('');
    const [tipo, setTipo] = useState('');
    const [superficie, setSuperficie] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const sendEmail = (event) => {
        event.preventDefault();
        setLoading(true);

        emailjs
            .sendForm('agus-prueba', 'correo-prueba-araneo', event.target, 'c35DvJhbFaosvgQp6')
            .then((response) => {
                console.log(response);
                setLoading(false);
                setSuccess(true);
            })
            .catch((error) => console.log(error));
    };

    const handleTipoChange = (e) => {
        setTipo(e.target.value);

        switch (e.target.value) {
            case 'Envase':
                setSuperficie('');
                break;
            case 'Agro':
                setSuperficie('Zanahoria');
                break;
            case 'Poliestireno':
                setSuperficie('Bolsa de Poliestireno');
                break;
            default:
                setSuperficie('');
                break;
        }
    };

    return (
        <div className="max-w-[72rem] px-4 pt-10 mx-auto">
            <div className="flex mx-auto">
                <form onSubmit={sendEmail} className="ml-4 flex-auto p-4 font-Montserrat">
                    <div className="mb-4">
                        <label htmlFor="name" className="block mb-2 font-medium text-gray-700">
                            Nombre y apellido
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            className="w-full p-2 transition duration-500 bg-gray-100 border-2 rounded-md focus:outline-none focus:border-black"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block mb-2 font-medium  text-gray-700">
                            Correo electrónico
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="w-full p-2 transition duration-500 bg-gray-100 border-2 rounded-md focus:outline-none focus:border-black"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="telefono" className="block mb-2 font-medium  text-gray-700">
                            Teléfono
                        </label>
                        <input
                            type="text"
                            name="telefono"
                            id="telefono"
                            className="w-full p-2 transition duration-500 bg-gray-100 border-2 rounded-md focus:outline-none focus:border-black"
                            value={telefono}
                            onChange={(e) => setTelefono(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="tipo" className="block mb-2 font-medium  text-gray-700">
                            Categoría de bolsa
                        </label>
                        <select
                            name="tipo"
                            id="tipo"
                            className="w-full p-2 transition duration-500 bg-gray-100 border-2 rounded-md focus:outline-none focus:border-black"
                            value={tipo}
                            onChange={handleTipoChange}
                            required
                        >
                            <option value="">Seleccione una opción</option>
                            <option value="Envase">Envase al vacío</option>
                            <option value="Agro">Bolsa para el Agro</option>
                            <option value="Poliestireno">Poliestireno</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        {tipo === '' && (
                            <p className="block mb-2 font-medium  text-gray-700">Debe elegir una categoría para seleccionar un tipo de bolsa.</p>
                        )}
                        {tipo !== '' && (
                            <label htmlFor="superficie" className="block mb-2 font-medium  text-gray-700">
                                Tipo de bolsa
                            </label>
                        )}
                        <select
                            name="superficie"
                            id="superficie"
                            className={`w-full p-2 transition duration-500 bg-gray-100 border-2 rounded-md focus:outline-none focus:border-black ${tipo === '' ? 'cursor-not-allowed' : ''
                                }`}
                            value={superficie}
                            onChange={(e) => setSuperficie(e.target.value)}
                            disabled={tipo === ''}
                            required
                        >
                            {tipo === '' && <option value="">Selecciona una opción</option>}
                            {tipo === 'Envase' && (
                                <>
                                    <option value="">Selecciona una opción</option>
                                    <option value="Tapa y Fondo">Tapa y Fondo</option>
                                    <option value="Envases al vacío">Envases al vacío</option>
                                </>
                            )}
                            {tipo === 'Agro' && (
                                <>
                                    <option value="">Selecciona una opción</option>
                                    <option value="Zanahoria">Zanahoria</option>
                                    <option value="Cebolla">Cebolla</option>
                                    <option value="Zapallo">Zapallo</option>
                                    <option value="Limón">Limón</option>
                                    <option value="Papa">Papa</option>
                                    <option value="Maní">Maní</option>
                                    <option value="Choclo">Choclo</option>
                                    <option value="BigBag">BigBag</option>
                                </>
                            )}
                            {tipo === 'Poliestireno' && (
                                <option value="Bolsa de Poliestireno">Bolsa de Poliestireno</option>
                            )}
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block mb-2 font-medium  text-gray-700">
                            Tu mensaje
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            className="w-full p-6 transition duration-500 bg-gray-100 border-2 rounded-md focus:outline-none focus:border-black"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                    </div>
                    <div className="text-center">
                        <button
                            type="submit"
                            className={`px-4 py-2 font-medium text-white transition duration-500 rounded-md ${loading ? 'bg-gray-500 cursor-not-allowed' : 'bg-black/70 hover:bg-black/90'
                                }`}
                            disabled={loading}
                        >
                            {loading ? 'Enviando...' : 'Enviar'}
                        </button>
                        {success && <p className="text-green-500 mt-2">El correo electrónico se envió correctamente.</p>}
                    </div>
                </form>
            </div>
        </div>
    );
}

export default FormContacto;
