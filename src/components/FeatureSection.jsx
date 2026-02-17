/**
 * FeatureSection — Uses GSAP ScrollTrigger + @formkit/auto-animate + React Awesome Reveal
 *
 * GSAP: parallax gradient movement, complex timeline for section header
 * AutoAnimate: automatic layout animation for the feature card grid
 * React Awesome Reveal: Fade/Slide text content reveal
 */
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { Fade, Slide } from 'react-awesome-reveal';
import FeatureCard from './FeatureCard';
import SectionDemo from './SectionDemo';
import './FeatureSection.css';

gsap.registerPlugin(ScrollTrigger);

export default function FeatureSection({ section }) {
  const sectionRef = useRef(null);
  const gradientRef = useRef(null);
  const [gridParent] = useAutoAnimate({ duration: 400 });

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    /* GSAP — Timeline for section header with scroll trigger */
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: 'top 75%',
        end: 'top 25%',
        toggleActions: 'play none none reverse',
      },
    });

    tl.fromTo(el.querySelector('.fs__number'),
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
    );

    /* GSAP — Parallax gradient on scroll (scrubbed) */
    if (gradientRef.current) {
      gsap.to(gradientRef.current, {
        scrollTrigger: {
          trigger: el,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
        x: '20%', y: '30%',
        ease: 'none',
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(st => {
        if (st.trigger === el) st.kill();
      });
    };
  }, []);

  const { id, num, title, subtitle, accent, features, hero } = section;

  return (
    <section id={id} ref={sectionRef} className="fs" style={{ '--s-accent': accent }}>
      {/* BG gradient */}
      <div className="fs__bg">
        <div ref={gradientRef} className="fs__gradient" />
      </div>

      <div className="section-inner">
        {/* Header — React Awesome Reveal for text lines */}
        <div className="fs__header">
          <span className="fs__number">{num}</span>
          <Fade triggerOnce direction="up" delay={100}>
            <h2 className="fs__title">{title}</h2>
          </Fade>
          <Slide triggerOnce direction="up" delay={200}>
            <p className="fs__subtitle">{subtitle}</p>
          </Slide>
        </div>

        {/* Cards grid — AutoAnimate parent for layout transitions */}
        <div className="fs__grid" ref={gridParent}>
          {/* Hero card with section-specific demo */}
          <FeatureCard
            isHero
            heroTitle={hero.title}
            heroDesc={hero.desc}
            accent={accent}
          >
            <SectionDemo sectionId={id} accent={accent} />
          </FeatureCard>

          {features.map((f, i) => (
            <FeatureCard key={f.title} index={i + 1} title={f.title} desc={f.desc} />
          ))}
        </div>

        <button className="fs__back" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          ↑ Back to navigation
        </button>
      </div>
    </section>
  );
}
