import { Form, Formik } from 'formik';
import { useNavigate } from "react-router-dom";
import { useAreas } from "../context/areasContext";

function LoginPage() {
    const {Login} = useAreas()
    const navigate = useNavigate()
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
            <div className='hidden sm:block'>
                <img className="p-20 mt-36"  src="img/logo.png" alt="" />
            </div>

            <div className='bg-gray-700 flex flex-col justify-center '>
                <Formik 
                    initialValues={{username : "", password : ""}}
                    onSubmit={ async(value, actions) => {
                        //console.log(value)
                        //Crear(value);
                        try {
                            const resp = await Login(value);
                            if (resp.msg === 'correcto') {
                                navigate('/')
                                
                            } else {
                                console.log('hola',resp.msg)
                            }
                            
                            actions.resetForm()
                        } catch (error) {
                            //navigate('/login')
                            console.log(error)
                        }
    
                    }}
                >
                    {({handleChange, handleSubmit, values, isSubmitting}) => (
                    <Form onSubmit={handleSubmit} className='max-w-[500px] w-full mx-auto rounded-lg bg-gray-900 p-8 px-8'>
                        <h2 className='text-4xl dark:text-white font-bold text-center'>Inicio de Sesión</h2>
                        <div className='flex flex-col text-gray-400 py-2 mt-5'>
                            <label className='text-lg'>Username:</label>
                            <input name='username' value={values.username} className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" placeholder='Ingresar USERNAME' onChange={handleChange}/>
                        </div>
                        <div className='flex flex-col text-gray-400 py-2'>
                            <label className='text-lg'>Password:</label>
                            <input name='password' value={values.password} className='p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="password" placeholder='Ingresar PASSWORD' onChange={handleChange}/>
                        </div>
                        <div className='flex justify-between text-gray-400 py-2'>
                            <p className='flex items-center'><input className='mr-2' type="checkbox" /> Remember Me</p>
                            <p>Forgot Password</p>
                        </div>
                        <button  type='submit' className='w-full my-5 py-2  mt-5 hover:bg-green-700 border bg-green-600  text-white font-semibold rounded-lg text-xl'>INGRESAR</button>
                    </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}
export default LoginPage