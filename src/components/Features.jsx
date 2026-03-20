import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Target, Brain, Calendar } from 'lucide-react'

const features = [
  {
    icon: Target,
    emoji: '🎯',
    title: 'Quiero rendir',
    desc: 'Estrategias probadas para preparar exámenes, manejar los nervios y entrar al aula con seguridad total.',
    color: 'from-violet-500 to-purple-600',
    bg: 'bg-violet-50',
    border: 'border-violet-200',
    tag: 'Más popular',
    tagColor: 'bg-violet-100 text-violet-700',
  },
  {
    icon: Brain,
    emoji: '🧠',
    title: 'Quiero aprender mejor',
    desc: 'Técnicas de memorización, comprensión lectora y aprendizaje activo para absorber más en menos tiempo.',
    color: 'from-pink-500 to-rose-500',
    bg: 'bg-pink-50',
    border: 'border-pink-200',
    tag: 'Nuevo',
    tagColor: 'bg-pink-100 text-pink-700',
  },
  {
    icon: Calendar,
    emoji: '📅',
    title: 'Quiero organizarme',
    desc: 'Sistemas de planificación, gestión del tiempo y rutinas de estudio que realmente funcionan.',
    color: 'from-orange-400 to-amber-500',
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    tag: 'Esencial',
    tagColor: 'bg-amber-100 text-amber-700',
  },
]

export default function Features() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-24 bg-white relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-200 to-transparent" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-violet-50 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-50 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-violet-100 text-violet-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            ¿Qué necesitás?
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-violet-950 mb-4">
            Encontrá el recurso{' '}
            <span className="gradient-text">perfecto para vos</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Tenemos herramientas para cada tipo de estudiante y cada desafío académico.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`group relative ${f.bg} border ${f.border} rounded-3xl p-8 card-hover cursor-pointer`}
            >
              {/* Tag */}
              <span className={`absolute top-5 right-5 text-xs font-semibold px-3 py-1 rounded-full ${f.tagColor}`}>
                {f.tag}
              </span>

              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${f.color} flex items-center justify-center text-3xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {f.emoji}
              </div>

              <h3 className="text-2xl font-bold text-violet-950 mb-3">{f.title}</h3>
              <p className="text-slate-500 leading-relaxed mb-6">{f.desc}</p>

              <button className={`flex items-center gap-2 text-sm font-semibold bg-gradient-to-r ${f.color} bg-clip-text text-transparent group-hover:gap-3 transition-all`}>
                Ver recursos →
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
