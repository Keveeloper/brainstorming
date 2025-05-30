import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// ----------------------------------------------------------------------

export const componentBoxStyles = {
  flexDirection: 'column',
  alignItems: 'unset',
  justifyContent: 'flex-start',
};

// ----------------------------------------------------------------------

export function FormActions({ sx, disabled, onReset, loading, ...other }) {
  return (
    <Box
      sx={[
        () => ({
          mt: 3,
          gap: 2,
          display: 'flex',
          justifyContent: 'center',
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      {/* <Button color="error" size="large" variant="soft" disabled={disabled} onClick={onReset}>
        Reset
      </Button> */}
      <Button style={{backgroundColor: '#c106ff', color: 'white'}} size="large" type="submit" variant="contained" loading={loading}>
        Reservar mi lugar ahora
      </Button>
    </Box>
  );
}

// ----------------------------------------------------------------------

export function FormGrid({ sx, children, ...other }) {
  return (
    <Box
      sx={[
        () => ({
          rowGap: 5,
          columnGap: 3,
          display: 'grid',
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(3, 1fr)',
          },
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      {children}
    </Box>
  );
}

// ----------------------------------------------------------------------

export function FieldContainer({ sx, children, label = 'RHFTextField' }) {
  return (
    <Box
      sx={[
        () => ({
          gap: 1,
          width: 1,
          display: 'flex',
          flexDirection: 'column',
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <Typography
        variant="caption"
        sx={[
          (theme) => ({
            textAlign: 'start',
            fontStyle: 'italic',
            color: 'white',
            // fontSize: theme.typography.pxToRem(15),
            fontSize: '1.1rem',
          }),
        ]}
      >
        {label}
      </Typography>

      {children}
    </Box>
  );
}
