/**
 * Hero Component
 * Design: Parcele Aqui B2B
 * - Imagem circular com shape amarelo
 * - Layout com texto à esquerda e imagem à direita
 * - Benefícios destacados
 */

export default function Hero() {
  const whatsappLink = "https://wa.me/5531973322921?text=Olá%21%20Vim%20da%20Landing%20Page%20Parcele%20Aqui%20Negócios%20e%20quero%20entender%20como%20o%20Parcele%20Aqui%20funciona%20no%20meu%20negócio.";
  const whatsappSpecialist = "https://wa.me/5531973322921?text=Olá%21%20Vim%20da%20Landing%20Page%20Parcele%20Aqui%20Negócios%20e%20gostaria%20de%20falar%20com%20um%20especialista.";

  return (
    <section className="relative bg-white py-16 lg:py-24 overflow-hidden">
      {/* Background blur amarelo */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-yellow opacity-5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div className="flex flex-col gap-6">
            <p className="text-brand-text-secondary font-medium text-sm">
              Parcelamento B2B sem risco para sua empresa
            </p>

            <h1 className="text-4xl lg:text-5xl font-kufam font-bold text-brand-brown leading-tight">
              <span className="font-normal">Destrave</span><br/>
              <span className="font-normal">negociações B2B</span><br/>
              <span className="font-normal">com parcelamento</span><br/>
              <span className="font-normal">no cartão e receba</span><br/>
              <span className="font-normal">à vista, sem</span><br/>
              <span className="font-bold">inadimplência</span>
            </h1>

            <div className="space-y-2">
              <p className="font-bold text-brand-brown">
                Seus clientes parcelam em até 12x.
              </p>
              <p className="font-bold text-brand-brown">
                Sua empresa recebe à vista e sem risco.
              </p>
            </div>

            {/* Benefits */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-brand-yellow text-xl">→</span>
                <span className="text-brand-text-secondary">Sua empresa recebe à vista</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-brand-yellow text-xl">→</span>
                <span className="text-brand-text-secondary">Zero risco de inadimplência</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-brand-yellow text-xl">→</span>
                <span className="text-brand-text-secondary">Ativação rápida e 100% digital</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary bg-brand-yellow hover:bg-brand-yellow-dark text-brand-brown font-bold px-6 py-3 rounded-lg transition-colors text-center"
              >
                Ver como funciona no meu negócio
              </a>
              <a
                href={whatsappSpecialist}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary border-2 border-brand-green bg-transparent text-brand-green hover:bg-brand-green hover:text-white font-bold px-6 py-3 rounded-lg transition-colors text-center"
              >
                Falar com um especialista
              </a>
            </div>
          </div>

          {/* Right: Image with circular effect */}
          <div className="relative flex items-center justify-center">
            {/* Yellow shape background */}
            <div className="absolute inset-0 bg-brand-yellow rounded-full opacity-20 blur-2xl" />
            
            {/* Circular image container */}
            <div className="relative w-full aspect-square max-w-lg float-animation">
              <div className="absolute inset-0 bg-brand-yellow rounded-full" style={{ transform: 'translate(16px, 16px)' }} />
              <img
                src="/images/sections/hero-slide-1.webp"
                alt="Profissional sorridente com tablet"
                className="relative w-full h-full object-cover rounded-full shadow-2xl image-hover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
