/**
 * Home Page - Parcele Aqui B2B Landing Page
 * Design: Premium B2B Landing Page
 * - All sections integrated
 * - Responsive layout
 * - Smooth animations
 */

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Infrastructure from '@/components/Infrastructure';
import Bottleneck from '@/components/Bottleneck';
import Solution from '@/components/Solution';
import HowItWorks from '@/components/HowItWorks';
import Impact from '@/components/Impact';
import Companies from '@/components/Companies';
import Models from '@/components/Models';
import AboutUs from '@/components/AboutUs';
import Security from '@/components/Security';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import FloatingCTA from '@/components/FloatingCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Infrastructure />
        <Bottleneck />
        <Solution />
        <HowItWorks />
        <Impact />
        <Companies />
        <Models />
        <AboutUs />
        <Security />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
