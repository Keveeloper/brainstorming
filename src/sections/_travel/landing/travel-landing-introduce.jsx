import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/global-config';

import { Iconify } from 'src/components/iconify';
import { SvgColor } from 'src/components/svg-color';

// ----------------------------------------------------------------------

const iconPath = (name) => `${CONFIG.assetsDir}/assets/icons/solid-64/${name}`;

const SUMMARY = [
  {
    title: ' Ideas crudas y reales',
    description: 'Sin slides, sin paja. Historias que no encuentras en YouTube.',
    icon: 'https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/fa7c1cfa-7909-419a-5216-f64e540b0f00/public',
  },
  {
    title: 'Networking con propósito',
    description: 'No vas a coleccionar tarjetas. Vas a hacer conexiones que importan.',
    icon: 'https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/28db379b-87a0-4402-810f-406d372f4600/public',
  },
  {
    title: 'Conversaciones irreverentes',
    description: 'De esas que te dan ganas de renunciar. O de empezar tu mejor proyecto.',
    icon: 'https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/a757338f-a37a-4f68-ae31-0c048f824700/public',
  },
  {
    title: 'Inspiración aplicable',
    description: 'Te vas con insights, no con frases cliché.',
    icon: 'https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/e4797241-f6a6-4741-81e9-a901023c9600/public',
  },
  {
    title: 'Ambiente creativo',
    description: 'Buena vibra, buena música y la oportunidad de hablar de negocios sin corbata.',
    icon: 'https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/8d094d94-5000-4f3f-0147-562704343000/public',
  },
];

// ----------------------------------------------------------------------

export function HomeTravelLandingIntroduce({ sx, ...other }) {
  const containerOffset = 'calc((100vw - 1200px) / 2)';

  const renderList = () => (
    <Container sx={{ textAlign: 'center' }}>
      <Box
        sx={{
          display: 'grid',
          gap: { xs: 5, md: 3 },
          gridTemplateColumns: { xs: 'repeat(1, 1fr)', md: 'repeat(5, 1fr)' },
        }}
      >
        {SUMMARY.map((value) => (
          <div key={value.title}>
            <SvgColor
              src={value.icon}
              sx={(theme) => ({
                // background: `linear-gradient(to bottom, ${theme.vars.palette.primary.light}, ${theme.vars.palette.primary.main})`,
                background: '#c400d0',
                width: 130,
                height: 130,
              })}
            />

            <Typography component="h6" variant="h5" sx={{ mt: 3, mb: 1 }}>
              {value.title}
            </Typography>

            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {value.description}
            </Typography>
          </div>
        ))}
      </Box>
    </Container>
  );

  const renderTexts = () => (
    <Container>
      <Box
        sx={{
          maxWidth: 480,
          mx: { xs: 'auto', md: 'unset' },
          textAlign: { xs: 'center', md: 'unset' },
        }}
      >
        <Typography variant="h2" sx={{ mb: 3 }}>
          Explore a different way to travel
        </Typography>
        <Typography sx={{ color: 'text.secondary' }}>
          Cras ultricies mi eu turpis hendrerit fringilla. Nulla consequat massa quis enim.
        </Typography>
      </Box>
    </Container>
  );

  const renderCard = () => (
    <Card
      sx={(theme) => ({
        p: 5,
        top: 24,
        left: 24,
        zIndex: 9,
        right: 24,
        bottom: 24,
        display: 'flex',
        textAlign: 'center',
        position: 'absolute',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        [theme.breakpoints.up('sm')]: {
          right: 'auto',
          bottom: 'auto',
          textAlign: 'unset',
          alignItems: 'unset',
          justifyContent: 'unset',
        },
        [theme.breakpoints.up('md')]: { top: 40, left: 40, maxWidth: 360 },
        [theme.breakpoints.up('lg')]: { top: 64, left: 64 },
      })}
    >
      <Typography variant="overline" sx={{ color: 'text.disabled' }}>
        Device
      </Typography>

      <Typography component="h6" variant="h4" sx={{ my: 3 }}>
        The more important the work
      </Typography>

      <Box
        sx={{
          gap: 1,
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer',
          color: 'primary.main',
          typography: 'subtitle1',
          '&:hover': { opacity: 0.72 },
        }}
      >
        <Iconify width={22} icon="solar:play-outline" /> Watch video
      </Box>
    </Card>
  );

  const renderImage = () => (
    <Container
      sx={(theme) => ({
        px: 0,
        my: { xs: 5, md: 10 },
        position: 'relative',
        [theme.breakpoints.up('sm')]: { px: 0 },
        [theme.breakpoints.up('md')]: { my: 10 },
        [theme.breakpoints.up('lg')]: { px: 3 },
      })}
    >
      {renderCard()}

      <Box
        component="img"
        loading="lazy"
        alt="Travel cover"
        src={`${CONFIG.assetsDir}/assets/images/travel/travel-large-1.webp`}
        sx={(theme) => ({
          minHeight: 320,
          objectFit: 'cover',
          [theme.breakpoints.up('lg')]: {
            maxWidth: 'unset',
            width: `calc(100vw - ${containerOffset})`,
          },
        })}
      />
    </Container>
  );

  return (
    <Box
      component="section"
      sx={[
        { overflow: 'hidden', pt: { xs: 10, md: 15 }, pb: { xs: 5, md: 10 } },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      {/* {renderTexts()} */}
      {/* {renderImage()} */}
      {renderList()}
    </Box>
  );
}
