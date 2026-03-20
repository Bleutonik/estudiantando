import { Link } from 'react-router-dom'

const footerLinks = {
  Tienda: [
    { label: 'Quiero rendir', to: '/tienda' },
    { label: 'Quiero aprender mejor', to: '/tienda' },
    { label: 'Quiero organizarme', to: '/tienda' },
    { label: 'Meditaciones', to: '/tienda' },
    { label: 'Combos con descuento', to: '/tienda' },
    { label: 'Asesoría personalizada', to: '/tienda' },
  ],
  Contenido: [
    { label: 'Blog', to: '/blog' },
    { label: 'Beneficios', to: '/beneficios' },
    { label: 'Nuestra historia', to: '/' },
    { label: 'Testimonios', to: '/' },
    { label: 'Hablanos', to: '/contacto' },
  ],
  Legal: [
    { label: 'Términos y condiciones', to: '/' },
    { label: 'Política de privacidad', to: '/' },
    { label: 'Política de reembolso', to: '/' },
    { label: 'Botón de arrepentimiento', to: '/' },
  ],
}

// Real social media from estudiantando.com.ar
const socials = [
  { name: 'Instagram', handle: '@estudiantando', color: '#8a3ab9', icon: '📸', href: 'https://instagram.com/estudiantando' },
  { name: 'TikTok', handle: '@estudiantando', color: '#e96651', icon: '🎵', href: 'https://tiktok.com/@estudiantando' },
  { name: 'LinkedIn', handle: 'Estudiantando', color: '#1c86c6', icon: '💼', href: 'https://linkedin.com/company/estudiantando' },
  { name: 'Facebook', handle: 'estudiantando.ok', color: '#557dbc', icon: '👥', href: 'https://facebook.com/estudiantando.ok' },
]

export default function Footer() {
  return (
    <footer className="bg-[#1c0a2a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">

        <div className="grid lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-5">
              <img src="/logo.png" alt="Estudiantando" className="w-10 h-10 object-contain" />
              <div>
                <span className="font-bold text-lg block leading-none">Estudiantando</span>
                <span className="text-[10px] text-white/40">Tips para Estudiantes</span>
              </div>
            </Link>

            <p className="text-white/40 text-sm leading-relaxed mb-5 max-w-xs">
              La plataforma educativa para estudiantes argentinos que quieren organizarse, aprender mejor y rendir con confianza.
            </p>

            {/* Contact */}
            <div className="space-y-2 mb-6">
              <a href="mailto:clientes@estudiantando.com" className="flex items-center gap-2 text-sm text-white/40 hover:text-[#f789da] transition-colors">
                <span>✉️</span> clientes@estudiantando.com
              </a>
              <p className="flex items-center gap-2 text-sm text-white/40">
                <span>🕐</span> Lunes a viernes, 9 a 17hs
              </p>
            </div>

            {/* Socials */}
            <div className="flex gap-2 flex-wrap">
              {socials.map(s => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 bg-white/8 hover:bg-white/15 px-3 py-1.5 rounded-full text-xs text-white/60 hover:text-white transition-all"
                  title={s.name}
                >
                  <span>{s.icon}</span>
                  <span>{s.handle}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, items]) => (
            <div key={section}>
              <h3 className="font-bold text-xs text-white/50 uppercase tracking-widest mb-4">{section}</h3>
              <ul className="space-y-2.5">
                {items.map(item => (
                  <li key={item.label}>
                    <Link to={item.to} className="text-white/35 hover:text-white text-sm transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-white/8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/25 text-xs">
            © 2025 Estudiantando. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-3">
            <span className="text-white/20 text-xs">Pagos seguros con</span>
            <span className="bg-white/10 text-white/50 text-xs px-3 py-1 rounded-full">MercadoPago</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
