import { m } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { varAlpha } from 'minimal-shared/utils';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { useMenuRefsStore } from 'src/store/MenuRefsStore';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

const variants = varFade('inDown', { distance: 24 });

// ----------------------------------------------------------------------

export function HomeMinimalUI({ sx, ...other }) {
  const aboutAlertaRef = useRef(null);
        
  const setRefs = useMenuRefsStore((state) => state.setRefs);

  useEffect(() => {
    setRefs({
      aboutAlertaRef,
    });
  }, []);

  const renderContent = () => (
    <Box sx={{ p: { md: 10 }, textAlign: { xs: 'center', md: 'left' } }}>
      <m.div variants={variants}>
        {/* <Typography variant="overline" sx={{ color: 'text.disabled' }}>
          Alerta Creative
        </Typography> */}
      </m.div>

      <m.div variants={variants}>
        <Typography variant="h3" sx={{ my: 3, color: '#00fff2', fontSize: '2rem' }}>
          ¿Quién está detrás del caos creativo?
        </Typography>
      </m.div>

      <m.div variants={variants}>
        <Typography
          sx={{ maxWidth: 360, color: 'white', fontSize: '1.2rem', mx: { xs: 'auto', md: 'unset' } }}
        >
          Alerta Creative es una agencia multicultural que produce ideas con coraje. 
          Campañas, estrategias y conceptos que conectan marcas con emociones reales 
          en toda Hispanoamérica.
        </Typography>
      </m.div>

      <m.div variants={variants}>
        <Button
          size="large"
          color="inherit"
          variant="outlined"
          target="_blank"
          rel="noopener"
          href="https://wearealerta.com/"
          endIcon={<Iconify width={16} icon="carbon:chevron-right" />}
          sx={{ mt: 5, mb: { xs: 5, md: 0 } }}
        >
          Visitar Alerta
        </Button>
      </m.div>
    </Box>
  );

  const renderImage = () => (
    <m.div variants={varFade('in')}>
      <Box
        component="img"
        loading="lazy"
        alt="Minimal dashboard"
        // src={`${CONFIG.assetsDir}/assets/images/home/minimal-dashboard.webp`}
        src="https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/0e0f27c8-e533-4284-0186-4004a266be00/public"
        sx={(theme) => ({
          width: 480,
          borderRadius: 2,
          filter: `drop-shadow(0px 48px 80px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.24)})`,
          ...theme.applyStyles('dark', {
            filter: `drop-shadow(0px 48px 80px ${varAlpha(theme.vars.palette.common.blackChannel, 0.48)})`,
          }),
          [theme.breakpoints.up('md')]: {
            top: 0,
            right: '10%',
            bottom: 0,
            my: 'auto',
            width: '100%',
            position: 'absolute',
          },
        })}
      />
    </m.div>
  );

  return (
    <div
      ref={aboutAlertaRef}
    >
      <Box
        component="section"
        sx={[
          { pt: { xs: 5, md: 10 }, pb: { xs: 10, md: 10 }, overflow: 'hidden' },
          ...(Array.isArray(sx) ? sx : [sx]),
        ]}
        {...other}
      >
        <Container component={MotionViewport}>
          <Grid
            container
            sx={[
              { alignItems: 'center', justifyContent: 'space-between' },
              (theme) => ({
                borderRadius: 3,
                backgroundImage: {
                  md: `linear-gradient(to right, transparent 25%, ${varAlpha(theme.vars.palette.grey['500Channel'], 0.16)} 100%)`,
                },
              }),
            ]}
          >
            <Grid size={{ xs: 12, md: 6, lg: 5 }}>
              {renderContent()}
            </Grid>

            <Grid
              sx={{ position: 'relative', textAlign: { xs: 'center', md: 'unset' } }}
              size={{ xs: 12, md: 6, lg: 6 }}
            >
              {renderImage()}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}
