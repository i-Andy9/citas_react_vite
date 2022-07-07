import React, { useEffect, useState } from 'react' 
import AlertaFormulario from './AlertaFormulario'

const Formulario = (props) => { 
  const {listDates,addDates,dateUpdate,setDateUpdate} = props
  const [isDate, setDate] = useState({ 
      id:'',
      nameMascota: '',
      namePropietario: '',
      email: '',
      Alta: '',
      sintomas: ''
    })
  const [error, seterror] = useState(false) 

    useEffect(()=>{
      if(Object.keys(dateUpdate).length >0){
        setDate(dateUpdate)
      }
    }, [dateUpdate])

  const handleUpdateDate = (e) => {
    const { id, value } = e.target
    switch (id) { 
      case 'nameMascota': 
        setDate({ ...isDate, nameMascota: value })
        break;
      case 'namePropietario': 
        setDate({ ...isDate, namePropietario: value })
        break;
      case 'email': 
        setDate({ ...isDate, email: value })
        break;
      case 'Alta': 
        setDate({ ...isDate, Alta: value })
        break;
      case 'sintomas': 
        setDate({ ...isDate, sintomas: value })
        break;
      default:
        setDate({ ...isDate})
        break;  
    } 
  }

  const IdGenerator = () => {
    let date = Date.now().toString(36)
    let random = Math.random().toString(36).substring(2)
      return date+random
  }


  const saveDate = () => { 
    const {id,nameMascota, namePropietario,email,Alta,sintomas} = isDate
    if([nameMascota, namePropietario,email,Alta,sintomas].includes('')){
      console.log('hay un campo vacio')
      seterror(true)
      return
    } 
 
    if(id){ 
      isDate.id = dateUpdate.id 
      const listDateUpdated = listDates.map(d=> d.id === dateUpdate.id? isDate : d) 
      addDates(listDateUpdated) 
      setDateUpdate({})
    }else{ 
      isDate.id = IdGenerator()
      seterror(false)  
      addDates([...listDates,isDate]) 
    }    
    clearDate()      
  }

  const clearDate=()=>{
    setDate({ 
    id:'',
    nameMascota: '',
    namePropietario: '',
    email: '',
    Alta: '',
    sintomas: ''})
  }
  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className='font-black text-3xl text-center'>Formulario de Registro</h2>

      <p className="text-xl text-center mt-3">
        Añade Pacientes y {''}
        <span className="text-blue-500 font-bold ">Administralos</span>
      </p>

      <div className="m-3 bg-white shadow-md px-5 py-2 rounded-lg mt-4 mb-4">
        
        {
          
          error && 
            <AlertaFormulario/>
        }

        <div className='mb-5'>
          <label htmlFor='nameMascota' className="px-5  uppercase font-bold"
          >Nombre de mascota </label>
          <input
            id='nameMascota'
            className="px-5 mt-2 textplaceholder-gray-400 w-full border-2 rounded-md"
            type="text"
            placeholder='Ingrese nombre de mascota '
            value={isDate.nameMascota}
            onChange={handleUpdateDate}
          />
        </div>

        <div className='mb-5'>
          <label htmlFor='namePropietario' className="px-5  uppercase font-bold"
          >Nombre de Propietario</label>
          <input
            id='namePropietario'
            className="px-5 mt-2 textplaceholder-gray-400 w-full border-2 rounded-md"
            type="text"
            placeholder='Ingrese nombre de Propietario '
            value={isDate.namePropietario}
            onChange={handleUpdateDate}
          />
        </div>
        <div className='mb-5'>
          <label htmlFor='email' className="px-5  uppercase font-bold"
          >Email</label>
          <input
            id='email'
            className="px-5 mt-2 textplaceholder-gray-400 w-full border-2 rounded-md"
            type="email"
            placeholder='Ingrese email contacto propietario'
            value={isDate.email}
            onChange={handleUpdateDate}
          />
        </div>
        <div className='mb-5'>
          <label htmlFor='Alta' className="px-5  uppercase font-bold"
          >Alta</label>
          <input
            id='Alta'
            className="px-5 mt-2 textplaceholder-gray-400 w-full border-2 rounded-md"
            type="date"
            value={isDate.Alta}
            onChange={handleUpdateDate}
          />
        </div>
        <div className='mb-5'>
          <label htmlFor='sintomas' className="px-5  uppercase font-bold"
          >Sintomas</label>
          <textarea
            id='sintomas'
            className="px-5 mt-2 textplaceholder-gray-400 w-full border-2 rounded-md"
            type="sintomas"
            placeholder='Describe los sintomas '
            value={isDate.sintomas}
            onChange={handleUpdateDate}
          />
        </div>

        <input
          type="submit"
          className="bg-blue-500 w-full p-3 text-white uppercase font-bold
            hover:bg-blue-700 cursor-pointer transition-colors mb-5"
          value={dateUpdate.id ?'Actualizar Date':'agregar paciente'}
          onClick={saveDate}
        />
      </div>
    </div>
  )
}

export default Formulario