import axios from 'axios';
import { m } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { useEffect, useRef, useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Backdrop from '@mui/material/Backdrop';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

import { CONFIG } from 'src/global-config';
import { useMenuRefsStore } from 'src/store/MenuRefsStore';

import { Form, Field } from 'src/components/hook-form';

import { ComponentBox } from '../_examples/layout';
import { FieldsSchema } from '../_examples/form-validation-view/schema';
import { FormActions, FieldContainer, componentBoxStyles } from '../_examples/form-validation-view/components';

// ----------------------------------------------------------------------

const defaultValues = {
  city: '',
  email: '',
  fullName: '',
  // handle number with 0, null, undefined
  age: null,
  price: undefined,
  quantity: 0,
  // phone and code
  TalkToUs: '',
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
  // singleSelect: '',
  profession: '',
  area: '',
  superpower: '',
  find: '',
  instagram: '',
  // image: '',
  multiSelect: [],
  autocomplete: null,
};

const OPTIONS_CITY = [
  { value: 'Medellin', label: 'MEDELLIN' },
  { value: 'Bogota', label: 'BOGOTA' },
];

const OPTIONS_PROFESSION = [
  { value: 'Soy emprendedor en modo ninja', label: 'Soy emprendedor en modo ninja' },
  { value: 'Trabajo en una empresa pero quiero mi propio negocio', label: 'Trabajo en una empresa pero quiero mi propio negocio' },
  { value: 'Soy ejecutivo/a de una empresa', label: 'Soy ejecutivo/a de una empresa' },
  { value: 'Estoy en transición y buscando mi próximo gran movimiento', label: 'Estoy en transición y buscando mi próximo gran movimiento' },
];

const OPTIONS_AREA = [
  { value: 'Marketing', label: 'Marketing' },
  { value: 'Branding', label: 'Branding' },
  { value: 'Ventas', label: 'Ventas' },
  { value: 'Tecnología', label: 'Tecnología' },
  { value: 'Producción', label: 'Producción' },
];

const OPTIONS_FIND = [
  { value: 'Conectar con socios o aliados estratégicos', label: 'Conectar con socios o aliados estratégicos' },
  { value: 'Conseguir nuevos clientes', label: 'Conseguir nuevos clientes' },
  { value: 'Inspiración y nuevas ideas', label: 'Inspiración y nuevas ideas' },
  { value: 'Aprender de personas valiosas', label: 'Aprender de personas valiosas' },
  { value: 'Todo lo anterior, obvio', label: 'Todo lo anterior, obvio' },
];

const OPTIONS_READY = [
  { value: 'Sí, muéstrame cómo asegurar mi cupo', label: 'Sí, muéstrame cómo asegurar mi cupo' },
  { value: 'Quiero saber más antes de pagar', label: 'Quiero saber más antes de pagar' },
  { value: 'No lo sé, pero tengo FOMO', label: 'No lo sé, pero tengo FOMO' },
];

export function HomeElearningNewsletter({ sx, ...other }) {
  const [value, setValue] = useState();
  const bookingRef = useRef(null);
  const setRefs = useMenuRefsStore((state) => state.setRefs);
  useEffect(() => {
    setRefs({
      bookingRef,
    });
  }, []);

  const methods = useForm({
    resolver: zodResolver(FieldsSchema),
    defaultValues,
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = methods;

  // const onSubmit = handleSubmit(async (data) => {
  //   try {
  //     await new Promise((resolve) => setTimeout(resolve, 3000));
  
  //     try {
  //       const response = await axios.post('https://brainstormersapi.com/register-user', {
  //         name: data.fullName,
  //         email: data.email,
  //         number: data.phoneNumber,
  //         ocuppation: data.profession,
  //         talk_about: data.TalkToUs,
  //         instagram: data.instagram,
  //         best_area: data.area,
  //         purpose: data.find,
  //         professional_power: data.superpower,
  //         event_type: data.city.normalize("NFD").replace(/[\u0300-\u036f]/g, ""),
  //         event_status: "Registered"
  //       }, {
  //         headers: {
  //           'Content-Type': 'application/json',
  //           'Accept': 'application/json'
  //         }
  //       });
  
  //       console.log('Respuesta:', response.data);
  //       console.info('DATA', data);
  
  //       // Subir imagen con FormData
  //       // const formData = new FormData();
  //       // formData.append("file", data.image, "Foto de perfil");
  
  //       // const resImage = await axios.post(`https://brainstormersapi.com/upload-image/${response.data}`, formData, {
  //       //   headers: {
  //       //     'Content-Type': 'multipart/form-data'
  //       //   }
  //       // });
  
  //       // console.log('Respuesta API image:', resImage.data);
  //       reset();
  //     } catch (error) {
  //       console.error('Error al enviar el formulario:', error);
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // });

  const onSubmit = handleSubmit(async (data) => {    
    try {
      console.log('image: ', value);
      
      await new Promise((resolve) => setTimeout(resolve, 3000));
      try {
        const response = await axios.post('https://brainstormersapi.com/register-user', {
          name: data.fullName,
          email: data.email,
          number: data.phoneNumber,
          ocuppation: data.profession,
          talk_about: data.TalkToUs,
          instagram: data.instagram,
          best_area: data.area,
          purpose: data.find,
          professional_power: data.superpower,
          // event_type: data.city.normalize("NFD").replace(/[\u0300-\u036f]/g, ""),
          event_type: "Bogota",
          event_status: "Registered"
        }, {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        });
        console.log('Respuesta:', response.data);
        console.info('DATA', data);
        const formData = new FormData();
        // formData.append("file", value, "Foto de perfil");
        // console.log('formData: ', formData);
        
        const resImage = await axios.post(`https://brainstormersapi.com/upload-image/${response.data}`, {
          file: value
        }, {
          headers: {
            // 'Content-Type': 'application/json',
            'Content-Type': 'multipart/form-data'
          }
        });
        console.log('Respuesta API image:', resImage.data);
        reset();
      } catch (error) {
        console.error('Error al enviar el formulario:', error);
      }
    } catch (error) {
      console.error(error);
    }
  });

  const imagePathToIFormFile = async (imagePath, fileName) => {
    try {
      const response = await fetch(imagePath);
      const blob = await response.blob();
      const file = new File([blob], fileName);
      return file;
    } catch (error) {
      console.error("Error converting to IFormFile:", error);
      return null;
    }
  }

  const renderBase = () => (
    <>
      <FieldContainer label="¿A qué ciudad quieres ir?">
        <Field.Select name="city" label="Seleccione una ciudad">
          <MenuItem value="">None</MenuItem>
          <Divider sx={{ borderStyle: 'dashed' }} />
          {OPTIONS_CITY.map((option) => (
            <MenuItem key={option.value} value={option.label}>
              {option.label}
            </MenuItem>
          ))}
        </Field.Select>
      </FieldContainer>

      <FieldContainer label="¿Cuál es tu nombre de pila (o cómo te gusta que te llamen)?">
        <Field.Text name="fullName" label="Nombre completo"/>
      </FieldContainer>

      <FieldContainer label="¿Y a qué correo debemos enviarte las coordenadas secretas del evento?">
        <Field.Text name="email" label="Email address"/>
      </FieldContainer>

      <FieldContainer label="Tu número de WhatsApp, por si necesitamos mandarte memes… digo, información importante">
        <Field.Phone name="phoneNumber" label="Phone number" country="CO" />
      </FieldContainer>

      <FieldContainer label="¿A qué te dedicas actualmente?">
        <Field.Select name="profession" label="Seleccione una opción">
          <MenuItem value="">None</MenuItem>
          <Divider sx={{ borderStyle: 'dashed' }} />
          {OPTIONS_PROFESSION.map((option) => (
            <MenuItem key={option.value} value={option.label}>
              {option.label}
            </MenuItem>
          ))}
        </Field.Select>
      </FieldContainer>
      
      <FieldContainer label="¿En qué área te mueves como pez en el agua?">
        <Field.Select name="area" label="Área" helperText="">
          <MenuItem value="">None</MenuItem>
          <Divider sx={{ borderStyle: 'dashed' }} />
          {OPTIONS_AREA.map((option) => (
            <MenuItem key={option.value} value={option.label}>
              {option.label}
            </MenuItem>
          ))}
        </Field.Select>
      </FieldContainer>

      <FieldContainer label="Háblanos más al respecto">
        <Field.Text name="TalkToUs" label="Háblanos más"/>
      </FieldContainer>

      <FieldContainer label="¿Cuál es tu súperpoder profesional?">
        <Field.Text name="superpower" label="Súperpoder"/>
      </FieldContainer>

      <FieldContainer label="¿Qué te gustaría encontrar en este evento?">
        <Field.Select name="find" label="Qué te gustaría encontrar">
          <MenuItem value="">None</MenuItem>
          <Divider sx={{ borderStyle: 'dashed' }} />
          {OPTIONS_READY.map((option) => (
            <MenuItem key={option.value} value={option.label}>
              {option.label}
            </MenuItem>
          ))}
        </Field.Select>
      </FieldContainer>

      <FieldContainer label="Déjanos tu @ de instagram obviamente!">
        <Field.Text name="instagram" label="@john_doe"/>
      </FieldContainer>

      {/* <FieldContainer label="Carga tu imagen de perfil">
        <Field.Text
          name="image"
          // label="Imagen de perfil"
          type="file"
          // value={value}
          inputProps={{ accept: 'image/*' }}
          onChange={(e) => {
            if (e.target.files && e.target.files[0]) {
              setValue('image', e.target.files[0]); // guardar el objeto File
            }
          }}
        />
      </FieldContainer> */}
      <input
        type="file"
        accept="image/*"
        onChange={(e) => {
          if (e.target.files && e.target.files[0]) {
            setValue(e.target.files[0]); // guardar el objeto File
          }
        }}
      />

      

    </>
  );

  return (
    <Box
      ref={bookingRef}
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
          <Typography variant='h3' sx={{ gap: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#29e6ff'}} dangerouslySetInnerHTML={{ __html: 'Regístrate ahora <br/>y no te pierdas este evento' }} />

          <Typography sx={{ mt: 3, mb: 5, opacity: 0.64 }}>
            Llena la información requerida en los siguientes campos.
          </Typography>

          {isSubmitting && (
            <Backdrop open sx={[(theme) => ({ zIndex: theme.zIndex.modal + 1 })]}>
              <CircularProgress color="warning" />
            </Backdrop>
          )}
          <Form methods={methods} onSubmit={onSubmit}>
            <ComponentBox title="Reserva tu lugar ahora" sx={componentBoxStyles}>
              {renderBase()}
            </ComponentBox>
            <FormActions
              loading={isSubmitting}
              disabled={Object.keys(errors).length === 0}
              onReset={() => reset()}
            />
          </Form>
          {/* <FormValidationView/> */}
        </Box>
      </Container>
    </Box>
  );
}
