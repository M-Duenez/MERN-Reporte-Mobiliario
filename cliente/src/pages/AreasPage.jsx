import { useEffect, useState } from 'react'
import { getAreasRequest } from '../aoi/areas.api'
import AreaCard from '../components/areaCard'

function AreasPage() {
  const [areas, setareas] = useState([])

  useEffect(() => {

    async function loadAreas() {
      const resp = await getAreasRequest()
      console.log(resp.data)
      setareas(resp.data)
    }
    loadAreas()
  }, [])

  return (
    <div>
      <h1>AreasPage</h1>
      {
        areas.map(area => (
          <AreaCard area={area} key={area.id}/>
        ))
      }
    </div>
  )
}

export default AreasPage