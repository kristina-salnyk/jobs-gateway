import * as yup from 'yup'

const schema = yup
  .object({
    query: yup.string().required('This field is required'),
  })
  .required()

export default schema
