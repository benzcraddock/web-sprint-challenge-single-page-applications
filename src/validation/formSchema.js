import * as yup from 'yup';

const formSchema = yup.object().shape({
  username: yup
    .string()
    .trim()
    .required('Name is required.'),
  size: yup
    .string()
    .oneOf(['small', 'medium', 'large'], 'Size is required.'),
  sauce : yup
    .string()
    .oneOf(['marinara', 'pesto', 'bbq', 'spicy'], 'Sauce is required.'),
  topping1: yup.boolean(),
  topping2: yup.boolean(),
  topping3: yup.boolean(),
  topping4: yup.boolean()
})

export default formSchema;