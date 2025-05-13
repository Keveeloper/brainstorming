import { varAlpha } from 'minimal-shared/utils';

import { useMediaQuery } from '@mui/material';
import { styled } from '@mui/material/styles';

// ----------------------------------------------------------------------

export function ComponentBox({ title, sx, children, ...other }) {
  const isMobile = useMediaQuery('(max-width: 640px)');
  return (
    <ComponentBoxRoot sx={sx} {...other}>
      {title && <ComponentBoxLabel isMobile={isMobile}>{title}</ComponentBoxLabel>}
      {children}
    </ComponentBoxRoot>
  );
}

// ----------------------------------------------------------------------

const ComponentBoxRoot = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexWrap: 'wrap',
  position: 'relative',
  alignItems: 'center',
  rowGap: theme.spacing(3),
  columnGap: theme.spacing(2),
  justifyContent: 'center',
  padding: theme.spacing(6, 3),
  borderRadius: theme.shape.borderRadius * 1.5,
  backgroundColor: varAlpha(theme.vars.palette.grey['500Channel'], 0.04),
  boxShadow: `0 0 0 1px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.16)}`,
}));

const ComponentBoxLabel = styled('span')(({ theme, isMobile }) => ({
  width: isMobile && '250px',
  top: -40,
  left: '50%',
  // transform: 'translate(-50%, 18px)',
  position: 'absolute',
  padding: '8px 16px',
  color: theme.vars.palette.text.primary,
  borderRadius: theme.shape.borderRadius * 2,
  // backgroundColor: theme.vars.palette.common.white,
  transform: 'translate(-50%, -50%)',
  fontSize: isMobile ? '1.rem' : '1.1rem',
  fontWeight: theme.typography.fontWeightSemiBold,
  // border: `solid 1px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.24)}`,
  ...theme.applyStyles('dark', {
    // backgroundColor: theme.vars.palette.background.neutral,
    // backgroundColor: '#c106ff',
  }),
}));
