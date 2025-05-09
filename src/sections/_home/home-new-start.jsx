import { m } from 'framer-motion';
import { useRef, useEffect } from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { useMenuRefsStore } from 'src/store/MenuRefsStore';

import { varFade, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

const variants = varFade('inUp', { distance: 24 });

// ----------------------------------------------------------------------

export function HomeNewStart({ sx, ...other }) {  

  const whatIsItRef = useRef(null);
  
  const setRefs = useMenuRefsStore((state) => state.setRefs);

  useEffect(() => {
    setRefs({
      whatIsItRef,
    });
  }, []);

  return (
    <Box
      ref={whatIsItRef}
      component="section"
      sx={[{ pt: { xs: 10, md: 10 }, pb: { xs: 5, md: 10 } }, ...(Array.isArray(sx) ? sx : [sx])]}
      {...other}
    >
      <Container component={MotionViewport}>
        <Box
          sx={(theme) => ({
            p: 4,
            gap: 3,
            height: 'auto',
            display: 'flex',
            borderRadius: 3,
            textAlign: 'center',
            alignItems: 'center',
            flexDirection: 'column-reverse',
            bgcolor: 'background.neutral',
            [theme.breakpoints.up('md')]: { 
              // height: '700px',
              flexDirection: 'row'
             },
          })}
        >
          <m.div variants={variants} style={{width: '40%'}}>
            <Box>
                <Typography variant="h3" 
                sx={(theme) => ({
                  textAlign: 'center',
                  // fontSize: '2.5rem',
                  [theme.breakpoints.up('md')]: { 
                    textAlign: 'start',
                    fontSize: '2.5rem',
                    lineHeight: 'normal'
                   },
                })}>
                  Más que un evento,
                  <Box
                    sx={{color: '#00fff2'}}>
                    es una tormenta de oportunidades.
                  </Box>
                </Typography>

                <Typography
                  sx={(theme) => ({
                    mt: 3,
                    textAlign: 'center',
                    color: 'white', 
                    maxWidth: 480,
                    [theme.breakpoints.up('md')]: { 
                      textAlign: 'start',
                      fontSize: '1rem'
                    },
                  })}
                >
                  Brain5tormers es una experiencia en vivo para creativos, marketers, estrategas, emprendedores y 
                  líderes que buscan ampliar sus oportunidades haciendo mejores conexiones en Colombia y el exterior. 
                  Paneles honestos. Conexiones reales.
                </Typography>
            </Box>
          </m.div>
          <m.div variants={variants} style={{width: '60%'}}>
            <Box
            width={{width: '100%'}}
              component="img"
              sx={{borderRadius: 2}}
              loading="lazy"
              alt="Cover"
              // src={`${CONFIG.assetsDir}/assets/images/home/desktop-mouse-keyboard.webp`}
              src="https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/7033e937-a2f2-4429-d954-bacd03287f00/public"
            />
          </m.div>
        </Box>
      </Container>
    </Box>
  );
}
