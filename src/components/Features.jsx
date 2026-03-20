import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'

const categories = [
  {
    emoji: '🎯',
    title: 'Quiero rendir',
    desc: 'Estrategias paso a paso para preparar tus exámenes, manejar los nervios y entrar a rendir con seguridad total.',
    gradient: 'from-[#f789da] to-[#c41fa0]',
    lightBg: 'bg-[#fef0fc]',
    border: 'border-[#f9b3ef]',
    hoverShadow: 'hover:shadow-[#f789da]/20',
    tag: 'Más buscado',
    to: '/tienda',
  },
  {
    emoji: '🧠',
    title: 'Quiero aprender mejor',
    desc: 'Técnicas de memorización, resumen, repaso y comprensión lectora para absorber más en menos tiempo.',
    gradient: 'from-[#f9be06] to-[#f789da]',
    lightBg: 'bg-yellow-50',
    border: 'border-yellow-200',
    hoverShadow: 'hover:shadow-yellow-200/40',
    tag: 'Técnicas',
    to: '/tienda',
  },
  {
    emoji: '📅',
    title: 'Quiero organizarme',
    desc: 'Sistemas de planificación, gestión del tiempo y planillas editables para que el día te alcance de verdad.',
    gradient: 'from-[#c41fa0] to-[#f789da]',
    lightBg: 'bg-purple-50',
    border: 'border-purple-200',
    hoverShadow: 'hover:shadow-purple-200/40',
    tag: 'Esencial',
    to: '/tienda',
  },
  {
    emoji: '🧘',
    title: 'Meditaciones',
    desc: 'Audios guiados por Lissy Szwarcberg (Mindfulness Buenos Aires) para calmar la ansiedad y estudiar con más calma.',
    gradient: 'from-blue-400 to-[#c41fa0]',
    lightBg: 'bg-blue-50',
    border: 'border-blue-200',
    hoverShadow: 'hover:shadow-blue-200/40',
    tag: 'Bienestar',
    to: '/tienda',
  },
]

export default function Features() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-24 bg-white relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f789da]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-[#fef0fc] text-[#c41fa0] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            ¿Qué necesitás?
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1c0a2a] mb-4">
            Encontrá el recurso{' '}
            <span className="gradient-text">perfecto para vos</span>
          </h2>
          <p className="text-lg text-[#808285] max-w-xl mx-auto">
            Cada herramienta fue creada pensando en el estudiante argentino real y sus desafíos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.12 }}
            >
              <Link
                to={cat.to}
                className={`group block relative glass-card rounded-3xl p-7 card-hover hover:shadow-xl ${cat.hoverShadow} transition-all duration-300 h-full`}
              >
                <span className="absolute top-4 right-4 bg-white text-[#c41fa0] text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm">
                  {cat.tag}
                </span>

                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cat.gradient} flex items-center justify-center text-3xl mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {cat.emoji}
                </div>

                <h3 className="text-lg font-bold text-[#1c0a2a] mb-2">{cat.title}</h3>
                <p className="text-sm text-[#808285] leading-relaxed mb-4">{cat.desc}</p>

                <span className="text-sm font-semibold text-[#c41fa0] group-hover:gap-2 flex items-center gap-1 transition-all">
                  Ver recursos <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
