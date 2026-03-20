import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Clock, User, ArrowRight } from 'lucide-react'

const img = (id) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=800&q=80`

const posts = [
  {
    id: 1,
    photo: img('1434030216411-0b793f4b4173'),
    category: 'Organización',
    categoryColor: 'bg-[#fef0fc] text-[#c41fa0]',
    title: 'Si no estás pudiendo cumplir con tu plan de rendida, seguramente te esté pasando esto',
    excerpt: '"Cuando los planes de rendida fallan, no fallan por falta de tiempo, fallan por falta de planificación realista." Los errores más comunes que arruinan tu cronograma de estudio.',
    date: '3 Feb 2026',
    readTime: '7 min',
    author: 'Nina Aragona',
    authorTitle: 'Lic. en Cs. de la Educación',
  },
  {
    id: 2,
    photo: img('1456513080510-7bf3a84b82f8'),
    category: 'Rendir exámenes',
    categoryColor: 'bg-yellow-100 text-yellow-700',
    title: 'Los errores que te hacen rendir con nervios y el secreto para rendir con seguridad',
    excerpt: 'Rendir bien no depende solo de cuánto estudiás. Hay 6 errores clave que generan ansiedad antes del examen y que tienen solución concreta.',
    date: '10 Dic 2025',
    readTime: '8 min',
    author: 'Nina Aragona',
    authorTitle: 'Lic. en Cs. de la Educación',
  },
  {
    id: 3,
    photo: img('1484480974693-6ca0a78fb36b'),
    category: 'Organización',
    categoryColor: 'bg-purple-100 text-purple-700',
    title: 'Por qué a veces aunque "te organizás" la organización no funciona',
    excerpt: 'Hay 9 errores comunes que hacen que tus intentos de organización fallen. La intuición no alcanza: necesitás un método.',
    date: '19 Nov 2025',
    readTime: '6 min',
    author: 'Nina Aragona',
    authorTitle: 'Lic. en Cs. de la Educación',
  },
]

export default function BlogPreview() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4"
        >
          <div>
            <span className="inline-block bg-[#fef0fc] text-[#c41fa0] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Blog
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1c0a2a]">
              Artículos que <span className="gradient-text">suman</span>
            </h2>
            <p className="text-[#808285] mt-2">Por Nina Aragona, Lic. en Cs. de la Educación</p>
          </div>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-[#c41fa0] font-semibold hover:gap-3 transition-all text-sm group"
          >
            Ver todos los artículos
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="group glass-card rounded-3xl hover:shadow-2xl hover:shadow-[#f789da]/10 overflow-hidden hover:-translate-y-2 transition-all duration-300 cursor-pointer"
            >
              {/* Photo cover */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={post.photo}
                  alt={post.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Dark gradient at bottom of photo */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                {/* Category badge on photo */}
                <span className={`absolute top-4 left-4 ${post.categoryColor} text-xs font-semibold px-3 py-1 rounded-full shadow`}>
                  {post.category}
                </span>
              </div>

              <div className="p-6">
                <h3 className="font-bold text-base text-[#1c0a2a] mb-3 group-hover:text-[#c41fa0] transition-colors line-clamp-2 leading-snug">
                  {post.title}
                </h3>
                <p className="text-xs text-[#808285] leading-relaxed mb-4 line-clamp-3 italic">
                  {post.excerpt}
                </p>

                <div className="flex items-center gap-1 text-xs text-[#808285] mb-2">
                  <User size={11} />
                  <span>{post.author}</span>
                  <span className="text-[#f789da]">•</span>
                  <span>{post.authorTitle}</span>
                </div>

                <div className="flex items-center justify-between text-xs text-[#808285]">
                  <span className="flex items-center gap-1"><Clock size={11} />{post.readTime} de lectura</span>
                  <span>{post.date}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
