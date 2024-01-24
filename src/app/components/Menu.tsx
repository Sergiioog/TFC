
export default function Menu() {
    return(
        <div className="bg-red-500 min-h-12 max-h-12 flex justify-around items-center">
            <figure>
                <img src="" alt=""></img>
            </figure>
            <ul className="bg-white text-black h-full w-fit flex justify-center items-center">
                <li className="font-bold text-xl ml-3 mr-3">Inicio</li>
                <li className="font-bold text-xl ml-3 mr-3">Diario</li>
                <li className="font-bold text-xl ml-3 mr-3">Ejercicios</li>
                <li className="font-bold text-xl ml-3 mr-3">Estiramientos</li>
                <li className="font-bold text-xl ml-3 mr-3">Usuario</li>
            </ul>
            <div className="bg-blue-200 h-full">
                <button className="bg-green-200 mr-2 ml-2 rounded-lg w-fit text-black text-md p-1">REGISTRARSE</button>
                <button className="bg-green-200 mr-2 ml-2 rounded-lg w-fit text-black text-md p-1">INICIAR SESIÓN</button>
            </div>
        </div>
       
    );
    
}