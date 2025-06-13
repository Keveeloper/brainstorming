import { BackToTopButton } from 'src/components/animate/back-to-top-button';
import { ScrollProgress, useScrollProgress } from 'src/components/animate/scroll-progress';

import { HomeElearningNewsletter } from 'src/sections/_elearning/elearning-newsletter';
import { HomeTravelLandingIntroduce } from 'src/sections/_travel/landing/travel-landing-introduce';

import { HomeHero } from '../home-hero';
import { HomeSponsor } from '../home-sponsor';
import { HomeNewStart } from '../home-new-start';
import { HomePanelistas } from '../home-panelistas';
import { HomeMinimalUI } from '../home-combination';

// ----------------------------------------------------------------------

export function HomeView() {
  const pageProgress = useScrollProgress();

  return (
    <>
      <ScrollProgress
        variant="linear"
        progress={pageProgress.scrollYProgress}
        sx={{ position: 'fixed' }}
      />

      <BackToTopButton />

      <HomeHero />

      <HomeNewStart />

      <HomePanelistas />

      <HomeSponsor />

      <HomeTravelLandingIntroduce />

      <HomeElearningNewsletter />

      <HomeMinimalUI />

      {/* <HomeFlexibleComponents /> */}

      {/* <HomeFeatureHighlights /> */}

      {/* <HomeForDesigner /> */}

      {/* <HomePricing plans={_pricingHome} /> */}

      {/* <HomeFAQs /> */}

      {/* <HomeAdvertisement /> */}
    </>
  );
}
