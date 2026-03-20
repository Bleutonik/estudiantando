import { useState } from 'react'
import { motion } from 'framer-motion'
import { Clock, Search, Tag } from 'lucide-react'

const posts = [
  { id: 1, emoji: '🧠', gradient: 'from-violet-400 to-purple-600', category: 'Técnicas', title: '5 técnicas de memorización que la ciencia avala', excerpt: 'No todas las formas de estudiar son igual de efectivas. Estas 5 técnicas tienen respaldo científico y resultados comprobados.', date: '15 Mar 2025', readTime: '6 min' },
  { id: 2, emoji: '📅', gradient: 'from-pink-400 to-rose-600', category: 'Organización', title: 'Cómo armar un horario de estudio que realmente cumplas', excerpt: 'El problema no es la falta de tiempo, sino la falta de sistema. Te enseñamos a crear una rutina que se adapte a tu vida.', date: '8 Mar 2025', readTime: '8 min' },
  { id: 3, emoji: '😰', gradient: 'from-amber-400 to-orange-600', category: 'Bienestar', title: 'Ansiedad ante los exámenes: guía práctica para manejarla', excerpt: 'La ansiedad académica es real y muy común. Acá vas a encontrar estrategias concretas para que los nervios no te jueguen en contra.', date: '1 Mar 2025', readTime: '7 min' },
  { id: 4, emoji: '✏️', gradient: 'from-blue-400 to-indigo-600', category: 'Técnicas', title: 'El método Pomodoro: cómo implementarlo de verdad', excerpt: 'Todos escucharon del Pomodoro pero pocos lo aplican bien. Te explicamos cómo adaptarlo a tu ritmo de estudio.', date: '22 Feb 2025', readTime: '5 min' },
  { id: 5, emoji: '🎯', gradient: 'from-green-400 to-emerald-600', category: 'Motivación', title: 'Por qué estudiar el día anterior siempre falla (y qué hacer)', excerpt: 'La maratón de estudio la noche antes del examen es una trampa. La ciencia explica por qué y cómo evitarla.', date: '15 Feb 2025', readTime: '6 min' },
  { id: 6, emoji: '🌙', gradient: 'from-indigo-400 to-violet-600', category: 'Bienestar', title: 'El sueño y el aprendizaje: lo que nadie te contó', excerpt: 'Dormir bien no es perder el tiempo. Es una de las herramientas de estudio más poderosas que tenés.', date: '8 Feb 2025', readTime: '9 min' },
]

const cats = ['Todos', 'Técnicas', 'Organización', 'Bienestar', 'Motivación']

export default function Blog() {
  const [search, setSearch] = useState('')
  const [cat, setCat] = useState('Todos')

  const filtered = posts.filter(p => {
    const matchCat = cat === 'Todos' || p.category === cat
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  return (
    <main className="pt-20 min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-violet-950 to-indigo-900 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-block bg-white/10 text-white/80 text-sm px-4 py-1.5 rounded-full mb-4">Blog</span>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Artículos para <span className="gradient-text-2">aprender más</span>
            </h1>
            <p className="text-white/60 max-w-xl mx-auto">
              Contenido gratuito sobre técnicas de estudio, organización y bienestar académico.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-10">
          <div className="relative flex-1 max-w-sm">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Buscar artículos..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-violet-400"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {cats.map(c => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  cat === c ? 'bg-violet-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-violet-50 hover:text-violet-700'
                }`}
              >
                <Tag size={12} />
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Featured */}
        {cat === 'Todos' && !search && (
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="group grid md:grid-cols-2 gap-0 bg-white rounded-3xl border border-slate-100 shadow-md hover:shadow-xl hover:shadow-violet-100/50 overflow-hidden mb-10 cursor-pointer hover:-translate-y-1 transition-all duration-300"
          >
            <div className={`bg-gradient-to-br ${posts[0].gradient} min-h-56 flex items-center justify-center`}>
              <span className="text-8xl float-anim">{posts[0].emoji}</span>
            </div>
            <div className="p-8 flex flex-col justify-center">
              <span className="inline-block bg-violet-100 text-violet-700 text-xs font-bold px-3 py-1 rounded-full mb-3 w-fit">
                Artículo destacado
              </span>
              <h2 className="text-2xl font-bold text-violet-950 mb-3 group-hover:text-violet-700 transition-colors">
                {posts[0].title}
              </h2>
              <p className="text-slate-500 mb-5">{posts[0].excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-slate-400">
                <span className="flex items-center gap-1"><Clock size={14} />{posts[0].readTime} de lectura</span>
                <span>{posts[0].date}</span>
              </div>
            </div>
          </motion.article>
        )}

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(cat === 'Todos' && !search ? filtered.slice(1) : filtered).map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-violet-100/50 overflow-hidden hover:-translate-y-2 transition-all duration-300 cursor-pointer"
            >
              <div className={`bg-gradient-to-br ${post.gradient} h-44 flex items-center justify-center relative`}>
                <span className="text-6xl float-anim">{post.emoji}</span>
                <span className="absolute top-4 left-4 bg-white/20 backdrop-blur text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {post.category}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg text-violet-950 mb-2 group-hover:text-violet-700 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1"><Clock size={12} />{post.readTime}</span>
                  <span>{post.date}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </main>
  )
}
