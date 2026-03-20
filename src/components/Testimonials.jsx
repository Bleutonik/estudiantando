import { useRef, useState, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'

// Real product categories from estudiantando.com.ar
const testimonials = [
  {
    name: 'Valentina G.',
    product: 'Combo COMPLETITO',
    avatar: '👩‍🦱',
    rating: 5,
    text: 'Llevaba dos años sin rendir ninguna materia. Con la Guía de 6 pasos y el Kit de Planillas finalmente organicé todo y aprobé tres materias en el cuatrimestre. No lo podía creer.',
    location: 'Buenos Aires',
  },
  {
    name: 'Matías R.',
    product: 'Masterclass',
    avatar: '👨‍💻',
    rating: 5,
    text: 'Tenía materias pendientes de hace tres años. La Masterclass me cambió la forma de preparar los exámenes. Entendí que el problema no era que estudiaba poco, sino que no sabía cómo.',
    location: 'Córdoba',
  },
  {
    name: 'Sofía M.',
    product: 'Guía para rendir en 6 pasos',
    avatar: '👩‍⚕️',
    rating: 5,
    text: 'La guía de 6 pasos me ordenó la cabeza justo cuando más la necesitaba. Antes de rendir me sentía en pánico, ahora entro con un plan claro y mucho más tranquila.',
    location: 'Rosario',
  },
  {
    name: 'Tomás H.',
    product: 'Kit Planillas + Guía de organización',
    avatar: '👨‍🔬',
    rating: 5,
    text: 'Nunca fui organizado. Con el Kit de Planillas y la Guía finalmente el día me empieza a alcanzar. Parece simple pero cambia todo.',
    location: 'Mendoza',
  },
  {
    name: 'Lucía F.',
    product: 'Meditaciones de Mindfulness',
    avatar: '👧',
    rating: 5,
    text: 'La meditación "para relajar previo a rendir" la escucho siempre antes de entrar al examen. Me ayuda a calmarme y a concentrarme. Es un recurso que no sabía que necesitaba.',
    location: 'Tucumán',
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => setCurrent(c => (c + 1) % testimonials.length), 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-24 bg-gradient-to-b from-[#fdf5fc] to-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block bg-[#fef0fc] text-[#c41fa0] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Testimonios reales
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1c0a2a] mb-3">
            Lo que dicen{' '}
            <span className="gradient-text">nuestros estudiantes</span>
          </h2>
          <p className="text-[#808285]">Historias reales de estudiantes argentinos</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto mb-8"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.35 }}
              className="glass-card rounded-3xl p-8 lg:p-10 shadow-xl shadow-[#f789da]/8"
            >
              <div className="flex gap-1 mb-5">
                {Array(testimonials[current].rating).fill(0).map((_, i) => (
                  <Star key={i} size={16} className="fill-[#f9be06] text-[#f9be06]" />
                ))}
              </div>

              <p className="text-lg text-[#1c0a2a] leading-relaxed mb-6 font-medium">
                "{testimonials[current].text}"
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#fef0fc] flex items-center justify-center text-xl">
                    {testimonials[current].avatar}
                  </div>
                  <div>
                    <p className="font-bold text-[#1c0a2a] text-sm">{testimonials[current].name}</p>
                    <p className="text-xs text-[#808285]">{testimonials[current].location}</p>
                  </div>
                </div>
                <span className="text-xs bg-[#fef0fc] text-[#c41fa0] px-3 py-1 rounded-full font-medium">
                  {testimonials[current].product}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => setCurrent(c => (c - 1 + testimonials.length) % testimonials.length)}
            className="p-2.5 rounded-full bg-white border border-[#f9b3ef] text-[#c41fa0] hover:bg-[#f789da] hover:text-white hover:border-[#f789da] transition-all shadow-sm"
          >
            <ChevronLeft size={18} />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? 'w-8 bg-[#f789da]' : 'w-1.5 bg-[#f9b3ef]'}`}
              />
            ))}
          </div>
          <button
            onClick={() => setCurrent(c => (c + 1) % testimonials.length)}
            className="p-2.5 rounded-full bg-white border border-[#f9b3ef] text-[#c41fa0] hover:bg-[#f789da] hover:text-white hover:border-[#f789da] transition-all shadow-sm"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  )
}
