import { ChevronRight } from 'lucide-react';

/**
 * Hero Component
 * Design: Parcele Aqui B2B - Premium B2B Landing Page
 * - Left column: Text content with benefits
 * - Right column: Circular hero image with yellow background shape
 */

export default function Hero() {
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
              Parcelamento B2B sem risco para sua empresa
            </div>

            {/* Title */}
            <h1 className="text-4xl lg:text-5xl font-kufam text-brand-brown leading-tight">
              <span className="font-bold">Destrave negociações B2B com parcelamento </span>
              <span className="font-normal">no cartão e receba à vista, sem inadimplência</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base font-bold text-brand-brown">
              Seus clientes parcelam em até 12x.<br/>
              Sua empresa recebe à vista e sem risco.
            </p>

            {/* Benefits List */}
            <ul className="space-y-4">
              {[
                'Sua empresa recebe à vista',
                'Zero risco de inadimplência',
                'Ativação rápida e 100% digital'
              ].map((benefit, index) => (
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
          </div>

          {/* Right Column: Hero Image with Yellow Background */}
          <div className="relative hidden lg:flex justify-center items-center">
            {/* Yellow background shape */}
            <div className="absolute inset-0 bg-brand-yellow rounded-full opacity-20 blur-3xl" />
            
            {/* Circular image container */}
            <div className="relative w-80 h-80 rounded-full overflow-hidden shadow-2xl">
              <img
                src="/images/sections/hero-slide-1.webp"
                alt="Profissional sorridente com tablet"
                className="w-full h-full object-cover"
              />
            </div>
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
