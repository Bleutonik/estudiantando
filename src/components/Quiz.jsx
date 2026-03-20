import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ArrowRight, Sparkles, ChevronLeft } from 'lucide-react'

const questions = [
  {
    q: '¿Cuál es tu mayor desafío al estudiar?',
    opts: [
      { label: 'Me pongo nervioso/a antes de los exámenes', cat: 'rendir' },
      { label: 'Me cuesta retener lo que leo', cat: 'aprender' },
      { label: 'No sé cómo organizar mi tiempo', cat: 'organizar' },
      { label: 'Me distraigo muy fácil', cat: 'aprender' },
    ],
  },
  {
    q: '¿Cuánto tiempo tenés para estudiar por día?',
    opts: [
      { label: 'Menos de 1 hora', cat: 'organizar' },
      { label: '1 a 2 horas', cat: 'organizar' },
      { label: '2 a 4 horas', cat: 'aprender' },
      { label: 'Más de 4 horas', cat: 'rendir' },
    ],
  },
  {
    q: '¿Qué describís mejor tu situación actual?',
    opts: [
      { label: 'Tengo examen próximo y estoy en pánico', cat: 'rendir' },
      { label: 'Estudio pero siento que no aprendo', cat: 'aprender' },
      { label: 'No arranco porque no sé por dónde empezar', cat: 'organizar' },
      { label: 'Quiero mejorar mi rendimiento general', cat: 'aprender' },
    ],
  },
]

const results = {
  rendir: {
    title: '¡Tu recurso ideal es "Guía para Rendir"!',
    desc: 'Tenés todo para aprobar, solo necesitás las herramientas correctas para manejar los nervios y prepararte de forma efectiva.',
    emoji: '🎯',
    cta: 'Ver Guía para Rendir',
  },
  aprender: {
    title: '¡Tu recurso ideal son las "Técnicas de Memorización"!',
    desc: 'Con el método correcto vas a absorber y retener información el doble de rápido. El conocimiento está ahí, necesitás las llaves.',
    emoji: '🧠',
    cta: 'Ver Técnicas de Memorización',
  },
  organizar: {
    title: '¡Tu recurso ideal es el "Planner Estudiantil"!',
    desc: 'La organización es la base de todo. Con un sistema claro vas a sentir que tenés el control de tu estudio y tu vida.',
    emoji: '📅',
    cta: 'Ver Planner Estudiantil',
  },
}

export default function Quiz() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [step, setStep] = useState(0) // 0=intro, 1-3=questions, 4=result
  const [answers, setAnswers] = useState([])
  const [result, setResult] = useState(null)

  const handleAnswer = (cat) => {
    const newAnswers = [...answers, cat]
    setAnswers(newAnswers)
    if (step < questions.length) {
      setStep(step + 1)
    }
    if (step === questions.length - 1) {
      // Calculate result
      const count = newAnswers.reduce((acc, c) => {
        acc[c] = (acc[c] || 0) + 1
        return acc
      }, {})
      const top = Object.entries(count).sort((a, b) => b[1] - a[1])[0][0]
      setResult(top)
      setStep(questions.length + 1)
    }
  }

  const reset = () => {
    setStep(0)
    setAnswers([])
    setResult(null)
  }

  return (
    <section id="quiz" className="py-24 bg-gradient-to-br from-violet-950 to-indigo-900 relative overflow-hidden" ref={ref}>
      {/* Blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-violet-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 text-sm font-medium px-4 py-1.5 rounded-full mb-4">
            <Sparkles size={14} className="text-amber-400" />
            Test gratuito
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            ¿Cuál recurso es{' '}
            <span className="gradient-text-2">para vos?</span>
          </h2>
          <p className="text-lg text-white/60">3 preguntas rápidas para encontrar tu herramienta ideal</p>
        </motion.div>

        {/* Quiz card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/10 backdrop-blur border border-white/20 rounded-3xl p-8 lg:p-10"
        >
          <AnimatePresence mode="wait">
            {/* Intro */}
            {step === 0 && (
              <motion.div
                key="intro"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="text-center"
              >
                <div className="text-7xl mb-6">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-3">Encontrá tu recurso perfecto</h3>
                <p className="text-white/60 mb-8">Respondé 3 preguntas rápidas y te recomendamos el producto ideal para tu situación.</p>
                <button
                  onClick={() => setStep(1)}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-orange-500 text-white px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition-transform"
                >
                  Empezar test <ArrowRight size={18} />
                </button>
              </motion.div>
            )}

            {/* Questions */}
            {step >= 1 && step <= questions.length && (
              <motion.div
                key={`q${step}`}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
              >
                {/* Progress */}
                <div className="flex items-center gap-3 mb-8">
                  {step > 1 && (
                    <button onClick={() => { setStep(step - 1); setAnswers(answers.slice(0, -1)) }} className="text-white/50 hover:text-white transition-colors">
                      <ChevronLeft size={20} />
                    </button>
                  )}
                  <div className="flex-1 bg-white/10 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-pink-500 to-orange-400 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${((step) / questions.length) * 100}%` }}
                    />
                  </div>
                  <span className="text-white/50 text-sm">{step}/{questions.length}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-6">{questions[step - 1].q}</h3>

                <div className="grid gap-3">
                  {questions[step - 1].opts.map((opt) => (
                    <button
                      key={opt.label}
                      onClick={() => handleAnswer(opt.cat)}
                      className="text-left p-4 rounded-2xl bg-white/5 border border-white/10 text-white/80 hover:bg-white/15 hover:border-white/30 hover:text-white transition-all duration-200 text-sm font-medium"
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Result */}
            {step === questions.length + 1 && result && (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center"
              >
                <div className="text-7xl mb-4">{results[result].emoji}</div>
                <div className="inline-block bg-gradient-to-r from-pink-500 to-orange-500 text-white text-xs font-bold px-4 py-1 rounded-full mb-4">
                  Tu resultado
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{results[result].title}</h3>
                <p className="text-white/60 mb-8">{results[result].desc}</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-pink-500 to-orange-500 text-white px-6 py-3.5 rounded-2xl font-semibold hover:scale-105 transition-transform">
                    {results[result].cta} <ArrowRight size={16} />
                  </button>
                  <button onClick={reset} className="text-white/50 hover:text-white text-sm transition-colors py-3.5">
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
