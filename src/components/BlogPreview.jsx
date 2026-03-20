import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Clock, ArrowRight } from 'lucide-react'

const posts = [
  {
    id: 1,
    emoji: '🧠',
    gradient: 'from-violet-400 to-purple-600',
    category: 'Técnicas de estudio',
    title: '5 técnicas de memorización que la ciencia avala',
    excerpt: 'No todas las formas de estudiar son igual de efectivas. Estas 5 técnicas tienen respaldo científico y resultados comprobados para estudiantes argentinos.',
    date: '15 Mar 2025',
    readTime: '6 min',
    author: 'Equipo Estudiantando',
  },
  {
    id: 2,
    emoji: '📅',
    gradient: 'from-pink-400 to-rose-600',
    category: 'Organización',
    title: 'Cómo armar un horario de estudio que realmente cumplas',
    excerpt: 'El problema no es la falta de tiempo, sino la falta de sistema. Te enseñamos a crear una rutina que se adapte a tu vida y no al revés.',
    date: '8 Mar 2025',
    readTime: '8 min',
    author: 'Equipo Estudiantando',
  },
  {
    id: 3,
    emoji: '😰',
    gradient: 'from-amber-400 to-orange-600',
    category: 'Bienestar',
    title: 'Ansiedad ante los exámenes: guía práctica para manejarla',
    excerpt: 'La ansiedad académica es real y muy común en Argentina. Acá vas a encontrar estrategias concretas para que los nervios no te jueguen en contra.',
    date: '1 Mar 2025',
    readTime: '7 min',
    author: 'Equipo Estudiantando',
  },
]

export default function BlogPreview() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

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
            <span className="inline-block bg-amber-100 text-amber-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Blog
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-violet-950">
              Artículos que{' '}
              <span className="gradient-text">suman</span>
            </h2>
          </div>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-violet-600 font-semibold hover:gap-3 transition-all"
          >
            Ver todos los artículos →
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="group bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-violet-100/50 overflow-hidden hover:-translate-y-2 transition-all duration-300 cursor-pointer"
            >
              {/* Cover */}
              <div className={`bg-gradient-to-br ${post.gradient} h-44 flex items-center justify-center relative overflow-hidden`}>
                <span className="text-6xl float-anim">{post.emoji}</span>
                <span className="absolute top-4 left-4 bg-white/20 backdrop-blur text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {post.category}
                </span>
              </div>

              <div className="p-6">
                <h3 className="font-bold text-lg text-violet-950 mb-3 group-hover:text-violet-700 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-5 line-clamp-2">{post.excerpt}</p>

                <div className="flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-1">
                    <Clock size={12} />
                    {post.readTime} de lectura
                  </div>
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
