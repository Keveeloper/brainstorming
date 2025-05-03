import { useRef } from 'react';
import { useBoolean } from 'minimal-shared/hooks';
import { isActiveLink, isExternalLink } from 'minimal-shared/utils';

import Collapse from '@mui/material/Collapse';

import { paths } from 'src/routes/paths';
import { usePathname } from 'src/routes/hooks';

import { useMenuRefsStore } from 'src/store/MenuRefsStore';

import { NavSectionVertical } from 'src/components/nav-section';

import { NavLi } from '../components';
import { NavItem } from './nav-mobile-item';

// ----------------------------------------------------------------------

export function NavList({ data, sx, onClose, ...other }) {
  const pathname = usePathname();
  const navItemRef = useRef(null);

  const isNotRootOrDocs = !['/', paths.docs].includes(pathname);
  const isNotComponentsPath = !pathname.startsWith(paths.components);
  const isOpenPath = !!data.children && isNotRootOrDocs && isNotComponentsPath;

  const isActive = isActiveLink(pathname, data.path, !!data.children);

  const { value: open } = useBoolean(isOpenPath);

  const { whatIsItRef, panelistsRef, whyComeRef, aboutAlertaRef } = useMenuRefsStore();

  const handleClick = () => {    
    switch (navItemRef.current?.getAttribute('aria-label')) {
      case '¿Qué es?':
        onClose();
        whatIsItRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'Panelistas':
        onClose();
        panelistsRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case '¿Por qué venir?':
        onClose();
        whyComeRef.current?.scrollIntoView({behavior: 'smooth', block: 'start'});
        break;
      case 'Sobre Alerta':
        onClose();
        aboutAlertaRef.current?.scrollIntoView({behavior: 'smooth', block: 'start'});
        break;
      default:
        break;
    }
  };

  const renderNavItem = () => (
    <NavItem
      ref={navItemRef}
      // slots
      path={data.path}
      icon={data.icon}
      title={data.title}
      // state
      open={open}
      active={isActive}
      // options
      hasChild={!!data.children}
      externalLink={isExternalLink(data.path)}
      // actions
      onClick={handleClick}
    />
  );

  const renderCollapse = () =>
    !!data.children && (
      <Collapse in={open}>
        <NavSectionVertical
          data={data.children}
          sx={{ px: 1.5 }}
          slotProps={{
            rootItem: {
              sx: [{ minHeight: 32 }],
            },
          }}
        />
      </Collapse>
    );

  return (
    <NavLi sx={sx} {...other}>
      {renderNavItem()}
      {renderCollapse()}
    </NavLi>
  );
}
