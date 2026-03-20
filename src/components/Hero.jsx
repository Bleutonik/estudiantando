import { useEffect, useRef } from 'react'
import { motion, useAnimation, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { useState } from 'react'

/* ── Floating notification badges that pop in/out ── */
const notifications = [
  { id: 1, emoji: '✅', text: '¡Aprobé Derecho Civil!', sub: 'hace 2 minutos', color: 'from-green-500 to-emerald-600', delay: 1.2 },
  { id: 2, emoji: '🎯', text: 'Plan de rendida listo', sub: 'Faltan 5 días', color: 'from-[#f789da] to-[#c41fa0]', delay: 2.8 },
  { id: 3, emoji: '🔥', text: '7 días de racha', sub: 'Seguí así!', color: 'from-orange-500 to-amber-500', delay: 4.5 },
  { id: 4, emoji: '📚', text: 'Masterclass 80% completa', sub: '4 videos restantes', color: 'from-violet-600 to-purple-700', delay: 6.0 },
]

function FloatingNotif({ notif }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const show = setTimeout(() => setVisible(true), notif.delay * 1000)
    const hide = setTimeout(() => setVisible(false), (notif.delay + 3.5) * 1000)
    const loop = setTimeout(() => {
      setVisible(false)
      setTimeout(() => setVisible(true), 500)
    }, (notif.delay + 7) * 1000)
    return () => { clearTimeout(show); clearTimeout(hide); clearTimeout(loop) }
  }, [notif.delay])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, x: 60, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 40, scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 300, damping: 22 }}
          className="flex items-center gap-2.5 bg-white/10 backdrop-blur-xl border border-white/15 rounded-2xl px-3.5 py-2.5 shadow-xl"
        >
          <div className={`w-8 h-8 rounded-xl bg-gradient-to-br ${notif.color} flex items-center justify-center text-base shrink-0`}>
            {notif.emoji}
          </div>
          <div>
            <p className="text-white text-xs font-semibold leading-tight">{notif.text}</p>
            <p className="text-white/45 text-[10px] leading-tight">{notif.sub}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

/* ── Animated progress bar ── */
function ProgressBar({ label, pct, color, delay }) {
  const [width, setWidth] = useState(0)
  useEffect(() => {
    const t = setTimeout(() => setWidth(pct), delay * 1000 + 800)
    return () => clearTimeout(t)
  }, [pct, delay])
  return (
    <div>
      <div className="flex justify-between text-[10px] text-white/50 mb-1">
        <span>{label}</span><span>{pct}%</span>
      </div>
      <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className={`h-full rounded-full bg-gradient-to-r ${color}`}
          initial={{ width: 0 }}
          animate={{ width: `${width}%` }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        />
      </div>
    </div>
  )
}

/* ── Typewriter effect ── */
function Typewriter({ words }) {
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), 1800)
      return
    }
    if (subIndex === 0 && deleting) {
      setDeleting(false)
      setIndex(i => (i + 1) % words.length)
      return
    }
    const timeout = setTimeout(() => {
      setSubIndex(s => s + (deleting ? -1 : 1))
    }, deleting ? 60 : 90)
    return () => clearTimeout(timeout)
  }, [subIndex, deleting, index, words])

  return (
    <span className="gradient-text">
      {words[index].substring(0, subIndex)}
      <span className="animate-pulse text-[#f789da]">|</span>
    </span>
  )
}

