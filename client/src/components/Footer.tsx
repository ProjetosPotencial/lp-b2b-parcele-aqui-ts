/**
 * Footer Component
 * Design: Parcele Aqui B2B - Premium B2B Landing Page
 * - 3 colunas: Soluções, Outros, Contato
 * - Redes sociais e logo Potencial
 */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="site-footer" className="bg-brand-brown text-white py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Column 1: Soluções */}
          <div>
            <h3 className="font-bold text-base mb-4">Soluções</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <a href="#solucao" className="hover:text-white transition-colors">
                  Soluções
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="hover:text-white transition-colors">
                  Como funciona
                </a>
              </li>
              <li>
                <a href="#quem-somos" className="hover:text-white transition-colors">
                  Sobre nós
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Termos de Serviço
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Outros */}
          <div>
            <h3 className="font-bold text-base mb-4">Outros</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Política PLD e FT
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Preciso de ajuda
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Fazer uma simulação
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contato */}
          <div>
            <h3 className="font-bold text-base mb-4">Contato</h3>
            <div className="space-y-3 text-sm text-white/80">
              <a
                href="tel:+551131591380"
                className="block hover:text-white transition-colors"
              >
                (11) 3159-1380
              </a>
              <a
                href="mailto:suporte@potencialtecnologia.com.br"
                className="block hover:text-white transition-colors"
              >
                suporte@potencialtecnologia.com.br
              </a>
              <p>
                Av. Marquês de São Vicente, 1619<br/>
                Barra Funda - São Paulo, SP
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <img
            src="/images/logos/logo-potencial-tecnologia.svg"
            alt="Potencial Tecnologia"
            className="h-6 brightness-0 invert"
          />
          <div className="flex gap-4">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors" aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.438-.103.25-.129.599-.129.948v5.419h-3.554s.05-8.736 0-9.646h3.554v1.364c.429-.659 1.191-1.598 2.905-1.598 2.12 0 3.708 1.384 3.708 4.36v5.52zM5.337 9.433c-1.144 0-1.915-.758-1.915-1.708 0-.951.77-1.708 1.915-1.708 1.144 0 1.915.757 1.915 1.708 0 .95-.771 1.708-1.915 1.708zm1.575 11.019H3.762V9.806h3.15v10.646zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" />
              </svg>
            </a>
          </div>
        </div>

        <p className="text-xs text-white/60 text-center mt-6">
          © {currentYear} Parcele Aqui. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
