import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronDown } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: 'easeOut' },
  }),
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#1c0a2a]">

      {/* Animated blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-20 w-[500px] h-[500px] bg-[#f789da]/20 rounded-full blur-3xl blob-anim" />
        <div className="absolute top-1/2 -right-40 w-96 h-96 bg-[#c41fa0]/15 rounded-full blur-3xl blob-anim" style={{ animationDelay: '3s' }} />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-[#f9be06]/10 rounded-full blur-3xl blob-anim" style={{ animationDelay: '6s' }} />

        {/* Floating emoji elements */}
        {[
          { emoji: '📚', top: '15%', right: '8%', delay: 0.8, size: 'w-16 h-16', bg: 'from-[#f789da] to-[#c41fa0]' },
          { emoji: '✏️', top: '40%', left: '4%', delay: 1.0, size: 'w-12 h-12', bg: 'from-[#f9be06] to-[#f789da]' },
          { emoji: '🎯', bottom: '30%', right: '12%', delay: 1.2, size: 'w-14 h-14', bg: 'from-[#c41fa0] to-[#f789da]' },
          { emoji: '🧠', top: '60%', left: '8%', delay: 1.4, size: 'w-10 h-10', bg: 'from-[#f789da]/30 to-transparent border border-white/10' },
        ].map((el, i) => (
          <motion.div
            key={i}
            className={`absolute ${el.size} rounded-2xl flex items-center justify-center text-2xl bg-gradient-to-br ${el.bg} shadow-xl float-anim`}
            style={{ top: el.top, right: el.right, left: el.left, bottom: el.bottom, animationDelay: `${i * 1.5}s` }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.9, scale: 1 }}
            transition={{ delay: el.delay, type: 'spring', stiffness: 200 }}
          >
            {el.emoji}
          </motion.div>
        ))}

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'linear-gradient(rgba(247,137,218,1) 1px, transparent 1px), linear-gradient(90deg, rgba(247,137,218,1) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="max-w-4xl mx-auto text-center">

          {/* Badge */}
          <motion.div
            variants={fadeUp} initial="hidden" animate="show" custom={0}
            className="inline-flex items-center gap-2 bg-white/8 backdrop-blur border border-white/15 text-white/80 px-4 py-2 rounded-full text-sm font-medium mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[#f789da] animate-pulse" />
            Tips para Estudiantes • Comunidad Estudiantando
          </motion.div>

          {/* Main headline - exact copy from the site */}
          <motion.h1
            variants={fadeUp} initial="hidden" animate="show" custom={1}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6"
          >
            Aprendé cómo{' '}
            <span className="gradient-text">organizarte</span>
            {' '}y estudiar para ir a rendir{' '}
            <span className="gradient-text">con seguridad</span>
          </motion.h1>

          {/* Subtitle - exact from site */}
          <motion.p
            variants={fadeUp} initial="hidden" animate="show" custom={2}
            className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-4 leading-relaxed"
          >
            Accedé a beneficios exclusivos por ser parte de nuestra comunidad
          </motion.p>

          <motion.p
            variants={fadeUp} initial="hidden" animate="show" custom={2.5}
            className="text-base text-white/45 max-w-xl mx-auto mb-10 italic"
          >
            "Ser estudiante es un camino lleno de desafíos, por eso para atravesarlo necesitás voluntad, organización y ganas, muchas ganas."
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp} initial="hidden" animate="show" custom={3}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={() => document.getElementById('quiz')?.scrollIntoView({ behavior: 'smooth' })}
              className="group inline-flex items-center justify-center gap-2 bg-[#f789da] hover:bg-[#c41fa0] text-white px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-[#f789da]/30 hover:scale-105"
            >
              ¡Hacé el TEST y descubrilo!
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <Link
              to="/tienda"
              className="inline-flex items-center justify-center gap-2 bg-white/8 backdrop-blur border border-white/20 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-white/15 transition-all duration-300"
            >
              Ver todos los recursos
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeUp} initial="hidden" animate="show" custom={4}
            className="mt-16 grid grid-cols-3 gap-6 max-w-sm mx-auto border-t border-white/10 pt-10"
          >
            {[
              { value: '1000+', label: 'Estudiantes' },
              { value: '23', label: 'Recursos' },
              { value: '4.9★', label: 'Calificación' },
            ].map(stat => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-xs text-white/40 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 hover:text-white/70 transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown size={28} />
      </motion.button>
    </section>
  )
}
