import React from 'react';

const CardHome = ({ image, description }) => {
    return (
        <div className='flex justify-center'>
            <div className="flex flex-col items-start justify-start p-4">
                <img src={image} alt="Product" className="w-96 h-96 object-cover" />
                <h3 className="text-base font-medium mt-8 w-96">{description}</h3>
                <div className="">
                    <button className="text-sm mt-2 text-left hover:text-blue-500 hover:underline underline-offset-4 font-bold">
                        Ver más
                    </button>
                </div>
            </div>
        </div>
    );
};

const ProductosHome = () => {
    return (
        <div className="h-screen bg-gray-100 font-sans">
            <div>
                <h1 className="text-5xl text-center font-bold pt-10">
                    Nuestros Productos
                </h1>
                <p className="text-lg text-center pt-8 w-2/3 mx-auto">
                    En Envases Imperplast, nos especializamos en ofrecer soluciones de
                    envasado al vacío y bolsas para el sector agrícola en Argentina.
                    Nuestra amplia gama de productos está diseñada para satisfacer las
                    necesidades específicas de nuestros clientes y garantizar la frescura
                    y la protección de sus productos.
                </p>
            </div>
            <div className="grid grid-cols-3 mx-auto pt-3">
                <CardHome
                    image="https://www.super-bol.com.ar/wp-content/uploads/2021/10/N-2.-scaled.jpg"
                    description="Nuestra línea de envases al vacío es ideal para preservar la calidad y prolongar la vida útil de los alimentos. Con nuestra tecnología de vanguardia, puedes mantener tus productos frescos por más tiempo, reducir el desperdicio y mantener su sabor y textura."
                />
                <CardHome
                    image="https://www.multienvasesonline.com.ar/media/catalog/product/cache/2cdbfe51ff5e43c1c6eabc2156033be3/0/8/08657_08657_2022-10-19_11_00_05.jpg"
                    description="Ofrecemos una variedad de bolsas duraderas y resistentes, diseñadas especialmente para el sector agrícola. Estas bolsas protegen tus productos de factores externos, como la humedad y los insectos, mientras facilitan su transporte y almacenamiento seguro."
                />
                <CardHome
                    image="https://ariescomercial.com.ar/wp-content/uploads/2021/12/Bolsa-polietileno-8x20-1.png"
                    description="Ofrecemos bolsas duraderas y resistentes diseñadas especialmente para el sector agrícola. Estas bolsas protegen tus productos de la humedad, los insectos y otros factores externos, facilitando su transporte y almacenamiento seguro."
                />
            </div>
        </div>
    );
};

export default ProductosHome;
