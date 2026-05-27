import { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';

/**
 * Floating CTA Component
 * Design: Parcele Aqui B2B - Premium B2B Landing Page
 * - Fixed WhatsApp button in bottom-right corner
 * - Pulse animation when user scrolls past hero
 * - Responsive: compact on mobile, full text on desktop
 */

export default function FloatingCTA() {
  const [showPulse, setShowPulse] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!showPulse && window.scrollY > window.innerHeight * 0.8) {
        setShowPulse(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showPulse]);

  const whatsappLink = "https://wa.me/5531973322921?text=Olá%21%20Vim%20da%20Landing%20Page%20Parcele%20Aqui%20Negócios%20e%20gostaria%20de%20falar%20com%20um%20especialista.";

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`cta-floating ${showPulse ? 'animate-pulse' : ''}`}
      aria-label="Falar com um especialista pelo WhatsApp"
    >
      <MessageCircle size={24} className="flex-shrink-0" />
      <span className="cta-text hidden sm:inline">Falar com especialista</span>
    </a>
  );
}
