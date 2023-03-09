import { Form, Formik } from 'formik';
import { useAreas } from "../context/areasContext";

function AreaFrom() {
    const {Crear} = useAreas()
    return (
        <div>
            <Formik
                initialValues={{
                    area : ""
                }}
                onSubmit={ async(value, actions) => {
                    console.log(value)
                    Crear(value);
                    actions.resetForm()

                }}
            >
            {({handleChange, handleSubmit, values, isSubmitting}) => (
                <Form onSubmit={handleSubmit}>
                    <label>Arae</label>
                    <input type="text" name='area' value={values.area} placeholder='Ingresar nombre del Area' onChange={handleChange}/>

                    <button type='submit' disabled={isSubmitting} >
                        {isSubmitting ? 'GUARDANDO' : 'GUARDAR'}
                    </button>
                </Form>
            )}
            </Formik>
        </div>
    )
}

export default AreaFrom