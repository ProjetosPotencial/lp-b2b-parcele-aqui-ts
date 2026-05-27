/**
 * AboutUs Component
 * Design: Parcele Aqui B2B
 * - About Potencial Tecnologia
 * - 6 feature cards
 */

const features = [
  {
    icon: '/images/icons/quem-01.svg',
    title: '25 anos de mercado',
    description: 'Desenvolvendo soluções digitais'
  },
  {
    icon: '/images/icons/quem-02.svg',
    title: '100% digital',
    description: 'Plataforma totalmente online e automatizada'
  },
  {
    icon: '/images/icons/quem-03.svg',
    title: '24/7 disponibilidade',
    description: 'Sistema operando ininterruptamente'
  },
  {
    icon: '/images/icons/quem-04.svg',
    title: 'Infraestrutura robusta e certificada',
    description: ''
  },
  {
    icon: '/images/icons/quem-05.svg',
    title: 'Parcerias corporativas e governamentais',
    description: ''
  },
  {
    icon: '/images/icons/quem-06.svg',
    title: 'Especialista em meios de pagamento e automação de transações',
    description: ''
  }
];

export default function AboutUs() {
  return (
    <section id="quem-somos" className="bg-white py-16 lg:py-24 relative overflow-hidden">
      {/* Background shape */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-yellow opacity-10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-3xl lg:text-4xl font-kufam font-bold text-brand-brown mb-6">
            Quem está<br/>
            por trás do Parcele Aqui
          </h2>
          <p className="text-brand-text-secondary max-w-2xl">
            O Parcele Aqui é desenvolvido pela Potencial Tecnologia, empresa brasileira com mais de 25 anos de experiência em meios de pagamento, automação e gestão financeira.
          </p>
          <p className="text-brand-text-secondary mt-4">
            Infraestrutura robusta, certificações de segurança e operações em larga escala em todo o Brasil.
          </p>
        </div>

        {/* Logo */}
        <div className="mb-16">
          <img
            src="/images/logos/logo-potencial-tecnologia.svg"
            alt="Potencial Tecnologia"
            className="h-12 w-auto"
          />
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col gap-4">
              <img
                src={feature.icon}
                alt={feature.title}
                className="w-12 h-12"
              />
              <h3 className="font-kufam font-bold text-lg text-brand-brown">
                {feature.title}
              </h3>
              {feature.description && (
                <p className="text-brand-text-secondary text-sm">
                  {feature.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
