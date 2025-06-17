import 'swiper/css';
import 'swiper/css/navigation';

import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

import useParticipants from './hooks/use-participants';


// import useParticipants from '../../hooks/useParticipants';

// ----------------------------------------------------------------------

const customColors = {
    cyan400: '#22D3EE',
    grayBg: '#100E15',
    white: '#FFFFFF',
};
const fontFamilies = {
    turretRoad: 'Turret Road',
    montserrat: 'Montserrat',
};
export function ResetPasswordView() {
    const location = useLocation();
    console.log(location.pathname);
    
    const { participants } = useParticipants(location.pathname === '/medellin' ? 'Medellín' : 'Bogotá');
    return (
      <Box
            sx={{
                position: 'relative',
                width: '100%',
                height: '100vh', // h-screen
            }}
        >
            <Swiper
                loop
                autoplay={{
                  delay: 7000,
                  // disableOnInteraction: false,
                }}
                // navigation
                modules={[Autoplay, Navigation]}
                className="mySwiper" // Mantener si tienes estilos CSS externos para Swiper con esta clase
                // Estilos para el contenedor de Swiper (ya que className en Swiper puede no mapearse directamente)
                style={{ width: '100%', height: '100vh' }}
            >
                {participants?.map((participant) => (
                  <SwiperSlide
                      // SwiperSlide ya tiene style={{display: 'flex'}}, fusionamos los demás
                      style={{
                          display: 'flex',
                          width: '100%',
                          height: '100%',
                          justifyContent: 'center',
                          alignItems: 'center',
                      }}
                  >
                      <Box
                          component="img" // Usa Box como un <img>
                          sx={{
                              position: 'absolute',
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                          }}
                          src="https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/3bb25ac3-453c-4410-d6f4-e73d06876900/public"
                          alt="Brain5tormers tv background image"
                      />
                      <Box
                          component="img"
                          sx={{
                              position: 'absolute',
                              width: '33.333333%', // w-1/3
                              left: 0,
                              top: '50%', // top-[50%]
                              transform: 'translateY(-60%)', // translate-y-[-60%]
                          }}
                          src="https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/2de8fa9f-62ff-48e4-78fe-90ba0691bd00/public"
                          alt="Brain5tormers Technology background 01"
                      />
                      <Box
                          sx={{
                              position: 'absolute',
                              width: '84%', // w-[84%]
                              height: '90%', // h-[90%]
                              right: '80px', // right-20 (20 * 4px = 80px, si usas la escala por defecto de 4px por unidad)
                              top: '40px', // top-10 (10 * 4px = 40px)
                          }}
                      >
                          <Box
                              component="figure" // Usa Box como un <figure>
                              sx={{
                                  position: 'absolute',
                                  width: '27%', // w-[27%]
                                  height: '70%', // h-[70%]
                                  left: '17%', // left-75 (valor custom, asumo 75px)
                                  top: '7%', // top-15 (valor custom, asumo 15px)
                                  backgroundColor: customColors.grayBg, // bg-[#100E15]
                              }}
                          >
                              <Box
                                  component="img"
                                  sx={{
                                      width: '100%',
                                      height: '100%',
                                      objectFit: 'cover',
                                  }}
                                  src={participant.image_url}
                                  // src="https://brainstormers-bucket.s3.us-east-2.amazonaws.com/75ccb88c-308d-4ae7-bff2-d65e47a889c7_IMG_3074.png"
                                  alt="Brain5tormers card background"
                              />
                          </Box>
                          <Box
                              component="img"
                              sx={{
                                  position: 'absolute',
                                  height: '81%', // h-[81%]
                                  right: 0, // right-0
                                  top: 0, // top-0
                              }}
                              src="https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/b9b80e9e-bf69-4503-ad74-548556a01100/public"
                              alt="Brain5tormers card background"
                          />
                          <Box
                              sx={{
                                  position: 'absolute',
                                  width: '43.7%', // w-[43.7%]
                                  right: '64px', // right-16 (16 * 4px = 64px)
                                  top: '120px', // top-30 (30 * 4px = 120px)
                              }}
                          >
                              {/* <h2 className='text-3xl text-white font-[Turret_Road]'> {participant.ocuppation.toUpperCase()}</h2> */}
                              <Typography
                                  sx={{
                                      fontSize: '38px', // text-3xl (30px)
                                      lineHeight: 1,
                                      color: customColors.white, // text-white
                                      fontFamily: fontFamilies.turretRoad, // font-[Turret_Road]
                                  }}
                              >
                                  {participant.ocuppation.toUpperCase()}
                              </Typography>
                              {/* <p className='mb-3 text-cyan-400 text-2xl font-[Turret_Road]'>{participant.professional_power.toUpperCase().substring(0, 32)}</p> */}
                              <Typography
                                  sx={{
                                      marginBottom: '12px', // mb-3 (3 * 4px = 12px)
                                      color: customColors.cyan400, // text-cyan-400
                                      fontSize: '28px', // text-2xl (24px)
                                      lineHeight: 1,
                                      fontFamily: fontFamilies.turretRoad, // font-[Turret_Road]
                                  }}
                              >
                                  {participant.professional_power.toUpperCase().substring(0, 32)}
                              </Typography>
                              {/* <h2 className='mb-3 text-2xl text-white font-[Montserrat]'>{'Me interesa:'.toUpperCase()} <span className='text-cyan-400'>{participant.purpose.toUpperCase()}</span></h2> */}
                              <Typography
                                  sx={{
                                      marginBottom: '12px', // mb-3
                                      fontSize: '28px', // text-2xl
                                      color: customColors.white, // text-white
                                      fontFamily: fontFamilies.montserrat, // font-[Montserrat]
                                  }}
                              >
                                  {'Me interesa: '.toUpperCase()}
                                  <Box component="span" sx={{ color: customColors.cyan400 }}>
                                      {participant.purpose.toUpperCase()}
                                  </Box>
                              </Typography>
                              <Typography
                                  variant="body2" // Ajusta el 'variant'
                                  component="p" // Renderiza como p HTML
                                  sx={{
                                      fontSize: '20px', // text-xl (20px)
                                      color: customColors.white, // text-white
                                      fontWeight: 300, // font-light
                                      fontFamily: fontFamilies.montserrat, // font-[Montserrat]
                                  }}
                              >
                                  {participant.talk_about}
                              </Typography>
                          </Box>
                          <Box
                              sx={{
                                  position: 'absolute',
                                  width: '43.7%', // w-[43.7%]
                                  bottom: '208px', // bottom-52 (52 * 4px = 208px)
                                  right: '64px', // right-16
                                  // height: '100px'
                              }}
                          >
                              <Box
                                  component="img"
                                  sx={{ width: '100%' }} // w-full
                                  src="https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/60e07d0e-d1bd-4796-524d-03d20ebaa700/public"
                                  alt="Brain5tormers card bisel"
                              />
                              <Box
                                  sx={{
                                      padding: '16px', // p-4
                                      paddingRight: '30px',
                                      position: 'absolute',
                                      width: '100%',
                                      // height: '55%', // h-[55%]
                                      top: 0, // top-0
                                      right: 0
                                  }}
                              >
                                  {/* <h2 className='text-3xl text-right text-white font-[Montserrat]'>{participant.email.toUpperCase()}</h2> */}
                                  <Typography
                                      sx={{
                                          fontSize: '28px', // text-3xl
                                          textAlign: 'right', // text-right
                                          color: customColors.white, // text-white
                                          fontFamily: fontFamilies.montserrat, // font-[Montserrat]
                                      }}
                                  >
                                      {participant.email.toUpperCase()}
                                  </Typography>
                              </Box>
                              <Box
                                  sx={{
                                      paddingBottom: '5px', // p-4
                                      paddingRight: '30px', // pr-5 (5 * 4px = 20px)
                                      position: 'absolute',
                                      width: '100%',
                                      // height: '45%', // h-[45%]
                                      bottom: 0, // bottom-0
                                      right: 0
                                  }}
                              >
                                  {/* <h2 className='text-2xl text-right font-[Montserrat]'>{participant.instagram.toUpperCase()}</h2> */}
                                  <Typography
                                      sx={{
                                          fontSize: '24px', // text-2xl
                                          textAlign: 'right', // text-right
                                          fontFamily: fontFamilies.montserrat, // font-[Montserrat]
                                          color: 'black'
                                      }}
                                  >
                                      {participant.instagram.toUpperCase()}
                                  </Typography>
                              </Box>
                          </Box>
                          <Box
                              component="img"
                              sx={{
                                  position: 'absolute',
                                  height: '35%', // h-[35%]
                                  bottom: '-5.4%', // bottom-[-5.4%]
                                  right: '180px', // right-45 (45 * 4px = 180px)
                              }}
                              src="https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/eb0df014-c8c9-42f4-d160-da4af981d700/public"
                              alt="Brain5tormers technology 02"
                          />
                          <Box
                              sx={{
                                  position: 'absolute',
                                  height: '60%', // h-[60%]
                                  left: 0, // left-0
                                  bottom: 0, // bottom-0
                              }}
                          >
                              <Box
                                  component="img"
                                  sx={{ height: '100%' }} // h-full
                                  src="https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/e780e95c-3bb0-4d1c-7f81-1dafdb730800/public"
                                  alt="card name"
                              />
                              <Box
                                  sx={{
                                      position: 'absolute',
                                      width: '85%', // w-[85%]
                                      bottom: '100px', // bottom-25 (25 * 4px = 100px)
                                      left: '50%', // left-[50%]
                                      transform: 'translateX(-50%)', // translate-x-[-50%]
                                  }}
                              >
                                  {/* <h1 className='text-cyan-400 text-right text-5xl font-[Turret_Road]'>{participant.name.toUpperCase()}</h1> */}
                                  <Typography
                                      
                                      sx={{
                                          color: customColors.cyan400, // text-cyan-400
                                          textAlign: 'right', // text-right
                                          fontSize: '48px', // text-5xl (48px)
                                          lineHeight: 1, // lineHeight: '1'
                                          fontFamily: fontFamilies.turretRoad, // font-[Turret_Road]
                                      }}
                                  >
                                      {participant.name.toUpperCase()}
                                  </Typography>
                              </Box>
                              <Box
                                  sx={{
                                      position: 'absolute',
                                      width: '85%', // w-[85%]
                                      bottom: '48px', // bottom-12 (12 * 4px = 48px)
                                      left: '50%', // left-[50%]
                                      transform: 'translateX(-50%)', // translate-x-[-50%]
                                  }}
                              >
                                  <Box
                                      component="img"
                                      sx={{ width: '100%' }} // w-full
                                      src="https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/1c9b0069-7a2b-4c24-6e31-bd487ef36700/public"
                                      alt="company bisel"
                                  />
                                  {/* <h2 className='absolute right-10 top-1 text-2xl text-white font-[Montserrat]'>{participant.event_type.toUpperCase()}</h2> */}
                                  <Typography
                                      sx={{
                                          position: 'absolute',
                                          right: '40px', // right-10 (10 * 4px = 40px)
                                          top: '4px', // top-1 (1 * 4px = 4px)
                                          fontSize: '32px', // text-2xl
                                          lineHeight: 1,
                                          color: customColors.white, // text-white
                                          fontFamily: fontFamilies.montserrat, // font-[Montserrat]
                                      }}
                                  >
                                      {participant.event_type.toUpperCase()}
                                  </Typography>
                              </Box>
                          </Box>
                      </Box>
                  </SwiperSlide>
                ))}
            </Swiper>
        </Box>
        // <div className='relative w-full h-screen'>
        //     <Swiper 
        //         loop
        //         navigation
        //         modules={[Navigation]}
        //         className="mySwiper w-full h-screen"
        //     >
        //         {/* {participants.map((participant) => ( */}
        //             <SwiperSlide 
        //                 style={{display: 'flex'}} 
        //                 className='w-full h-full justify-center items-center'
        //             >
        //                 <img 
        //                     className='absolute w-full h-full object-cover' 
        //                     src="https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/3bb25ac3-453c-4410-d6f4-e73d06876900/public" 
        //                     alt="Brain5tormers tv background image" 
        //                 />
        //                 <img 
        //                     className='absolute w-1/3 left-0 top-[50%] translate-y-[-60%]'
        //                     src="https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/2de8fa9f-62ff-48e4-78fe-90ba0691bd00/public" 
        //                     alt="Brain5tormers Technology background 01" 
        //                 />
        //                 <div className='absolute w-[84%] h-[90%] right-20 top-10'>
        //                     <figure className='absolute w-[27%] h-[70%] left-75 top-15 bg-[#100E15]'>
        //                     <img 
        //                         className='w-full h-full object-cover' 
        //                         // src={participant.image_url}
        //                         src="https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/2de8fa9f-62ff-48e4-78fe-90ba0691bd00/public"
        //                         alt="Brain5tormers card background" 
        //                     />
        //                     </figure>
        //                     <img 
        //                     className='absolute h-[81%] right-0 top-0 opacity' 
        //                     src="https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/b9b80e9e-bf69-4503-ad74-548556a01100/public" 
        //                     alt="Brain5tormers card background" 
        //                     />
        //                     <div className='absolute w-[43.7%] right-16 top-30'>
        //                     {/* <h2 className='text-3xl text-white font-[Turret_Road]'> {participant.ocuppation.toUpperCase()}</h2> */}
        //                     <h2 className='text-3xl text-white font-[Turret_Road]'> Hola</h2>
        //                     {/* <p className='mb-3 text-cyan-400 text-2xl font-[Turret_Road]'>{participant.professional_power.toUpperCase().substring(0, 32)}</p> */}
        //                     <p className='mb-3 text-cyan-400 text-2xl font-[Turret_Road]'>Hola</p>
        //                     {/* <h2 className='mb-3 text-2xl text-white font-[Montserrat]'>{'Me interesa:'.toUpperCase()} <span className='text-cyan-400'>{participant.purpose.toUpperCase()}</span></h2> */}
        //                     <h2 className='mb-3 text-2xl text-white font-[Montserrat]'>Hola<span className='text-cyan-400'>Span</span></h2>
        //                     <p className='text-xl text-white font-light font-[Montserrat]'>
        //                         {/* {participant.talk_about} */}
        //                         Hola
        //                     </p>
        //                     </div>
        //                     <div className='absolute w-[43.7%] bottom-52 right-16'>
        //                     <img 
        //                         className='w-full' 
        //                         src="https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/60e07d0e-d1bd-4796-524d-03d20ebaa700/public" 
        //                         alt="Brain5tormers card bisel" 
        //                     />
        //                     <div className='p-4 absolute w-full h-[55%] top-0'>
        //                         {/* <h2 className='text-3xl text-right text-white font-[Montserrat]'>{participant.email.toUpperCase()}</h2> */}
        //                         <h2 className='text-3xl text-right text-white font-[Montserrat]'>Hola</h2>
        //                     </div>
        //                     <div className='p-4 pr-5 absolute w-full h-[45%] bottom-0'>
        //                         {/* <h2 className='text-2xl text-right font-[Montserrat]'>{participant.instagram.toUpperCase()}</h2> */}
        //                         <h2 className='text-2xl text-right font-[Montserrat]'>Hola</h2>
        //                     </div>
        //                     </div>
        //                     <img 
        //                     className='absolute h-[35%] bottom-[-5.4%] right-45' 
        //                     src="https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/eb0df014-c8c9-42f4-d160-da4af981d700/public" 
        //                     alt="Brain5tormers technology 02" 
        //                     />
        //                     <div className='absolute h-[60%] left-0 bottom-0'>
        //                     <img 
        //                         className='h-full' 
        //                         src="https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/e780e95c-3bb0-4d1c-7f81-1dafdb730800/public" 
        //                         alt="card name" 
        //                     />
        //                     <div className='absolute w-[85%] bottom-25 left-[50%] translate-x-[-50%]'>
        //                         {/* <h1 className='text-cyan-400 text-right text-5xl font-[Turret_Road]'>{participant.name.toUpperCase()}</h1> */}
        //                         <h1 className='text-cyan-400 text-right text-5xl font-[Turret_Road]'>Hola</h1>
        //                     </div>
        //                     <div className='absolute w-[85%] bottom-12 left-[50%] translate-x-[-50%]' >
        //                         <img 
        //                         className='w-full' 
        //                         src="https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/1c9b0069-7a2b-4c24-6e31-bd487ef36700/public" 
        //                         alt="company bisel" 
        //                         />
        //                         {/* <h2 className='absolute right-10 top-1 text-2xl text-white font-[Montserrat]'>{participant.event_type.toUpperCase()}</h2> */}
        //                         <h2 className='absolute right-10 top-1 text-2xl text-white font-[Montserrat]'>Hola</h2>
        //                     </div>
        //                     </div >
        //                 </div>
        //             </SwiperSlide>
        //         {/* ))} */}
        //     </Swiper>
        // </div>
    )

}

