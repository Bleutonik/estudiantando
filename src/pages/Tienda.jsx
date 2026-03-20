import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ShoppingCart, Star, Filter, Search } from 'lucide-react'

const allProducts = [
  { id: 1, name: 'Guía para Rendir Exámenes', category: 'rendir', emoji: '📝', price: 29.99, rating: 4.9, reviews: 142, badge: 'Más vendido', gradient: 'from-violet-100 to-purple-100', desc: 'Método paso a paso para preparar cualquier examen con éxito.' },
  { id: 2, name: 'Técnicas de Memorización', category: 'aprender', emoji: '🧠', price: 24.99, rating: 4.8, reviews: 98, badge: 'Nuevo', gradient: 'from-pink-100 to-rose-100', desc: 'Sistema de flashcards y mapas mentales.' },
  { id: 3, name: 'Planner Estudiantil', category: 'organizar', emoji: '📅', price: 19.99, rating: 4.9, reviews: 213, badge: 'Favorito', gradient: 'from-amber-100 to-orange-100', desc: 'Planificador semanal con sistema de prioridades.' },
  { id: 4, name: 'Meditaciones para Estudiar', category: 'bienestar', emoji: '🧘', price: 14.99, rating: 4.7, reviews: 76, badge: null, gradient: 'from-blue-100 to-indigo-100', desc: 'Audio meditaciones guiadas para concentrarte.' },
  { id: 5, name: 'Manual Anti-Procrastinación', category: 'organizar', emoji: '⏰', price: 22.99, rating: 4.8, reviews: 54, badge: null, gradient: 'from-green-100 to-emerald-100', desc: 'Sistema para vencer la postergación de una vez por todas.' },
  { id: 6, name: 'Guía de Lectura Comprensiva', category: 'aprender', emoji: '📖', price: 17.99, rating: 4.6, reviews: 89, badge: null, gradient: 'from-cyan-100 to-teal-100', desc: 'Técnicas para leer más rápido y retener más.' },
  { id: 7, name: 'Kit de Mapas Mentales', category: 'aprender', emoji: '🗺️', price: 21.99, rating: 4.9, reviews: 33, badge: 'Nuevo', gradient: 'from-fuchsia-100 to-pink-100', desc: 'Plantillas y guía para crear mapas mentales efectivos.' },
  { id: 8, name: 'Rutina de Estudio Saludable', category: 'bienestar', emoji: '🌱', price: 18.99, rating: 4.7, reviews: 67, badge: null, gradient: 'from-lime-100 to-green-100', desc: 'Equilibrá tu vida académica y personal.' },
]

const categories = [
  { id: 'all', label: 'Todo' },
  { id: 'rendir', label: '🎯 Quiero rendir' },
  { id: 'aprender', label: '🧠 Aprender mejor' },
  { id: 'organizar', label: '📅 Organizarme' },
  { id: 'bienestar', label: '🧘 Bienestar' },
]

export default function Tienda() {
  const [filter, setFilter] = useState('all')
  const [search, setSearch] = useState('')
  const [cart, setCart] = useState([])
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  const filtered = allProducts.filter(p => {
    const matchCat = filter === 'all' || p.category === filter
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  const addToCart = (id) => {
    setCart(c => c.includes(id) ? c : [...c, id])
  }

  return (
    <main className="pt-20 min-h-screen bg-gradient-to-b from-violet-50 to-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-violet-950 to-indigo-900 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-block bg-white/10 text-white/80 text-sm px-4 py-1.5 rounded-full mb-4">Tienda</span>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Todos nuestros <span className="gradient-text-2">recursos</span>
            </h1>
            <p className="text-white/60 max-w-xl mx-auto">
              Herramientas diseñadas por expertos en educación para que alcances tus metas académicas.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" ref={ref}>
        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          {/* Search */}
          <div className="relative flex-1 max-w-sm">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Buscar recursos..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100"
            />
          </div>

          {/* Category pills */}
          <div className="flex gap-2 flex-wrap">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === cat.id
                    ? 'bg-violet-600 text-white shadow-lg shadow-violet-200'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-violet-300 hover:text-violet-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="group bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-violet-100/50 hover:-translate-y-2 transition-all duration-300 overflow-hidden"
            >
              <div className={`bg-gradient-to-br ${p.gradient} h-44 flex items-center justify-center relative`}>
                <span className="text-6xl float-anim">{p.emoji}</span>
                {p.badge && (
                  <span className="absolute top-3 left-3 bg-violet-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {p.badge}
                  </span>
                )}
                {cart.includes(p.id) && (
                  <span className="absolute top-3 right-3 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    ✓ Agregado
                  </span>
                )}
              </div>
              <div className="p-5">
                <h3 className="font-bold text-violet-950 mb-2 line-clamp-1">{p.name}</h3>
                <p className="text-xs text-slate-400 mb-3 line-clamp-2">{p.desc}</p>
                <div className="flex items-center gap-1 mb-4">
                  <Star size={12} className="fill-amber-400 text-amber-400" />
                  <span className="text-xs font-semibold text-slate-700">{p.rating}</span>
                  <span className="text-xs text-slate-400">({p.reviews})</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-violet-900">${p.price}</span>
                  <button
                    onClick={() => addToCart(p.id)}
                    className={`flex items-center gap-1.5 text-white text-sm font-semibold px-4 py-2 rounded-xl hover:scale-105 transition-transform shadow-md ${
                      cart.includes(p.id) ? 'bg-green-500 shadow-green-200' : 'bg-gradient-to-r from-violet-600 to-pink-500 shadow-violet-200'
                    }`}
                  >
                    <ShoppingCart size={14} />
                    {cart.includes(p.id) ? 'En carrito' : 'Agregar'}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-slate-400">
            <div className="text-5xl mb-4">🔍</div>
            <p className="text-lg font-medium">No encontramos recursos con ese criterio</p>
            <button onClick={() => { setFilter('all'); setSearch('') }} className="mt-4 text-violet-600 font-medium hover:underline">
              Ver todos los recursos
            </button>
          </div>
        )}
      </section>
    </main>
  )
}
