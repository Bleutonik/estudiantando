import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MessageCircle, Clock, Send, Check } from 'lucide-react'

export default function Contacto() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  return (
    <main className="pt-20 min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-violet-950 to-indigo-900 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block bg-white/10 text-white/80 text-sm px-4 py-1.5 rounded-full mb-4">Contacto</span>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Hablanos, estamos <span className="gradient-text-2">para ayudarte</span>
            </h1>
            <p className="text-white/60 max-w-xl mx-auto">
              Respondemos de lunes a viernes de 9 a 17hs. Para consultas urgentes usá WhatsApp.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-5 gap-10">
          {/* Info */}
          <div className="md:col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-5"
            >
              <h2 className="text-2xl font-bold text-violet-950">Canales de contacto</h2>

              {[
                {
                  icon: MessageCircle,
                  color: 'bg-green-100 text-green-600',
                  title: 'WhatsApp',
                  desc: 'La forma más rápida de contactarnos. Respondemos en minutos.',
                  action: 'Chatear ahora',
                  href: 'https://wa.me/5491100000000',
                },
                {
                  icon: Mail,
                  color: 'bg-violet-100 text-violet-600',
                  title: 'Email',
                  desc: 'Para consultas más detalladas. Respondemos en menos de 24hs.',
                  action: 'hola@estudiantando.com.ar',
                  href: 'mailto:hola@estudiantando.com.ar',
                },
                {
                  icon: Clock,
                  color: 'bg-amber-100 text-amber-600',
                  title: 'Horario de atención',
                  desc: 'Lunes a viernes de 9 a 17hs (hora Argentina).',
                  action: null,
                  href: null,
                },
              ].map(item => (
                <div key={item.title} className="flex gap-4 p-4 rounded-2xl border border-slate-100 hover:border-violet-200 hover:bg-violet-50/50 transition-all">
                  <div className={`w-10 h-10 rounded-xl ${item.color} flex items-center justify-center shrink-0`}>
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-violet-950 mb-0.5">{item.title}</h3>
                    <p className="text-sm text-slate-500 mb-1">{item.desc}</p>
                    {item.href && (
                      <a href={item.href} className="text-sm text-violet-600 font-medium hover:underline">
                        {item.action}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-3"
          >
            <div className="bg-white rounded-3xl border border-slate-100 shadow-lg p-8">
              {!sent ? (
                <>
                  <h2 className="text-xl font-bold text-violet-950 mb-6">Envianos un mensaje</h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Nombre</label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          placeholder="Tu nombre"
                          className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Email</label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          placeholder="tu@email.com"
                          className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100 transition-all"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Asunto</label>
                      <select
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        required
                        className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100 transition-all"
                      >
                        <option value="">Seleccioná un asunto...</option>
                        <option>Consulta sobre un producto</option>
                        <option>Problema con mi compra</option>
                        <option>Solicitud de reembolso</option>
                        <option>Consulta técnica</option>
                        <option>Otro</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Mensaje</label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Contanos en qué podemos ayudarte..."
                        className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100 transition-all resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-pink-500 text-white py-3.5 rounded-2xl font-semibold hover:scale-105 transition-transform shadow-lg shadow-violet-200"
                    >
                      <Send size={18} />
                      Enviar mensaje
                    </button>
                  </form>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check size={32} className="text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-violet-950 mb-2">¡Mensaje enviado!</h3>
                  <p className="text-slate-500">Te respondemos en menos de 24 horas. Gracias por contactarnos.</p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-6 text-violet-600 font-medium hover:underline text-sm"
                  >
                    Enviar otro mensaje
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
