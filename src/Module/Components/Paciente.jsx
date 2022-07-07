import React, { useEffect } from 'react'

const Paciente = (props) => {
  const {date,setDateUpdate,deleteDate} = props

  return (
    <div className='mx-3 bg-white shadow-md px-5 py-2 rounded-lg mt-4 mb-4 font-bold '>
        <p className='mb-2'> Nombre mascota: {''}
            <span className='normal-case font-normal'>{date.nameMascota !== undefined ? date.nameMascota : 'Error de registro'}</span>
          </p>

          <p className='mb-2'> Nombre Propietario: {''}
            <span className='normal-case font-normal'>{date.namePropietario !== undefined ? date.namePropietario : 'Error de registro'}</span>
          </p>

          <p className='mb-2'> Email: {''}
            <span className='normal-case font-normal'>{date.email !== undefined ? date.email : 'Error de registro'}</span>
          </p>

          <p className='mb-2'> Alta: {''}
            <span className='normal-case font-normal'>{date.Alta !== undefined ? date.Alta : 'Error de registro'}</span>
          </p>
          
          <p className='mb-2'> Sintomas: {''}
            <span className='normal-case font-normal'>{date.sintomas !== undefined ? date.sintomas : 'Error de registro'}.</span>
          </p>

          <div className='flex justify-between'>
            <button
              type='buton'
              className='bg-blue-300 rounded-lg px-3 py-1 my-4'
              onClick={()=>setDateUpdate(date)}
            >
              Editar
            </button>
            <button
              type='buton'
              className='bg-blue-300 rounded-lg px-3 py-1 my-4'
              onClick={()=>deleteDate(date.id)}
            >
              Eliminar
            </button>
          </div>
    </div>
  )
}

export default Paciente