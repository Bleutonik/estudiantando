import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Star, ShoppingCart, ArrowRight } from 'lucide-react'

const img = (id) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=800&q=80`

const featured = [
  {
    id: 1,
    photo: img('1580582932707-520aed937b7b'),
    category: 'Quiero rendir',
    name: 'Masterclass | transformá tus pendientes en aprobados',
    desc: '20 videos a tu ritmo + materiales + foro activo. Todo lo que necesitás para dejar de postergar y empezar a rendir.',
    price: 40,
    rating: 4.91,
    reviews: 119,
    badge: 'Más completo',
    badgeColor: 'bg-[#f789da]',
  },
  {
    id: 2,
    photo: img('1481627834876-b7833e8f5570'),
    category: 'Quiero aprender mejor',
    name: 'Ebook | Técnicas para estudiar y aprender mejor',
    desc: 'Más de 60 páginas con técnicas de resumen, repaso, subrayado y cómo descubrir tu estilo de aprendizaje.',
    price: 40,
    rating: 4.8,
    reviews: 87,
    badge: null,
    badgeColor: '',
  },
  {
    id: 3,
    photo: img('1507925921958-8a62f3d1a50d'),
    category: 'Quiero organizarme',
    name: 'Kit Planillas para organizarte',
    desc: '32 páginas de planillas prácticas: organizadores semanales, seguimiento de TPs, listado de dudas y 24 pósters motivacionales.',
    price: 16,
    rating: 4.9,
    reviews: 204,
    badge: 'Favorito',
    badgeColor: 'bg-[#c41fa0]',
  },
  {
    id: 4,
    photo: img('1456513080510-7bf3a84b82f8'),
    category: 'Quiero rendir',
    name: 'Guía para rendir exámenes en 6 pasos',
    desc: 'PDF interactivo de 60 páginas con un proceso estructurado de 6 pasos para organizar y activar tu preparación.',
    price: 40,
    rating: 4.9,
    reviews: 93,
    badge: null,
    badgeColor: '',
  },
]

export default function Products() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="py-24 bg-[#fdf5fc]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4"
        >
          <div>
            <span className="inline-block bg-white border border-[#f9b3ef] text-[#c41fa0] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Recursos destacados
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1c0a2a]">
              Lo más <span className="gradient-text">elegido</span>
            </h2>
          </div>
          <Link
            to="/tienda"
            className="inline-flex items-center gap-2 text-[#c41fa0] font-semibold hover:gap-3 transition-all text-sm group"
          >
            Ver los 23 recursos
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-white rounded-3xl border border-[#f9b3ef]/40 shadow-sm hover:shadow-2xl hover:shadow-[#f789da]/15 hover:-translate-y-3 transition-all duration-300 overflow-hidden"
            >
              {/* Photo */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={p.photo}
                  alt={p.name}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                {p.badge && (
                  <span className={`absolute top-3 left-3 ${p.badgeColor} text-white text-[11px] font-bold px-3 py-1 rounded-full shadow`}>
                    {p.badge}
                  </span>
                )}
              </div>

              <div className="p-5">
                <p className="text-[11px] text-[#c41fa0] font-semibold mb-1 uppercase tracking-wide">{p.category}</p>
                <h3 className="font-bold text-[#1c0a2a] text-sm mb-2 line-clamp-2 leading-snug group-hover:text-[#c41fa0] transition-colors">
                  {p.name}
                </h3>
                <p className="text-xs text-[#808285] mb-3 line-clamp-2">{p.desc}</p>

                <div className="flex items-center gap-1 mb-4">
                  <Star size={11} className="fill-[#f9be06] text-[#f9be06]" />
                  <span className="text-xs font-semibold text-[#1c0a2a]">{p.rating}</span>
                  <span className="text-xs text-[#808285]">({p.reviews})</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-[#1c0a2a]">
                    ${p.price}{' '}
                    <span className="text-xs font-normal text-[#808285]">USD</span>
                  </span>
                  <button className="flex items-center gap-1 bg-[#f789da] hover:bg-[#c41fa0] text-white text-xs font-semibold px-3 py-2 rounded-xl transition-all hover:scale-105 shadow-sm shadow-pink-200">
                    <ShoppingCart size={13} />
                    Agregar
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center text-sm text-[#808285] mt-8"
        >
          💳 Pagá en hasta <strong>12 cuotas con Mercado Pago</strong> (sin necesidad de tarjeta de crédito) • Acceso inmediato y de por vida
        </motion.p>
      </div>
    </section>
  )
}
