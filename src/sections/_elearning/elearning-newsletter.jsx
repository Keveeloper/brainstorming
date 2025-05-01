import { m } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import InputBase from '@mui/material/InputBase';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';

import { CONFIG } from 'src/global-config';

import { Iconify } from 'src/components/iconify';
import { Field, Form } from 'src/components/hook-form';

import { ComponentBox } from '../_examples/layout';
import { FieldsSchema } from '../_examples/form-validation-view/schema';
import { FieldContainer, FormActions, componentBoxStyles } from '../_examples/form-validation-view/components';

// ----------------------------------------------------------------------

const defaultValues = {
  email: '',
  fullName: '',
  // handle number with 0, null, undefined
  age: null,
  price: undefined,
  quantity: 0,
  // phone and code
  code: '',
  phoneNumber: '',
  // password
  password: '',
  confirmPassword: '',
  // date
  endDate: null,
  // country
  singleCountry: '',
  multiCountry: [],
  // select
  singleSelect: '',
  multiSelect: [],
  autocomplete: null,
};

export function HomeElearningNewsletter({ sx, ...other }) {

  const methods = useForm({
    resolver: zodResolver(FieldsSchema),
    defaultValues,
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      reset();
      console.info('DATA', data);
    } catch (error) {
      console.error(error);
    }
  });

  const renderBase = () => (
    <>
      <FieldContainer>
        <Field.Text name="name" label="Nombre de pila" helperText="¿Cuál es tu nombre de pila (o cómo te gusta que te llamen)?" />
      </FieldContainer>

      <FieldContainer>
        <Field.Text name="email" label="Email address" />
      </FieldContainer>

      <FieldContainer>
        <Field.Text name="age" label="Age" type="number" />
      </FieldContainer>

      <FieldContainer>
        <Field.Text
          name="price"
          label="Price"
          placeholder="0.00"
          type="number"
          slotProps={{
            inputLabel: { shrink: true },
            input: {
              startAdornment: (
                <InputAdornment position="start" sx={{ mr: 0.75 }}>
                  <Box component="span" sx={{ color: 'text.disabled' }}>
                    $
                  </Box>
                </InputAdornment>
              ),
            },
          }}
        />
      </FieldContainer>

      <FieldContainer label="RHFNumberInput" sx={{ alignItems: 'flex-start' }}>
        <Field.NumberInput
          name="quantity"
          helperText={
            <>
              <Iconify width={16} icon="solar:info-circle-bold" />
              Helper text
            </>
          }
          sx={{ maxWidth: 120 }}
        />
      </FieldContainer>
    </>
  );

  return (
    <Box
      component="section"
      sx={[
        {
          overflow: 'hidden',
          position: 'relative',
          bgcolor: 'common.black',
          py: { xs: 10, md: 15 },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          my: 'auto',
          width: 760,
          height: 760,
          opacity: 0.24,
          position: 'absolute',
          transform: 'translateX(-50%)',
        }}
      >
        <Box
          component={m.img}
          animate={{ rotate: 360 }}
          transition={{ duration: 60, ease: 'linear', repeat: Infinity }}
          alt="Texture"
          loading="lazy"
          src={`${CONFIG.assetsDir}/assets/background/texture-3.webp`}
        />
      </Box>

      <Container>
        <Box sx={{ mx: 'auto', maxWidth: 480, textAlign: 'center', color: 'common.white' }}>
          <Typography variant='h3' sx={{ gap: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#29e6ff'}}>
            Regístrate ahora y no te pierdas este evento
          </Typography>

          <Typography sx={{ mt: 3, mb: 5, opacity: 0.64 }}>
            Llena la información requerida en los siguientes campos.
          </Typography>

          <Form methods={methods} onSubmit={onSubmit}>
            {/* {debug && <ValuesPreview onCloseDebug={onCloseDebug} />} */}
            <FormActions
              loading={isSubmitting}
              disabled={Object.keys(errors).length === 0}
              onReset={() => reset()}
            />
            <ComponentBox title="Base" sx={componentBoxStyles}>
              {renderBase()}
            </ComponentBox>
          </Form>
        </Box>
      </Container>
    </Box>
  );
}
