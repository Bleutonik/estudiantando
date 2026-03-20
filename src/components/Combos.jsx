import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Check } from 'lucide-react'

// Real combos from estudiantando.com.ar
const combos = [
  {
    name: 'Combo Organizate y Triunfá',
    emoji: '📅',
    price: 28,
    original: 36,
    discount: '22% OFF',
    popular: false,
    items: [
      'Guía para organizarte mejor (teoría, tips, ejercicios)',
      'Kit Planillas (organizadores, trackers, 24 pósters)',
    ],
    gradient: 'from-purple-50 to-[#fef0fc]',
    border: 'border-purple-200',
    btnBg: 'bg-[#c41fa0] hover:bg-[#9e1880]',
    tag: 'Organización',
  },
  {
    name: 'Combo Masters Nivel 1 y 2',
    emoji: '⚡',
    price: 53,
    original: 66,
    discount: '20% OFF',
    popular: false,
    items: [
      'Masterclass completa (20 videos)',
      'Curso PostMaster (ejercicios prácticos)',
    ],
    gradient: 'from-yellow-50 to-pink-50',
    border: 'border-yellow-200',
    btnBg: 'bg-[#f9be06] hover:bg-[#e5ac00] text-[#1c0a2a]',
    tag: 'Nivel 1 + 2',
  },
  {
    name: 'Combo COMPLETITO',
    emoji: '👑',
    price: 81,
    original: 116,
    discount: '30% OFF',
    popular: true,
    items: [
      'Guía para organizarte mejor',
      'Guía para rendir exámenes en 6 pasos',
      'Ebook Técnicas de estudio (60+ pág)',
      'Kit Planillas + 24 pósters motivacionales',
    ],
    gradient: null,
    border: null,
    btnBg: 'bg-white hover:bg-white/90 text-[#c41fa0]',
    tag: 'El más completo',
  },
  {
    name: 'Combo para rendir atr',
    emoji: '🚀',
    price: 94,
    original: 117,
    discount: '20% OFF',
    popular: false,
    items: [
      'Masterclass (20 videos)',
      'Curso PostMaster',
      'Guía para rendir en 6 pasos (60 pág)',
      'Checklist de preparación + Machete bonus',
    ],
    gradient: 'from-pink-50 to-rose-50',
    border: 'border-pink-200',
    btnBg: 'bg-[#f789da] hover:bg-[#c41fa0]',
    tag: 'Examen próximo',
  },
]

export default function Combos() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-24 bg-white relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#fef0fc]/30 to-white pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-[#fef0fc] text-[#c41fa0] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Combos con descuento
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1c0a2a] mb-4">
            Ahorrá eligiendo{' '}
            <span className="gradient-text">un combo</span>
          </h2>
          <p className="text-lg text-[#808285] max-w-xl mx-auto">
            Cuanto más completo, mayor el descuento. Todos con acceso de por vida.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          {combos.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              className={`relative rounded-3xl p-7 ${
                c.popular
                  ? 'bg-gradient-to-br from-[#f789da] to-[#c41fa0] text-white shadow-2xl shadow-[#f789da]/30 scale-[1.03]'
                  : `bg-gradient-to-br ${c.gradient} border ${c.border}`
              }`}
            >
              {c.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#f9be06] text-[#1c0a2a] text-xs font-bold px-4 py-1.5 rounded-full shadow-lg whitespace-nowrap">
                  ✨ Más elegido
                </div>
              )}

              <div className="mb-4">
                <span className={`text-xs font-bold px-3 py-1 rounded-full inline-block mb-3 ${
                  c.popular ? 'bg-white/20 text-white' : 'bg-white text-[#c41fa0]'
                }`}>
                  {c.discount}
                </span>
                <div className="text-3xl mb-1">{c.emoji}</div>
                <h3 className={`font-bold text-sm leading-snug mb-1 ${c.popular ? 'text-white' : 'text-[#1c0a2a]'}`}>
                  {c.name}
                </h3>
                <span className={`text-[11px] ${c.popular ? 'text-white/70' : 'text-[#808285]'}`}>{c.tag}</span>
              </div>

              <div className="mb-5">
                <span className={`text-3xl font-bold ${c.popular ? 'text-white' : 'text-[#1c0a2a]'}`}>${c.price}</span>
                <span className={`text-sm line-through ml-2 ${c.popular ? 'text-white/50' : 'text-[#808285]'}`}>${c.original}</span>
                <p className={`text-[11px] mt-0.5 ${c.popular ? 'text-white/60' : 'text-[#808285]'}`}>USD • Pago único</p>
              </div>

              <ul className="space-y-2.5 mb-6">
                {c.items.map(item => (
                  <li key={item} className="flex items-start gap-2">
                    <Check size={14} className={`mt-0.5 shrink-0 ${c.popular ? 'text-white/80' : 'text-[#f789da]'}`} />
                    <span className={`text-xs leading-snug ${c.popular ? 'text-white/90' : 'text-[#808285]'}`}>{item}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 rounded-2xl font-semibold text-sm transition-all hover:scale-105 text-white ${c.btnBg} ${c.popular ? '' : ''}`}>
                Quiero este combo
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="text-center mt-10 space-y-1"
        >
          <p className="text-sm text-[#808285]">💳 Hasta 12 cuotas con Mercado Pago • Acceso de por vida las 24hs</p>
          <p className="text-sm text-[#808285]">🛡️ Garantía de devolución • <a href="mailto:clientes@estudiantando.com" className="text-[#c41fa0] hover:underline">Botón de arrepentimiento</a></p>
        </motion.div>
      </div>
    </section>
  )
}
