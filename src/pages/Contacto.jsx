import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Mail, MessageCircle, Clock, Send, Check, Instagram, MapPin } from 'lucide-react'

const channels = [
  {
    icon: MessageCircle,
    iconBg: 'from-green-400 to-emerald-500',
    title: 'WhatsApp',
    desc: 'La forma más rápida de contactarnos. Respondemos en minutos.',
    action: 'Chatear ahora',
    href: 'https://wa.me/5491100000000',
    pulse: true,
  },
  {
    icon: Mail,
    iconBg: 'from-[#f789da] to-[#c41fa0]',
    title: 'Email',
    desc: 'Para consultas más detalladas. Respondemos en menos de 24hs.',
    action: 'hola@estudiantando.com.ar',
    href: 'mailto:hola@estudiantando.com.ar',
    pulse: false,
  },
  {
    icon: Instagram,
    iconBg: 'from-purple-500 to-pink-500',
    title: 'Instagram',
    desc: 'Seguinos para contenido gratuito sobre técnicas de estudio.',
    action: '@estudiantando',
    href: 'https://instagram.com/estudiantando',
    pulse: false,
  },
  {
    icon: Clock,
    iconBg: 'from-amber-400 to-orange-500',
    title: 'Horario de atención',
    desc: 'Lunes a viernes de 9 a 17hs (hora Argentina, UTC-3).',
    action: null,
    href: null,
    pulse: false,
  },
]

const subjects = [
  'Consulta sobre un producto',
  'Problema con mi compra',
  'Solicitud de reembolso',
  'Consulta técnica',
  'Quiero saber más sobre la Masterclass',
  'Otro',
]

