import { useEffect, useState } from 'react'
import AreaCard from '../components/areaCard'
import {useAreas} from '../context/areasContext'

function AreasPage() {
  const {areas, loadAreas, login} = useAreas()

  useEffect(() => {

    loadAreas()
    console.log(login)
  }, [])

  function renderMain(){
    if (areas.length === 0 ) return <h1> NO EXISTEN AREAS </h1>
    
    
    return areas.map(area => (
      <AreaCard area={area} key={area.id}/>));
  }

  return (
    <div className='text-3xl font-bold underline'>
      <h1 className='mb-10'>AreasPage</h1>
      
        <div className=" columns-3">

            {renderMain()}
            
        </div>
      
    </div>
  )
}

export default AreasPage