/**
 * Infrastructure Component
 * Design: Parcele Aqui B2B
 * - 4 cards com borda amarela
 * - Background com blur amarelo
 * - Ícones destacados
 */

const features = [
  {
    icon: '/images/icons/infra-01.svg',
    title: 'Liquidação à vista e sem risco',
    description: 'Receba à vista enquanto o cliente paga parcelado no cartão.'
  },
  {
    icon: '/images/icons/infra-02.svg',
    title: 'Infraestrutura certificada e escalável',
    description: 'Tecnologia preparada para alto volume de transações financeiras.'
  },
  {
    icon: '/images/icons/infra-03.svg',
    title: 'Plataforma 100% digital e automatizada',
    description: 'Operação automatizada do pagamento à liquidação, sem burocracia.'
  },
  {
    icon: '/images/icons/infra-04.svg',
    title: 'Fintech brasileira especializada em B2B',
    description: 'Solução nacional criada para operações financeiras B2B seguras e escaláveis.'
  }
];

export default function Infrastructure() {
  return (
    <section className="relative bg-white py-16 lg:py-24 overflow-hidden">
      {/* Background blur amarelo */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-yellow opacity-5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-yellow opacity-5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-brand-text-secondary font-medium text-sm mb-4">
            Infraestrutura financeira confiável
          </p>
          <h2 className="text-3xl lg:text-4xl font-kufam font-bold text-brand-brown mb-6">
            <span className="font-normal">Infraestrutura sólida</span><br/>
            <span className="font-bold">para operações financeiras B2B</span>
          </h2>
          <p className="text-brand-text-secondary max-w-2xl mx-auto">
            Desenvolvido pela Potencial Tecnologia, com mais de 25 anos de experiência em meios de pagamento.
            Infraestrutura certificada, segura e com liquidação à vista para o emissor.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="border-2 border-brand-yellow rounded-2xl p-6 bg-white hover:shadow-lg transition-shadow"
            >
              <img
                src={feature.icon}
                alt={feature.title}
                className="w-16 h-16 mb-4"
              />
              <h3 className="font-kufam font-bold text-lg text-brand-brown mb-3">
                {feature.title}
              </h3>
              <p className="text-brand-text-secondary text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
