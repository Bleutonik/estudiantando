import { useRef, useState, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Valentina García',
    role: 'Estudiante universitaria · Derecho',
    avatar: '👩‍🦱',
    rating: 5,
    text: 'Después de tres años sintiéndome perdida, con el método de Estudiantando pude aprobar todas las materias del cuatrimestre. El planner cambió completamente mi forma de organizarme.',
    location: 'Buenos Aires',
  },
  {
    name: 'Matías Rodríguez',
    role: 'Estudiante secundario · 5to año',
    avatar: '👨‍💻',
    rating: 5,
    text: 'Siempre me agarraba el pánico antes de los exámenes. Con las técnicas que aprendí acá pude rendir Matemática que era mi peor materia. ¡Salí con un 9!',
    location: 'Córdoba',
  },
  {
    name: 'Sofía Méndez',
    role: 'Estudiante universitaria · Medicina',
    avatar: '👩‍⚕️',
    rating: 5,
    text: 'La cantidad de información que hay en medicina es brutal. Las técnicas de memorización me salvaron la vida, especialmente los mapas mentales para anatomía.',
    location: 'Rosario',
  },
  {
    name: 'Tomás Herrera',
    role: 'Estudiante universitaria · Ingeniería',
    avatar: '👨‍🔬',
    rating: 5,
    text: 'Reprobé la materia dos veces. Con el combo completo cambié todo: mi rutina, mis técnicas y mi mentalidad. Al tercer intento saqué un 8. Esto funciona de verdad.',
    location: 'Mendoza',
  },
  {
    name: 'Lucía Fernández',
    role: 'Estudiante secundario · 4to año',
    avatar: '👧',
    rating: 5,
    text: 'Mis papás siempre me decían que era vaga, pero lo que necesitaba era saber cómo estudiar. Ahora soy la primera de la clase y tengo tiempo libre.',
    location: 'Tucumán',
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(c => (c + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const prev = () => setCurrent(c => (c - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent(c => (c + 1) % testimonials.length)

  return (
    <section className="py-24 bg-gradient-to-b from-white to-violet-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-violet-100 text-violet-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Testimonios reales
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-violet-950 mb-4">
            Historias que{' '}
            <span className="gradient-text">nos inspiran</span>
          </h2>
          <p className="text-lg text-slate-500">Estudiantes reales con resultados reales</p>
        </motion.div>

        {/* Main testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative max-w-3xl mx-auto mb-8"
        >
          <div className="absolute -top-6 -left-2 text-violet-200">
            <Quote size={64} />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.35 }}
              className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl shadow-violet-100/50 border border-violet-100"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array(testimonials[current].rating).fill(0).map((_, i) => (
                  <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-lg lg:text-xl text-slate-700 leading-relaxed mb-8 font-medium">
                "{testimonials[current].text}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-100 to-pink-100 flex items-center justify-center text-2xl">
                  {testimonials[current].avatar}
                </div>
                <div>
                  <p className="font-bold text-violet-950">{testimonials[current].name}</p>
                  <p className="text-sm text-slate-400">{testimonials[current].role} · {testimonials[current].location}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4">
          <button onClick={prev} className="p-3 rounded-full bg-white border border-violet-200 text-violet-600 hover:bg-violet-600 hover:text-white hover:border-violet-600 transition-all shadow-sm">
            <ChevronLeft size={20} />
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current ? 'w-8 bg-violet-600' : 'w-2 bg-violet-200'
                }`}
              />
            ))}
          </div>

          <button onClick={next} className="p-3 rounded-full bg-white border border-violet-200 text-violet-600 hover:bg-violet-600 hover:text-white hover:border-violet-600 transition-all shadow-sm">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  )
}
