import React, { useEffect } from 'react'
import Paciente from './Paciente'

const ListadoPacientes = (props) => {

  const {list,setDateUpdate,deleteDate} = props

  useEffect(() => {
    if(list.length >0){
      console.log('nuevo paciente')
    }
  }, [list])
 
  return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll scroll-m-0'>
        <h1 className='font-black text-3xl text-center'> Listado Pacientes </h1> 

        <p className="text-xl mt-3 text-center">
          Administra tus {''}
          <span className="text-blue-500 font-bold">Pacientes y Citas</span>
        </p>
        {/* <Paciente/>  */}
        {
          list && list.length>=1 ? (
            list.map((date) => <Paciente key={date.id} date={date} deleteDate={deleteDate} setDateUpdate={setDateUpdate}/>)
          ):( 
            <div className="mt-10 text-blue-500 font-bold text-center">
              <span >No hay Citas registradas</span>
            </div>
          )
        }
    </div> 
  )
}

export default ListadoPacientes