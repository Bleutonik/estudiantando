import { useState } from 'react'
import { motion } from 'framer-motion'
import { ShoppingCart, Star, Search } from 'lucide-react'

// All 23 real products from estudiantando.com.ar
const allProducts = [
  // MASTERCLASS / CURSOS
  { id: 1, emoji: '🎓', gradient: 'from-[#fef0fc] to-[#f9b3ef]', category: 'rendir', categoryLabel: 'Quiero rendir', name: 'Masterclass | transformá tus pendientes en aprobados', desc: '20 videos a tu ritmo + materiales + foro activo. Postura, nutrición, gestión emocional, estrategia de estudio y más.', price: 40, original: null, rating: 4.91, reviews: 119, badge: 'Más completo', badgeColor: 'bg-[#f789da]' },
  { id: 2, emoji: '🏋️', gradient: 'from-purple-50 to-[#fef0fc]', category: 'rendir', categoryLabel: 'Quiero rendir', name: 'Curso PostMaster', desc: 'Ejercicios prácticos: hábitos de estudio, cálculo de tiempos, planificación de cronograma y reducción de ansiedad.', price: 28, original: null, rating: 4.8, reviews: 54, badge: 'Nivel 2', badgeColor: 'bg-purple-500' },
  { id: 3, emoji: '📊', gradient: 'from-blue-50 to-indigo-50', category: 'organizar', categoryLabel: 'Quiero organizarme', name: 'Curso Intensivo | Planificá con estrategia', desc: 'Curso intensivo para armar un plan de rendida realista y cumplirlo. Ideal cuando el examen se acerca.', price: 51, original: null, rating: 4.85, reviews: 38, badge: 'Intensivo', badgeColor: 'bg-blue-500' },

  // GUÍAS
  { id: 4, emoji: '✅', gradient: 'from-pink-50 to-[#fef0fc]', category: 'rendir', categoryLabel: 'Quiero rendir', name: 'Guía para rendir exámenes en 6 pasos', desc: 'PDF interactivo de 60 páginas con un proceso de 6 pasos para organizar y activar tu preparación con claridad.', price: 40, original: null, rating: 4.9, reviews: 93, badge: null, badgeColor: '' },
  { id: 5, emoji: '📅', gradient: 'from-purple-50 to-pink-50', category: 'organizar', categoryLabel: 'Quiero organizarme', name: 'Guía para organizarte mejor', desc: 'PDF de 24 páginas con teoría, ejercicios de autoconocimiento y estrategias concretas para gestionar tu tiempo y energía.', price: 22, original: null, rating: 4.4, reviews: 10, badge: null, badgeColor: '' },
  { id: 6, emoji: '🔄', gradient: 'from-yellow-50 to-amber-50', category: 'aprender', categoryLabel: 'Quiero aprender mejor', name: 'Guía para aprender a repasar', desc: 'Técnicas de repaso activo y espaciado para que lo que estudiás realmente se quede en tu memoria.', price: 14, original: null, rating: 4.7, reviews: 67, badge: null, badgeColor: '' },
  { id: 7, emoji: '📝', gradient: 'from-green-50 to-teal-50', category: 'aprender', categoryLabel: 'Quiero aprender mejor', name: 'Guía para aprender a resumir', desc: 'Cómo hacer resúmenes que realmente te sirvan para estudiar y no solo para copiar información.', price: 18, original: null, rating: 4.8, reviews: 82, badge: null, badgeColor: '' },
  { id: 8, emoji: '🖍️', gradient: 'from-orange-50 to-yellow-50', category: 'aprender', categoryLabel: 'Quiero aprender mejor', name: 'Guía para aprender a resaltar', desc: 'Subrayar no es simplemente marcar con color. Aprendé a seleccionar información de manera estratégica.', price: 15, original: null, rating: 4.6, reviews: 45, badge: null, badgeColor: '' },
  { id: 9, emoji: '🧩', gradient: 'from-indigo-50 to-blue-50', category: 'aprender', categoryLabel: 'Quiero aprender mejor', name: 'Guía para descubrir tu estilo de aprendizaje', desc: 'Identificá cómo aprendés mejor y adaptá tus técnicas de estudio a tu perfil real.', price: 16, original: null, rating: 4.75, reviews: 39, badge: null, badgeColor: '' },
  { id: 10, emoji: '📚', gradient: 'from-cyan-50 to-sky-50', category: 'aprender', categoryLabel: 'Quiero aprender mejor', name: 'Guía para usar mejor el programa de la cátedra', desc: 'Aprovechá el programa de tu materia como una hoja de ruta. Studiá con dirección y sin perderte nada.', price: 11, original: null, rating: 4.5, reviews: 28, badge: null, badgeColor: '' },

  // HERRAMIENTAS
  { id: 11, emoji: '📋', gradient: 'from-[#fef0fc] to-pink-50', category: 'organizar', categoryLabel: 'Quiero organizarme', name: 'Kit Planillas para organizarte', desc: '32 páginas: planillas maestras, organizadores de TPs, seguimiento de pendientes, organizadores semanales y 24 pósters motivacionales.', price: 16, original: null, rating: 4.9, reviews: 204, badge: 'Favorito', badgeColor: 'bg-[#c41fa0]' },
  { id: 12, emoji: '☑️', gradient: 'from-rose-50 to-pink-50', category: 'rendir', categoryLabel: 'Quiero rendir', name: 'Checklist para evaluar si rendir o no', desc: 'Herramienta interactiva para evaluar tu nivel de preparación real antes de ir a rendir. Tomá la decisión con información.', price: 10, original: 11, rating: 4.8, reviews: 73, badge: null, badgeColor: '' },
  { id: 13, emoji: '📖', gradient: 'from-yellow-50 to-amber-50', category: 'aprender', categoryLabel: 'Quiero aprender mejor', name: 'Ebook | Técnicas para estudiar y aprender mejor', desc: '60+ páginas con técnicas de resumen, repaso, subrayado y cómo descubrir y aprovechar tu estilo de aprendizaje.', price: 40, original: null, rating: 4.8, reviews: 87, badge: null, badgeColor: '' },

  // MEDITACIONES
  { id: 14, emoji: '🧘', gradient: 'from-blue-50 to-teal-50', category: 'meditar', categoryLabel: 'Meditaciones', name: 'Meditación para relajar previo a rendir', desc: 'Audio de 10 min con Lissy Szwarcberg (Mindfulness BA). Respiración, relajación física y confianza previa al examen.', price: 11, original: null, rating: 5.0, reviews: 2, badge: 'Audio', badgeColor: 'bg-teal-500' },
  { id: 15, emoji: '🌊', gradient: 'from-indigo-50 to-blue-50', category: 'meditar', categoryLabel: 'Meditaciones', name: 'Meditación para volver a tu eje', desc: 'Audio de 9:30 min. Para cuando te sentís abrumado/a y necesitás recuperar la calma y elegir tus prioridades con conciencia.', price: 11, original: null, rating: 5.0, reviews: 1, badge: 'Audio', badgeColor: 'bg-indigo-500' },
  { id: 16, emoji: '🌙', gradient: 'from-violet-50 to-purple-50', category: 'meditar', categoryLabel: 'Meditaciones', name: 'Meditación para bajar un cambio', desc: 'Audio de 6:19 min. Para el agotamiento mental y físico. La pausa necesaria para recuperar claridad y liviandad.', price: 11, original: null, rating: 5.0, reviews: 1, badge: 'Audio', badgeColor: 'bg-violet-500' },

  // ASESORÍA
  { id: 17, emoji: '💬', gradient: 'from-pink-50 to-[#fef0fc]', category: 'rendir', categoryLabel: 'Quiero rendir', name: 'Asesoría personalizada estratégica | Virtual', desc: 'Sesión 1 a 1 virtual para trabajar tu situación específica: organización, preparación de examen, técnicas de estudio.', price: 60, original: null, rating: 5.0, reviews: 14, badge: 'Premium', badgeColor: 'bg-[#f789da]' },

  // COMBOS
  { id: 18, emoji: '💜', gradient: 'from-purple-50 to-[#fef0fc]', category: 'combo', categoryLabel: 'Combos', name: 'Combo organizate y triunfá', desc: 'Guía para organizarte mejor + Kit Planillas completo. El combo esencial para tener el control de tu estudio.', price: 28, original: 36, rating: 4.75, reviews: 4, badge: '22% OFF', badgeColor: 'bg-green-500' },
  { id: 19, emoji: '⚡', gradient: 'from-yellow-50 to-amber-50', category: 'combo', categoryLabel: 'Combos', name: 'Combo Masters Nivel 1 y 2', desc: 'Masterclass (20 videos) + Curso PostMaster (ejercicios prácticos). El combo para transformar tu forma de estudiar.', price: 53, original: 66, rating: 4.5, reviews: 2, badge: '20% OFF', badgeColor: 'bg-green-500' },
  { id: 20, emoji: '🧠', gradient: 'from-blue-50 to-indigo-50', category: 'combo', categoryLabel: 'Combos', name: 'Combo Master + Ebook', desc: 'Masterclass completa + Ebook de 60+ páginas. Domina las estrategias y las técnicas de estudio.', price: 64, original: 80, rating: 4.5, reviews: 2, badge: '20% OFF', badgeColor: 'bg-green-500' },
  { id: 21, emoji: '👑', gradient: 'from-[#fef0fc] to-pink-50', category: 'combo', categoryLabel: 'Combos', name: 'Combo COMPLETITO', desc: 'Guía de organización + Guía rendir en 6 pasos + Ebook + Kit Planillas. Todo lo que necesitás, con el mayor descuento.', price: 81, original: 116, rating: 5.0, reviews: 5, badge: '30% OFF', badgeColor: 'bg-[#c41fa0]' },
  { id: 22, emoji: '🚀', gradient: 'from-rose-50 to-pink-50', category: 'combo', categoryLabel: 'Combos', name: 'Combo para rendir atr', desc: 'Masterclass + PostMaster + Guía 6 pasos + Checklist + Machete bonus. El paquete completo para rendir con seguridad.', price: 94, original: 117, rating: 5.0, reviews: 3, badge: '20% OFF', badgeColor: 'bg-green-500' },
  { id: 23, emoji: '🧘', gradient: 'from-teal-50 to-blue-50', category: 'combo', categoryLabel: 'Combos', name: 'Combo Meditaciones de Mindfulness', desc: 'Los 3 audios de meditación con Lissy Szwarcberg (Mindfulness Buenos Aires) al mejor precio.', price: 29.70, original: 30, rating: 5.0, reviews: 3, badge: '1% OFF', badgeColor: 'bg-teal-500' },
]

