import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import { Logo } from 'src/components/logo';

// ----------------------------------------------------------------------

export function HomeFooter({ sx, ...other }) {
  return (
    <Box component="footer" sx={[{ py: 8 }, ...(Array.isArray(sx) ? sx : [sx])]} {...other}>
      <Container
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Logo isSingle sx={{ mb: 1 }} />

        <Box component="span" sx={{ color: 'text.secondary', typography: 'caption' }}>
          © All rights reserved.
        </Box>
        <a href="https://www.instagram.com/brain5tormers?igsh=MTNiOWUxOGF1N3kxbQ==">
          <img
            style={{marginTop: 10, width: '25px'}}
            src="https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/56e333ea-359f-470f-d694-b6048e323200/public" 
            alt="Brain5tormers instagram logo" 
          />
        </a>
      </Container>
    </Box>
  );
}
