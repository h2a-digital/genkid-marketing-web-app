import {
  Header,
  Hero,
  HowItWorks,
  Features,
  Gallery,
  Faq,
  Testimonials,
  Support,
  Download,
  Footer,
  Founder,
} from '@/components';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <Gallery />
        <Testimonials />
        <Faq />
        <Founder />
        <Support />
        <Download />
      </main>
      <Footer />
    </>
  );
}
