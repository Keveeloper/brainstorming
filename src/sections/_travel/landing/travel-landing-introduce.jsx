import { useEffect, useRef } from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { useMenuRefsStore } from 'src/store/MenuRefsStore';

import { SvgColor } from 'src/components/svg-color';

// ----------------------------------------------------------------------

const SUMMARY = [
  {
    title: 'Networking <br/>con propósito',
    description: 'No vas a coleccionar tarjetas. Vas a hacer conexiones que importan.',
    icon: 'https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/fa7c1cfa-7909-419a-5216-f64e540b0f00/public',
  },
  {
    title: ' Ideas crudas <br/> y reales',
    description: 'Sin slides, sin paja. Historias que no encuentras en YouTube.',
    icon: 'https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/28db379b-87a0-4402-810f-406d372f4600/public',
  },
  {
    title: 'Ambiente <br/>creativo',
    description: 'Buena vibra, buena música y la oportunidad de hablar de negocios sin corbata.',
    icon: 'https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/a757338f-a37a-4f68-ae31-0c048f824700/public',
  },
  {
    title: 'Conversaciones <br/>irreverentes',
    description: 'De esas que te dan ganas de renunciar. O de empezar tu mejor proyecto.',
    icon: 'https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/e4797241-f6a6-4741-81e9-a901023c9600/public',
  },
  {
    title: 'Inspiración <br/>aplicable',
    description: 'Te vas con insights, <br/>no con frases cliché.',
    icon: 'https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/8d094d94-5000-4f3f-0147-562704343000/public',
  },
];

// ----------------------------------------------------------------------

export function HomeTravelLandingIntroduce({ sx, ...other }) {

  // const whyComeRef = useRef(null);
  
  // const setRefs = useMenuRefsStore((state) => state.setRefs);

  // useEffect(() => {
  //   // window.scrollTo({ top: 0, behavior: 'smooth' });
  //   // whyComeRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  //   setRefs({
  //       whyComeRef,
  //   });
  // }, []);

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
                background: '#c106ff',
                width: 130,
                height: 130,
              })}
            />

            <Typography 
              component="h6" 
              variant="h5" 
              sx={(theme) => ({
                mt: 3, 
                mb: 1,
                fontSize: '2rem',
                [theme.breakpoints.up('md')]: { 
                  mt: 3, 
                  mb: 1,
                 },
              })}
              // sx={{ mt: 3, mb: 1, fontSize: '2rem' }} 
              dangerouslySetInnerHTML={{ __html: value.title }} 
            />

            <Typography 
              variant="body2" 
              sx={(theme) => ({
                fontSize: '1.2rem',
                color: 'text.secondary',
                [theme.breakpoints.up('md')]: { 
                  fontSize: '0.875rem',
                  color: 'text.secondary',
                 },
              })}
              // sx={{ color: 'text.secondary', fontSize: '1.2rem' }} 
              dangerouslySetInnerHTML={{ __html: value.description }} 
            />
          </div>
        ))}
      </Box>
    </Container>
  );

  return (
    <div
      // ref={whyComeRef}
    >
      <Box
        component="section"
        sx={[
          { overflow: 'hidden', pt: { xs: 5, md: 10 }, pb: { xs: 5, md: 10 } },
          ...(Array.isArray(sx) ? sx : [sx]),
        ]}
        {...other}
      >
        {/* {renderTexts()} */}
        {/* {renderImage()} */}
        {renderList()}
      </Box>
    </div>
  );
}
