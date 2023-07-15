import React from 'react';
import { FiChevronDown } from 'react-icons/fi';

const Navbar = () => {
    return (
        <nav className="bg-white w-full font-sans font-medium">
            <div className="flex items-center justify-between py-4 mx-[5%]">
                <div className="flex items-center">
                    <img src="/images/logo/logo-ns-negro.png" alt="Logo de la empresa" className="h-12 w-12" />
                </div>
                <div className="flex items-center space-x-10">
                    <NavLink href="/" text="Inicio" />
                    <NavLink href="/sobre-nosotros" text="Nosotros" />
                    <NavLinkDropdown text="Productos">
                        <DropdownItem href="/envase-al-vacio" text="Envase al vacío">
                            <DropdownSubItem href="/tapa" text="- Tapa y Fondo" />
                            <DropdownSubItem href="/bolsa-de-envase" text="- Bolsa de Envase" />
                        </DropdownItem>
                        <DropdownItem href="/bolsa-para-el-agro" text="Bolsa para el Agro">
                            <DropdownSubItem href="/zanahoria" text="- Zanahoria" />
                            <DropdownSubItem href="/cebolla" text="- Cebolla" />
                            <DropdownSubItem href="/zapallo" text="- Zapallo" />
                            <DropdownSubItem href="/limon" text="- Limón" />
                            <DropdownSubItem href="/papa" text="- Papa" />
                            <DropdownSubItem href="/mani" text="- Maní" />
                            <DropdownSubItem href="/choclo" text="- Choclo" />
                            <DropdownSubItem href="/bigbag" text="- BigBag" />
                        </DropdownItem>
                        <DropdownItemPoliestireno text="Poliestireno" />
                    </NavLinkDropdown>
                </div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-sm text-xl">Contacto</button>
            </div>
        </nav>
    );
};

const NavLink = ({ href, text }) => {
    return (
        <a href={href} className="text-black hover:text-blue-500 px-2 py-1 text-xl">
            {text}
        </a>
    );
};

const NavLinkDropdown = ({ text, children }) => {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative">
            <button
                onClick={toggleDropdown}
                className="text-black hover:text-blue-500 focus:outline-none flex items-center px-2 py-1 text-xl"
            >
                {text}
                {isOpen ? (
                    <FiChevronDown className="w-4 h-4 ml-1 transition-transform duration-300 transform rotate-180" />
                ) : (
                    <FiChevronDown className="w-4 h-4 ml-1 transition-transform duration-300 " />
                )}
            </button>
            {isOpen && (
                <div className="absolute bg-gray-200 w-[190px] mt-2 p-2 rounded shadow-2xl ">
                    {children}
                </div>
            )}
        </div>
    );
};

const DropdownItem = ({ href, text, children, hasSubcategories = true }) => {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative">
            <button
                onClick={toggleDropdown}
                className="text-black hover:text-white hover:bg-blue-500 hover:font-semibold rounded focus:outline-none flex items-center px-2 py-1 w-full text-left"
            >
                {text}
                {hasSubcategories && (
                    <FiChevronDown
                        className={`w-4 h-4 ml-1 transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''
                            }`}
                    />
                )}
            </button>
            {isOpen && (
                <div className="bg-gray-200 w-auto mt-2 mb-2 rounded space-y-2">
                    {children}
                </div>
            )}
        </div>
    );
};

const DropdownSubItem = ({ href, text }) => {
    return (
        <a
            href={href}
            className="text-base text-black hover:text-white hover:bg-blue-500 hover:font-semibold rounded text-left w-full block pl-4 px-2 py-1 transition duration-200"
        >
            {text}
        </a>
    );
};

const DropdownItemPoliestireno = ({ text }) => {
    return (
        <div className="relative">
            <button className="text-black px-2 py-1 hover:text-white hover:bg-blue-500 hover:font-semibold rounded w-full text-left">
                {text}
            </button>
        </div>
    );
};

export default Navbar;
