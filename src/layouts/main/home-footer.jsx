import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import { Logo } from 'src/components/logo';

// ----------------------------------------------------------------------

export function HomeFooter({ sx, ...other }) {
  return (
    <Box component="footer" sx={[{ py: 4 }, ...(Array.isArray(sx) ? sx : [sx])]} {...other}>
      <Box sx={{py: 5, display: 'flex', flexDirection: 'column', alignItems: 'center', bgcolor: '#28323d'}}>
        <Logo isSingle sx={{ mb: 1 }} />
        <hr style={{width: '100px', height: '2.5px'}} />
        <a 
          style={{textDecoration: 'none', color: '#00fff2', display: 'flex', justifyContent: 'center', alignItems: 'center'}}
          href="https://www.instagram.com/brain5tormers?igsh=MTNiOWUxOGF1N3kxbQ=="
        >
          <img
            style={{marginRight: 10, width: '25px'}}
            src="https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/56e333ea-359f-470f-d694-b6048e323200/public" 
            alt="Brain5tormers instagram logo" 
          />
          Síguenos en instagram
        </a>
      </Box>
      <Box component="span" sx={{py: 2, color: 'text.secondary', typography: 'caption', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        © All rights reserved.
      </Box>
    </Box>
  );
}