/* ── Virtual student scene (right side) ── */
function StudentScene() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">

      {/* Central screen / dashboard mockup */}
      <motion.div
        initial={{ opacity: 0, y: 40, rotateY: -15 }}
        animate={{ opacity: 1, y: 0, rotateY: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
        style={{ perspective: '1000px' }}
        className="relative w-full max-w-sm"
      >
        {/* "Laptop" frame */}
        <div className="bg-[#0f0518]/80 backdrop-blur border border-white/10 rounded-2xl shadow-2xl shadow-[#f789da]/10 overflow-hidden">

          {/* Top bar */}
          <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/8 bg-white/3">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
            <div className="flex-1 mx-4 bg-white/8 rounded-md px-3 py-0.5 text-[10px] text-white/30 text-center">
              estudiantando.com.ar
            </div>
          </div>

          {/* Content */}
          <div className="p-5 space-y-4">

            {/* Student avatar + greeting */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-3"
            >
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#f789da] to-[#c41fa0] flex items-center justify-center text-lg shadow-lg">
                  👩‍🎓
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full border-2 border-[#0f0518]" />
              </div>
              <div>
                <p className="text-white text-xs font-semibold">¡Hola, Valentina! 👋</p>
                <p className="text-white/40 text-[10px]">Seguí con tu plan de hoy</p>
              </div>
              <div className="ml-auto bg-[#f789da]/15 border border-[#f789da]/20 rounded-lg px-2 py-1">
                <span className="text-[#f789da] text-[10px] font-bold">🔥 7 días</span>
              </div>
            </motion.div>

            {/* Progress section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0 }}
              className="bg-white/4 rounded-xl p-3.5 space-y-3"
            >
              <p className="text-white/50 text-[10px] font-semibold uppercase tracking-wider">Tu progreso de hoy</p>
              <ProgressBar label="Guía para rendir — Capítulo 3" pct={72} color="from-[#f789da] to-[#c41fa0]" delay={0.8} />
              <ProgressBar label="Plan de rendida — Semana 2" pct={45} color="from-[#f9be06] to-orange-500" delay={1.0} />
              <ProgressBar label="Masterclass — Módulo 4" pct={90} color="from-violet-500 to-[#f789da]" delay={1.2} />
            </motion.div>

            {/* Today's tasks */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="space-y-2"
            >
              <p className="text-white/50 text-[10px] font-semibold uppercase tracking-wider">Tareas de hoy</p>
              {[
                { done: true,  text: 'Leer unidad 3 — Derecho Civil', time: '45 min' },
                { done: true,  text: 'Repasar con flashcards',         time: '30 min' },
                { done: false, text: 'Practicar ejercicios del TP',    time: '60 min' },
                { done: false, text: 'Meditación pre-examen',          time: '10 min' },
              ].map((task, i) => (
                <motion.div
                  key={task.text}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.3 + i * 0.1 }}
                  className="flex items-center gap-2.5"
                >
                  <div className={`w-4 h-4 rounded-md flex items-center justify-center shrink-0 ${task.done ? 'bg-green-500' : 'bg-white/10 border border-white/20'}`}>
                    {task.done && <span className="text-[8px] text-white font-bold">✓</span>}
                  </div>
                  <span className={`text-[10px] flex-1 ${task.done ? 'text-white/30 line-through' : 'text-white/70'}`}>{task.text}</span>
                  <span className="text-[9px] text-white/25">{task.time}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Next exam countdown */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.6 }}
              className="bg-gradient-to-r from-[#f789da]/15 to-[#c41fa0]/15 border border-[#f789da]/20 rounded-xl p-3 flex items-center justify-between"
            >
              <div>
                <p className="text-[10px] text-white/50">Próximo examen</p>
                <p className="text-xs font-bold text-white">Anatomía II</p>
              </div>
              <div className="text-right">
                <p className="text-[10px] text-white/50">Faltan</p>
                <CountdownDays />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Floating student avatars around the screen */}
        <motion.div
          className="absolute -left-14 top-1/4 flex flex-col items-center gap-1"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.8 }}
        >
          <div className="relative">
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center text-xl shadow-xl border-2 border-white/20"
            >
              👨‍💻
            </motion.div>
            <span className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border border-[#1c0a2a]" />
          </div>
          <span className="text-[9px] text-white/40 font-medium">Matías</span>
        </motion.div>

        <motion.div
          className="absolute -right-14 top-1/3 flex flex-col items-center gap-1"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2.0 }}
        >
          <div className="relative">
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut', delay: 0.5 }}
              className="w-11 h-11 rounded-full bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center text-xl shadow-xl border-2 border-white/20"
            >
              👩‍🏫
            </motion.div>
            <span className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border border-[#1c0a2a]" />
          </div>
          <span className="text-[9px] text-white/40 font-medium">Sofía</span>
        </motion.div>

        <motion.div
          className="absolute -left-12 bottom-1/4 flex flex-col items-center gap-1"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2.2 }}
        >
          <div className="relative">
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut', delay: 1 }}
              className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-teal-600 flex items-center justify-center text-lg shadow-xl border-2 border-white/20"
            >
              🧑‍🎓
            </motion.div>
            <span className="absolute -bottom-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full border border-[#1c0a2a]" />
          </div>
          <span className="text-[9px] text-white/40 font-medium">Tomás</span>
        </motion.div>

        {/* Stars / sparkles */}
        {[['-top-6', 'left-1/4'], ['-top-4', 'right-1/3'], ['top-1/2', '-right-6']].map(([t, l], i) => (
          <motion.div
            key={i}
            className={`absolute ${t} ${l} text-[#f9be06]`}
            animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6], rotate: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 2 + i * 0.5, delay: i * 0.8 }}
          >
            ✦
          </motion.div>
        ))}
      </motion.div>

      {/* Floating notifications — right side */}
      <div className="absolute right-0 top-0 bottom-0 flex flex-col justify-around py-4 gap-3 w-52">
        {notifications.map(n => <FloatingNotif key={n.id} notif={n} />)}
      </div>
    </div>
  )
}

