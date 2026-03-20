import { Link } from 'react-router-dom'
import { BookOpen, Instagram, Youtube, Twitter } from 'lucide-react'

const links = {
  Recursos: [
    { label: 'Quiero rendir', to: '/tienda' },
    { label: 'Quiero aprender mejor', to: '/tienda' },
    { label: 'Quiero organizarme', to: '/tienda' },
    { label: 'Combos especiales', to: '/tienda' },
  ],
  Empresa: [
    { label: 'Nuestra historia', to: '/' },
    { label: 'Blog', to: '/blog' },
    { label: 'Beneficios', to: '/beneficios' },
    { label: 'Contacto', to: '/contacto' },
  ],
  Legal: [
    { label: 'Términos y condiciones', to: '/' },
    { label: 'Política de privacidad', to: '/' },
    { label: 'Política de reembolso', to: '/' },
    { label: 'Botón de arrepentimiento', to: '/' },
  ],
}

const socials = [
  { Icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { Icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
  { Icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
]

export default function Footer() {
  return (
    <footer className="bg-violet-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-400 to-pink-400 flex items-center justify-center">
                <BookOpen size={18} className="text-white" />
              </div>
              <span className="font-bold text-xl">Estudiantando</span>
            </Link>
            <p className="text-white/50 leading-relaxed mb-6 max-w-xs">
              La plataforma educativa argentina que te ayuda a organizarte, aprender mejor y rendir tus exámenes con confianza.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-violet-600 transition-colors"
                  aria-label={label}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([section, items]) => (
            <div key={section}>
              <h3 className="font-bold text-sm text-white/80 uppercase tracking-wider mb-4">{section}</h3>
              <ul className="space-y-3">
                {items.map(item => (
                  <li key={item.label}>
                    <Link
                      to={item.to}
                      className="text-white/40 hover:text-white text-sm transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            © 2025 Estudiantando. Todos los derechos reservados.
          </p>
          <p className="text-white/20 text-xs">
            Hecho con 💜 para estudiantes argentinos
          </p>
        </div>
      </div>
    </footer>
  )
}
