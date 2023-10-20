import { useFormik } from 'formik';
import { makeValidateForm } from  './ValidateForm'
const Form = function (){
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            mobilePhone: ''
        },
        validationSchema: makeValidateForm,
        onSubmit: (values, actions)=>{
            console.log('submitted', values)
            actions.resetForm()
        }
    })

    return(
        <form className='form' onSubmit={formik.handleSubmit} action="">
            <label className='form-name' htmlFor='name'>Name</label>
            <input type='text' id='name'
                   name='name'
                   placeholder='Enter your name'
                   onBlur={formik.handleBlur}
                   onChange={formik.handleChange}
                   value={formik.values.name}
                   className={formik.errors.name && formik.touched.name? 'input-error': ''}
            />
            {formik.errors.name && formik.touched.name && <p className='error'>{formik.errors.name}</p>}
            <label className='form-email' htmlFor='email'>Email</label>
            <input type='email' id='email'
                   name='email'
                   placeholder='Enter your email'
                   onBlur={formik.handleBlur}
                   onChange={formik.handleChange}
                   value={formik.values.email}
                   className={formik.errors.email && formik.touched.email ? 'input-error': ''}
            />
            {formik.errors.name && formik.touched.email && <p className='error'>{formik.errors.email}</p>}
            <label className='form-mobilePhone' htmlFor='mobilePhone'>mobilePhone</label>
            <input type='tel' id='mobilePhone'
                   name='mobilePhone'
                   placeholder='Enter your phoneNumber'
                   onBlur={formik.handleBlur}
                   onChange={formik.handleChange}
                   value={formik.values.mobilePhone}
                   className={formik.errors.mobilePhone && formik.touched.mobilePhone? 'input-error': ''}
            />
            {formik.errors.name && formik.touched.mobilePhone && <p className='error'>{formik.errors.mobilePhone}</p>}
            <button type='submit' className='btn'>Submit</button>
        </form>
    )
}

export default Form