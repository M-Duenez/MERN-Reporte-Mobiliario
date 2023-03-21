import React from 'react'

function tableComponent({ user }) {
    return (

        <tbody>
            <tr className="border-b dark:border-neutral-500">

                <td className="whitespace-nowrap  px-6 py-4">{user.fullname}</td>
                <td className="whitespace-nowrap  px-6 py-4">{user.area}</td>
                <td className="whitespace-nowrap  px-6 py-4">
                    <button type='button' className="w-full text-emerald-500 hover:text-white
                             hover:bg-emerald-500 border border-emerald-500 text-xs font-semibold rounded-full py-1 leading-loose">
                        Ver Reportes
                    </button>
                </td>

            </tr>

        </tbody>

    )
}

export default tableComponent