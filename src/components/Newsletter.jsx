import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Check } from 'lucide-react'

export default function Newsletter() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) { setSent(true); setEmail('') }
  }

  return (
    <section className="py-16 bg-[#fdf5fc]" ref={ref}>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-[#f789da] to-[#c41fa0] rounded-3xl p-10 lg:p-14 shadow-2xl shadow-[#f789da]/25 relative overflow-hidden"
        >
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-white/10 rounded-full blur-2xl" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#f9be06]/15 rounded-full blur-2xl" />

          <div className="relative">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-2xl mb-5">
              <Mail size={24} className="text-white" />
            </div>

            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2">
              Accedé a beneficios exclusivos
            </h2>
            <p className="text-white/70 mb-7 text-sm leading-relaxed max-w-sm mx-auto">
              Suscribite y recibí recursos gratuitos, tips de estudio y descuentos exclusivos para la comunidad Estudiantando.
            </p>

            {!sent ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-sm mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="tu@email.com"
                  required
                  className="flex-1 bg-white/15 border border-white/25 text-white placeholder-white/50 px-4 py-3 rounded-2xl outline-none focus:border-white/50 transition-all text-sm"
                />
                <button type="submit" className="bg-white text-[#c41fa0] font-bold px-6 py-3 rounded-2xl hover:bg-white/90 hover:scale-105 transition-all shadow-lg text-sm whitespace-nowrap">
                  Quiero suscribirme
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center justify-center gap-3 text-white"
              >
                <div className="w-10 h-10 bg-green-400 rounded-full flex items-center justify-center">
                  <Check size={20} />
                </div>
                <span className="font-semibold">¡Perfecto! Pronto vas a recibir novedades 🎉</span>
              </motion.div>
            )}

            <p className="text-white/40 text-xs mt-4">
              Sin spam. Podés darte de baja cuando quieras.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
