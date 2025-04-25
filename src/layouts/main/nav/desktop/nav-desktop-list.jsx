import { useBoolean } from 'minimal-shared/hooks';
import { useRef, useEffect, useCallback } from 'react';
import { isActiveLink, isExternalLink } from 'minimal-shared/utils';

import { usePathname } from 'src/routes/hooks';

import { useMenuRefsStore } from 'src/store/MenuRefsStore';

import { NavItem } from './nav-desktop-item';
import { NavSubList } from './nav-desktop-sub-list';
import { Nav, NavLi, NavUl, NavDropdown } from '../components';

// ----------------------------------------------------------------------

export function NavList({ data, sx, ...other }) {
  const pathname = usePathname();
  const navItemRef = useRef(null);

  const isActive = isActiveLink(pathname, data.path, !!data.children);
  const { value: open, onFalse: onClose, onTrue: onOpen } = useBoolean();

  const mainList = data?.children?.filter((list) => list.subheader !== 'Common');
  const commonList = data?.children?.find((list) => list.subheader === 'Common');

  const { whatIsItRef } = useMenuRefsStore();

  useEffect(() => {
    if (open) {
      onClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const handleOpenMenu = useCallback(() => {
    if (data.children) {
      onOpen();
    }
  }, [data.children, onOpen]);

  const handleClick = useCallback(() => {
    console.log(navItemRef.current?.getAttribute('aria-label'));
    
    switch (navItemRef.current?.getAttribute('aria-label')) {
      case '¿Qué es?':
        whatIsItRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        break;
      case 'Panelistas':
        // panelistsRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case '¿Por qué venir?':
        // whyComeRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'Sobre Alerta':
        // aboutAlertaRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break;
    }
    
    
  }, []);

  const renderNavItem = () => (
    <NavItem
      ref={navItemRef}
      // slots
      path={data.path}
      title={data.title}
      // state
      open={open}
      active={isActive}
      // options
      hasChild={!!data.children}
      externalLink={isExternalLink(data.path)}
      // action
      onMouseEnter={handleOpenMenu}
      onMouseLeave={onClose}
      onClick={handleClick}
    />
  );

  const renderDropdown = () =>
    !!data.children && (
      <NavDropdown open={open} onMouseEnter={handleOpenMenu} onMouseLeave={onClose}>
        <Nav>
          <NavUl sx={{ gap: { xs: 3, lg: 5 }, flexDirection: 'row' }}>
            {mainList?.map((list) => (
              <NavSubList
                key={list.subheader}
                subheader={list.subheader}
                coverUrl={list.coverUrl}
                items={list.items}
              />
            ))}

            {commonList && <NavSubList subheader={commonList.subheader} items={commonList.items} />}
          </NavUl>
        </Nav>
      </NavDropdown>
    );

  return (
    <NavLi sx={sx} {...other}>
      {renderNavItem()}
      {renderDropdown()}
    </NavLi>
  );
}
