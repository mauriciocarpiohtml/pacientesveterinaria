

function Pacientes( {paciente, setPaciente, eliminarPacientes} ) {

    const {nombre, email, dueno, fecha, sintomas, id} = paciente
  return (
    <div>
        <div className="bg-white p-5 mt-10 rounded-lg shadow-lg  ml-6 ">
            <p className="uppercase text-gray-700 font-bold mb-2">
                Nombre :
                <span className="normal-case text-gray-600 font-normal "> {nombre}</span>
            </p>

            <p className="uppercase text-gray-700 font-bold mb-2">
                Dueño/a :
                <span className="normal-case text-gray-600 font-normal"> {dueno}</span>
            </p>

            <p className="uppercase text-gray-700 font-bold mb-2">
                Email :
                <span className="normal-case text-gray-600 font-normal"> {email} </span>
            </p>

            <p className="uppercase text-gray-700 font-bold mb-2">
                Fecha de alta :
                <span className="normal-case text-gray-600 font-normal"> {fecha}</span>
            </p>

            <p className="uppercase text-gray-700 font-bold mb-2">
                Sintomas :
                <span className="normal-case text-gray-600 font-normal"> {sintomas} </span>
            </p>

            <div className="flex justify-between mt-5">
                <button
                onClick={ ()=> setPaciente(paciente)} 
                className="uppercase p-3 shadow-sm rounded-lg font-bold
                 text-white bg-indigo-600 hover:bg-indigo-800">
                    editar

                </button>

                <button 
                onClick={ () => eliminarPacientes(id)}
                className="uppercase p-3 shadow-sm rounded-lg font-bold
               text-white bg-red-500 hover:bg-red-600">
                    eliminar
                </button>

            </div>

        </div>
      
    </div>
  )
}

export default Pacientes
