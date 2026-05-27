import { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

/**
 * Hero Component
 * Design: Parcele Aqui B2B - Premium B2B Landing Page
 * - 3-slide carousel with smooth transitions
 * - Left column: Text content and CTA buttons
 * - Right column: Hero image
 * - Brand colors and typography
 */

interface HeroSlide {
  kicker: string;
  title: string;
  titleBold: string;
  subtitle: string;
  benefits: string[];
}

const slides: HeroSlide[] = [
  {
    kicker: 'Parcelamento B2B sem risco para sua empresa',
    title: 'Destrave negociações B2B com parcelamento ',
    titleBold: 'no cartão e receba à vista, sem inadimplência',
    subtitle: 'Seus clientes parcelam em até 12x.\nSua empresa recebe à vista e sem risco.',
    benefits: [
      'Sua empresa recebe à vista',
      'Zero risco de inadimplência',
      'Ativação rápida e 100% digital'
    ]
  },
  {
    kicker: 'Aumente seu ticket médio',
    title: 'Venda contratos maiores ',
    titleBold: 'sem travar o caixa da sua empresa',
    subtitle: 'Clientes aprovam propostas mais altas.\nVocê recebe integralmente, à vista.',
    benefits: [
      'Ticket médio até 3x maior',
      'Mais conversão em propostas grandes',
      'Sem expor a empresa ao crédito'
    ]
  },
  {
    kicker: 'Fechamento mais rápido',
    title: 'Feche vendas mais rápido ',
    titleBold: 'sem renegociar prazo com o cliente',
    subtitle: 'Menos idas e vindas com o cliente.\nMais negócios fechados no primeiro contato.',
    benefits: [
      'Aprovação em minutos',
      'Sem análise de crédito interna',
      'Confirmação imediata da operação'
    ]
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [autoplay]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setAutoplay(false);
    setTimeout(() => setAutoplay(true), 10000);
  };

  const nextSlide = () => {
    goToSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  const slide = slides[currentSlide];
  const whatsappLink = "https://wa.me/5531973322921?text=Olá%21%20Vim%20da%20Landing%20Page%20Parcele%20Aqui%20Negócios%20e%20quero%20entender%20como%20o%20Parcele%20Aqui%20funciona%20no%20meu%20negócio.";
  const specialistLink = "https://wa.me/5531973322921?text=Olá%21%20Vim%20da%20Landing%20Page%20Parcele%20Aqui%20Negócios%20e%20gostaria%20de%20falar%20com%20um%20especialista.";

  return (
    <section id="solucao" className="pt-[72px] bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text Content */}
          <div className="flex flex-col gap-6">
            {/* Kicker */}
            <div className="text-brand-text-secondary font-medium text-base">
              {slide.kicker}
            </div>

            {/* Title */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-kufam text-brand-brown">
                <span className="font-bold">{slide.title}</span>
                <span className="font-normal">{slide.titleBold}</span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-base font-bold text-brand-brown whitespace-pre-line">
              {slide.subtitle}
            </p>

            {/* Benefits List */}
            <ul className="space-y-4">
              {slide.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="flex-shrink-0 text-brand-yellow mt-0.5"
                  >
                    <path
                      d="M5 12h14M13 6l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-base text-brand-text-secondary">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary btn-yellow-hover flex items-center justify-center gap-2"
              >
                Ver como funciona no meu negócio
                <ChevronRight size={20} />
              </a>
              <a
                href={specialistLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center justify-center gap-2"
              >
                Falar com especialista
                <ChevronRight size={20} />
              </a>
            </div>

            {/* Slide Indicators */}
            <div className="flex gap-2 pt-8">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentSlide
                      ? 'bg-brand-yellow w-6 h-3'
                      : 'bg-brand-beige-light w-3 h-3 hover:bg-brand-yellow-light'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Column: Hero Image */}
          <div className="relative hidden lg:block">
            <img
              src="/images/sections/hero-slide-1.webp"
              alt="Parcele Aqui B2B Solution"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Mobile Hero Image */}
        <div className="mt-8 lg:hidden">
          <img
            src="/images/sections/hero-slide-mobile-1.webp"
            alt="Parcele Aqui B2B Solution"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
