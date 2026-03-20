import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Shield, Zap, Heart, Users, BookOpen, Headphones, RefreshCw, Star, Check } from 'lucide-react'
import Newsletter from '../components/Newsletter'

const img = (id) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=800&q=80`

const benefits = [
  { icon: Zap, title: 'Acceso inmediato', desc: 'Comprás y accedés al instante. Sin esperas, sin complicaciones.', color: 'bg-amber-100 text-amber-600', iconBg: 'from-amber-400 to-orange-500' },
  { icon: Shield, title: 'Garantía de 30 días', desc: 'Si no quedás conforme, te devolvemos el dinero. Sin preguntas.', color: 'bg-green-100 text-green-600', iconBg: 'from-green-400 to-emerald-500' },
  { icon: Heart, title: 'Contenido con amor', desc: 'Cada recurso fue creado pensando en el estudiante argentino real.', color: 'bg-pink-100 text-pink-600', iconBg: 'from-[#f789da] to-[#c41fa0]' },
  { icon: Users, title: 'Comunidad privada', desc: 'Accedé a nuestra comunidad de estudiantes y aprendé en conjunto.', color: 'bg-violet-100 text-violet-600', iconBg: 'from-violet-400 to-purple-600' },
  { icon: BookOpen, title: 'Actualizaciones incluidas', desc: 'El contenido se actualiza permanentemente sin costo extra.', color: 'bg-blue-100 text-blue-600', iconBg: 'from-blue-400 to-indigo-500' },
  { icon: Headphones, title: 'Soporte real', desc: 'Personas reales que te responden. No bots. No formularios. WhatsApp directo.', color: 'bg-orange-100 text-orange-600', iconBg: 'from-orange-400 to-red-500' },
  { icon: RefreshCw, title: 'Múltiples formatos', desc: 'PDF, audio, videos y plantillas. Para que aprendas como mejor te acomode.', color: 'bg-indigo-100 text-indigo-600', iconBg: 'from-indigo-400 to-blue-600' },
  { icon: Star, title: 'Calidad comprobada', desc: '4.9 de rating promedio. Miles de estudiantes ya lo confirman.', color: 'bg-yellow-100 text-yellow-600', iconBg: 'from-[#f9be06] to-amber-500' },
]

const statsData = [
  { end: 1000, suffix: '+', label: 'Estudiantes activos' },
  { end: 23, suffix: '', label: 'Recursos disponibles' },
  { end: 4.9, suffix: '★', label: 'Valoración promedio', decimal: true },
  { end: 30, suffix: ' días', label: 'Garantía de reembolso' },
]

const testimonials = [
  {
    name: 'Valentina G.',
    career: 'Lic. en Psicología — UBA',
    text: 'La Masterclass me cambió la forma de estudiar. Pasé de sentirme perdida a rendir con un plan claro. Aprobé tres finales en un mes.',
    rating: 5,
  },
  {
    name: 'Matías R.',
    career: 'Derecho — UNC',
    text: 'El Kit Planillas es increíble. Por primera vez pude organizarme de verdad y ver mis pendientes sin angustiarme. Lo recomiendo a todos.',
    rating: 5,
  },
  {
    name: 'Lucía P.',
    career: 'Contador Público — UNR',
    text: 'Las meditaciones previas al examen me ayudaron muchísimo con la ansiedad. Nina entiende exactamente lo que vivimos los estudiantes.',
    rating: 5,
  },
]

function CountUp({ end, suffix, decimal }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    const duration = 1800
    const steps = 60
    const increment = end / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(decimal ? Math.round(current * 10) / 10 : Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [inView, end, decimal])

  return (
    <span ref={ref} className="tabular-nums">
      {decimal ? count.toFixed(1) : count}{suffix}
    </span>
  )
}

export default function Beneficios() {
  const benefitsRef = useRef(null)
  const benefitsInView = useInView(benefitsRef, { once: true, margin: '-60px' })

  const whyRef = useRef(null)
  const whyInView = useInView(whyRef, { once: true, margin: '-60px' })

  const testimonialsRef = useRef(null)
  const testimonialsInView = useInView(testimonialsRef, { once: true, margin: '-60px' })

  return (
    <main className="pt-20 min-h-screen bg-white">
      {/* Header with animated blobs */}
      <section className="relative bg-gradient-to-br from-[#1c0a2a] to-[#2d0524] py-24 px-4 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-8 left-1/4 w-80 h-80 bg-[#f789da] rounded-full blur-3xl pointer-events-none"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-0 right-1/3 w-64 h-64 bg-[#c41fa0] rounded-full blur-3xl pointer-events-none"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.08, 0.15, 0.08] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute top-1/2 right-10 w-48 h-48 bg-[#f9be06] rounded-full blur-3xl pointer-events-none"
        />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block bg-white/10 text-white/80 text-sm px-4 py-1.5 rounded-full mb-5 border border-white/10">
              ¿Por qué elegirnos?
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-5 leading-tight">
              Todo lo que obtenés al{' '}
              <span className="gradient-text">estudiar con nosotros</span>
            </h1>
            <p className="text-white/60 max-w-xl mx-auto text-lg leading-relaxed">
              No somos solo una tienda de recursos. Somos un acompañamiento completo en tu camino académico.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats — animated count-up */}
      <section className="bg-gradient-to-r from-[#c41fa0] to-[#f789da] py-16 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          {statsData.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
            >
              <div className="text-4xl lg:text-5xl font-bold mb-2 drop-shadow">
                <CountUp end={s.end} suffix={s.suffix} decimal={s.decimal} />
              </div>
              <div className="text-white/80 text-sm font-medium">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24" ref={benefitsRef}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block bg-[#fef0fc] text-[#c41fa0] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Beneficios
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1c0a2a]">
            Lo que te llevás <span className="gradient-text">con cada compra</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 30 }}
              animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group p-6 rounded-2xl border border-[#f9b3ef]/20 bg-white hover:shadow-2xl hover:shadow-[#f789da]/10 hover:-translate-y-2 transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${b.iconBg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-md`}>
                <b.icon size={22} className="text-white" />
              </div>
              <h3 className="font-bold text-[#1c0a2a] mb-2 group-hover:text-[#c41fa0] transition-colors">{b.title}</h3>
              <p className="text-sm text-[#808285] leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why us — photo + bullet points */}
      <section className="bg-[#fdf5fc] py-24 px-4" ref={whyRef}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={whyInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl shadow-[#f789da]/20"
          >
            <img
              src={img('1521737604038-8a02e3b2b5e9')}
              alt="Estudiante trabajando"
              loading="lazy"
              decoding="async"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1c0a2a]/50 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                <p className="text-white font-semibold text-sm">"Pasé de estar perdida a tener un plan real"</p>
                <p className="text-white/70 text-xs mt-1">— Valentina, estudiante de Psicología</p>
              </div>
            </div>
          </motion.div>

          {/* Bullet points */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={whyInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <span className="inline-block bg-[#fef0fc] text-[#c41fa0] text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
              Por qué nos eligen
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1c0a2a] mb-6 leading-snug">
              Diseñado específicamente para el estudiante argentino
            </h2>
            <div className="space-y-4">
              {[
                'Contenido creado por una Lic. en Cs. de la Educación, no por influencers.',
                'Enfocado en la realidad del sistema universitario argentino.',
                'No vendemos motivación vacía: vendemos herramientas concretas y accionables.',
                'Acceso inmediato + de por vida. Sin suscripciones, sin sorpresas.',
                'Comunidad activa de estudiantes para que no vayas solo/a en tu camino.',
                'Garantía real de 30 días. Si no funciona, te devolvemos el dinero.',
              ].map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={whyInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#f789da] to-[#c41fa0] flex items-center justify-center shrink-0 mt-0.5 shadow">
                    <Check size={11} className="text-white" />
                  </div>
                  <p className="text-[#808285] text-sm leading-relaxed">{point}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 bg-white" ref={testimonialsRef}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="inline-block bg-[#fef0fc] text-[#c41fa0] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Testimonios
            </span>
            <h2 className="text-4xl font-bold text-[#1c0a2a]">
              Lo que dicen nuestros <span className="gradient-text">estudiantes</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-7">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="bg-[#fdf5fc] rounded-3xl p-7 border border-[#f9b3ef]/30 hover:shadow-xl hover:shadow-[#f789da]/10 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={14} className="fill-[#f9be06] text-[#f9be06]" />
                  ))}
                </div>
                <p className="text-[#1c0a2a] text-sm leading-relaxed mb-5 italic">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#f789da] to-[#c41fa0] flex items-center justify-center text-white font-bold text-sm shadow">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-[#1c0a2a] text-sm">{t.name}</p>
                    <p className="text-xs text-[#808285]">{t.career}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-gradient-to-br from-[#1c0a2a] to-[#2d0524] py-20 px-4 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <div className="w-96 h-96 bg-[#f789da] rounded-full blur-3xl opacity-10" />
        </motion.div>
        <div className="max-w-2xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              ¿Lista/o para <span className="gradient-text">transformar</span> tu forma de estudiar?
            </h2>
            <p className="text-white/60 mb-8 text-lg">
              Más de 1000 estudiantes ya lo hicieron. Acceso inmediato, garantía de 30 días.
            </p>
            <a
              href="/tienda"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#f789da] to-[#c41fa0] text-white font-bold px-8 py-4 rounded-2xl hover:scale-105 transition-transform shadow-2xl shadow-[#f789da]/30 text-lg"
            >
              Ver todos los recursos
              <span className="text-xl">→</span>
            </a>
          </motion.div>
        </div>
      </section>

      <Newsletter />
    </main>
  )
}
