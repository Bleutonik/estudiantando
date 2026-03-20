import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles, ChevronDown } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: 'easeOut' },
  }),
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-violet-950 via-violet-900 to-indigo-900">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-violet-500/30 rounded-full blur-3xl blob-anim" />
        <div className="absolute top-1/2 -right-40 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl blob-anim" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-indigo-400/20 rounded-full blur-3xl blob-anim" style={{ animationDelay: '4s' }} />

        {/* Floating elements */}
        <motion.div
          className="absolute top-32 right-20 w-16 h-16 bg-gradient-to-br from-pink-400 to-orange-400 rounded-2xl shadow-2xl float-anim opacity-80"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.8, scale: 1 }}
          transition={{ delay: 0.8, type: 'spring' }}
        >
          <span className="flex items-center justify-center h-full text-2xl">📚</span>
        </motion.div>

        <motion.div
          className="absolute top-52 left-16 w-14 h-14 bg-gradient-to-br from-violet-400 to-blue-400 rounded-full shadow-2xl float-anim-slow opacity-80"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.8, scale: 1 }}
          transition={{ delay: 1.0, type: 'spring' }}
        >
          <span className="flex items-center justify-center h-full text-xl">✏️</span>
        </motion.div>

        <motion.div
          className="absolute bottom-40 right-32 w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl shadow-2xl float-anim-fast opacity-80"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.8, scale: 1 }}
          transition={{ delay: 1.2, type: 'spring' }}
        >
          <span className="flex items-center justify-center h-full text-xl">🎯</span>
        </motion.div>

        <motion.div
          className="absolute top-64 right-1/3 w-10 h-10 bg-white/10 rounded-lg backdrop-blur border border-white/20 float-anim opacity-70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 1.4 }}
        >
          <span className="flex items-center justify-center h-full text-lg">⭐</span>
        </motion.div>

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="text-center max-w-4xl mx-auto">

          {/* Badge */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 text-white/90 px-4 py-2 rounded-full text-sm font-medium mb-8"
          >
            <Sparkles size={14} className="text-amber-400" />
            La plataforma que te ayuda a estudiar de verdad
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
          >
            Aprendé a{' '}
            <span className="relative inline-block">
              <span className="relative z-10 gradient-text-2">organizarte</span>
            </span>
            {' '}y rendir{' '}
            <span className="gradient-text-2">con confianza</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Recursos, guías y herramientas diseñadas especialmente para estudiantes argentinos.
            Dejá de estudiar sin dirección y empezá a ver resultados reales.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/tienda"
              className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-pink-500 to-orange-500 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:shadow-2xl hover:shadow-pink-500/30 hover:scale-105 transition-all duration-300"
            >
              Explorar recursos
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <button
              onClick={() => document.getElementById('quiz')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur border border-white/20 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-white/20 transition-all duration-300"
            >
              <Sparkles size={20} className="text-amber-400" />
              Hacer el test
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            className="mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto"
          >
            {[
              { value: '1000+', label: 'Estudiantes' },
              { value: '50+', label: 'Recursos' },
              { value: '4.9★', label: 'Valoración' },
            ].map(stat => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-white/50 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown size={28} />
      </motion.button>
    </section>
  )
}
