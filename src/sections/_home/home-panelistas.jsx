import { useRef, useEffect } from "react";
import { varAlpha } from 'minimal-shared/utils';

import { Box, Grid, Container, Typography } from "@mui/material";

import { CONFIG } from "src/global-config";
import { useMenuRefsStore } from "src/store/MenuRefsStore";

import { MotionViewport } from "src/components/animate";
import { Image, imageClasses } from 'src/components/image';
import {
    Carousel,
    useCarousel,
    CarouselDotButtons,
    CarouselArrowBasicButtons,
} from 'src/components/carousel';

const transition = (theme) =>
    theme.transitions.create(['opacity', 'transform'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.short,
});

const penalist = [
    {
        id: 1,
        role: 'Director Creativo',
        name: 'Danilo Álvarez',
        copy: 'Tras liderar grupos creativos en Walt Disney World en Florida y Discovery Communications en Washington DC, Danilo hoy comparte el liderazgo de Alerta con sus socios Johann y Álvaro, ayudando a marcas Estadounidenses a conectarse de manera relevante y auténtica con audiencias hispanohablantes en Latinoamérica y Estados Unidos.',
        photoUrl: 'https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/1e9c4e80-b034-4271-0eb1-58a90ec2c700/public'
    },
    {
        id: 2,
        name: 'Johann Gamez',
        role: 'Director de Operaciones',
        copy: `Como COO y socio en Alerta, Johann combina visión estratégica con una gran capacidad para ejecutar. 
               Le apasiona hacer que las cosas funcionen, liderando equipos y proyectos con precisión y compromiso. 
               Su enfoque detallista y mirada a futuro lo convierten en un motor clave del crecimiento dentro de 
               un entorno siempre cambiante.`,
        photoUrl: 'https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/3595a8fd-5eb7-406f-5b9f-f0b0699be500/public'
    },
    {
        id: 3,
        name: 'Alvaro Pérez-Kattar',
        role: 'Director Comercial',
        copy: `Álvaro es socio y Director Comercial en Alerta, donde une su pasión por contar historias con una 
               fuerte intuición estratégica. Con experiencia en medios, coaching y emprendimiento, disfruta acompañar 
               a marcas y personas a descubrir su voz. Siempre en movimiento, busca ideas que inspiren y generen impacto real.`,
        photoUrl: 'https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/938d72ab-61dd-4dc9-df86-e65f89237300/public'
    }
]

