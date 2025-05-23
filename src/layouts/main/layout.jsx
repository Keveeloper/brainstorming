import { useBoolean } from 'minimal-shared/hooks';

import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';

import { usePathname } from 'src/routes/hooks';

import { Logo } from 'src/components/logo';

import { Footer } from './footer';
import { NavMobile } from './nav/mobile';
import { NavDesktop } from './nav/desktop';
import { HomeFooter } from './home-footer';
import { navData } from '../nav-config-main';
import { MainSection } from '../core/main-section';
import { MenuButton } from '../components/menu-button';
import { LayoutSection } from '../core/layout-section';
import { HeaderSection } from '../core/header-section';
import { PurchaseButton } from '../components/purchase-button';
import { SettingsButton } from '../components/settings-button';

// ----------------------------------------------------------------------

export function MainLayout({ sx, cssVars, children, slotProps, layoutQuery = 'md' }) {
  const pathname = usePathname();

  const { value: open, onFalse: onClose, onTrue: onOpen } = useBoolean();

  const homePage = pathname === '/';

  const renderHeader = () => {
    const headerSlots = {
      topArea: (
        <Alert severity="info" sx={{ display: 'none', borderRadius: 0 }}>
          This is an info Alert.
        </Alert>
      ),
      leftArea: (
        <>
          {/** @slot Nav mobile */}
          <MenuButton
            onClick={onOpen}
            sx={(theme) => ({
              mr: 1,
              ml: -1,
              [theme.breakpoints.up(layoutQuery)]: { display: 'none' },
            })}
          />
          <NavMobile data={navData} open={open} onClose={onClose} />

          {/** @slot Logo */}
          <Logo />
        </>
      ),
      centerArea: (
        <NavDesktop
          data={navData}
          sx={(theme) => ({
            display: 'none',
            [theme.breakpoints.up(layoutQuery)]: { display: 'flex' },
          })}
        />
      ),
      rightArea: (
        <Box sx={{ gap: 1, display: 'flex', alignItems: 'center' }}>
          {/** @slot Searchbar */}
          {/* <Searchbar /> */}

          {/** @slot Language popover */}
          {/* <LanguagePopover data={langs} /> */}

          {/** @slot Settings button */}
          {/* <SettingsButton /> */}

          {/** @slot Purchase button */}
          {/* <PurchaseButton sx={{ display: { xs: 'none', [layoutQuery]: 'inline-flex' } }} /> */}
          <a href="https://www.instagram.com/brain5tormers?igsh=MTNiOWUxOGF1N3kxbQ==">
            <img
              style={{marginLeft: 30, width: '25px'}}
              src="https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/56e333ea-359f-470f-d694-b6048e323200/public" 
              alt="Brain5tormers instagram logo" 
            />
          </a>
        </Box>
      ),
    };

    return (
      <HeaderSection
        layoutQuery={layoutQuery}
        {...slotProps?.header}
        slots={{ ...headerSlots, ...slotProps?.header?.slots }}
        slotProps={slotProps?.header?.slotProps}
        sx={slotProps?.header?.sx}
      />
    );
  };

  const renderFooter = () => (homePage ? <HomeFooter /> : <Footer layoutQuery={layoutQuery} />);

  const renderMain = () => <MainSection {...slotProps?.main}>{children}</MainSection>;

  return (
    <LayoutSection
      /** **************************************
       * @Header
       *************************************** */
      headerSection={renderHeader()}
      /** **************************************
       * @Footer
       *************************************** */
      footerSection={renderFooter()}
      /** **************************************
       * @Styles
       *************************************** */
      cssVars={cssVars}
      sx={sx}
    >
      {renderMain()}
    </LayoutSection>
  );
}
