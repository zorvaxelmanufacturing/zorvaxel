"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { Button } from "@/components/Button";
import { loadGsap } from "@/lib/motion/gsap";
import { SITE } from "@/lib/site";

export function HomeHero() {
  const heroRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;

    let cancelled = false;
    let revertContext: (() => void) | undefined;

    void loadGsap().then(({ gsap }) => {
      if (cancelled || !heroRef.current) return;

      const context = gsap.context(() => {
        const linework = gsap.utils.toArray<SVGGeometryElement>(".home-hero__bg-draw");
        gsap.set(linework, {
          strokeDasharray: (_index, element) => element.getTotalLength(),
          strokeDashoffset: (_index, element) => element.getTotalLength(),
        });
        gsap.to(linework, {
          strokeDashoffset: 0,
          duration: 1.15,
          stagger: 0.07,
          ease: "power2.out",
          delay: 0.12,
        });
        gsap.fromTo(
          ".home-hero__bg-dot",
          { autoAlpha: 0, scale: 0.45, transformOrigin: "center center" },
          { autoAlpha: 1, scale: 1, duration: 0.45, stagger: 0.025, ease: "power2.out", delay: 0.3 },
        );
      }, heroRef);

      revertContext = () => context.revert();
    });

    return () => {
      cancelled = true;
      revertContext?.();
    };
  }, [reduceMotion]);

  return (
    <section aria-labelledby="home-title" className="home-hero" ref={heroRef}>
      <div className="home-hero__bg" aria-hidden="true">
        {/*
          Minimal inline SVG background — botanical geometry in brand palette.
          No external image dependency. Fully scalable, zero layout shift.
        */}
        <svg
          className="home-hero__bg-art"
          viewBox="0 0 1440 800"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
        >
          <defs>
            {/* Warm sand bloom — upper right */}
            <radialGradient id="bg-sand" cx="75%" cy="18%" r="50%">
              <stop offset="0%" stopColor="#d4c4a8" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#d4c4a8" stopOpacity="0" />
            </radialGradient>
            {/* Moss botanical — lower left */}
            <radialGradient id="bg-moss" cx="12%" cy="82%" r="45%">
              <stop offset="0%" stopColor="#778d7a" stopOpacity="0.16" />
              <stop offset="100%" stopColor="#778d7a" stopOpacity="0" />
            </radialGradient>
            {/* Subtle steel — mid right */}
            <radialGradient id="bg-steel" cx="90%" cy="52%" r="35%">
              <stop offset="0%" stopColor="#415a77" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#415a77" stopOpacity="0" />
            </radialGradient>
            {/* Mobile subtle warm wash — center-right */}
            <radialGradient id="bg-mobile-warm" cx="50%" cy="40%" r="45%">
              <stop offset="0%" stopColor="#d4c4a8" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#d4c4a8" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Colour washes */}
          <rect width="1440" height="800" fill="url(#bg-sand)" />
          <rect width="1440" height="800" fill="url(#bg-moss)" />
          <rect width="1440" height="800" fill="url(#bg-steel)" />
          <rect width="1440" height="800" fill="url(#bg-mobile-warm)" />

          {/* Large concentric arcs — upper right */}
          <circle cx="1360" cy="-60" r="460" stroke="#0d1b2a" strokeWidth="0.6" strokeOpacity="0.055" fill="none" />
          <circle cx="1360" cy="-60" r="560" stroke="#0d1b2a" strokeWidth="0.5" strokeOpacity="0.04" fill="none" />
          <circle cx="1360" cy="-60" r="660" stroke="#0d1b2a" strokeWidth="0.4" strokeOpacity="0.03" fill="none" />

          {/* Botanical cross-hair mark — upper right accent */}
          <line className="home-hero__bg-draw" x1="1180" y1="80" x2="1360" y2="80" stroke="#778d7a" strokeWidth="0.6" strokeOpacity="0.3" />
          <line className="home-hero__bg-draw" x1="1270" y1="0"  x2="1270" y2="160" stroke="#778d7a" strokeWidth="0.6" strokeOpacity="0.3" />
          <circle cx="1270" cy="80" r="22" stroke="#778d7a" strokeWidth="0.6" strokeOpacity="0.28" fill="none" />
          <circle cx="1270" cy="80" r="8"  fill="#778d7a" fillOpacity="0.14" />

          {/* Fine horizontal rule — mid right, editorial feel */}
          <line className="home-hero__bg-draw" x1="860" y1="398" x2="1440" y2="398" stroke="#0d1b2a" strokeWidth="0.5" strokeOpacity="0.07" />
          <line className="home-hero__bg-draw" x1="860" y1="406" x2="1180" y2="406" stroke="#0d1b2a" strokeWidth="0.5" strokeOpacity="0.05" />

          {/* Small registration marks — lower right corner */}
          <path d="M1380 740 h28 M1380 740 v28" stroke="#0d1b2a" strokeWidth="0.7" strokeOpacity="0.12" strokeLinecap="round" />
          <path d="M1408 768 h-28 M1408 768 v-28" stroke="#0d1b2a" strokeWidth="0.7" strokeOpacity="0.12" strokeLinecap="round" />

          {/* Sparse dot field */}
          {[
            [900, 160],[960, 310],[1020, 90],[1100, 240],[1160, 400],
            [1240, 180],[1310, 320],[1380, 140],[1050, 480],[1140, 580],
            [1290, 520],[1400, 460],[920, 540],[1070, 660],[1200, 700],
          ].map(([cx, cy], i) => (
            <circle className="home-hero__bg-dot" key={i} cx={cx} cy={cy} r="1.4" fill="#0d1b2a" fillOpacity="0.055" />
          ))}

          {/* Loose moss vine strokes — lower left botanical accent */}
          <path
            className="home-hero__bg-draw"
            d="M-20 680 C80 660, 140 580, 200 600 C260 620, 290 540, 360 530 C420 520, 460 580, 500 560"
            stroke="#778d7a" strokeWidth="1.2" strokeOpacity="0.18" strokeLinecap="round" fill="none"
          />
          <path
            className="home-hero__bg-draw"
            d="M-20 730 C60 710, 120 650, 180 660 C240 670, 280 620, 330 610"
            stroke="#778d7a" strokeWidth="0.8" strokeOpacity="0.12" strokeLinecap="round" fill="none"
          />
        </svg>
      </div>

      <div className="page-shell home-hero__shell">
        <div className="home-hero__content">
          <div className="home-hero__copy">
            <p className="eyebrow home-hero__eyebrow">{SITE.home.hero.label}</p>

            <h1 className="home-hero__title" id="home-title">
              <span className="sr-only">Zorvaxel — </span>
              Your first serum batch,
              <br />
              without the{" "}
              <span className="home-hero__strike-wrap">
                <em className="home-hero__strike-target">minimum&#8209;order trap.</em>
                <span className="home-hero__strike-bar" aria-hidden="true" />
              </span>
            </h1>

            <p className="home-hero__supporting">{SITE.home.hero.supporting}</p>

            <div className="home-hero__actions">
              <Button href={SITE.ui.enquireHref} className="home-hero__btn-primary">
                {SITE.home.hero.primaryAction}
              </Button>
              <a href="#home-process" className="home-hero__btn-secondary">
                <span>{SITE.home.hero.secondaryAction}</span>
                <span aria-hidden="true" className="home-hero__btn-arrow">↓</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