export function HomePanelistas({ sx, ...other }) {

    const panelistsRef = useRef(null);
    const panelistsMobileRef = useRef(null);
      
    const setRefs = useMenuRefsStore((state) => state.setRefs);

    const carousel = useCarousel({
        slideSpacing: '32px',
        slidesToShow: { xs: 1, sm: 2, lg: 3, xl: 4 },
    });

    useEffect(() => {
        setRefs({
            panelistsRef,
            panelistsMobileRef
        });
    }, []);

    return(
        <>
            <Box
                ref={panelistsRef}
                component="section"
                // sx={
                //     [{ pt: { xs: 10, md: 8 }, pb: { xs: 5, md: 10 } }, ...(Array.isArray(sx) ? sx : [sx]), {display: { xs: 'none', md: 'flex' },}]
                // }
                sx={[
                    (theme) => ({
                        ...theme.mixins.bgGradient({
                        images: [
                            `linear-gradient(to bottom, ${varAlpha(theme.vars.palette.common.blackChannel, 0.9)}, ${varAlpha(theme.vars.palette.common.blackChannel, 0.9)})`,
                            `url(${CONFIG.assetsDir}/assets/background/overlay-2.webp)`,
                        ],
                        }),
                        overflow: 'hidden',
                        position: 'relative',
                        py: { xs: 10, md: 12 },
                    }),
                    ...(Array.isArray(sx) ? sx : [sx]),
                    {display: { xs: 'none', md: 'flex' },}
                ]}
                {...other}
            >
                <Container component={MotionViewport}>
                <Typography variant="h5" sx={{ color: '#8299ae', fontSize: '1.5rem', textAlign: 'center' }}>
                    Panelistas
                </Typography>
                <Typography
                    variant="h3"
                    sx={{mb: 4, color: '#00fff2', textAlign: 'center'}}
                >
                    ¿Y quiénes agitan la tormenta?
                </Typography>
                <Grid 
                    container 
                    spacing={4}
                    display="flex"
                    justifyContent="center"
                >
                    {penalist.map((item, index) => (
                        <Grid
                            key={index}
                            xs={12}
                            sm={4}
                            display="flex"
                            flexDirection="column"
                            justifyContent="space-between"
                        >
                            <Box
                                sx={{
                                    borderRadius: 2,
                                    overflow: 'hidden',
                                    position: 'relative',
                                    width: 1,
                                    maxWidth: 320,
                                    '&:hover': {
                                    '& .content': { opacity: 1 },
                                    [`& .${imageClasses.root}`]: { transform: 'scale(1.06)' },
                                    [`& .${imageClasses.overlay}`]: { opacity: 1 },
                                    },
                                }}
                            >
                                <Box
                                    className="content"
                                    sx={{
                                    p:4,
                                    py: 3,
                                    left: 0,
                                    width: 1,
                                    zIndex: 9,
                                    bottom: 0,
                                    opacity: 0,
                                    transition,
                                    display: 'flex',
                                    position: 'absolute',
                                    justifyContent: 'center',
                                    textAlign: 'center',
                                    }}
                                >
                                    {item.copy}
                                </Box>
                                <Image
                                    alt='Nombre'
                                    // src={`${CONFIG.assetsDir}/assets/images/portrait/portrait-1.webp`}
                                    src={item.photoUrl}
                                    ratio="9/16" 
                                    sx={{ transition }}
                                    slotProps={{
                                        overlay: {
                                            sx: (theme) => ({
                                            transition,
                                            opacity: 0,
                                            backgroundImage: `linear-gradient(to bottom, transparent 0%, ${
                                                theme.vars.palette.common.black
                                            } 75%)`,
                                            }),
                                        },
                                    }}
                                />
                            </Box>
                            <Typography variant="h6" sx={{ mt: 2.5, mb: 0.5, fontSize: '1.3rem !important', textAlign: 'center' }}>
                                {item.name}
                            </Typography>
                            {/* <Typography variant="body2" sx={{ color: 'text.disabled', textAlign: 'center' }}>
                                {item.role}
                            </Typography> */}
                        </Grid>
                    ))}

                    {/* Fila 2: 2 panelistas centrados */}
                    {/* <Grid item xs={12}>
                    <Grid container justifyContent="center" spacing={4}>
                        <Grid
                            item
                            // key={index}
                            xs={12}
                            sm={4}
                            md={3}
                            display="flex"
                            flexDirection="column"
                            justifyContent="center"
                        >
                            <Box
                            sx={{
                                borderRadius: 2,
                                overflow: 'hidden',
                                position: 'relative',
                                width: 1,
                                maxWidth: 320,
                                '&:hover': {
                                '& .content': { opacity: 1 },
                                [`& .${imageClasses.root}`]: { transform: 'scale(1.06)' },
                                [`& .${imageClasses.overlay}`]: { opacity: 1 },
                                },
                            }}
                            >
                            <Box
                                className="content"
                                sx={{
                                    p:4,
                                py: 3,
                                left: 0,
                                width: 1,
                                zIndex: 9,
                                bottom: 0,
                                opacity: 0,
                                transition,
                                display: 'flex',
                                position: 'absolute',
                                justifyContent: 'center',
                                textAlign: 'center',
                                }}
                            >
                                Tras liderar grupos creativos en Walt Disney World, en Florida y DiscoveryCommunications en Washington, Danilo abrió su propia agencia de publicidad en Nueva York, donde ayuda a marcas americanas a conectarse con audiencias latinas.
                            </Box>

                            <Image
                                alt='Nombre'
                                src={`${CONFIG.assetsDir}/assets/images/portrait/portrait-1.webp`}
                                // src="https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/784c13a9-86e3-4432-68c1-eff87234d400/public"
                                ratio="9/16"
                                sx={{ transition }}
                                slotProps={{
                                overlay: {
                                    sx: (theme) => ({
                                    transition,
                                    opacity: 0,
                                    backgroundImage: `linear-gradient(to bottom, transparent 0%, ${
                                        theme.vars.palette.common.black
                                    } 75%)`,
                                    }),
                                },
                                }}
                            />
                            </Box>
                            <Typography variant="h6" sx={{ mt: 2.5, mb: 0.5, textAlign: 'center' }}>
                                Nombre
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.disabled', textAlign: 'center' }}>
                                Role
                            </Typography>
                        </Grid>
                        <Grid
                            item
                            // key={index}
                            xs={12}
                            sm={4}
                            md={3}
                            display="flex"
                            flexDirection="column"
                            justifyContent="center"
                        >
                            <Box
                            sx={{
                                borderRadius: 2,
                                overflow: 'hidden',
                                position: 'relative',
                                width: 1,
                                maxWidth: 320,
                                '&:hover': {
                                '& .content': { opacity: 1 },
                                [`& .${imageClasses.root}`]: { transform: 'scale(1.06)' },
                                [`& .${imageClasses.overlay}`]: { opacity: 1 },
                                },
                            }}
                            >
                            <Box
                                className="content"
                                sx={{
                                    p:4,
                                py: 3,
                                left: 0,
                                width: 1,
                                zIndex: 9,
                                bottom: 0,
                                opacity: 0,
                                transition,
                                display: 'flex',
                                position: 'absolute',
                                justifyContent: 'center',
                                textAlign: 'center',
                                }}
                            >
                                Tras liderar grupos creativos en Walt Disney World, en Florida y DiscoveryCommunications en Washington, Danilo abrió su propia agencia de publicidad en Nueva York, donde ayuda a marcas americanas a conectarse con audiencias latinas.
                            </Box>

                            <Image
                                alt='Nombre'
                                src={`${CONFIG.assetsDir}/assets/images/portrait/portrait-1.webp`}
                                // src="https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/42bb0ec0-ab70-4a30-c801-df4daf286800/public"
                                ratio="9/16"
                                sx={{ transition }}
                                slotProps={{
                                overlay: {
                                    sx: (theme) => ({
                                    transition,
                                    opacity: 0,
                                    backgroundImage: `linear-gradient(to bottom, transparent 0%, ${
                                        theme.vars.palette.common.black
                                    } 75%)`,
                                    }),
                                },
                                }}
                            />
                            </Box>
                            <Typography variant="h6" sx={{ mt: 2.5, mb: 0.5, textAlign: 'center' }}>
                                Nombre
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.disabled', textAlign: 'center' }}>
                                Role
                            </Typography>
                        </Grid>
                    </Grid>
                    </Grid> */}
                </Grid>
                </Container>
            </Box>
            <Box
                ref={panelistsMobileRef}
                component="section"
                sx={[
                (theme) => ({
                    ...theme.mixins.bgGradient({
                    images: [
                        `linear-gradient(to bottom, ${varAlpha(theme.vars.palette.common.blackChannel, 0.8)}, ${varAlpha(theme.vars.palette.common.blackChannel, 0.8)})`,
                        `url(${CONFIG.assetsDir}/assets/background/overlay-2.webp)`,
                    ],
                    }),
                    overflow: 'hidden',
                    position: 'relative',
                    py: { xs: 10, md: 20 },
                }),
                ...(Array.isArray(sx) ? sx : [sx]),
                {display: { xs: 'flex', md: 'none' },}
                ]}
                {...other}
            >
                <Container>
                <Grid container spacing={{ xs: 5, md: 3 }} sx={{ justifyContent: { md: 'space-between' } }}>
                    <Grid
                    size={{ xs: 12, md: 4 }}
                    sx={{
                        gap: 3,
                        display: 'flex',
                        flexDirection: 'column',
                        textAlign: { xs: 'center', md: 'unset' },
                    }}
                    >
                    <Typography variant="overline" sx={{ color: '#8299ae', fontSize: '1.3rem' }}>
                        Panelistas
                    </Typography>
        
                    <Typography
                        variant="h2"
                        sx={(theme) => ({
                            fontSize: '2.2rem',
                        ...theme.mixins.textGradient(
                            `90deg, ${'#00fff2'} 20%, ${'#00fff2'} 100%`
                        ),
                        })}
                    >
                        ¿Y quiénes agitan la tormenta?
                    </Typography>
        
                    <CarouselArrowBasicButtons
                        {...carousel.arrows}
                        options={carousel.options}
                        sx={{
                        gap: 1,
                        mt: 'auto',
                        color: 'primary.main',
                        display: { xs: 'none', md: 'flex' },
                        }}
                    />
                    </Grid>
        
                    <Grid size={{ xs: 12, md: 7 }}>
                    <Box sx={{ width: { md: 'calc(50vw + 120px)' } }}>
                        <Carousel carousel={carousel}>
                        {penalist.map((item, index) => (
                            <MemberItem key={item.id} item={item} sx={{ color: 'common.white' }} />
                        ))}
                        </Carousel>
                    </Box>
                    </Grid>
                </Grid>
        
                <CarouselDotButtons
                    scrollSnaps={carousel.dots.scrollSnaps}
                    selectedIndex={carousel.dots.selectedIndex}
                    onClickDot={carousel.dots.onClickDot}
                    sx={{
                        // mt: 5,
                        color: 'primary.main',
                        justifyContent: 'center',
                        display: { xs: 'flex', md: 'none' },
                    }}
                />
                </Container>
            </Box>
        </>
    );
}

