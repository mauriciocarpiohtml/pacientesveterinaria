
import { useState, useEffect } from 'react'
import Error from './Error'

function Formulario( {pacientes, setPacientes, paciente, setPaciente} ) {

  const [nombre, setNombre] = useState('')
  const [dueno, setDueno] = useState('')
  const [email, setEmail] = useState('')
  const [fecha, setFecha] = useState('')
  const [sintomas, setSintomas] = useState('')
  const [error, setError] = useState(false)

  // seteo los nombres de acuerdo al contenido del state de paciente que es un objeto
  useEffect(()=>{
    setNombre(paciente.nombre)
    setDueno(paciente.dueno)
    setEmail(paciente.email)
    setFecha(paciente.fecha)
    setSintomas(paciente.sintomas)
    

  },[paciente])

 
  

  function generarId(){
    const fecha = Date.now()
    return fecha
  } 
  function handleSubmit(e){
    e.preventDefault()
        if([nombre, dueno, email, fecha, sintomas].includes('')){
            setError(true)
            return
        }

        
            setError(false)
           // ya con todos los datos del paciente puedo crear un objeto para ponerlo en un array y 
           // mostrarlos en una lista 
           //entonces necesito crear otro state con todos los pacientes
            const objetoPaciente ={
                nombre, 
                dueno, 
                email, 
                fecha, 
                sintomas,
                
            }

            // si se encuentra paciente.id es porque estoy editando, de otra forma no se llenaria
            //el objeto

            if(paciente.id) {
                //editando registro
                //aca hago esto porque cuando objetopaciente cae en ese if lo hace sin id
                objetoPaciente.id = paciente.id

                //objetoPaciente va a ser el actualizado mientras que el objeto paciente va a ser el anterior
                                                  
                const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id ===
                paciente.id ? objetoPaciente : pacienteState)
                
                    
                    setPacientes(pacientesActualizados)
                    setPaciente({})

                    
            } else{
                //nuevo registro
                objetoPaciente.id = generarId()
                //si es un nuevo registro estamos agarrando una copia del state y agregandole el objetoPaciente
                setPacientes([...pacientes, objetoPaciente])
            }
            
            
        
            // reiniciar formulario
            setNombre('')
            setEmail('')
            setDueno('')
            setFecha('')
            setSintomas('')

            //
    

  }
  
  return (
    <div className='w-full lg:w-1/2 mx-auto '>
        <h2 className='text-4xl font-black text-center'>Seguimiento pacientes</h2>
        <p  className=' mt-5 font-semibold text-center text-lg'>Añade pacientes y <span className='text-indigo-600'>Administralos</span></p>
        <form className='bg-white p-5 mt-10 rounded-lg shadow-lg mb-20 '>
            
            {/* si error existe entonces muestrame el componente de error */}

            {
                error && <Error/>
            }

            <div className='mb-5 mt-3'>
                <label 
                htmlFor="nombre"
                className='block  text-gray-800 font-bold uppercase mb-2 mt-2'>
                    Nombre
                </label>
                <input 
                 id='nombre'
                 type="text"
                 className='w-full p-2 border-2 roundend-md placeholder:color-gray-700'
                 placeholder='Nombre de tu mascota'
                 onChange={(e)=> setNombre(e.target.value)} 
                 value={nombre}/>
            </div>

            <div className='mb-5 mt-3'>
                <label 
                htmlFor="dueno"
                className='block  text-gray-800 font-bold mt-3 uppercase mb-2'>
                    Nombre del propietario
                </label>
                <input 
                 id='dueno'
                 type="text"
                 className='w-full p-2 border-2 roundend-md placeholder:color-gray-700'
                 placeholder='Nombre del dueño/a' 
                 onChange={(e)=> setDueno(e.target.value)} 
                 value={dueno}/>
            </div>

            <div className='mb-5 mt-3'>
                <label 
                htmlFor="email"
                className='block  text-gray-800 font-bold mt-3 uppercase mb-2'>
                    Correo electronico
                </label>
                <input 
                 id='email'
                 type="email"
                 className='w-full p-2 border-2 roundend-md placeholder:color-gray-700'
                 placeholder='Email de contacto'
                 onChange={(e)=> setEmail(e.target.value)} 
                 value={email} />
            </div>

            <div className='mb-5 mt-3'>
                <label 
                htmlFor="fecha"
                className='block  text-gray-800 font-bold mt-3 uppercase mb-2'>
                    Fecha de alta
                </label>
                <input 
                 id='fecha'
                 type="date"
                 className='w-full p-2 border-2 roundend-md placeholder:color-gray-700'
                 placeholder='Email de contacto' 
                 onChange={(e)=> setFecha(e.target.value)} 
                 value={fecha}/>
            </div>

            <div className='mb-5 mt-3'>
                <label 
                htmlFor="sintomas"
                className='block  text-gray-800 font-bold mt-3 uppercase mb-2'>
                    Sintomas
                </label>
                <textarea className='w-full p-2 border-2 roundend-md placeholder:color-gray-700'
                placeholder='Sintomas del paciente'
                onChange={(e)=> setSintomas(e.target.value)} 
                value={sintomas}/>
            </div>

            <input 
            type="submit"
            className='w-full text-white uppercase bg-indigo-600
             hover:bg-indigo-800 font-bold p-3 mb-4 cursor-pointer'
            value= { paciente.id ? 'Editar paciente' : 'Agregar paciente' }
            onClick={handleSubmit}/>

        </form>
      
    </div>
  )
}

export default Formulario
