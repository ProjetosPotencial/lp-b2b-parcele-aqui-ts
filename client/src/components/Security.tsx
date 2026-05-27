/**
 * Security Component
 * Design: Parcele Aqui B2B
 * - Security certifications and partnerships
 */

const certifications = [
  { name: 'Cielo', logo: '/images/logos/Component 18.svg' },
  { name: 'PCI DSS Compliant', logo: '/images/logos/Component 19.svg' },
  { name: 'DPO Oficial', logo: '/images/logos/Component 20.svg' },
  { name: 'Credenciado Senatran', logo: '/images/logos/Component 21.svg' },
  { name: 'Verificada por Reclame Aqui', logo: '/images/logos/Component 22.svg' },
];

export default function Security() {
  return (
    <section id="seguranca" className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-3xl lg:text-4xl font-kufam font-bold text-brand-brown mb-6">
            Segurança comprovada
          </h2>
          <p className="text-brand-text-secondary mb-4">
            Excelência e confiança <strong>em cada transação</strong>
          </p>
          <p className="text-brand-text-secondary">
            A parceria com a Cielo, uma das principais adquirentes do mercado, reforça a confiabilidade no processamento de pagamentos seguro, eficiente e de alta performance.
          </p>
          <p className="text-brand-text-secondary mt-4">
            Com infraestrutura certificada e padrões rigorosos de segurança o Parcele Aqui garante operações confiáveis, escaláveis e em conformidade regulatória.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 bg-brand-beige-light rounded-lg hover:bg-brand-yellow-light transition-colors"
            >
              <img
                src={cert.logo}
                alt={cert.name}
                className="max-w-full max-h-16 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