export function MemberItem({ item, sx, ...other }) {  
    return (
      <Box sx={sx} {...other}>
        <Box
          sx={{
            borderRadius: 2,
            overflow: 'hidden',
            position: 'relative',
            '&:hover': {
              '& .content': { opacity: 1 },
              [`& .${imageClasses.root}`]: { transform: 'scale(1.06)' },
              [`& .${imageClasses.overlay}`]: { opacity: 1 },
            },
          }}
        >
          <Box
            className="content"
            sx={{
              p: 4,
              py: 3,
              left: 0,
              width: 1,
              zIndex: 9,
              bottom: 0,
              opacity: 0,
              transition,
              display: 'flex',
              position: 'absolute',
              justifyContent: 'center',
              textAlign: 'center',
            }}
          >
            {/* {renderSocials()} */}
            {item.copy}
          </Box>
  
          <Image
            alt={item.name}
            src={item.photoUrl}
            ratio="9/16"
            sx={{ transition }}
            slotProps={{
              overlay: {
                sx: (theme) => ({
                  transition,
                  opacity: 0,
                  backgroundImage: `linear-gradient(to bottom, transparent 0%, ${
                    theme.vars.palette.common.black
                  } 75%)`,
                }),
              },
            }}
          />
        </Box>
  
        <Typography variant="h6" sx={{ mt: 2.5, mb: 0.5, textAlign: 'center' }}>
          {item.name}
        </Typography>
        {/* <Typography variant="body2" sx={{ color: 'text.disabled', textAlign: 'center' }}>
          {item.role}
        </Typography> */}
      </Box>
    );
  }