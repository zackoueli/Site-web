import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import SchemaFAQ from "@/components/SchemaFAQ";

export const metadata: Metadata = {
  alternates: { canonical: "https://breizhapp.tech" },
};
import Hero from "@/components/Hero";
import TechStrip from "@/components/TechStrip";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <SchemaFAQ />
      <Navbar />
      <main>
        <Hero />
        <TechStrip />
        <Services />
        <Portfolio />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