// export function ResetPasswordView() {
//   const defaultValues = { email: '' };

//   const methods = useForm({
//     resolver: zodResolver(ResetPasswordSchema),
//     defaultValues,
//   });

//   const {
//     reset,
//     handleSubmit,
//     formState: { isSubmitting },
//   } = methods;

//   const onSubmit = handleSubmit(async (data) => {
//     try {
//       await new Promise((resolve) => setTimeout(resolve, 500));
//       reset();
//       console.info('DATA', data);
//     } catch (error) {
//       console.error(error);
//     }
//   });

//   const renderForm = () => (
//     <Box sx={{ gap: 3, display: 'flex', flexDirection: 'column' }}>
//       <Field.Text name="email" hiddenLabel placeholder="Email address" />

//       <Button
//         fullWidth
//         size="large"
//         color="inherit"
//         type="submit"
//         variant="contained"
//         loading={isSubmitting}
//       >
//         Send request
//       </Button>
//     </Box>
//   );

//   return (
//     <>
//       <FormHead
//         icon={
//           <Box
//             component="img"
//             alt="Reset password"
//             src={`${CONFIG.assetsDir}/assets/icons/auth/ic-lock-password.svg`}
//             sx={{ width: 96, height: 96 }}
//           />
//         }
//         title="Forgot your password?"
//         description={`Please enter the email address associated with your account and we'll email you a link to reset your password.`}
//       />

//       <Form methods={methods} onSubmit={onSubmit}>
//         {renderForm()}
//       </Form>

//       <FormReturnLink href={paths.centered.signIn} />
//     </>
//   );
// }
