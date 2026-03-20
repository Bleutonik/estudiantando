import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { ShoppingCart, Star, Search, Eye } from 'lucide-react'

const img = (id) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=800&q=80`

const allProducts = [
  // MASTERCLASS / CURSOS
  {
    id: 1, photo: img('1580582932707-520aed937b7b'),
    category: 'rendir', categoryLabel: 'Quiero rendir',
    name: 'Masterclass | transformá tus pendientes en aprobados',
    desc: '20 videos a tu ritmo + materiales + foro activo. Postura, nutrición, gestión emocional, estrategia de estudio y más.',
    price: 40, original: null, rating: 4.91, reviews: 119, badge: 'Más completo', badgeColor: 'bg-[#f789da]',
  },
  {
    id: 2, photo: img('1522202176988-66273c2fd55f'),
    category: 'rendir', categoryLabel: 'Quiero rendir',
    name: 'Curso PostMaster',
    desc: 'Ejercicios prácticos: hábitos de estudio, cálculo de tiempos, planificación de cronograma y reducción de ansiedad.',
    price: 28, original: null, rating: 4.8, reviews: 54, badge: 'Nivel 2', badgeColor: 'bg-purple-500',
  },
  {
    id: 3, photo: img('1434626881859-086141851f78'),
    category: 'organizar', categoryLabel: 'Quiero organizarme',
    name: 'Curso Intensivo | Planificá con estrategia',
    desc: 'Curso intensivo para armar un plan de rendida realista y cumplirlo. Ideal cuando el examen se acerca.',
    price: 51, original: null, rating: 4.85, reviews: 38, badge: 'Intensivo', badgeColor: 'bg-blue-500',
  },

  // GUÍAS
  {
    id: 4, photo: img('1456513080510-7bf3a84b82f8'),
    category: 'rendir', categoryLabel: 'Quiero rendir',
    name: 'Guía para rendir exámenes en 6 pasos',
    desc: 'PDF interactivo de 60 páginas con un proceso de 6 pasos para organizar y activar tu preparación con claridad.',
    price: 40, original: null, rating: 4.9, reviews: 93, badge: null, badgeColor: '',
  },
  {
    id: 5, photo: img('1484480974693-6ca0a78fb36b'),
    category: 'organizar', categoryLabel: 'Quiero organizarme',
    name: 'Guía para organizarte mejor',
    desc: 'PDF de 24 páginas con teoría, ejercicios de autoconocimiento y estrategias concretas para gestionar tu tiempo y energía.',
    price: 22, original: null, rating: 4.4, reviews: 10, badge: null, badgeColor: '',
  },
  {
    id: 6, photo: img('1546410531-bb4caa6b424d'),
    category: 'aprender', categoryLabel: 'Quiero aprender mejor',
    name: 'Guía para aprender a repasar',
    desc: 'Técnicas de repaso activo y espaciado para que lo que estudiás realmente se quede en tu memoria.',
    price: 14, original: null, rating: 4.7, reviews: 67, badge: null, badgeColor: '',
  },
  {
    id: 7, photo: img('1488190211105-8b0e65b80b4e'),
    category: 'aprender', categoryLabel: 'Quiero aprender mejor',
    name: 'Guía para aprender a resumir',
    desc: 'Cómo hacer resúmenes que realmente te sirvan para estudiar y no solo para copiar información.',
    price: 18, original: null, rating: 4.8, reviews: 82, badge: null, badgeColor: '',
  },
  {
    id: 8, photo: img('1501504905252-8982b4c9b38d'),
    category: 'aprender', categoryLabel: 'Quiero aprender mejor',
    name: 'Guía para aprender a resaltar',
    desc: 'Subrayar no es simplemente marcar con color. Aprendé a seleccionar información de manera estratégica.',
    price: 15, original: null, rating: 4.6, reviews: 45, badge: null, badgeColor: '',
  },
  {
    id: 9, photo: img('1503676260728-1c00da094a0b'),
    category: 'aprender', categoryLabel: 'Quiero aprender mejor',
    name: 'Guía para descubrir tu estilo de aprendizaje',
    desc: 'Identificá cómo aprendés mejor y adaptá tus técnicas de estudio a tu perfil real.',
    price: 16, original: null, rating: 4.75, reviews: 39, badge: null, badgeColor: '',
  },
  {
    id: 10, photo: img('1497633762265-9d179a990aa6'),
    category: 'aprender', categoryLabel: 'Quiero aprender mejor',
    name: 'Guía para usar mejor el programa de la cátedra',
    desc: 'Aprovechá el programa de tu materia como una hoja de ruta. Estudiá con dirección y sin perderte nada.',
    price: 11, original: null, rating: 4.5, reviews: 28, badge: null, badgeColor: '',
  },

  // HERRAMIENTAS
  {
    id: 11, photo: img('1507925921958-8a62f3d1a50d'),
    category: 'organizar', categoryLabel: 'Quiero organizarme',
    name: 'Kit Planillas para organizarte',
    desc: '32 páginas: planillas maestras, organizadores de TPs, seguimiento de pendientes, organizadores semanales y 24 pósters motivacionales.',
    price: 16, original: null, rating: 4.9, reviews: 204, badge: 'Favorito', badgeColor: 'bg-[#c41fa0]',
  },
  {
    id: 12, photo: img('1434030216411-0b793f4b4173'),
    category: 'rendir', categoryLabel: 'Quiero rendir',
    name: 'Checklist para evaluar si rendir o no',
    desc: 'Herramienta interactiva para evaluar tu nivel de preparación real antes de ir a rendir. Tomá la decisión con información.',
    price: 10, original: 11, rating: 4.8, reviews: 73, badge: null, badgeColor: '',
  },
  {
    id: 13, photo: img('1481627834876-b7833e8f5570'),
    category: 'aprender', categoryLabel: 'Quiero aprender mejor',
    name: 'Ebook | Técnicas para estudiar y aprender mejor',
    desc: '60+ páginas con técnicas de resumen, repaso, subrayado y cómo descubrir y aprovechar tu estilo de aprendizaje.',
    price: 40, original: null, rating: 4.8, reviews: 87, badge: null, badgeColor: '',
  },

  // MEDITACIONES
  {
    id: 14, photo: img('1506126613408-eca07ce68773'),
    category: 'meditar', categoryLabel: 'Meditaciones',
    name: 'Meditación para relajar previo a rendir',
    desc: 'Audio de 10 min con Lissy Szwarcberg (Mindfulness BA). Respiración, relajación física y confianza previa al examen.',
    price: 11, original: null, rating: 5.0, reviews: 2, badge: 'Audio', badgeColor: 'bg-teal-500',
  },
  {
    id: 15, photo: img('1545389336-cf090694435e'),
    category: 'meditar', categoryLabel: 'Meditaciones',
    name: 'Meditación para volver a tu eje',
    desc: 'Audio de 9:30 min. Para cuando te sentís abrumado/a y necesitás recuperar la calma y elegir tus prioridades con conciencia.',
    price: 11, original: null, rating: 5.0, reviews: 1, badge: 'Audio', badgeColor: 'bg-indigo-500',
  },
  {
    id: 16, photo: img('1506126613408-eca07ce68773'),
    category: 'meditar', categoryLabel: 'Meditaciones',
    name: 'Meditación para bajar un cambio',
    desc: 'Audio de 6:19 min. Para el agotamiento mental y físico. La pausa necesaria para recuperar claridad y liviandad.',
    price: 11, original: null, rating: 5.0, reviews: 1, badge: 'Audio', badgeColor: 'bg-violet-500',
  },

  // ASESORÍA
  {
    id: 17, photo: img('1588196749597-9ff075ee6b5b'),
    category: 'rendir', categoryLabel: 'Quiero rendir',
    name: 'Asesoría personalizada estratégica | Virtual',
    desc: 'Sesión 1 a 1 virtual para trabajar tu situación específica: organización, preparación de examen, técnicas de estudio.',
    price: 60, original: null, rating: 5.0, reviews: 14, badge: 'Premium', badgeColor: 'bg-[#f789da]',
  },

  // COMBOS
  {
    id: 18, photo: img('1484480974693-6ca0a78fb36b'),
    category: 'combo', categoryLabel: 'Combos',
    name: 'Combo organizate y triunfá',
    desc: 'Guía para organizarte mejor + Kit Planillas completo. El combo esencial para tener el control de tu estudio.',
    price: 28, original: 36, rating: 4.75, reviews: 4, badge: '22% OFF', badgeColor: 'bg-green-500',
  },
  {
    id: 19, photo: img('1580582932707-520aed937b7b'),
    category: 'combo', categoryLabel: 'Combos',
    name: 'Combo Masters Nivel 1 y 2',
    desc: 'Masterclass (20 videos) + Curso PostMaster (ejercicios prácticos). El combo para transformar tu forma de estudiar.',
    price: 53, original: 66, rating: 4.5, reviews: 2, badge: '20% OFF', badgeColor: 'bg-green-500',
  },
  {
    id: 20, photo: img('1481627834876-b7833e8f5570'),
    category: 'combo', categoryLabel: 'Combos',
    name: 'Combo Master + Ebook',
    desc: 'Masterclass completa + Ebook de 60+ páginas. Domina las estrategias y las técnicas de estudio.',
    price: 64, original: 80, rating: 4.5, reviews: 2, badge: '20% OFF', badgeColor: 'bg-green-500',
  },
  {
    id: 21, photo: img('1517842645736-b8c56a0de985'),
    category: 'combo', categoryLabel: 'Combos',
    name: 'Combo COMPLETITO',
    desc: 'Guía de organización + Guía rendir en 6 pasos + Ebook + Kit Planillas. Todo lo que necesitás, con el mayor descuento.',
    price: 81, original: 116, rating: 5.0, reviews: 5, badge: '30% OFF', badgeColor: 'bg-[#c41fa0]',
  },
  {
    id: 22, photo: img('1529390079861-591de354faf5'),
    category: 'combo', categoryLabel: 'Combos',
    name: 'Combo para rendir atr',
    desc: 'Masterclass + PostMaster + Guía 6 pasos + Checklist + Machete bonus. El paquete completo para rendir con seguridad.',
    price: 94, original: 117, rating: 5.0, reviews: 3, badge: '20% OFF', badgeColor: 'bg-green-500',
  },
  {
    id: 23, photo: img('1545389336-cf090694435e'),
    category: 'combo', categoryLabel: 'Combos',
    name: 'Combo Meditaciones de Mindfulness',
    desc: 'Los 3 audios de meditación con Lissy Szwarcberg (Mindfulness Buenos Aires) al mejor precio.',
    price: 29.70, original: 30, rating: 5.0, reviews: 3, badge: '1% OFF', badgeColor: 'bg-teal-500',
  },
]

const categories = [
  { id: 'all', label: 'Todo' },
  { id: 'rendir', label: '🎯 Quiero rendir' },
  { id: 'aprender', label: '🧠 Aprender mejor' },
  { id: 'organizar', label: '📅 Organizarme' },
  { id: 'meditar', label: '🧘 Meditaciones' },
  { id: 'combo', label: '💜 Combos' },
]

function ProductCard({ p, i, inView, cart, addToCart }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      key={p.id}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: Math.min(i * 0.06, 0.5) }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group bg-white rounded-3xl border border-[#f9b3ef]/30 shadow-sm hover:shadow-2xl hover:shadow-[#f789da]/15 hover:-translate-y-2 transition-all duration-300 overflow-hidden cursor-pointer"
    >
      {/* Photo */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={p.photo}
          alt={p.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        {/* gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

        {/* badge */}
        {p.badge && (
          <span className={`absolute top-3 left-3 ${p.badgeColor} text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow`}>
            {p.badge}
          </span>
        )}
        {!p.badge && p.original && (
          <span className="absolute top-3 left-3 bg-green-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow">
            Oferta
          </span>
        )}
        {cart.includes(p.id) && (
          <span className="absolute top-3 right-3 bg-green-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow">
            ✓ En carrito
          </span>
        )}

        {/* Preview overlay */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 bg-[#1c0a2a]/80 flex flex-col items-center justify-center px-4 text-center"
            >
              <Eye size={22} className="text-[#f789da] mb-2" />
              <p className="text-white text-xs leading-relaxed line-clamp-4">{p.desc}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="p-4">
        <p className="text-[10px] text-[#c41fa0] font-bold mb-1 uppercase tracking-wide">{p.categoryLabel}</p>
        <h3 className="font-bold text-[#1c0a2a] text-sm mb-2 line-clamp-2 leading-snug">{p.name}</h3>

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
            className={`flex items-center gap-1 text-white text-xs font-semibold px-3 py-1.5 rounded-xl transition-all hover:scale-105 shadow-sm ${
              cart.includes(p.id) ? 'bg-green-500' : 'bg-[#f789da] hover:bg-[#c41fa0]'
            }`}
          >
            <ShoppingCart size={12} />
            {cart.includes(p.id) ? 'Listo' : 'Agregar'}
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default function Tienda() {
  const [filter, setFilter] = useState('all')
  const [search, setSearch] = useState('')
  const [cart, setCart] = useState([])
  const gridRef = useRef(null)
  const inView = useInView(gridRef, { once: false, margin: '-60px' })

  const filtered = allProducts.filter(p => {
    const matchCat = filter === 'all' || p.category === filter
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  const addToCart = (id) => setCart(c => c.includes(id) ? c : [...c, id])

  return (
    <main className="pt-20 min-h-screen bg-[#fdf5fc]">
      {/* Header */}
      <section className="relative bg-gradient-to-br from-[#1c0a2a] to-[#2d0524] py-16 px-4 overflow-hidden">
        {/* decorative blobs */}
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-[#f789da]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-56 h-56 bg-[#c41fa0]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-block bg-white/10 text-white/70 text-sm px-4 py-1.5 rounded-full mb-4 border border-white/10">
              Tienda
            </span>
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
        {/* Sticky filter bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 sticky top-20 z-10 bg-white/80 backdrop-blur-md border border-[#f9b3ef]/20 rounded-2xl py-4 px-4 shadow-sm -mx-2">
          <div className="relative max-w-xs">
            <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#808285]" />
            <input
              type="text"
              placeholder="Buscar..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 bg-white border border-[#f9b3ef]/50 rounded-xl text-sm focus:outline-none focus:border-[#f789da] focus:ring-2 focus:ring-[#f789da]/20 transition-all"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {categories.map(cat => (
              <motion.button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === cat.id
                    ? 'bg-[#f789da] text-white shadow-lg shadow-[#f789da]/30'
                    : 'bg-white text-[#808285] border border-[#f9b3ef]/50 hover:border-[#f789da] hover:text-[#c41fa0]'
                }`}
              >
                {cat.label}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Count badge */}
        <motion.p
          key={filtered.length}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-sm text-[#808285] mb-6 font-medium"
        >
          <span className="inline-block bg-[#fef0fc] text-[#c41fa0] font-bold px-2.5 py-0.5 rounded-full text-xs mr-2">
            {filtered.length}
          </span>
          recurso{filtered.length !== 1 ? 's' : ''} encontrado{filtered.length !== 1 ? 's' : ''}
        </motion.p>

        {/* Grid */}
        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <ProductCard key={p.id} p={p} i={i} inView={inView} cart={cart} addToCart={addToCart} />
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 text-[#808285]"
          >
            <div className="text-5xl mb-4">🔍</div>
            <p className="font-medium">No encontramos recursos con ese criterio</p>
            <button
              onClick={() => { setFilter('all'); setSearch('') }}
              className="mt-4 text-[#c41fa0] font-medium hover:underline text-sm"
            >
              Ver todos los recursos
            </button>
          </motion.div>
        )}

        <p className="text-center text-sm text-[#808285] mt-10">
          💳 Hasta 12 cuotas con Mercado Pago • Acceso inmediato y de por vida las 24hs
        </p>
      </section>
    </main>
  )
}
