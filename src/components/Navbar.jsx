import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ShoppingCart, BookOpen } from 'lucide-react'

const links = [
  { to: '/', label: 'Inicio' },
  { to: '/tienda', label: 'Tienda' },
  { to: '/beneficios', label: 'Beneficios' },
  { to: '/blog', label: 'Blog' },
  { to: '/contacto', label: 'Hablanos' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [location])

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-xl shadow-lg shadow-violet-100/50'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-600 to-pink-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <BookOpen size={18} className="text-white" />
              </div>
              <span className="font-bold text-xl text-violet-900 group-hover:gradient-text transition-all">
                Estudiantando
              </span>
            </Link>

            {/* Desktop links */}
            <nav className="hidden lg:flex items-center gap-1">
              {links.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 group ${
                    location.pathname === link.to
                      ? 'text-violet-700'
                      : 'text-slate-600 hover:text-violet-700'
                  }`}
                >
                  {location.pathname === link.to && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-violet-100 rounded-full"
                      transition={{ type: 'spring', duration: 0.4 }}
                    />
                  )}
                  <span className="relative">{link.label}</span>
                </Link>
              ))}
            </nav>

            {/* CTA + Cart */}
            <div className="hidden lg:flex items-center gap-3">
              <button className="relative p-2 rounded-full hover:bg-violet-100 transition-colors text-slate-600 hover:text-violet-700">
                <ShoppingCart size={20} />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-pink-500 text-white text-[10px] rounded-full flex items-center justify-center font-bold">0</span>
              </button>
              <Link
                to="/tienda"
                className="bg-gradient-to-r from-violet-600 to-pink-500 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-violet-200 hover:scale-105 transition-all duration-200"
              >
                Explorar recursos
              </Link>
            </div>

            {/* Mobile burger */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 rounded-xl text-violet-700 hover:bg-violet-100 transition-colors"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 bg-white/95 backdrop-blur-xl border-b border-violet-100 shadow-xl lg:hidden"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {links.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-4 py-3 rounded-xl font-medium transition-all ${
                    location.pathname === link.to
                      ? 'bg-violet-100 text-violet-700'
                      : 'text-slate-600 hover:bg-violet-50 hover:text-violet-700'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/tienda"
                className="mt-2 bg-gradient-to-r from-violet-600 to-pink-500 text-white px-4 py-3 rounded-xl font-semibold text-center"
              >
                Explorar recursos
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
