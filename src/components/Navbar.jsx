import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ShoppingCart, Search } from 'lucide-react'

const links = [
  { to: '/',           label: 'Inicio'     },
  { to: '/tienda',     label: 'Tienda'     },
  { to: '/beneficios', label: 'Beneficios' },
  { to: '/blog',       label: 'Blog'       },
  { to: '/contacto',   label: 'Hablanos'   },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/70 backdrop-blur-2xl border-b border-white/40 shadow-lg shadow-[#f789da]/8'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <img
              src="/logo.png"
              alt="Estudiantando"
              className="w-9 h-9 object-contain group-hover:scale-110 transition-transform duration-200"
            />
            <div className="leading-tight">
              <span className={`font-bold text-base block leading-none transition-colors ${scrolled ? 'text-[#1c0a2a]' : 'text-white lg:text-white'}`}>
                Estudiantando
              </span>
              <span className={`text-[10px] font-medium hidden sm:block transition-colors ${scrolled ? 'text-[#808285]' : 'text-white/60'}`}>
                Tips para Estudiantes
              </span>
            </div>
          </Link>

          {/* Desktop links */}
          <nav className="hidden lg:flex items-center gap-1">
            {links.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  location.pathname === link.to
                    ? 'text-[#c41fa0]'
                    : scrolled ? 'text-[#808285] hover:text-[#c41fa0]' : 'text-white/80 hover:text-white'
                }`}
              >
                {location.pathname === link.to && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-[#f789da]/15 rounded-full"
                    transition={{ type: 'spring', duration: 0.4 }}
                  />
                )}
                <span className="relative">{link.label}</span>
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Search — mobile only */}
            <button className={`lg:hidden p-2 rounded-full transition-colors ${
              scrolled ? 'text-[#808285] hover:bg-[#fef0fc]' : 'text-white/80 hover:bg-white/10'
            }`}>
              <Search size={20} />
            </button>

            {/* Cart */}
            <button className={`relative p-2 rounded-full transition-colors ${
              scrolled ? 'text-[#808285] hover:bg-[#fef0fc] hover:text-[#c41fa0]' : 'text-white/80 hover:bg-white/10 hover:text-white'
            }`}>
              <ShoppingCart size={20} />
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-[#f789da] text-white text-[9px] rounded-full flex items-center justify-center font-bold">
                0
              </span>
            </button>

            {/* CTA — desktop only */}
            <Link
              to="/tienda"
              className="hidden lg:inline-flex items-center bg-[#f789da] hover:bg-[#c41fa0] text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-[#f789da]/30 hover:scale-105 ml-1"
            >
              Ir a la tienda
            </Link>
          </div>
        </div>
      </div>
    </motion.header>
  )
}
