/**
 * FinalCTA Component
 * Design: Parcele Aqui B2B
 * - Final call-to-action section
 */

export default function FinalCTA() {
  const whatsappLink = "https://wa.me/5531973322921?text=Olá%21%20Vim%20da%20Landing%20Page%20Parcele%20Aqui%20Negócios%20e%20quero%20entender%20como%20o%20Parcele%20Aqui%20funciona%20no%20meu%20negócio.";

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="order-2 lg:order-1">
            <img
              src="/images/sections/secao-cta-final.png"
              alt="Hora de fechar mais negócios"
              className="w-full h-auto rounded-lg"
            />
          </div>

          {/* Right: Text and CTA */}
          <div className="order-1 lg:order-2 flex flex-col gap-6">
            <h2 className="text-3xl lg:text-4xl font-kufam font-bold text-brand-brown">
              Hora de fechar mais negócios
            </h2>

            <p className="text-brand-text-secondary">
              Transforme barreiras financeiras em oportunidades<br/>
              de fechamento
            </p>

            <p className="text-brand-text-secondary">
              Ofereça parcelamento sem risco, aumente suas conversões<br/>
              e entregue mais valor aos seus clientes com o Parcele Aqui.
            </p>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary btn-yellow-hover w-fit"
            >
              Ver como funciona no meu negócio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
