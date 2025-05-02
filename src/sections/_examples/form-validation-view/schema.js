import { z as zod } from 'zod';
import { isValidPhoneNumber } from 'react-phone-number-input/input';

import { fIsAfter } from 'src/utils/format-time';

import { schemaHelper } from 'src/components/hook-form';

export const FieldsSchema = zod
  .object({
    name: zod
      .string()
      .min(1, { message: 'Nombre requerido!' })
      .min(6, { message: 'Mínimo 6 caracteres!' })
      .max(32, { message: 'Máximo 32 caracteres!' }),
    superpower: zod
      .string()
      .min(1, { message: 'Superpoder requerido!' }),
    instagram: zod
      .string()
      .min(1, { message: 'Instagram requerido!' }),
    image: zod
      .string()
      .min(1, { message: 'Imagen requerida!' }),
    email: zod
      .string()
      .min(1, { message: 'Email requerido!' })
      .email({ message: 'El Email debe ser válido!' }),
    age: schemaHelper.nullableInput(
      zod
        .number({ coerce: true })
        .int()
        .min(1, { message: 'Age is required!' }),
        // .max(80, { message: 'Age must be between 1 and 80' }), // message for null value
      { message: 'Age is required!' }
    ),
    price: schemaHelper.nullableInput(
      // handle null value and undefined value
      zod.number({ coerce: true }).min(1, { message: 'Price is required!' }).optional(), // message for null value
      { message: 'Price is required!' }
    ),
    quantity: schemaHelper.nullableInput(
      zod
        .number({ coerce: true })
        .min(1, { message: 'Quantity is required!' })
        .max(99, { message: 'Quantity must be between 1 and 99' }), // message for null value
      { message: 'Quantity is required!' }
    ),
    // phone
    phoneNumber: schemaHelper.phoneNumber({ isValid: isValidPhoneNumber }),
    // code
    code: zod
      .string()
      .min(1, { message: 'Code is required!' })
      .min(6, { message: 'Code must be at least 6 characters!' }),
    // date
    startDate: schemaHelper.date({ message: { required: 'Start date is required!' } }),
    endDate: schemaHelper.date({ message: { required: 'End date is required!' } }),
    // password
    password: zod
      .string()
      .min(1, { message: 'Password is required!' })
      .min(6, { message: 'Password is too short!' }),
    confirmPassword: zod.string().min(1, { message: 'Confirm password is required!' }),
    // autocomplete
    autocomplete: schemaHelper.nullableInput(zod.custom(), {
      message: 'Autocomplete is required!',
    }),
    // country
    singleCountry: zod.string().min(1, { message: 'Single country is required!' }),
    multiCountry: zod.string().array().min(2, { message: 'Must have at least 2 items!' }),
    // select
    singleSelect: zod.string().min(1, { message: 'Single select is required!' }),
    profession: zod.string().min(1, { message: 'Profesión es requerida!' }),
    area: zod.string().min(1, { message: 'Área es requerida!' }),
    goal: zod.string().min(1, { message: 'El objetivo es requerida!' }),
    multiSelect: zod.string().array().min(2, { message: 'Must have at least 2 items!' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match!',
    path: ['confirmPassword'],
  })
  .refine((data) => !fIsAfter(data.startDate, data.endDate), {
    message: 'End date cannot be earlier than start date!',
    path: ['endDate'],
  });

export const ControlsSchema = zod.object({
  // rating
  rating: zod.number().min(1, { message: 'Rating is required!' }),
  // radio
  radioGroup: zod.string().min(1, { message: 'Choose at least one option!' }),
  // checkbox
  checkbox: schemaHelper.boolean({ message: 'Checkbox is required!' }),
  multiCheckbox: zod.string().array().min(1, { message: 'Choose at least one option!' }),
  // switch
  switch: schemaHelper.boolean({ message: 'Switch is required!' }),
  multiSwitch: zod.string().array().min(1, { message: 'Choose at least one option!' }),
  // slider
  slider: zod.number().min(10, { message: 'Mininum value is >= 10' }),
  sliderRange: schemaHelper.sliderRange({
    min: 20,
    max: 80,
  }),
});
