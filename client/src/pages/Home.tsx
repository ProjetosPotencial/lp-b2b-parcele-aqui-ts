import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FloatingCTA from "@/components/FloatingCTA";
import Footer from "@/components/Footer";

/**
 * Home Page - Parcele Aqui B2B Landing Page
 * Design: Premium B2B Landing Page with TypeScript
 * - Header with navigation and mobile menu
 * - Hero section with 3-slide carousel
 * - Floating WhatsApp CTA
 * - Footer with company information
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        {/* Placeholder sections - to be implemented */}
        <section id="como-funciona" className="py-20 bg-brand-beige-light">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-brand-brown mb-8">Como Funciona</h2>
            <p className="text-brand-text-secondary">Esta seção será implementada em breve.</p>
          </div>
        </section>
        
        <section id="quem-somos" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-brand-brown mb-8">Sobre Nós</h2>
            <p className="text-brand-text-secondary">Esta seção será implementada em breve.</p>
          </div>
        </section>

        <section id="faq" className="py-20 bg-brand-beige-light">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-brand-brown mb-8">Perguntas Frequentes</h2>
            <p className="text-brand-text-secondary">Esta seção será implementada em breve.</p>
          </div>
        </section>
      </main>
      
      <Footer />
      <FloatingCTA />
    </div>
  );
}
