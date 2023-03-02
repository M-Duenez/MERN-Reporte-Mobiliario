import { DeleteArea } from "../aoi/areas.api"
function AreaCard({area}) {

    const Delete = async (id) => {
        try {
            const resp = await DeleteArea(id)
            console.log(resp)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div >
            <h2>{area.area}</h2>
            <button  onClick={()=> Delete(area.id)}>Eliminar</button>
        </div>
    )
}

export default AreaCard