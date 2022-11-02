import Header from './components/Header'
import Formulario from './components/Formulario'
import Lista from './components/Lista'
import { useState } from 'react'


function App() {
  
   const [pacientes, setPacientes] = useState([])
   
   const [paciente, setPaciente] = useState({})

   // eliminar pacientes
   //esta funcion va a llegaar hasta el componente de pacientes para tomar ese id

   function eliminarPacientes(id){
    //
    const pacientesFiltrados = pacientes.filter( paciente => paciente.id !== id)
    setPacientes(pacientesFiltrados)

    
   }
  
    return (
      <div className="App">
        <Header/>
        <div className='block md:flex  mx-20'>
          <Formulario
          pacientes = {pacientes}
          setPacientes = {setPacientes}
          paciente = {paciente}
          setPaciente ={setPaciente}/>

          <Lista 
          pacientes = {pacientes}
          
          setPaciente = {setPaciente}
          eliminarPacientes ={eliminarPacientes}
          />
        </div>
      </div>
    )
}

export default App
