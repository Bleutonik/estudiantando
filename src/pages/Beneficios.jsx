import { motion } from 'framer-motion'
import { Shield, Zap, Heart, Users, BookOpen, Headphones, RefreshCw, Star } from 'lucide-react'
import Newsletter from '../components/Newsletter'

const benefits = [
  { icon: Zap, emoji: '⚡', title: 'Acceso inmediato', desc: 'Comprás y accedés al instante. Sin esperas, sin complicaciones.', color: 'bg-amber-100 text-amber-600' },
  { icon: Shield, emoji: '🛡️', title: 'Garantía de 30 días', desc: 'Si no quedás conforme, te devolvemos el dinero. Sin preguntas.', color: 'bg-green-100 text-green-600' },
  { icon: Heart, emoji: '💜', title: 'Contenido con amor', desc: 'Cada recurso fue creado pensando en el estudiante argentino real.', color: 'bg-pink-100 text-pink-600' },
  { icon: Users, emoji: '👥', title: 'Comunidad privada', desc: 'Accedé a nuestra comunidad de estudiantes y aprendé en conjunto.', color: 'bg-violet-100 text-violet-600' },
  { icon: BookOpen, emoji: '📚', title: 'Actualizaciones incluidas', desc: 'El contenido se actualiza permanentemente sin costo extra.', color: 'bg-blue-100 text-blue-600' },
  { icon: Headphones, emoji: '🎧', title: 'Soporte real', desc: 'Personas reales que te responden. No bots. No formularios. WhatsApp directo.', color: 'bg-orange-100 text-orange-600' },
  { icon: RefreshCw, emoji: '🔄', title: 'Múltiples formatos', desc: 'PDF, audio, videos y plantillas. Para que aprendas como mejor te acomode.', color: 'bg-indigo-100 text-indigo-600' },
  { icon: Star, emoji: '⭐', title: 'Calidad comprobada', desc: '4.9 de rating promedio. Miles de estudiantes ya lo confirman.', color: 'bg-yellow-100 text-yellow-600' },
]

export default function Beneficios() {
  return (
    <main className="pt-20 min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-violet-950 to-indigo-900 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block bg-white/10 text-white/80 text-sm px-4 py-1.5 rounded-full mb-4">¿Por qué elegirnos?</span>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Todo lo que obtenés al <span className="gradient-text-2">estudiar con nosotros</span>
            </h1>
            <p className="text-white/60 max-w-xl mx-auto text-lg">
              No somos solo una tienda de recursos. Somos un acompañamiento completo en tu camino académico.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group p-6 rounded-2xl border border-slate-100 bg-white hover:shadow-xl hover:shadow-violet-100/40 hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-xl ${b.color} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform`}>
                {b.emoji}
              </div>
              <h3 className="font-bold text-violet-950 mb-2">{b.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gradient-to-r from-violet-600 to-pink-600 py-16 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          {[
            { value: '1000+', label: 'Estudiantes activos' },
            { value: '50+', label: 'Recursos disponibles' },
            { value: '4.9★', label: 'Valoración promedio' },
            { value: '30 días', label: 'Garantía de reembolso' },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="text-4xl font-bold mb-1">{s.value}</div>
              <div className="text-white/70 text-sm">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <Newsletter />
    </main>
  )
}
