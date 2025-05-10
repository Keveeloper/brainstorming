import axios from 'axios';
import { m } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { varAlpha } from 'minimal-shared/utils';
import { useEffect, useRef, useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Backdrop from '@mui/material/Backdrop';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

import { CONFIG } from 'src/global-config';
import useImageFileStore from 'src/store/ImageFileStore';
import { useMenuRefsStore } from 'src/store/MenuRefsStore';

import { Iconify } from 'src/components/iconify';
import { Form, Field } from 'src/components/hook-form';
import { varFade, AnimateBorder, MotionViewport } from 'src/components/animate';

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
  company: '',
  area: '',
  superpower: '',
  find: '',
  instagram: '',
  image: '',
  multiSelect: [],
  autocomplete: null,
};

const OPTIONS_CITY = [
  { value: 'Medellin', label: 'Medellin' },
  { value: 'Bogota', label: 'Bogota' },
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

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  maxWidth: '90%',
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

export function HomeElearningNewsletter({ sx, ...other }) {
  const slotsProps = {
    button: {
      fullWidth: true,
      size: 'large',
    },
  }
  const [apiErrors, setApiErrors] = useState('');
  const { file, imageRef } = useImageFileStore();
  const [open, setOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const bookingRef = useRef(null);
  const setRefs = useMenuRefsStore((state) => state.setRefs);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
          company: data.company,
          professional_power: data.superpower,
          event_type: data.city,
          event_status: "Registered"
        }, {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        });
        console.log('Respuesta:', response.data);
        console.info('DATA', data);  
        console.info('Image ref', imageRef);  
        // const formData = new FormData();
        // formData.append('file', file);

        // const resImage = await axios.post(`https://brainstormersapi.com/upload-image/${response.data}`, formData, {
        //   headers: {
        //     'Content-Type': 'multipart/form-data'
        //   }
        // });   
        if (imageRef?.current?.files?.[0]) {
          convertToPng(imageRef?.current?.files?.[0]).then((pngFile) => {
            console.log('Archivo convertido a PNG:', pngFile);
            const resImage = axios.post(`https://brainstormersapi.com/upload-image/${response.data}`, {
              file: imageRef?.current?.files?.[0]
            }, {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            });
            console.log('Respuesta API image:', resImage.data);
            setOpen(true);
            setSuccessMessage(true);
            reset();
          }).catch(console.error);
        }
        
      } catch (error) {
        console.error('Error al enviar el formulario:', error);
        setOpen(true);
        setSuccessMessage(false);
        setApiErrors(error.message);
        reset();
      }
    } catch (error) {
      setOpen(true);
      setSuccessMessage(false);
      setApiErrors(error.message);
      reset();
      console.error(error);
    }
  });

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
        <Field.Text name="profession" label="Tu profesión"/>
      </FieldContainer>

      {/* <FieldContainer label="¿A qué te dedicas actualmente?">
        <Field.Select name="profession" label="Seleccione una opción">
          <MenuItem value="">None</MenuItem>
          <Divider sx={{ borderStyle: 'dashed' }} />
          {OPTIONS_PROFESSION.map((option) => (
            <MenuItem key={option.value} value={option.label}>
              {option.label}
            </MenuItem>
          ))}
        </Field.Select>
      </FieldContainer> */}

      <FieldContainer label="¿En qué compañía trabajas?">
        <Field.Text name="company" label="Nombre de la empresa"/>
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
          {OPTIONS_FIND.map((option) => (
            <MenuItem key={option.value} value={option.label}>
              {option.label}
            </MenuItem>
          ))}
        </Field.Select>
      </FieldContainer>

      <FieldContainer label="Déjanos tu @ de instagram obviamente!">
        <Field.Text name="instagram" label="@john_doe"/>
      </FieldContainer>

      <FieldContainer label="Carga tu imagen de perfil">
        <Field.Text
          name="image"
          type="file"
          inputProps={{ accept: 'image/png' }}
        />
      </FieldContainer>
      {/* <input
        required
        type="file"
        accept="image/*"
        onChange={(e) => {
          if (e.target.files && e.target.files[0]) {
            setValue(e.target.files[0]);
          }
        }}
      /> */}
    </>
  );

  async function convertToPng(fileImage) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
  
      reader.onload = () => {
        const img = new Image();
        img.onload = () => {
          // Crear canvas con las dimensiones de la imagen original
          const canvas = document.createElement('canvas');
          canvas.width = img.width;
          canvas.height = img.height;
  
          // Dibujar la imagen en el canvas
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0);
  
          // Convertir canvas a blob en formato PNG
          canvas.toBlob((blob) => {
            if (blob) {
              const pngFile = new File([blob], `${file.name.split('.')[0]}.png`, {
                type: 'image/png',
              });
              resolve(pngFile);
            } else {
              reject(new Error('Error al convertir la imagen a PNG'));
            }
          }, 'image/png');
        };
        img.onerror = reject;
        img.src = reader.result;
      };
  
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  return (
    <Box
      ref={bookingRef}
      component="section"
      sx={[
        {
          overflow: 'hidden',
          position: 'relative',
          bgcolor: 'common.black',
          py: { xs: 5, md: 15 },
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

      <Box sx={{mb: 5, pt: 3, pb: 3, background: '#00fff2'}}>
        <Typography 
          variant='h3' 
          sx={(theme) => ({
            margin: '0 auto',
            width: '90%',
            gap: 2, 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            color: 'black',
            fontSize: '1.8rem',
            textAlign: 'center',
            lineHeight: 'normal',
            mb: 2,
            [theme.breakpoints.up('md')]: { 
              gap: 2, 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              color: 'black',
            },
          })}
          // sx={{ gap: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'black'}} 
          dangerouslySetInnerHTML={{ __html: 'Regístrate ahora y no te pierdas este evento' }} 
        />
        <Typography sx={{ color: 'black', textAlign: 'center', lineHeight: 'normal' }}>
          Llena la información requerida en los siguientes campos.
        </Typography>
      </Box>
      <Container>
        <Box sx={{ mx: 'auto', maxWidth: 800, textAlign: 'center', color: 'common.white' }}>

          {isSubmitting && (
            <Backdrop open sx={[(theme) => ({ zIndex: theme.zIndex.modal + 1 })]}>
              <CircularProgress color="warning" />
            </Backdrop>
          )}
          <Form methods={methods} onSubmit={onSubmit}>
            <ComponentBox title="Reserva tu lugar ahora" sx={componentBoxStyles}>
              {renderBase()}
            </ComponentBox>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={modalStyle}>
                <Typography 
                  id="modal-modal-title" 
                  variant="h6" 
                  component="h2"
                  sx={{color: successMessage ? '#00fff2' : '#c106ff'}}
                >
                  {successMessage ? 'Ya estás dentro 🤘' : 'Algo salió mal 🫨'}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2, mb: 2 }}>
                  {successMessage ? 'Tu formulario fue enviado con éxito. Te esperamos en el evento 🙌' : `Lo sentimos, tu formulario no se pudo enviar, revisa que tu email esté correcto e intenta de nuevo más tarde. Error: ${apiErrors}`}
                  {/* {successMessage ? apiErrors : apiErrors} */}
                </Typography>
                <AnimateBorder
                  sx={[
                    {
                      borderRadius: 1,
                      position: 'relative',
                      bgcolor: '#c106ff',
                      color: 'white',
                    },
                    ...(Array.isArray(sx) ? sx : [sx]),
                  ]}
                  duration={6}
                  slotProps={{
                    outlineColor: (theme) =>
                      `linear-gradient(135deg, ${varAlpha(theme.vars.palette.primary.mainChannel, 0.04)}, ${varAlpha(theme.vars.palette.warning.mainChannel, 0.04)})`,
                    primaryBorder: {
                      size: 32,
                      width: '2px',
                      sx: (theme) => ({
                        color: theme.vars.palette.primary.main,
                      }),
                    },
                    secondaryBorder: {
                      sx: (theme) => ({
                        color: theme.vars.palette.warning.main,
                      }),
                    },
                  }}
                >
                  <Button
                    variant="text"
                    target="_blank"
                    // endIcon={<Iconify icon="carbon:launch" />}
                    rel="noopener"
                    onClick={handleClose}
                    // href={paths.zoneStore}
                    {...slotsProps?.button}
                    sx={[
                      { px: 2, borderRadius: 'inherit' },
                      ...(Array.isArray(slotsProps?.button?.sx)
                        ? ({
                        button: {
                          fullWidth: true,
                          size: 'large',
                        },
                      }?.button?.sx ?? [])
                        : [slotsProps?.button?.sx]),
                    ]}
                  >
                    Aceptar
                  </Button>
                </AnimateBorder>
              </Box>
            </Modal>
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
