/**
 * Footer Component
 * Design: Parcele Aqui B2B - Premium B2B Landing Page
 * - Company information and links
 * - Brand colors and typography
 */

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappLink = "https://wa.me/5531973322921?text=Olá%21%20Vim%20da%20Landing%20Page%20Parcele%20Aqui%20Negócios%20e%20gostaria%20de%20falar%20com%20um%20especialista.";

  return (
    <footer id="site-footer" className="bg-brand-brown text-white py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo & Company Info */}
          <div className="md:col-span-1">
            <img
              src="/images/logo-parcele-aqui.svg"
              alt="Parcele Aqui"
              className="h-10 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-sm text-white/80">
              Solução de parcelamento B2B desenvolvida pela Potencial Tecnologia.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold text-base mb-4 text-brand-yellow">Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#solucao" className="text-white/80 hover:text-brand-yellow transition-colors">
                  Soluções
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="text-white/80 hover:text-brand-yellow transition-colors">
                  Como funciona
                </a>
              </li>
              <li>
                <a href="#quem-somos" className="text-white/80 hover:text-brand-yellow transition-colors">
                  Sobre nós
                </a>
              </li>
              <li>
                <a href="#faq" className="text-white/80 hover:text-brand-yellow transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Outros */}
          <div>
            <h3 className="font-bold text-base mb-4 text-brand-yellow">Outros</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-white/80 hover:text-brand-yellow transition-colors">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-brand-yellow transition-colors">
                  Termos de Serviço
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-brand-yellow transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-bold text-base mb-4 text-brand-yellow">Contato</h3>
            <div className="space-y-3">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/80 hover:text-brand-yellow transition-colors text-sm"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.149-.197.297-.767.967-.94 1.165-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
                </svg>
                +55 31 97332-2921
              </a>
              <p className="text-sm text-white/80">
                CNPJ: 00.000.000/0000-00
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-white/60">
            © {currentYear} Parcele Aqui. Todos os direitos reservados.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.953 4.57a10 10 0 002.856-3.51 10.02 10.02 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417a9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.438-.103.25-.129.599-.129.948v5.419h-3.554s.05-8.736 0-9.646h3.554v1.364c.429-.659 1.191-1.598 2.905-1.598 2.12 0 3.708 1.384 3.708 4.36v5.52zM5.337 9.433c-1.144 0-1.915-.758-1.915-1.708 0-.951.77-1.708 1.915-1.708 1.144 0 1.915.757 1.915 1.708 0 .95-.771 1.708-1.915 1.708zm1.575 11.019H3.762V9.806h3.15v10.646zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
