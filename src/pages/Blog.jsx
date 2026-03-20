import { useState } from 'react'
import { motion } from 'framer-motion'
import { Clock, User, Search, ArrowRight } from 'lucide-react'

const img = (id) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=800&q=80`

const posts = [
  {
    id: 1,
    photo: img('1434030216411-0b793f4b4173'),
    category: 'Organización',
    categoryColor: 'bg-[#fef0fc] text-[#c41fa0]',
    title: 'Si no estás pudiendo cumplir con tu plan de rendida, seguramente te esté pasando esto',
    excerpt: '"Cuando los planes de rendida fallan, no fallan por falta de tiempo, fallan por falta de planificación realista." Los errores más comunes: confundir tener fechas con organizarse, armar cronogramas irreales, estudiar sin un timeline visible, no priorizar qué estudiar.',
    date: '3 Feb 2026',
    readTime: '7 min',
    author: 'Nina Aragona',
    authorTitle: 'Lic. en Cs. de la Educación',
    related: 'Curso Intensivo | Planificá con estrategia ($51) • Guía para rendir en 6 pasos ($40)',
  },
  {
    id: 2,
    photo: img('1456513080510-7bf3a84b82f8'),
    category: 'Rendir exámenes',
    categoryColor: 'bg-yellow-100 text-yellow-700',
    title: 'Los errores que te hacen rendir con nervios y el secreto para rendir con seguridad',
    excerpt: 'Rendir bien no depende solo de cuánto estudiás. Hay 6 errores clave que generan ansiedad: tratar las fechas de examen como si fueran el plan, ignorar factores de vida, ver al docente como inalcanzable, establecer estándares de conocimiento imposibles, tratar el examen como una catástrofe.',
    date: '10 Dic 2025',
    readTime: '8 min',
    author: 'Nina Aragona',
    authorTitle: 'Lic. en Cs. de la Educación',
    related: 'Masterclass | transformá tus pendientes en aprobados ($40)',
  },
  {
    id: 3,
    photo: img('1484480974693-6ca0a78fb36b'),
    category: 'Organización',
    categoryColor: 'bg-purple-100 text-purple-700',
    title: 'Por qué a veces aunque "te organizás" la organización no funciona',
    excerpt: 'Hay 9 errores comunes que hacen fallar tu organización: no planificar contingencias, no saber cuánto tiempo tenés disponible, no definir un horario de estudio, ignorar los momentos de descanso. Estudiar por intuición es muy diferente a hacerlo con método.',
    date: '19 Nov 2025',
    readTime: '6 min',
    author: 'Nina Aragona',
    authorTitle: 'Lic. en Cs. de la Educación',
    related: 'Asesoría personalizada estratégica ($60-80)',
  },
]

const cats = ['Todos', 'Organización', 'Rendir exámenes']

export default function Blog() {
  const [search, setSearch] = useState('')
  const [cat, setCat] = useState('Todos')

  const filtered = posts.filter(p => {
    const matchCat = cat === 'Todos' || p.category === cat
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  const [featured, ...rest] = filtered

  return (
    <main className="pt-20 min-h-screen bg-white">
      {/* Header */}
      <section className="relative bg-gradient-to-br from-[#1c0a2a] to-[#2d0524] py-16 px-4 overflow-hidden">
        <div className="absolute top-0 right-1/3 w-72 h-72 bg-[#f789da]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-56 h-56 bg-[#c41fa0]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-block bg-white/10 text-white/70 text-sm px-4 py-1.5 rounded-full mb-4 border border-white/10">
              Blog
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-3">
              Artículos para <span className="gradient-text">aprender más</span>
            </h1>
            <p className="text-white/50 max-w-xl mx-auto">
              Por Nina Aragona, Lic. en Cs. de la Educación. Contenido gratuito sobre técnicas de estudio, organización y rendimiento académico.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <div className="relative max-w-xs">
            <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#808285]" />
            <input
              type="text"
              placeholder="Buscar artículos..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 border border-[#f9b3ef]/50 rounded-xl text-sm focus:outline-none focus:border-[#f789da] focus:ring-2 focus:ring-[#f789da]/20 transition-all"
            />
          </div>
          <div className="flex gap-2">
            {cats.map(c => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  cat === c ? 'bg-[#f789da] text-white shadow-lg shadow-[#f789da]/30' : 'bg-[#fef0fc] text-[#808285] hover:text-[#c41fa0]'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Featured post — full-width horizontal card */}
        {featured && (
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="group grid sm:grid-cols-5 gap-0 bg-white rounded-3xl border border-[#f9b3ef]/30 shadow-md hover:shadow-2xl hover:shadow-[#f789da]/10 overflow-hidden hover:-translate-y-1 transition-all duration-300 cursor-pointer mb-8"
          >
            {/* Photo — 40% width */}
            <div className="sm:col-span-2 relative min-h-56 sm:min-h-full overflow-hidden">
              <img
                src={featured.photo}
                alt={featured.title}
                loading="eager"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 absolute inset-0"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20" />
              <span className={`absolute top-4 left-4 ${featured.categoryColor} text-xs font-semibold px-3 py-1 rounded-full shadow`}>
                {featured.category}
              </span>
              <span className="absolute bottom-4 left-4 bg-[#f9be06] text-[#1c0a2a] text-[10px] font-bold px-2.5 py-1 rounded-full">
                Artículo destacado
              </span>
            </div>

            {/* Content — 60% width */}
            <div className="sm:col-span-3 p-7 lg:p-10 flex flex-col justify-between">
              <div>
                <h2 className="font-bold text-xl text-[#1c0a2a] mb-3 group-hover:text-[#c41fa0] transition-colors leading-snug">
                  {featured.title}
                </h2>
                <p className="text-sm text-[#808285] leading-relaxed mb-4 italic line-clamp-4">
                  {featured.excerpt}
                </p>
                <p className="text-xs text-[#c41fa0] font-medium mb-4">
                  Recursos relacionados: {featured.related}
                </p>
              </div>
              <div className="flex items-center justify-between text-xs text-[#808285] border-t border-[#f9b3ef]/20 pt-4">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <User size={11} />
                    <span className="font-medium">{featured.author}</span>
                  </div>
                  <span className="text-[#f789da]">•</span>
                  <span>{featured.authorTitle}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1"><Clock size={11} />{featured.readTime}</span>
                  <span>{featured.date}</span>
                </div>
              </div>
            </div>
          </motion.article>
        )}

        {/* Remaining posts */}
        <div className="space-y-6">
          {rest.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: (i + 1) * 0.1 }}
              className="group grid sm:grid-cols-3 gap-0 bg-white rounded-3xl border border-[#f9b3ef]/30 shadow-sm hover:shadow-xl hover:shadow-[#f789da]/8 overflow-hidden hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              {/* Cover */}
              <div className="relative min-h-44 sm:min-h-full overflow-hidden">
                <img
                  src={post.photo}
                  alt={post.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 absolute inset-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <span className={`absolute top-4 left-4 ${post.categoryColor} text-xs font-semibold px-3 py-1 rounded-full shadow`}>
                  {post.category}
                </span>
              </div>

              {/* Content */}
              <div className="sm:col-span-2 p-6 lg:p-8 flex flex-col justify-between">
                <div>
                  <h2 className="font-bold text-lg text-[#1c0a2a] mb-3 group-hover:text-[#c41fa0] transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-sm text-[#808285] leading-relaxed mb-4 line-clamp-3 italic">
                    {post.excerpt}
                  </p>
                  <p className="text-xs text-[#c41fa0] font-medium mb-4">
                    Recursos relacionados: {post.related}
                  </p>
                </div>
                <div className="flex items-center justify-between text-xs text-[#808285] border-t border-[#f9b3ef]/20 pt-4">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      <User size={11} />
                      <span className="font-medium">{post.author}</span>
                    </div>
                    <span className="text-[#f789da]">•</span>
                    <span>{post.authorTitle}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1"><Clock size={11} />{post.readTime}</span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-[#808285]">
            <div className="text-5xl mb-4">📭</div>
            <p className="font-medium">No encontramos artículos con ese criterio</p>
            <button
              onClick={() => { setCat('Todos'); setSearch('') }}
              className="mt-3 text-[#c41fa0] font-medium hover:underline text-sm"
            >
              Ver todos
            </button>
          </div>
        )}

        {/* About author */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 bg-[#fef0fc] rounded-3xl p-8 border border-[#f9b3ef]/40"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#f789da] to-[#c41fa0] flex items-center justify-center text-2xl shadow-lg">
              👩‍🏫
            </div>
            <div>
              <h3 className="font-bold text-[#1c0a2a]">Nina Aragona</h3>
              <p className="text-sm text-[#808285]">Lic. en Ciencias de la Educación</p>
            </div>
          </div>
          <p className="text-sm text-[#808285] leading-relaxed">
            Creadora de Estudiantando. Especialista en estrategias de aprendizaje para estudiantes universitarios y terciarios argentinos. Su misión es que ningún estudiante se quede sin las herramientas que necesita para atravesar su carrera con más seguridad.
          </p>
        </motion.div>
      </section>
    </main>
  )
}
