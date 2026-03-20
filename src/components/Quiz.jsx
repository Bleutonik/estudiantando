import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ArrowRight, ChevronLeft } from 'lucide-react'

const questions = [
  {
    q: '¿Cuál es tu mayor desafío como estudiante?',
    opts: [
      { label: 'Me pongo muy nervioso/a antes de los exámenes', cat: 'rendir' },
      { label: 'Estudio pero no rindo o no me queda nada', cat: 'aprender' },
      { label: 'No sé cómo organizar mi tiempo de estudio', cat: 'organizar' },
      { label: 'Me siento agotado/a y abrumado/a', cat: 'meditar' },
    ],
  },
  {
    q: '¿Cómo describís tu situación actual?',
    opts: [
      { label: 'Tengo examen próximo y no sé por dónde empezar', cat: 'rendir' },
      { label: 'Leo y repaso pero después no recuerdo nada', cat: 'aprender' },
      { label: 'Hago planes pero nunca los cumplo', cat: 'organizar' },
      { label: 'Tengo materias "pendientes" desde hace tiempo', cat: 'rendir' },
    ],
  },
  {
    q: '¿Qué resultado querés lograr?',
    opts: [
      { label: 'Rendir con más seguridad y menos nervios', cat: 'rendir' },
      { label: 'Absorber más información en menos tiempo', cat: 'aprender' },
      { label: 'Sentir que el día me alcanza', cat: 'organizar' },
      { label: 'Encontrar equilibrio y calma para estudiar', cat: 'meditar' },
    ],
  },
]

const results = {
  rendir: {
    emoji: '🎯',
    name: 'Masterclass o Guía para rendir',
    tag: 'Quiero rendir',
    desc: 'Tu mayor desafío es la preparación y la seguridad para rendir. La Masterclass y la Guía de 6 pasos están diseñadas exactamente para vos.',
    price: 'desde $40 USD',
  },
  aprender: {
    emoji: '🧠',
    name: 'Ebook Técnicas de estudio',
    tag: 'Quiero aprender mejor',
    desc: 'Necesitás herramientas concretas para absorber y retener información. El Ebook de técnicas te da el método que te falta.',
    price: '$40 USD',
  },
  organizar: {
    emoji: '📅',
    name: 'Kit Planillas + Guía de organización',
    tag: 'Quiero organizarme',
    desc: 'La organización es tu base. Con el Kit de Planillas y la Guía para organizarte mejor vas a sentir el control que te falta.',
    price: 'desde $16 USD',
  },
  meditar: {
    emoji: '🧘',
    name: 'Combo Meditaciones de Mindfulness',
    tag: 'Bienestar',
    desc: 'Primero que todo necesitás bajar un cambio. Las meditaciones guiadas por Lissy Szwarcberg te van a dar la calma para poder estudiar mejor.',
    price: '$29.70 USD',
  },
}

export default function Quiz() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState([])
  const [result, setResult] = useState(null)

  const handleAnswer = (cat) => {
    const newAnswers = [...answers, cat]
    setAnswers(newAnswers)
    if (step < questions.length - 1) {
      setStep(step + 1)
    } else {
      const count = newAnswers.reduce((acc, c) => ({ ...acc, [c]: (acc[c] || 0) + 1 }), {})
      const top = Object.entries(count).sort((a, b) => b[1] - a[1])[0][0]
      setResult(top)
      setStep(questions.length)
    }
  }

  const goBack = () => {
    setStep(step - 1)
    setAnswers(answers.slice(0, -1))
  }

  const reset = () => { setStep(0); setAnswers([]); setResult(null) }

  return (
    <section id="quiz" className="py-24 bg-[#1c0a2a] relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#f789da]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#f9be06]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-2xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="inline-block bg-white/8 border border-white/15 text-white/70 text-sm font-medium px-4 py-1.5 rounded-full mb-4">
            Test gratuito
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-3">
            ¡Hacé el TEST y{' '}
            <span className="gradient-text-gold">descubrilo!</span>
          </h2>
          <p className="text-white/50">3 preguntas para encontrar el recurso ideal para vos</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/6 backdrop-blur border border-white/12 rounded-3xl p-8 lg:p-10"
        >
          <AnimatePresence mode="wait">
            {/* Intro */}
            {step === 0 && answers.length === 0 && (
              <motion.div key="intro" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="text-center">
                <div className="text-7xl mb-5">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-3">Encontrá tu recurso ideal</h3>
                <p className="text-white/55 mb-8 leading-relaxed">Respondé 3 preguntas rápidas y te decimos exactamente qué herramienta necesitás para tu situación.</p>
                <button onClick={() => setStep(1)} className="inline-flex items-center gap-2 bg-[#f789da] hover:bg-[#c41fa0] text-white px-8 py-4 rounded-2xl font-semibold transition-all hover:scale-105">
                  Empezar test <ArrowRight size={18} />
                </button>
              </motion.div>
            )}

            {/* Questions */}
            {step >= 1 && step <= questions.length && (
              <motion.div key={`q${step}`} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}>
                <div className="flex items-center gap-3 mb-8">
                  {step > 1 && (
                    <button onClick={goBack} className="text-white/40 hover:text-white transition-colors">
                      <ChevronLeft size={20} />
                    </button>
                  )}
                  <div className="flex-1 bg-white/10 rounded-full h-1.5">
                    <div
                      className="bg-gradient-to-r from-[#f789da] to-[#f9be06] h-1.5 rounded-full transition-all duration-500"
                      style={{ width: `${(step / questions.length) * 100}%` }}
                    />
                  </div>
                  <span className="text-white/40 text-xs">{step}/{questions.length}</span>
                </div>

                <h3 className="text-lg font-bold text-white mb-5">{questions[step - 1].q}</h3>

                <div className="grid gap-3">
                  {questions[step - 1].opts.map(opt => (
                    <button
                      key={opt.label}
                      onClick={() => handleAnswer(opt.cat)}
                      className="text-left p-4 rounded-2xl bg-white/5 border border-white/10 text-white/75 hover:bg-white/12 hover:border-[#f789da]/40 hover:text-white transition-all duration-200 text-sm font-medium"
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Result */}
            {result && (
              <motion.div key="result" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center">
                <div className="text-7xl mb-4">{results[result].emoji}</div>
                <span className="inline-block bg-[#f789da]/20 text-[#f789da] text-xs font-bold px-4 py-1 rounded-full mb-4">
                  {results[result].tag}
                </span>
                <h3 className="text-xl font-bold text-white mb-2">Tu recurso ideal: {results[result].name}</h3>
                <p className="text-white/55 mb-2 leading-relaxed">{results[result].desc}</p>
                <p className="text-[#f9be06] font-bold mb-8">{results[result].price}</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button className="inline-flex items-center justify-center gap-2 bg-[#f789da] hover:bg-[#c41fa0] text-white px-6 py-3.5 rounded-2xl font-semibold transition-all hover:scale-105">
                    Ver recurso <ArrowRight size={16} />
                  </button>
                  <button onClick={reset} className="text-white/40 hover:text-white text-sm transition-colors py-3.5">
                    Repetir test
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
