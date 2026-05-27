/**
 * Models Component
 * Design: Parcele Aqui B2B
 * - 2 model options: Whitelabel and Parcele Aqui brand
 */

const models = [
  {
    icon: '/images/icons/whitelabel.svg',
    title: 'Com a sua marca (Whitelabel)',
    benefits: [
      'O cliente percebe a solução como parte do seu negócio',
      'Mais valor agregado à sua operação',
      'Experiência personalizada'
    ]
  },
  {
    icon: '/images/icons/whitelabel.svg',
    title: 'Com a marca Parcele Aqui',
    benefits: [
      'Solução pronta e validada no mercado',
      'Implementação ainda mais rápida',
      'Comunicação clara e objetiva para o cliente'
    ]
  }
];

export default function Models() {
  const whatsappLink = "https://wa.me/5531973322921?text=Olá%21%20Vim%20da%20Landing%20Page%20Parcele%20Aqui%20Negócios%20e%20quero%20entender%20qual%20modelo%20%28whitelabel%20ou%20marca%20Parcele%20Aqui%29%20faz%20mais%20sentido%20para%20mim.";

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-3xl lg:text-4xl font-kufam font-bold text-brand-brown mb-6">
            Flexibilidade para o seu modelo de negócio
          </h2>
          <p className="text-brand-text-secondary mb-4">
            Você escolhe como<br/>
            <strong>operar com o Parcele Aqui</strong>
          </p>
          <p className="text-brand-text-secondary">
            O mesmo produto, <strong>a mesma segurança e eficiência</strong>,<br/>
            no formato que melhor fortalece o posicionamento<br/>
            do seu escritório.
          </p>
        </div>

        {/* Models Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {models.map((model, index) => (
            <div key={index} className="flex flex-col gap-6">
              <img
                src={model.icon}
                alt={model.title}
                className="w-12 h-12"
              />
              <h3 className="text-2xl font-kufam font-bold text-brand-brown">
                {model.title}
              </h3>
              <ul className="space-y-3">
                {model.benefits.map((benefit, bIndex) => (
                  <li key={bIndex} className="flex items-start gap-3">
                    <svg
                      width="20"
                      height="20"
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
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Text */}
        <div className="bg-brand-beige-light rounded-lg p-8 mb-8">
          <p className="text-brand-brown font-bold mb-6">
            Dois modelos, o mesmo objetivo: <strong>fechar mais negócios sem risco.</strong>
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary btn-yellow-hover inline-flex"
          >
            Entender qual modelo escolher
          </a>
        </div>
      </div>
    </section>
  );
}
