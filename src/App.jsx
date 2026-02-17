import { useState, useEffect, useCallback } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';

import Loader from './components/Loader';
import Header from './components/Header';
import Hero from './components/Hero';
import FeatureSection from './components/FeatureSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import { SECTIONS } from './data/sections';

export default function App() {
  const [loading, setLoading] = useState(true);

  const handleLoaded = useCallback(() => setLoading(false), []);

  /* Fake load timer — gives Lottie animation time to play */
  useEffect(() => {
    const t = setTimeout(handleLoaded, 3200);
    return () => clearTimeout(t);
  }, [handleLoaded]);

  return (
    <ParallaxProvider>
      <Loader loading={loading} />

      {!loading && (
        <>
          <Header sections={SECTIONS} />
          <main>
            <Hero />
            {SECTIONS.map((section, i) => (
              <FeatureSection key={section.id} section={section} index={i} />
            ))}
            <CTASection />
          </main>
          <Footer />
        </>
      )}
    </ParallaxProvider>
  );
}
