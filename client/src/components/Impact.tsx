/**
 * Impact Component
 * Design: Parcele Aqui B2B
 * - 6 impact cards with icons
 */

const impacts = [
  {
    icon: '/images/icons/impacto-01.svg',
    title: 'Mais conversão de vendas',
    description: 'Aumente a conversão sem flexibilizar crédito internamente ou expor a empresa à inadimplência.'
  },
  {
    icon: '/images/icons/impacto-02.svg',
    title: 'Redução do tempo de fechamento',
    description: 'Menos renegociação de pagamento e mais agilidade para reconhecimento de receita.'
  },
  {
    icon: '/images/icons/impacto-03.svg',
    title: 'Aumento do ticket médio',
    description: 'Permita vendas de maior valor mantendo liquidação à vista e previsibilidade financeira.'
  },
  {
    icon: '/images/icons/impacto-04.svg',
    title: 'Zero risco de inadimplência',
    description: 'O risco da operação não fica com sua empresa. A liquidação ocorre à vista para o emissor.'
  },
  {
    icon: '/images/icons/impacto-05.svg',
    title: 'Operação simples e escalável',
    description: 'Escale vendas sem aumentar estrutura financeira, cobrança ou controle de crédito.'
  },
  {
    icon: '/images/icons/impacto-06.svg',
    title: 'Mais valor percebido pelo cliente',
    description: 'Flexibilidade de pagamento sem comprometer políticas financeiras ou margem.'
  }
];

export default function Impact() {
  const whatsappLink = "https://wa.me/5531973322921?text=Olá%21%20Vim%20da%20Landing%20Page%20Parcele%20Aqui%20Negócios%20e%20gostaria%20de%20ver%20exemplos%20de%20uso%20do%20Parcele%20Aqui.";

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-brand-text-secondary font-medium text-sm mb-4">
            Impacto real no B2B
          </p>
          <h2 className="text-3xl lg:text-4xl font-kufam font-bold text-brand-brown mb-6">
            Onde o Parcele Aqui gera impacto real no seu negócio
          </h2>
          <p className="text-brand-text-secondary">
            O Parcele Aqui se adapta às necessidades reais da sua empresa.
          </p>
        </div>

        {/* Impact Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {impacts.map((impact, index) => (
            <div 
              key={index} 
              className="flex flex-col gap-4 card-hover"
              style={{
                transition: 'all 0.3s ease'
              }}
            >
              <div className="icon-circle w-16 h-16">
                <img
                  src={impact.icon}
                  alt={impact.title}
                  className="w-8 h-8"
                />
              </div>
              <h3 className="font-kufam font-bold text-lg text-brand-brown">
                {impact.title}
              </h3>
              <p className="text-brand-text-secondary text-sm">
                {impact.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary bg-brand-yellow hover:bg-brand-yellow-dark text-brand-brown font-bold px-6 py-3 rounded-lg transition-colors inline-flex"
          >
            Ver exemplos de uso
          </a>
        </div>
      </div>
    </section>
  );
}
