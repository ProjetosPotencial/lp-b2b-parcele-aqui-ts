import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

/**
 * Header Component
 * Design: Parcele Aqui B2B - Premium B2B Landing Page
 * - Fixed header with logo, navigation links, and CTA buttons
 * - Responsive mobile menu with smooth animations
 * - Brand colors: Yellow (#ffb800) and Brown (#371b01)
 */

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('#mobileMenu') && !target.closest('#mobileToggle')) {
        setMobileMenuOpen(false);
      }
    };

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };

    if (mobileMenuOpen) {
      document.addEventListener('click', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [mobileMenuOpen]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const whatsappLink = "https://wa.me/5531973322921?text=Olá%21%20Vim%20da%20Landing%20Page%20Parcele%20Aqui%20Negócios%20e%20quero%20fazer%20uma%20simulação%20de%20parcelamento%20para%20o%20meu%20negócio.";
  const loginLink = "https://parceleaqui.com.br/login";

  return (
    <>
      {/* Fixed Header */}
      <header className="fixed inset-x-0 top-0 z-50 bg-white border-b border-brand-text-muted/10 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#solucao" 
            className="flex items-center gap-2"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('solucao');
            }}
            aria-label="Parcele Aqui - voltar ao início"
          >
            <img 
              src="/images/logo-parcele-aqui.svg" 
              alt="Parcele Aqui" 
              className="h-9 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            <button
              onClick={() => scrollToSection('quem-somos')}
              className="nav-link text-base font-semibold text-brand-black"
            >
              Sobre nós
            </button>
            <button
              onClick={() => scrollToSection('como-funciona')}
              className="nav-link text-base font-medium text-brand-text-secondary hover:text-brand-black"
            >
              Como funciona
            </button>
            <button
              onClick={() => scrollToSection('solucao')}
              className="nav-link text-base font-medium text-brand-text-secondary hover:text-brand-black"
            >
              Soluções
            </button>
          </nav>

          {/* Desktop CTA & Login */}
          <div className="flex items-center gap-5">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary hidden sm:inline-flex text-sm"
              style={{ padding: '12px 20px', fontSize: '14px' }}
            >
              Quero simular parcelamento
            </a>
            <a
              href={loginLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex text-sm font-bold text-brand-black hover:text-brand-yellow transition-colors"
            >
              Entrar
            </a>

            {/* Mobile Menu Toggle */}
            <button
              id="mobileToggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden inline-flex items-center justify-center p-4 text-brand-brown"
              aria-label="Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X size={32} />
              ) : (
                <Menu size={32} />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <nav
        id="mobileMenu"
        className={`fixed top-[88px] left-0 right-0 bottom-0 z-40 bg-white/95 backdrop-blur-lg lg:hidden transition-all duration-300 ${
          mobileMenuOpen
            ? 'opacity-100 translate-y-0 visible pointer-events-auto'
            : 'opacity-0 -translate-y-2 invisible pointer-events-none'
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="p-6 space-y-8">
          {/* Quick Access Cards */}
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-brand-yellow-dark mb-3">
              Acesso rápido
            </p>
            <div className="grid grid-cols-3 gap-3">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-start gap-2 p-4 bg-brand-beige-light rounded-2xl hover:bg-brand-yellow-light transition-colors"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-brand-brown">
                  <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-xs font-semibold text-brand-brown">Simule agora</span>
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-start gap-2 p-4 bg-brand-beige-light rounded-2xl hover:bg-brand-yellow-light transition-colors"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-brand-brown">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-xs font-semibold text-brand-brown">Especialista</span>
              </a>
              <button
                onClick={() => scrollToSection('faq')}
                className="flex flex-col items-start gap-2 p-4 bg-brand-beige-light rounded-2xl hover:bg-brand-yellow-light transition-colors"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-brand-brown">
                  <path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 17h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="12" cy="12" r="9.5" stroke="currentColor" strokeWidth="1.75" />
                </svg>
                <span className="text-xs font-semibold text-brand-brown">Dúvidas</span>
              </button>
            </div>
          </div>

          {/* Navigation Items */}
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-brand-yellow-dark mb-3">
              Navegação
            </p>
            <div className="space-y-3">
              <button
                onClick={() => scrollToSection('quem-somos')}
                className="flex items-center justify-between w-full p-4 border-b border-brand-text-muted/10 hover:opacity-70 transition-opacity"
              >
                <div className="text-left">
                  <div className="font-bold text-lg text-brand-brown">Sobre nós</div>
                  <div className="text-sm text-brand-text-secondary">Conheça a Potencial Tecnologia</div>
                </div>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-brand-brown flex-shrink-0">
                  <path d="m9 6 6 6-6 6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                onClick={() => scrollToSection('como-funciona')}
                className="flex items-center justify-between w-full p-4 border-b border-brand-text-muted/10 hover:opacity-70 transition-opacity"
              >
                <div className="text-left">
                  <div className="font-bold text-lg text-brand-brown">Como funciona</div>
                  <div className="text-sm text-brand-text-secondary">O fluxo de parcelamento na prática</div>
                </div>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-brand-brown flex-shrink-0">
                  <path d="m9 6 6 6-6 6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                onClick={() => scrollToSection('solucao')}
                className="flex items-center justify-between w-full p-4 border-b border-brand-text-muted/10 hover:opacity-70 transition-opacity"
              >
                <div className="text-left">
                  <div className="font-bold text-lg text-brand-brown">Soluções</div>
                  <div className="text-sm text-brand-text-secondary">Modelos para o seu negócio</div>
                </div>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-brand-brown flex-shrink-0">
                  <path d="m9 6 6 6-6 6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Footer CTA */}
          <div className="flex flex-col gap-4 pt-4">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full text-center"
            >
              Quero simular parcelamento
            </a>
            <a
              href={loginLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center font-bold text-brand-brown hover:text-brand-yellow transition-colors"
            >
              Entrar
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
