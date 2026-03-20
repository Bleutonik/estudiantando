import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Check, Zap, Crown, Sparkles } from 'lucide-react'

const combos = [
  {
    name: 'Combo Esencial',
    subtitle: 'Para empezar',
    emoji: '🚀',
    price: 29.70,
    original: 39.00,
    discount: '24% OFF',
    icon: Zap,
    color: 'violet',
    items: ['Planner Estudiantil', 'Guía de Organización', 'Mini curso de hábitos'],
    cta: 'Comenzar',
    popular: false,
  },
  {
    name: 'Combo Masters',
    subtitle: 'Más popular',
    emoji: '⚡',
    price: 53.00,
    original: 66.00,
    discount: '20% OFF',
    icon: Crown,
    color: 'pink',
    items: ['Todo del Esencial', 'Técnicas avanzadas de estudio', 'Meditaciones', 'Soporte por WhatsApp'],
    cta: 'Quiero este',
    popular: true,
  },
  {
    name: 'Combo Completito',
    subtitle: 'Todo incluido',
    emoji: '👑',
    price: 81.00,
    original: 116.00,
    discount: '30% OFF',
    icon: Sparkles,
    color: 'amber',
    items: ['Todo del Masters', 'Capacitación grupal en vivo', 'Acceso comunidad privada', 'Actualizaciones de por vida'],
    cta: 'Quiero todo',
    popular: false,
  },
]

const colorMap = {
  violet: {
    border: 'border-violet-200',
    bg: 'bg-violet-50',
    badge: 'bg-violet-100 text-violet-700',
    btn: 'bg-violet-600 hover:bg-violet-700',
    check: 'text-violet-600',
    discount: 'bg-violet-100 text-violet-700',
  },
  pink: {
    border: 'border-pink-300',
    bg: 'bg-gradient-to-br from-violet-600 to-pink-600',
    badge: 'bg-white/20 text-white',
    btn: 'bg-white hover:bg-white/90 text-pink-600',
    check: 'text-pink-200',
    discount: 'bg-white/20 text-white',
  },
  amber: {
    border: 'border-amber-200',
    bg: 'bg-amber-50',
    badge: 'bg-amber-100 text-amber-700',
    btn: 'bg-amber-500 hover:bg-amber-600',
    check: 'text-amber-600',
    discount: 'bg-amber-100 text-amber-700',
  },
}

export default function Combos() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-24 bg-white relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-white via-violet-50/30 to-white pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-pink-100 text-pink-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Precios especiales
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-violet-950 mb-4">
            Combos con{' '}
            <span className="gradient-text">descuento especial</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">
            Ahorrá más eligiendo un combo. Cuanto más completo, mayor el descuento.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-center">
          {combos.map((c, i) => {
            const colors = colorMap[c.color]
            const isPopular = c.popular

            return (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className={`relative rounded-3xl p-8 ${isPopular ? 'scale-105' : ''} ${
                  isPopular ? c.color === 'pink' ? 'bg-gradient-to-br from-violet-600 to-pink-600 text-white shadow-2xl shadow-violet-300' : colors.bg : `${colors.bg} border ${colors.border}`
                }`}
              >
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs font-bold px-5 py-1.5 rounded-full shadow-lg">
                    ✨ Más elegido
                  </div>
                )}

                <div className="flex items-start justify-between mb-6">
                  <div>
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${colors.badge} mb-3 inline-block`}>
                      {c.discount}
                    </span>
                    <div className="text-3xl mb-1">{c.emoji}</div>
                    <h3 className={`text-xl font-bold ${isPopular ? 'text-white' : 'text-violet-950'}`}>{c.name}</h3>
                    <p className={`text-sm ${isPopular ? 'text-white/70' : 'text-slate-400'}`}>{c.subtitle}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className={`text-4xl font-bold ${isPopular ? 'text-white' : 'text-violet-950'}`}>${c.price}</span>
                    <span className={`text-sm line-through ${isPopular ? 'text-white/50' : 'text-slate-400'}`}>${c.original}</span>
                  </div>
                  <p className={`text-xs mt-1 ${isPopular ? 'text-white/60' : 'text-slate-400'}`}>Pago único • Acceso de por vida</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {c.items.map(item => (
                    <li key={item} className="flex items-start gap-3">
                      <Check size={16} className={`mt-0.5 shrink-0 ${colors.check} ${isPopular ? 'text-pink-200' : ''}`} />
                      <span className={`text-sm ${isPopular ? 'text-white/90' : 'text-slate-600'}`}>{item}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3.5 rounded-2xl font-semibold text-sm transition-all hover:scale-105 shadow-md ${
                  isPopular
                    ? 'bg-white text-violet-700 hover:bg-white/90 shadow-white/20'
                    : `${colors.btn} text-white`
                }`}>
                  {c.cta}
                </button>
              </motion.div>
            )
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center text-sm text-slate-400 mt-8"
        >
          Pagos seguros con MercadoPago y PayPal • Garantía de devolución de 30 días
        </motion.p>
      </div>
    </section>
  )
}
