/**
 * Solution Component
 * Design: Parcele Aqui B2B
 * - Text on left with benefits
 * - Image on right
 */

export default function Solution() {
  const whatsappLink = "https://wa.me/5531973322921?text=Olá%21%20Vim%20da%20Landing%20Page%20Parcele%20Aqui%20Negócios%20e%20quero%20fazer%20uma%20simulação%20de%20parcelamento%20para%20o%20meu%20negócio.";

  const benefits = [
    'Redução do ciclo de vendas',
    'Aumento da taxa de conversão',
    'Preservação total do caixa',
    'Zero inadimplência para sua empresa'
  ];

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div className="flex flex-col gap-6">
            <p className="text-brand-text-secondary font-medium text-sm">
              Solução Parcele Aqui
            </p>

            <h2 className="text-3xl lg:text-4xl font-kufam font-bold text-brand-brown">
              <span className="font-normal">Pagamento não<br/>pode ser o motivo de<br/></span>
              <span className="font-bold">um negócio não fechar.</span>
            </h2>

            <p className="text-brand-text-secondary">
              Permita que seus <strong>clientes parcelem no cartão</strong> enquanto sua empresa recebe à vista, com segurança, controle e <strong>zero risco de inadimplência.</strong>
            </p>

            {/* Benefits */}
            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
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
                  <span className="text-brand-text-secondary">{benefit}</span>
                </div>
              ))}
            </div>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary btn-yellow-hover w-fit"
            >
              Simular uma operação
            </a>
          </div>

          {/* Right: Image */}
          <div>
            <img
              src="/images/sections/secao-solucao.png"
              alt="Profissional confiante em ambiente B2B"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
