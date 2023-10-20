import * as yup from 'yup'

const rulesMaxNumber = /^[0-9]{1,12}$/
const rulesInteger =/^[0-9]+$/
export const makeValidateForm = yup.object().shape({
    name: yup.string()
        .min(5,'Must be more 5 characters')
        .max(30, 'Must be less then 30 characters')
        .required('Please enter your name'),
    email: yup.string().email('Please enter a valid email').required('Please enter your email'),
    mobilePhone: yup.string()
        .matches(rulesInteger, 'Its not a number')
        .matches(rulesMaxNumber, 'Too long number')
        .required('Please enter your phoneNumber')

})