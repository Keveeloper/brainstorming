import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/global-config';

import { varFade, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

const variants = varFade('inUp', { distance: 24 });

// ----------------------------------------------------------------------

export function HomeNewStart({ sx, ...other }) {
  return (
    <Box
      component="section"
      sx={[{ pt: { xs: 10, md: 15 }, pb: { xs: 5, md: 10 } }, ...(Array.isArray(sx) ? sx : [sx])]}
      {...other}
    >
      <Container component={MotionViewport}>
        <Box
          sx={{
            px: 3,
            gap: 3,
            pb: 10,
            display: 'flex',
            borderRadius: 3,
            textAlign: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            bgcolor: 'background.neutral',
          }}
        >
          <m.div variants={variants}>
            <Box
              component="img"
              loading="lazy"
              alt="Cover"
              src={`${CONFIG.assetsDir}/assets/images/home/desktop-mouse-keyboard.webp`}
              sx={{ width: 720 }}
            />
          </m.div>

          <m.div variants={variants}>
            <Typography variant="overline" sx={{ color: 'text.disabled' }}>
              Esto no es un evento. Es un cortocircuito de ideas.
            </Typography>
          </m.div>

          <m.div variants={variants}>
            <Typography variant="h2">
              ¿Qué es
              <Box
                component="span"
                sx={(theme) => ({
                  ...theme.mixins.textGradient(
                    `90deg, ${theme.vars.palette.primary.main} 20%, ${theme.vars.palette.secondary.main} 100%`
                  ),
                })}
              >
                {` Brainstormers? `}
              </Box>
            </Typography>
          </m.div>

          <m.div variants={variants}>
            <Typography sx={{ color: 'text.secondary', maxWidth: 480 }}>
              Brainstormers es una experiencia en vivo para creativos, marketers, estrategas, emprendedores y 
              líderes que entienden que las mejores ideas no nacen solas. Paneles honestos. Conexiones reales. 
              Casos que inspiran. Preguntas incómodas. Y sí, buena música y tragos también.
            </Typography>
          </m.div>
        </Box>
      </Container>
    </Box>
  );
}
