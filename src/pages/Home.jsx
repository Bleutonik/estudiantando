import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Products from '../components/Products'
import Combos from '../components/Combos'
import Quiz from '../components/Quiz'
import Testimonials from '../components/Testimonials'
import BlogPreview from '../components/BlogPreview'
import Newsletter from '../components/Newsletter'

/* Instagram-style stories row — mobile only */
const stories = [
  { emoji: '🎯', label: 'Rendir',    gradient: 'from-[#f789da] to-[#c41fa0]', to: '/tienda', ring: 'ring-[#f789da]' },
  { emoji: '🧠', label: 'Aprender',  gradient: 'from-[#f9be06] to-orange-500', to: '/tienda', ring: 'ring-[#f9be06]' },
  { emoji: '📅', label: 'Organizar', gradient: 'from-violet-500 to-[#f789da]', to: '/tienda', ring: 'ring-violet-400' },
  { emoji: '🧘', label: 'Meditar',   gradient: 'from-blue-400 to-teal-500',    to: '/tienda', ring: 'ring-blue-400'   },
  { emoji: '👑', label: 'Combos',    gradient: 'from-pink-400 to-[#c41fa0]',   to: '/tienda', ring: 'ring-pink-400'   },
  { emoji: '✍️', label: 'Blog',      gradient: 'from-amber-400 to-orange-500', to: '/blog',   ring: 'ring-amber-400'  },
]

function Stories() {
  return (
    <div className="lg:hidden bg-white/80 backdrop-blur-xl border-b border-[#f9b3ef]/20 shadow-sm">
      <div className="flex gap-4 overflow-x-auto scrollbar-hide px-4 py-4">
        {stories.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.07, type: 'spring', stiffness: 300 }}
          >
            <Link to={s.to} className="flex flex-col items-center gap-2 shrink-0 w-16">
              {/* Story ring */}
              <div className={`w-16 h-16 rounded-full p-[2.5px] bg-gradient-to-tr ${s.gradient} shadow-lg`}>
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                  <span className="text-2xl">{s.emoji}</span>
                </div>
              </div>
              <span className="text-[11px] text-[#1c0a2a] font-semibold text-center leading-tight">{s.label}</span>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Stories />
      <Features />
      <Products />
      <Combos />
      <Quiz />
      <Testimonials />
      <BlogPreview />
      <Newsletter />
    </main>
  )
}
