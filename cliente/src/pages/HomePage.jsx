import { useEffect, useState } from 'react'
import Body from '../components/table'
import { useAreas } from '../context/areasContext'

function HomePage() {
    const { users, loadUsers } = useAreas()

    useEffect(() => {

        loadUsers()
    }, [])

    function renderMain() {
        if (users.length === 0) return <h1 className='mx-auto'> NO EXISTEN USUARIOS </h1>

        return users.map(user => (
            <Body user={user} key={user.id}/>));
        
    }
    return (
        <div className="mx-10 mt-5">
            <div className='text-3xl font-bold mb-5'>HomePage</div>
            <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="w-10/12 mx-auto text-center text-sm font-light">
                                <thead className="border-b bg-[#1a3b34] font-medium text-white  dark:bg-[#1a3b34]">
                                    <tr>
                                        <th scope="col" className=" px-6 py-4 uppercase">Nombre Completo</th>
                                        <th scope="col" className=" px-6 py-4 uppercase">area</th>
                                        <th scope="col" className=" px-6 py-4"></th>
                                    </tr>
                                </thead>

                                {renderMain()}
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage