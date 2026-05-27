/**
 * HowItWorks Component
 * Design: Parcele Aqui B2B
 * - Background image with overlay text
 * - 4-step process card
 */

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Sua empresa emite o boleto normalmente'
    },
    {
      number: '02',
      title: 'O cliente escolhe parcelar com o Parcele Aqui'
    },
    {
      number: '03',
      title: 'O cliente escolhe as parcelas e paga no cartão'
    },
    {
      number: '04',
      title: 'Boleto liquidado à vista para sua empresa'
    }
  ];

  return (
    <section id="como-funciona" className="bg-white py-16 lg:py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Desktop Version */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Background Image */}
            <img
              src="/images/sections/secao-como-funciona.webp"
              alt="Como funciona na prática"
              className="w-full h-auto rounded-lg"
            />

            {/* Yellow Background Shape */}
            <div
              className="absolute inset-0 bg-brand-yellow rounded-lg -z-10"
              style={{ transform: 'translateY(120px)' }}
            />

            {/* Text Overlay */}
            <div className="absolute bottom-32 left-8 text-white">
              <p className="font-medium text-sm mb-2">Como funciona na prática</p>
              <h2 className="text-4xl font-kufam font-bold">
                <span className="font-normal">Simples, rápido </span>
                <span className="font-bold">e 100% digital.</span>
              </h2>
            </div>

            {/* Steps Card */}
            <div className="absolute bottom-0 left-8 right-8 bg-brand-beige-light rounded-2xl p-8 grid grid-cols-4 gap-4">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col gap-3">
                  <p className="font-kufam font-bold text-2xl text-brand-brown">
                    {step.number}
                  </p>
                  <p className="text-sm text-brand-brown">
                    {step.title}
                  </p>
                  {index < steps.length - 1 && (
                    <div className="absolute right-0 top-0 bottom-0 w-0.5 bg-brand-yellow-dark" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Version */}
        <div className="lg:hidden">
          <img
            src="/images/sections/secao-como-funciona-mobile.webp"
            alt="Como funciona na prática"
            className="w-full h-auto rounded-lg mb-8"
          />

          <div className="bg-brand-beige-light rounded-2xl p-8 space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <p className="font-kufam font-bold text-3xl text-brand-brown mb-2">
                  {step.number}
                </p>
                <p className="text-sm text-brand-brown">
                  {step.title}
                </p>
                {index < steps.length - 1 && (
                  <div className="w-16 h-0.5 bg-brand-yellow mx-auto mt-6" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
