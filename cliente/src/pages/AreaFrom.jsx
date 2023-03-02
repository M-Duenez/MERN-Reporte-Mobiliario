import { Form, Formik } from 'formik';
import { CrearArea } from '../aoi/areas.api';

function AreaFrom() {
  return (
    <div>
        <Formik
            initialValues={{
                area : ""
            }}
            onSubmit={ async(value, actions) => {
                console.log(value)
                try {
                    const response = await CrearArea(value)
                    console.log(response)
                    actions.resetForm()
                } catch (error) {
                    console.error(error)
                }
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