/**
 * FAQ Component
 * Design: Parcele Aqui B2B
 * - Accordion com 6 perguntas
 * - Animações suaves
 */

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqItems = [
  {
    question: 'Quem assume o risco da operação?',
    answer: 'O risco da operação é assumido pela Parcele Aqui através da parceria com a Cielo. Sua empresa recebe à vista e sem risco de inadimplência.'
  },
  {
    question: 'É seguro oferecer parcelamento para meus clientes?',
    answer: 'Sim, totalmente seguro. A Parcele Aqui utiliza infraestrutura certificada com padrões PCI DSS e parceria com Cielo, garantindo segurança em todas as transações.'
  },
  {
    question: 'Em quanto tempo o valor é liquidado?',
    answer: 'O valor é liquidado à vista para sua empresa, assim que o cliente confirma o parcelamento. Você recebe imediatamente, enquanto o cliente paga parcelado no cartão.'
  },
  {
    question: 'Quais pagamentos podem ser parcelados?',
    answer: 'Qualquer pagamento que seja feito via boleto pode ser parcelado com o Parcele Aqui. Desde boletos de serviços até vendas de produtos B2B.'
  },
  {
    question: 'Existe risco de inadimplência para o escritório?',
    answer: 'Não. O risco de inadimplência é zero para sua empresa, pois a liquidação ocorre à vista. O risco fica com a adquirente Cielo.'
  },
  {
    question: 'O cliente pode usar mais de um cartão?',
    answer: 'Sim, o cliente pode dividir o parcelamento entre múltiplos cartões, oferecendo flexibilidade máxima na forma de pagamento.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative bg-white py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-kufam font-bold text-brand-brown mb-6">
            Dúvidas frequentes
          </h2>
          <p className="text-brand-text-secondary">
            Tudo o que você precisa saber sobre o Parcele Aqui
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="border border-brand-border rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-left font-bold text-brand-brown">
                  {item.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-brand-yellow transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-50 border-t border-brand-border">
                  <p className="text-brand-text-secondary">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
