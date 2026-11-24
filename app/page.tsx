import dynamic from "next/dynamic";
import { BatchEnquiryFloat } from "@/components/BatchEnquiryFloat";
import { BlogCard } from "@/components/BlogCard";
import { Button } from "@/components/Button";
import { HomeHero } from "@/components/HomeHero";
import { Marquee } from "@/components/Marquee";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceRow } from "@/components/ServiceRow";
import { TextLink } from "@/components/TextLink";
import { getLatestPosts } from "@/lib/blog";
import { createPageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

const ProcessSteps = dynamic(() => import("@/components/ProcessSteps").then((module) => module.ProcessSteps));
const Reveal = dynamic(() => import("@/components/Reveal").then((module) => module.Reveal));
const RevealItem = dynamic(() => import("@/components/Reveal").then((module) => module.RevealItem));

export const metadata = createPageMetadata({
  title: SITE.seo.home.title,
  description: SITE.seo.home.description,
  path: "/",
});

export default function HomePage() {
  const latestPosts = getLatestPosts(3);

  return (
    <>
      <main className="page-main" id="main-content">
      <HomeHero />

      <Marquee accessibleLabel={SITE.shortDescription} items={SITE.home.marquee} />

      <section aria-labelledby="home-process-title" className="home-process" id="home-process">
        <div className="page-shell">
          <ProcessSteps
            description={SITE.home.processDescription}
            items={SITE.home.process}
            label="Manufacturing process steps"
            title={SITE.home.processHeading}
            titleId="home-process-title"
          />
        </div>
      </section>

      <section aria-labelledby="home-services-title" className="page-section home-services">
        <div className="page-shell">
          <Reveal className="home-section-intro">
            <SectionHeader title={SITE.home.servicesHeading} titleId="home-services-title" />
            <TextLink href="/services">{SITE.home.servicesLink}</TextLink>
          </Reveal>
          <div className="home-services__list">
            {SITE.services.items.map((service, index) => (
              <RevealItem delay={index * 0.08} key={service.number}>
                <ServiceRow service={service} />
              </RevealItem>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="home-small-batch-title" className="home-no-moq">
        <div className="page-shell home-no-moq__inner">
          <Reveal>
            <p className="eyebrow">{SITE.home.noMoq.label}</p>
            <h2 id="home-small-batch-title">{SITE.home.noMoq.title}</h2>
            <TextLink href={SITE.ui.enquireHref}>{SITE.home.noMoq.action}</TextLink>
          </Reveal>
          <span aria-hidden="true" className="home-no-moq__index">50</span>
        </div>
      </section>

      <section aria-labelledby="home-notes-title" className="page-section home-notes">
        <div className="page-shell">
          <Reveal className="home-section-intro">
            <SectionHeader title={SITE.home.journalHeading} titleId="home-notes-title" />
            <TextLink href="/blog">{SITE.home.journalLink}</TextLink>
          </Reveal>
          <div className="home-notes__list">
            {latestPosts.map((post, index) => (
              <RevealItem delay={index * 0.08} key={post.slug}>
                <BlogCard post={post} />
              </RevealItem>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="home-closing-title" className="page-section home-closing">
        <div className="page-shell home-closing__inner">
          <Reveal>
            <p className="eyebrow">{SITE.ui.enquire}</p>
            <h2 id="home-closing-title">{SITE.home.closing.title}</h2>
            <div className="home-closing__actions">
              <Button href={SITE.ui.enquireHref}>{SITE.home.closing.action}</Button>
            </div>
          </Reveal>
          <span aria-hidden="true" className="home-closing__line" />
        </div>
      </section>
      </main>
      <BatchEnquiryFloat />
    </>
  );
}
