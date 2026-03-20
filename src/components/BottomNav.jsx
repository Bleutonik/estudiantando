import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Home, ShoppingBag, BookOpen, Star, MessageCircle } from 'lucide-react'

const tabs = [
  { to: '/',           icon: Home,          label: 'Inicio'     },
  { to: '/tienda',     icon: ShoppingBag,   label: 'Tienda'     },
  { to: '/blog',       icon: BookOpen,      label: 'Blog'       },
  { to: '/beneficios', icon: Star,          label: 'Beneficios' },
  { to: '/contacto',   icon: MessageCircle, label: 'Hablanos'   },
]

export default function BottomNav() {
  const location = useLocation()

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50
      bg-white/70 backdrop-blur-2xl
      border-t border-white/40
      shadow-[0_-8px_32px_rgba(247,137,218,0.12)]"
    >
      {/* Safe area for iPhone notch */}
      <div className="flex items-center justify-around h-16 px-1 pb-safe">
        {tabs.map(tab => {
          const active = location.pathname === tab.to
          return (
            <Link
              key={tab.to}
              to={tab.to}
              className="flex flex-col items-center justify-center gap-0.5 flex-1 py-1 relative"
            >
              {/* Active pill background */}
              <AnimatePresence>
                {active && (
                  <motion.span
                    layoutId="bottom-pill"
                    className="absolute inset-x-1 top-0.5 bottom-0.5 rounded-2xl bg-[#f789da]/12"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </AnimatePresence>

              <motion.div
                animate={active ? { y: -2, scale: 1.1 } : { y: 0, scale: 1 }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                className="relative z-10"
              >
                <tab.icon
                  size={22}
                  strokeWidth={active ? 2.5 : 1.8}
                  className={`transition-colors duration-200 ${active ? 'text-[#c41fa0]' : 'text-[#808285]'}`}
                />
              </motion.div>

              <span className={`text-[10px] font-semibold relative z-10 transition-colors duration-200 ${
                active ? 'text-[#c41fa0]' : 'text-[#808285]'
              }`}>
                {tab.label}
              </span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
