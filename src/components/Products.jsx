import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ShoppingCart, Star, Zap } from 'lucide-react'

const products = [
  {
    id: 1,
    name: 'Guía para Rendir Exámenes',
    category: 'Quiero rendir',
    emoji: '📝',
    price: 29.99,
    original: null,
    rating: 4.9,
    reviews: 142,
    badge: 'Más vendido',
    badgeColor: 'bg-violet-600',
    gradient: 'from-violet-100 to-purple-100',
    desc: 'Método paso a paso para preparar cualquier examen con éxito y sin estrés.',
  },
  {
    id: 2,
    name: 'Técnicas de Memorización',
    category: 'Quiero aprender mejor',
    emoji: '🧠',
    price: 24.99,
    original: null,
    rating: 4.8,
    reviews: 98,
    badge: 'Nuevo',
    badgeColor: 'bg-pink-500',
    gradient: 'from-pink-100 to-rose-100',
    desc: 'Sistema de flashcards y mapas mentales para retener información el doble de rápido.',
  },
  {
    id: 3,
    name: 'Planner Estudiantil',
    category: 'Quiero organizarme',
    emoji: '📅',
    price: 19.99,
    original: null,
    rating: 4.9,
    reviews: 213,
    badge: 'Favorito',
    badgeColor: 'bg-amber-500',
    gradient: 'from-amber-100 to-orange-100',
    desc: 'Planificador semanal y mensual con sistema de prioridades y seguimiento de metas.',
  },
  {
    id: 4,
    name: 'Meditaciones para Estudiar',
    category: 'Bienestar',
    emoji: '🧘',
    price: 14.99,
    original: null,
    rating: 4.7,
    reviews: 76,
    badge: null,
    badgeColor: '',
    gradient: 'from-blue-100 to-indigo-100',
    desc: 'Audio meditaciones guiadas para concentrarte mejor y reducir la ansiedad académica.',
  },
]

export default function Products() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4"
        >
          <div>
            <span className="inline-block bg-amber-100 text-amber-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Recursos destacados
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-violet-950">
              Lo más <span className="gradient-text">elegido</span>
            </h2>
          </div>
          <Link
            to="/tienda"
            className="inline-flex items-center gap-2 text-violet-600 font-semibold hover:gap-3 transition-all"
          >
            Ver todos los recursos →
          </Link>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-violet-100/50 hover:-translate-y-2 transition-all duration-300 overflow-hidden"
            >
              {/* Image area */}
              <div className={`relative bg-gradient-to-br ${p.gradient} h-44 flex items-center justify-center`}>
                <span className="text-6xl float-anim">{p.emoji}</span>
                {p.badge && (
                  <span className={`absolute top-3 left-3 ${p.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                    {p.badge}
                  </span>
                )}
              </div>

              <div className="p-5">
                <p className="text-xs text-violet-500 font-medium mb-1">{p.category}</p>
                <h3 className="font-bold text-violet-950 mb-2 line-clamp-1">{p.name}</h3>
                <p className="text-xs text-slate-400 mb-3 line-clamp-2">{p.desc}</p>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  <Star size={12} className="fill-amber-400 text-amber-400" />
                  <span className="text-xs font-semibold text-slate-700">{p.rating}</span>
                  <span className="text-xs text-slate-400">({p.reviews})</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-violet-900">${p.price}</span>
                  <button className="flex items-center gap-1.5 bg-gradient-to-r from-violet-600 to-pink-500 text-white text-sm font-semibold px-4 py-2 rounded-xl hover:scale-105 transition-transform shadow-md shadow-violet-200">
                    <ShoppingCart size={14} />
                    Agregar
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
