import { m } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { varAlpha } from 'minimal-shared/utils';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';

import { CONFIG } from 'src/global-config';
import { useMenuRefsStore } from 'src/store/MenuRefsStore';

import { Iconify } from 'src/components/iconify';
import { varFade, AnimateBorder, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

const variants = varFade('inUp', { distance: 24 });

// ----------------------------------------------------------------------

export function HomeHero({ sx, ...other }) {

  const { whatIsItRef, panelistsRef, whyComeRef, aboutAlertaRef, bookingRef } = useMenuRefsStore();

  const slotsProps = {
    button: {
      fullWidth: true,
      size: 'large',
    },
  }

  const handleClick = (e) => {
    e.preventDefault();
    bookingRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  const renderTexts = () => (
    <>
      <m.div variants={variants}>
        <Typography variant="h1">
          {/* <Box
            component="span"
            sx={(theme) => ({
              ...theme.mixins.textGradient(
                `90deg, ${theme.vars.palette.primary.main} 20%, ${theme.vars.palette.secondary.main} 100%`
              ),
            })}
          >
            {`Brain5tormers `}
          </Box> */}
          <Box
          sx={{color: '#c106ff'}}
          >
          Brain5tormers
          </Box>
          Donde las ideas conectan ⚡
        </Typography>
      </m.div>

      <m.div variants={variants}>
        <Typography sx={{ mb: 2, fontSize: '1.3rem' }}>
          Un encuentro para creadores, marketers y mentes que no se apagan. Conecta con quienes están reescribiendo las reglas del juego.
        </Typography>
        <Typography 
          sx={{ fontSize: '1.3rem', fontWeight: 'bold' }}>
          Bogotá: martes 17 de junio – 7:00 PM
        </Typography>
        <Typography 
          sx={{ fontSize: '1.3rem', fontWeight: 'bold' }}>
          Medellín: jueves 19 de junio – 7:00 PM
        </Typography>
        <Typography sx={{ fontSize: '1.3rem', fontWeight: 'bold' }}>
          Sin costo, cupos limitados.
        </Typography>
      </m.div>
    </>
  );

  const renderLabel = () => (
    <m.div variants={variants}>
      <Box
        component="span"
        sx={{
          gap: 0.75,
          display: 'flex',
          alignItems: 'center',
          justifyContent: { xs: 'center', md: 'flex-start' },
        }}
      >
        {/* <Box component="span" sx={{ opacity: 0.48, typography: 'overline' }}>
          Información del evento
        </Box> */}

        {/* <Box
          component="span"
          sx={(theme) => ({
            px: '5px',
            lineHeight: '18px',
            borderRadius: '18px',
            bgcolor: 'background.paper',
            fontWeight: 'fontWeightSemiBold',
            fontSize: theme.typography.pxToRem(11),
            border: `solid 1px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.24)}`,
          })}
        >
          Miércoles 25 de mayo del 2025
        </Box> */}
      </Box>
    </m.div>
  );

  const renderPlatformIcons = () => (
    <Box sx={{ mt: 3, gap: 2.5, display: 'flex' }}>
      {['js', 'ts', 'nextjs', 'vite', 'figma'].map((platform) => (
        <m.div key={platform} variants={variants}>
          <Box
            component="img"
            alt={platform}
            src={`${CONFIG.assetsDir}/assets/icons/platforms/ic-${platform}.svg`}
            sx={[
              (theme) => ({
                width: 24,
                height: 24,
                ...theme.applyStyles('dark', {
                  ...(platform === 'nextjs' && { filter: 'invert(1)' }),
                }),
              }),
            ]}
          />
        </m.div>
      ))}
    </Box>
  );

  const renderContent = () => (
    <MotionViewport
      sx={{
        gap: 5,
        maxWidth: 550,
        display: 'flex',
        flexDirection: 'column',
        alignItems: { xs: 'center', md: 'flex-start' },
        textAlign: { xs: 'center', md: 'left' },
      }}
    >
      {renderTexts()}

      {/* <m.div variants={variants}>
        <Button
          color="inherit"
          size="large"
          variant="contained"
          endIcon={<Iconify icon="carbon:launch" />}
          target="_blank"
          rel="noopener"
          href={paths.figmaUrl}
        >
          Quiero mi entrada
        </Button>
      </m.div> */}
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
          endIcon={<Iconify icon="carbon:launch" />}
          rel="noopener"
          onClick={handleClick}
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
          Quiero mi entrada gratis
        </Button>
      </AnimateBorder>
      

      <div>
        {renderLabel()}
        {/* {renderPlatformIcons()} */}
      </div>
    </MotionViewport>
    
  );

  const renderImage = () => (
    <Box
      component={MotionViewport}
      sx={{ flex: '1 1 auto', bgcolor: 'red', position: 'relative', display: { xs: 'none', md: 'block' } }}
    >
      {/* {Array.from({ length: 7 }, (_, index) => ( */}
        <Box
          // key={index}
          component={m.img}
          variants={varFade('inDown', { distance: 40 })}
          alt="Brainstormers hero section image"
          // src={`${CONFIG.assetsDir}/assets/images/home/hero-${1}.webp`}
          src="https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/e52776e1-3ee2-46f5-181b-5e1635e84900/public"
          sx={{
            top: 0,
            left: 0,
            m: 'auto',
            bottom: 0,
            width: 800,
            // maxWidth: 'unset',
            // zIndex: 9 - index,
            position: 'absolute',
          }}
        />
      {/* // ))} */}
    </Box>
  );

  return (
    <Box
      component="section"
      sx={[
        (theme) => ({
          ...theme.mixins.bgGradient({
            images: [
              `linear-gradient(to bottom, ${varAlpha(theme.vars.palette.background.defaultChannel, 0.9)}, ${varAlpha(theme.vars.palette.background.defaultChannel, 0.9)})`,
              `url(${CONFIG.assetsDir}/assets/background/overlay-1.webp)`,
            ],
          }),
          py: 10,
          overflow: 'hidden',
          position: 'relative',
          [theme.breakpoints.up('md')]: {
            // py: 15,
            pb: 0,
            minHeight: 760,
            // height: '100vh',
            maxHeight: 1440,
            display: 'flex',
            alignItems: 'center',
          },
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Container
        sx={(theme) => ({
          display: 'flex',
          justifyContent: 'center',
          [theme.breakpoints.up('md')]: {
            columnGap: 10,
            alignItems: 'center',
            justifyContent: 'unset',
          },
        })}
      >
        {renderContent()}
        {renderImage()}
      </Container>
    </Box>
  );
}