const categories = [
  { id: 'all', label: 'Todo' },
  { id: 'rendir', label: '🎯 Quiero rendir' },
  { id: 'aprender', label: '🧠 Aprender mejor' },
  { id: 'organizar', label: '📅 Organizarme' },
  { id: 'meditar', label: '🧘 Meditaciones' },
  { id: 'combo', label: '💜 Combos' },
]

export default function Tienda() {
  const [filter, setFilter] = useState('all')
  const [search, setSearch] = useState('')
  const [cart, setCart] = useState([])

  const filtered = allProducts.filter(p => {
    const matchCat = filter === 'all' || p.category === filter
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  const addToCart = (id) => setCart(c => c.includes(id) ? c : [...c, id])

  return (
    <main className="pt-20 min-h-screen bg-[#fdf5fc]">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#1c0a2a] to-[#2d0524] py-14 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block bg-white/10 text-white/70 text-sm px-4 py-1.5 rounded-full mb-4">Tienda</span>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-3">
              Todos nuestros <span className="gradient-text">recursos</span>
            </h1>
            <p className="text-white/50 max-w-lg mx-auto">
              23 herramientas creadas por Nina Aragona para estudiantes argentinos. Acceso inmediato y de por vida.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 sticky top-20 z-10 bg-[#fdf5fc]/90 backdrop-blur py-4 -mx-4 px-4">
          <div className="relative max-w-xs">
            <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#808285]" />
            <input
              type="text"
              placeholder="Buscar..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 bg-white border border-[#f9b3ef]/50 rounded-xl text-sm focus:outline-none focus:border-[#f789da] focus:ring-2 focus:ring-[#f789da]/20"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === cat.id
                    ? 'bg-[#f789da] text-white shadow-lg shadow-[#f789da]/30'
                    : 'bg-white text-[#808285] border border-[#f9b3ef]/50 hover:border-[#f789da] hover:text-[#c41fa0]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Count */}
        <p className="text-sm text-[#808285] mb-6">{filtered.length} recurso{filtered.length !== 1 ? 's' : ''}</p>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filtered.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: Math.min(i * 0.06, 0.4) }}
              className="group bg-white rounded-3xl border border-[#f9b3ef]/30 shadow-sm hover:shadow-xl hover:shadow-[#f789da]/10 hover:-translate-y-2 transition-all duration-300 overflow-hidden"
            >
              <div className={`bg-gradient-to-br ${p.gradient} h-36 flex items-center justify-center relative`}>
                <span className="text-5xl float-anim">{p.emoji}</span>
                {p.badge && (
                  <span className={`absolute top-3 left-3 ${p.badgeColor} text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full`}>
                    {p.badge}
                  </span>
                )}
                {p.original && !p.badge && (
                  <span className="absolute top-3 left-3 bg-green-500 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                    Oferta
                  </span>
                )}
                {cart.includes(p.id) && (
                  <span className="absolute top-3 right-3 bg-green-500 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                    ✓ En carrito
                  </span>
                )}
              </div>

              <div className="p-4">
                <p className="text-[10px] text-[#c41fa0] font-bold mb-1 uppercase tracking-wide">{p.categoryLabel}</p>
                <h3 className="font-bold text-[#1c0a2a] text-sm mb-1.5 line-clamp-2 leading-snug">{p.name}</h3>
                <p className="text-xs text-[#808285] mb-3 line-clamp-2 leading-relaxed">{p.desc}</p>

                <div className="flex items-center gap-1 mb-3">
                  <Star size={10} className="fill-[#f9be06] text-[#f9be06]" />
                  <span className="text-xs font-semibold text-[#1c0a2a]">{p.rating}</span>
                  <span className="text-[11px] text-[#808285]">({p.reviews})</span>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-bold text-[#1c0a2a]">${p.price}</span>
                    {p.original && <span className="text-xs text-[#808285] line-through ml-1">${p.original}</span>}
                    <span className="text-[10px] text-[#808285] ml-1">USD</span>
                  </div>
                  <button
                    onClick={() => addToCart(p.id)}
                    className={`flex items-center gap-1 text-white text-xs font-semibold px-3 py-1.5 rounded-xl transition-all hover:scale-105 ${
                      cart.includes(p.id) ? 'bg-green-500' : 'bg-[#f789da] hover:bg-[#c41fa0]'
                    }`}
                  >
                    <ShoppingCart size={12} />
                    {cart.includes(p.id) ? 'Listo' : 'Agregar'}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-[#808285]">
            <div className="text-5xl mb-4">🔍</div>
            <p className="font-medium">No encontramos recursos con ese criterio</p>
            <button onClick={() => { setFilter('all'); setSearch('') }} className="mt-4 text-[#c41fa0] font-medium hover:underline text-sm">
              Ver todos los recursos
            </button>
          </div>
        )}

        <p className="text-center text-sm text-[#808285] mt-10">
          💳 Hasta 12 cuotas con Mercado Pago • Acceso inmediato y de por vida las 24hs
        </p>
      </section>
    </main>
  )
}