export default function Contacto() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)
  const [focused, setFocused] = useState(null)

  const channelsRef = useRef(null)
  const channelsInView = useInView(channelsRef, { once: true, margin: '-60px' })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const inputClass = (name) =>
    `w-full border-2 rounded-xl px-4 py-3 text-sm focus:outline-none transition-all duration-200 ${
      focused === name
        ? 'border-[#f789da] ring-4 ring-[#f789da]/15 bg-[#fef0fc]/40'
        : 'border-slate-200 bg-white hover:border-[#f9b3ef]'
    }`

  return (
    <main className="pt-20 min-h-screen bg-white">
      {/* Animated header */}
      <section className="relative bg-gradient-to-br from-[#1c0a2a] to-[#2d0524] py-20 px-4 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], x: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-6 left-1/3 w-72 h-72 bg-[#f789da]/10 rounded-full blur-3xl pointer-events-none"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], x: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
          className="absolute bottom-0 right-1/4 w-56 h-56 bg-[#c41fa0]/10 rounded-full blur-3xl pointer-events-none"
        />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block bg-white/10 text-white/80 text-sm px-4 py-1.5 rounded-full mb-5 border border-white/10">
              Contacto
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              Hablanos, estamos{' '}
              <span className="gradient-text">para ayudarte</span>
            </h1>
            <p className="text-white/60 max-w-xl mx-auto text-lg">
              Respondemos de lunes a viernes de 9 a 17hs. Para consultas urgentes usá WhatsApp.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact channels */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16" ref={channelsRef}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={channelsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-[#1c0a2a] mb-2">Canales de contacto</h2>
          <p className="text-[#808285] text-sm">Elegí la forma que más te convenga</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {channels.map((ch, i) => (
            <motion.div
              key={ch.title}
              initial={{ opacity: 0, y: 24 }}
              animate={channelsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-6 rounded-2xl border border-[#f9b3ef]/30 bg-white hover:shadow-xl hover:shadow-[#f789da]/10 hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${ch.iconBg} flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform`}>
                <ch.icon size={22} className="text-white" />
                {ch.pulse && (
                  <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-green-400 rounded-full border-2 border-white">
                    <motion.span
                      animate={{ scale: [1, 2, 1], opacity: [1, 0, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="block w-full h-full bg-green-400 rounded-full"
                    />
                  </span>
                )}
              </div>
              <h3 className="font-bold text-[#1c0a2a] mb-1.5 group-hover:text-[#c41fa0] transition-colors">{ch.title}</h3>
              <p className="text-sm text-[#808285] mb-3 leading-relaxed">{ch.desc}</p>
              {ch.href ? (
                <a
                  href={ch.href}
                  className={`inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-xl transition-all hover:scale-105 ${
                    ch.pulse
                      ? 'bg-green-500 text-white shadow-lg shadow-green-200 hover:bg-green-600'
                      : 'text-[#c41fa0] border border-[#f9b3ef] hover:bg-[#fef0fc]'
                  }`}
                >
                  {ch.action}
                  {ch.pulse && <span className="text-base">→</span>}
                </a>
              ) : null}
            </motion.div>
          ))}
        </div>

        {/* Main layout: form + decorative */}
        <div className="grid md:grid-cols-5 gap-10">
          {/* Decorative left panel */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 flex flex-col gap-6"
          >
            <div className="bg-gradient-to-br from-[#1c0a2a] to-[#2d0524] rounded-3xl p-8 text-white relative overflow-hidden flex-1">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -top-8 -right-8 w-32 h-32 border border-[#f789da]/20 rounded-full"
              />
              <motion.div
                animate={{ rotate: [360, 0] }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                className="absolute -bottom-6 -left-6 w-24 h-24 border border-[#c41fa0]/20 rounded-full"
              />
              <div className="relative z-10">
                <div className="w-12 h-12 bg-[#f789da]/20 rounded-xl flex items-center justify-center mb-5 border border-[#f789da]/30">
                  <MapPin size={22} className="text-[#f789da]" />
                </div>
                <h3 className="font-bold text-xl mb-3">Estudiantando</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-6">
                  Somos un equipo argentino que ayuda a estudiantes universitarios y terciarios a organizarse y rendir mejor.
                </p>
                <div className="space-y-3 text-sm text-white/70">
                  <div className="flex items-center gap-2">
                    <MapPin size={14} className="text-[#f789da] shrink-0" />
                    <span>Buenos Aires, Argentina</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={14} className="text-[#f789da] shrink-0" />
                    <span>Lunes a viernes 9–17hs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail size={14} className="text-[#f789da] shrink-0" />
                    <span>hola@estudiantando.com.ar</span>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp pulse card */}
            <div className="bg-[#fdf5fc] rounded-3xl p-6 border border-[#f9b3ef]/30">
              <p className="text-sm font-semibold text-[#1c0a2a] mb-2">¿Necesitás ayuda urgente?</p>
              <p className="text-xs text-[#808285] mb-4">Escribinos por WhatsApp y te respondemos en minutos.</p>
              <motion.a
                href="https://wa.me/5491100000000"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold text-sm px-5 py-3 rounded-xl w-full transition-colors shadow-lg shadow-green-200"
              >
                <MessageCircle size={17} />
                Escribir por WhatsApp
              </motion.a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-3"
          >
            <div className="bg-white rounded-3xl border border-[#f9b3ef]/30 shadow-lg p-8">
              <AnimatePresence mode="wait">
                {!sent ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                  >
                    <h2 className="text-xl font-bold text-[#1c0a2a] mb-1">Envianos un mensaje</h2>
                    <p className="text-sm text-[#808285] mb-6">Te respondemos en menos de 24 horas.</p>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-[#1c0a2a] mb-1.5">
                            Nombre
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            onFocus={() => setFocused('name')}
                            onBlur={() => setFocused(null)}
                            required
                            placeholder="Tu nombre"
                            className={inputClass('name')}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-[#1c0a2a] mb-1.5">
                            Email
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            onFocus={() => setFocused('email')}
                            onBlur={() => setFocused(null)}
                            required
                            placeholder="tu@email.com"
                            className={inputClass('email')}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-[#1c0a2a] mb-1.5">
                          Asunto
                        </label>
                        <select
                          name="subject"
                          value={form.subject}
                          onChange={handleChange}
                          onFocus={() => setFocused('subject')}
                          onBlur={() => setFocused(null)}
                          required
                          className={inputClass('subject')}
                        >
                          <option value="">Seleccioná un asunto...</option>
                          {subjects.map(s => <option key={s}>{s}</option>)}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-[#1c0a2a] mb-1.5">
                          Mensaje
                        </label>
                        <textarea
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          onFocus={() => setFocused('message')}
                          onBlur={() => setFocused(null)}
                          required
                          rows={5}
                          placeholder="Contanos en qué podemos ayudarte..."
                          className={inputClass('message') + ' resize-none'}
                        />
                      </div>

                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#f789da] to-[#c41fa0] text-white py-4 rounded-2xl font-bold hover:shadow-xl hover:shadow-[#f789da]/30 transition-shadow text-base"
                      >
                        <Send size={18} />
                        Enviar mensaje
                      </motion.button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                    className="text-center py-12"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.15, type: 'spring', stiffness: 400 }}
                      className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-5 shadow-xl shadow-green-200"
                    >
                      <Check size={36} className="text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-[#1c0a2a] mb-2">¡Mensaje enviado!</h3>
                    <p className="text-[#808285] mb-6">Te respondemos en menos de 24 horas. Gracias por contactarnos.</p>
                    <button
                      onClick={() => { setSent(false); setForm({ name: '', email: '', subject: '', message: '' }) }}
                      className="text-[#c41fa0] font-semibold hover:underline text-sm"
                    >
                      Enviar otro mensaje
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
