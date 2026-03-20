import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ShoppingCart } from 'lucide-react'

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
          scrolled ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-pink-100/60' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#f789da] to-[#c41fa0] flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                <span className="text-white text-lg">📚</span>
              </div>
              <div className="leading-tight">
                <span className="font-bold text-lg text-[#1c0a2a] block leading-none">Estudiantando</span>
                <span className="text-[10px] text-[#808285] font-medium">Tips para Estudiantes</span>
              </div>
            </Link>

            {/* Desktop links */}
            <nav className="hidden lg:flex items-center gap-1">
              {links.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    location.pathname === link.to ? 'text-[#c41fa0]' : 'text-[#808285] hover:text-[#c41fa0]'
                  }`}
                >
                  {location.pathname === link.to && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-[#fef0fc] rounded-full"
                      transition={{ type: 'spring', duration: 0.4 }}
                    />
                  )}
                  <span className="relative">{link.label}</span>
                </Link>
              ))}
            </nav>

            {/* CTA + Cart */}
            <div className="hidden lg:flex items-center gap-3">
              <button className="relative p-2 rounded-full hover:bg-[#fef0fc] transition-colors text-[#808285] hover:text-[#c41fa0]">
                <ShoppingCart size={20} />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#f789da] text-white text-[10px] rounded-full flex items-center justify-center font-bold">0</span>
              </button>
              <Link
                to="/tienda"
                className="bg-[#f789da] hover:bg-[#c41fa0] text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-pink-200 hover:scale-105"
              >
                Ir a la tienda
              </Link>
            </div>

            {/* Mobile burger */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 rounded-xl text-[#c41fa0] hover:bg-[#fef0fc] transition-colors"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-x-0 top-16 z-40 bg-white/97 backdrop-blur-xl border-b border-pink-100 shadow-xl lg:hidden"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {links.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-4 py-3 rounded-xl font-medium transition-all ${
                    location.pathname === link.to
                      ? 'bg-[#fef0fc] text-[#c41fa0]'
                      : 'text-[#808285] hover:bg-[#fef0fc] hover:text-[#c41fa0]'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/tienda" className="mt-2 bg-[#f789da] text-white px-4 py-3 rounded-xl font-semibold text-center">
                Ir a la tienda
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
