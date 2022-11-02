
import Pacientes from './Pacientes'

function Lista( { pacientes,  setPaciente, eliminarPacientes} ) {
  
  return (
    <div className='w-full lg:w-1/2 mx-auto '>
      { pacientes.length ? (
        <>
          <h2 className='text-4xl font-black text-center'>Listado de pacientes</h2>
          <p  className=' mt-5 font-semibold text-center text-lg'>Administra tus{' '}
          <span className='text-indigo-600'>pacientes y citas</span> </p>

          {/* estoy recorriendo el array que contiene los pacientes
        por lo tanto cada que haya un paciente se va a crear un componente */}
        {pacientes.map( (paciente) => (

          <Pacientes
          key={paciente.id}
          paciente={paciente}
          setPaciente={setPaciente}
          eliminarPacientes ={eliminarPacientes}
          //aca le estoy pasando como prop cada paciente que esta en el array de pacientes
          
          />


        ))}

        </>  

      ) : (

        <>
          <h2 className='text-4xl font-black text-center'>Empieza a agregar pacientes</h2>
          <p  className=' mt-5 font-semibold text-center text-lg'>Y apareceran <span className='text-indigo-600'>en esta lista</span></p>

         </>  
      ) }
      
        
        

        
     
        
      
    </div>
  )
}

export default Lista