function CountdownDays() {
  const [days, setDays] = useState(5)
  useEffect(() => {
    const interval = setInterval(() => {
      setDays(d => d > 1 ? d - 1 : 5)
    }, 3000)
    return () => clearInterval(interval)
  }, [])
  return (
    <motion.p
      key={days}
      initial={{ opacity: 0, y: -5 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-lg font-bold text-[#f789da]"
    >
      {days} días
    </motion.p>
  )
}

/* ── MAIN HERO ── */
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#1c0a2a]">

      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(247,137,218,0.15) 0%, transparent 70%)' }}
          animate={{ scale: [1, 1.15, 1], x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 12, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(196,31,160,0.12) 0%, transparent 70%)' }}
          animate={{ scale: [1, 1.2, 1], x: [0, -25, 0], y: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut', delay: 2 }}
        />
        <motion.div
          className="absolute top-1/3 left-1/2 w-80 h-80 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(249,190,6,0.06) 0%, transparent 70%)' }}
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut', delay: 1 }}
        />

        {/* Animated grid */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(247,137,218,1) 1px, transparent 1px), linear-gradient(90deg, rgba(247,137,218,1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Floating particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[#f789da]"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 0.6, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 3 + Math.random() * 4,
              delay: Math.random() * 6,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* LEFT — Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/8 border border-white/12 text-white/70 px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#f789da] animate-pulse" />
              +1000 estudiantes argentinos confían en nosotras
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-4"
            >
              Aprendé a{' '}
              <Typewriter words={['organizarte', 'estudiar mejor', 'rendir con seguridad', 'aprender de verdad']} />
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="text-base text-white/55 leading-relaxed mb-8 max-w-md"
            >
              Accedé a recursos, guías y herramientas creadas por Nina Aragona para que atraveses tu carrera con más organización, mejores técnicas y mucha más confianza.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="flex flex-col sm:flex-row gap-3 mb-10"
            >
              <button
                onClick={() => document.getElementById('quiz')?.scrollIntoView({ behavior: 'smooth' })}
                className="group inline-flex items-center justify-center gap-2 bg-[#f789da] hover:bg-[#c41fa0] text-white px-7 py-4 rounded-2xl text-base font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-[#f789da]/30 hover:scale-105"
              >
                ¡Hacé el TEST y descubrilo!
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <Link
                to="/tienda"
                className="inline-flex items-center justify-center gap-2 bg-white/7 border border-white/15 text-white px-7 py-4 rounded-2xl text-base font-semibold hover:bg-white/14 transition-all duration-300"
              >
                Ver recursos
              </Link>
            </motion.div>

            {/* Social proof row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-4"
            >
              <div className="flex -space-x-2">
                {['👩‍🎓', '👨‍💻', '👩‍⚕️', '🧑‍🎓'].map((e, i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-[#f789da]/40 to-[#c41fa0]/40 border-2 border-[#1c0a2a] flex items-center justify-center text-sm">
                    {e}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex gap-0.5 mb-0.5">
                  {Array(5).fill(0).map((_, i) => (
                    <span key={i} className="text-[#f9be06] text-xs">★</span>
                  ))}
                </div>
                <p className="text-white/40 text-xs">4.9 promedio · +1000 estudiantes</p>
              </div>
            </motion.div>
          </div>

          {/* RIGHT — Animated scene */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative h-[520px] hidden lg:block"
          >
            <StudentScene />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/25 hover:text-white/60 transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown size={26} />
      </motion.button>
    </section>
  )
}
