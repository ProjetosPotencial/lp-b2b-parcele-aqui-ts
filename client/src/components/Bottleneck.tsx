/**
 * Bottleneck Component
 * Design: Parcele Aqui B2B
 * - Image on left, text on right
 * - Problem statement with CTA
 */

export default function Bottleneck() {
  const whatsappLink = "https://wa.me/5531973322921?text=Olá%21%20Vim%20da%20Landing%20Page%20Parcele%20Aqui%20Negócios%20e%20quero%20entender%20se%20o%20Parcele%20Aqui%20faz%20sentido%20para%20a%20minha%20empresa.";

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="order-2 lg:order-1">
            <img
              src="/images/sections/secao-gargalo.png"
              alt="O gargalo está no pagamento"
              className="w-full h-auto rounded-lg"
            />
          </div>

          {/* Right: Text */}
          <div className="order-1 lg:order-2 flex flex-col gap-6">
            <p className="text-brand-text-secondary font-medium text-sm">
              O gargalo está no pagamento
            </p>
            
            <h2 className="text-3xl lg:text-4xl font-kufam font-bold text-brand-brown">
              O que realmente trava negociações no B2B
            </h2>

            <p className="text-brand-text-secondary">
              O problema raramente é falta de interesse.<br/>
              É a forma de pagamento que trava o fechamento.
            </p>

            {/* Problems List */}
            <div className="space-y-3 bg-brand-beige-light p-6 rounded-lg">
              <p className="font-bold text-brand-brown">Sem uma alternativa de parcelamento:</p>
              <ul className="space-y-2">
                <li className="text-brand-text-secondary">• Vendas que não avançam</li>
                <li className="text-brand-text-secondary">• Ciclo de fechamento mais longo</li>
                <li className="text-brand-text-secondary">• Risco ao oferecer parcelamento próprio</li>
              </ul>
            </div>

            <p className="text-brand-text-secondary text-sm">
              E assumir parcelamento internamente gera risco, inadimplência e complexidade operacional.
            </p>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary btn-yellow-hover w-fit"
            >
              Entender se faz sentido para minha empresa
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
