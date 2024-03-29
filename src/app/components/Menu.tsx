import Image from "next/image";
import Link from "next/link";

export default function Menu() {
    return (
        <div className="bg-white min-h-12 max-h-12 flex justify-between items-center px-4">
            <figure className="ml-4">
                <Image src={"assets/iconos/next.svg"} alt="imagen" width={120} height={120} />
            </figure>
            <ul className="bg-white text-black h-full flex justify-center items-center space-x-8">
                <li className="font-bold text-xl">
                    <Link href="/">
                        <p>Inicio</p>
                    </Link>
                </li>
                <li className="font-bold text-xl">
                    <Link href="/">
                        <p>Diario</p>
                    </Link>
                </li>
                <li className="font-bold text-xl">
                    <Link href="/ejercicios">
                        <p>Ejercicios</p>
                    </Link>
                </li>
                <li className="font-bold text-xl">
                    <Link href="/">
                        <p>Estiramientos</p>
                    </Link>
                </li>
            </ul>
            <div className="flex items-center mr-4">
                <button className="bg-slate-200 rounded-lg text-black text-md p-1 mr-2"><a href="">REGISTRARSE</a></button>
                <button className="bg-slate-200 rounded-lg text-black text-md p-1"><a href="">INICIAR SESIÓN</a></button>
            </div>
        </div>
    );
}
