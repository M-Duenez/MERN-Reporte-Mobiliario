import { useAreas } from '../context/areasContext'

function AreaCard({ area }) {

    const { Delete } = useAreas()
    const img = "img/logo_" + area.area + ".png"


    return (

        <div className="max-w-lg bg-[#1a3b34] mx-auto shadow-lg rounded-lg overflow-hidden ">
            <div className="sm:flex sm:items-center px-6 py-4">
                <img
                    className="block mx-auto sm:mx-0 sm:flex-shrink-0 h-16 sm:h-24 rounded-full"
                    src={img}
                    alt="Photo Profile"
                />
                <div className="w-full mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
                    <p className="text-xl text-white leading-tight">{area.area}</p>
                    <div className=" mt-4 ">
                        <button type='button' className="w-full  text-emerald-500 hover:text-white
                             hover:bg-emerald-500 border border-emerald-500 text-xs font-semibold rounded-full py-1 leading-loose">
                            Ver Listado de Empleados
                        </button>
                    </div>
                </div>
            </div>
        </div>


        // <div >
        //     <h2>{area.area}</h2>
        //     <button className='btn btn-primary'>Ver Personal</button>
        //     {/* <button className='btn btn-success' onClick={()=> Delete(area.id)}>Eliminar</button> */}
        // </div>
    )
}

export default AreaCard