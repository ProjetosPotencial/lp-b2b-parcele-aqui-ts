/**
 * Companies Component
 * Design: Parcele Aqui B2B
 * - Company logos grid
 */

const companies = [
  { name: 'Bradesco', logo: '/images/logos/Bradesco default.svg' },
  { name: 'Banco do Brasil', logo: '/images/logos/Component 2.svg' },
  { name: 'Itaú', logo: '/images/logos/Component 3.svg' },
  { name: 'Western Union', logo: '/images/logos/Component 4.svg' },
  { name: 'Contabilidade Diplomata', logo: '/images/logos/Component 7.jpg' },
  { name: 'Assescont', logo: '/images/logos/Component 9.jpg' },
  { name: 'SR Eis Contabilidade', logo: '/images/logos/Component 5.jpg' },
  { name: 'Capitale', logo: '/images/logos/Component 6.jpg' },
  { name: 'Detran-MS', logo: '/images/logos/Component 14.svg' },
  { name: 'Detran-PR', logo: '/images/logos/Component 15.svg' },
  { name: 'Poupatempo', logo: '/images/logos/Component 16.svg' },
  { name: 'UAI', logo: '/images/logos/Component 17.svg' },
  { name: 'Protege', logo: '/images/logos/Component 8.svg' },
  { name: 'BRINKS', logo: '/images/logos/Component 10.svg' },
  { name: 'Prosegur', logo: '/images/logos/Component 11.svg' },
  { name: 'Prodesp', logo: '/images/logos/Component 12.svg' },
];

export default function Companies() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-3xl lg:text-4xl font-kufam font-bold text-brand-brown mb-6">
            Empresas que já utilizam
          </h2>
          <p className="text-brand-text-secondary max-w-3xl">
            Presente em empresas que utilizam o parcelamento como estratégia de fechamento. O Parcele Aqui já apoia empresas de diferentes segmentos, ajudando a transformar barreiras financeiras em oportunidades reais de fechamento, com operações processadas por meio da adquirência Cielo, garantindo segurança, confiabilidade e liquidação à vista para você.
          </p>
        </div>

        {/* Companies Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 items-center">
          {companies.map((company, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 bg-brand-beige-light rounded-lg hover:bg-brand-yellow-light transition-colors"
            >
              <img
                src={company.logo}
                alt={company.name}
                className="max-w-full max-h-12 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
