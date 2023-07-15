import { Typography } from "@material-tailwind/react";

export default function FooterDesktop() {
    return (
        <footer className="w-full bg-black/90 p-8">
            <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12  text-center md:justify-between ">
                <img src="/images/logo/logo-ns-negro.png" alt="logo-ct" className="w-10" />
                <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
                    <li>
                        <Typography
                            as="a"
                            href="#"
                            color="white"
                            className="font-medium transition-colors hover:text-blue-500 focus:text-blue-500"
                        >
                            Legales
                        </Typography>
                    </li>
                    <li>
                        <Typography
                            as="a"
                            href="#"
                            color="white"
                            className="font-medium transition-colors hover:text-blue-500 focus:text-blue-500"
                        >
                            Nosotros
                        </Typography>
                    </li>
                    <li>
                        <Typography
                            as="a"
                            href="#"
                            color="white"
                            className="font-medium transition-colors hover:text-blue-500 focus:text-blue-500"
                        >
                            Productos
                        </Typography>
                    </li>
                    <li>
                        <Typography
                            as="a"
                            href="#"
                            color="white"
                            className="font-medium transition-colors hover:text-blue-500 focus:text-blue-500"
                        >
                            Contacto
                        </Typography>
                    </li>
                </ul>
            </div>
            <hr className="my-8 border-white w-2/3 mx-auto" />
            <Typography color="white" className="text-center font-medium">
                &copy; 2023 Envases Imperplast
            </Typography>
        </footer>
    );
}