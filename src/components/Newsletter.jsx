import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Sparkles, Check } from 'lucide-react'

export default function Newsletter() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setSent(true)
      setEmail('')
    }
  }

  return (
    <section className="py-16 bg-violet-50" ref={ref}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-violet-600 to-pink-600 rounded-3xl p-10 lg:p-14 shadow-2xl shadow-violet-300/30 relative overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-white/10 rounded-full blur-2xl" />
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-pink-400/20 rounded-full blur-2xl" />

          <div className="relative">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-white/20 rounded-2xl mb-6">
              <Mail size={28} className="text-white" />
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3">
              Recursos gratis directo a tu mail
            </h2>
            <p className="text-white/70 mb-8 max-w-md mx-auto">
              Suscribite y recibí tips de estudio, plantillas y recursos gratuitos cada semana. Sin spam, te lo prometemos.
            </p>

            {!sent ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="tu@email.com"
                  required
                  className="flex-1 bg-white/15 backdrop-blur border border-white/30 text-white placeholder-white/50 px-5 py-4 rounded-2xl outline-none focus:border-white/60 focus:bg-white/20 transition-all"
                />
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 bg-white text-violet-700 font-bold px-6 py-4 rounded-2xl hover:bg-white/90 hover:scale-105 transition-all shadow-lg whitespace-nowrap"
                >
                  <Sparkles size={16} />
                  Quiero recursos
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
                <span className="text-lg font-semibold">¡Te suscribiste! Pronto vas a recibir contenido copado 🎉</span>
              </motion.div>
            )}

            <p className="text-white/40 text-xs mt-4">
              +1000 estudiantes ya reciben nuestro contenido • Podés darte de baja cuando quieras
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
