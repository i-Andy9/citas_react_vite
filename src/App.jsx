import { useEffect, useState } from 'react'
import './App.css' 
import Formulario from './Module/Components/Formulario'
import Header from './Module/Components/Header'
import ListadoPacientes from './Module/Components/ListadoPacientes'

function App() { 
  const keyy='listDates'
  const [isDataLoaded,setisDataLoaded]=useState(false)
  const [listDates,setlistDates] = useState([])
  const [dateUpdate,setDateUpdate] = useState({})

  useEffect(() =>{
    const getList =()=> {
      const lDates = JSON.parse(localStorage.getItem(keyy))??[]
      setlistDates(lDates)
    }
    getList()
    setisDataLoaded(true)
    console.log('getLS',listDates)
  },[])

  useEffect(() =>{ 
    if(isDataLoaded){
      console.log('save on LS')
      localStorage.setItem(keyy, JSON.stringify(listDates) )  
      localStorage.setItem('test', JSON.stringify('test')) 
    }

  },[listDates,isDataLoaded])

  const deleteDate=(id)=>{
    const newList = listDates.filter(d => d.id !== id) 
    setlistDates(newList)
  }  
 
  return (
    <> 
      <div className="container mx-auto mt-10">
        <Header/>
        
        <div className="mt-12 md:flex">
          <Formulario
            dateUpdate={dateUpdate}
            setDateUpdate={setDateUpdate}
            listDates={listDates}
            addDates={setlistDates}  
          />
          <ListadoPacientes
            list={listDates} 
            setDateUpdate={setDateUpdate}
            deleteDate={deleteDate}
          />
        </div>
      </div>
    </>
  )
}

export default App
