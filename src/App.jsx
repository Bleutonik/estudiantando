import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import BottomNav from './components/BottomNav'

const Home       = lazy(() => import('./pages/Home'))
const Tienda     = lazy(() => import('./pages/Tienda'))
const Blog       = lazy(() => import('./pages/Blog'))
const Contacto   = lazy(() => import('./pages/Contacto'))
const Beneficios = lazy(() => import('./pages/Beneficios'))

const pageVariants = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
  exit:    { opacity: 0, y: -8, transition: { duration: 0.2 } },
}

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-4">
        <img src="/logo.png" alt="Estudiantando" className="w-14 h-14 object-contain animate-pulse" />
        <div className="w-7 h-7 border-2 border-[#f789da] border-t-transparent rounded-full animate-spin" />
      </div>
    </div>
  )
}

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <motion.div key={location.pathname} variants={pageVariants} initial="initial" animate="animate" exit="exit">
        <Suspense fallback={<PageLoader />}>
          {/* Mobile bottom nav padding */}
          <div className="lg:pb-0 pb-20">
            <Routes location={location}>
              <Route path="/"           element={<Home />} />
              <Route path="/tienda"     element={<Tienda />} />
              <Route path="/blog"       element={<Blog />} />
              <Route path="/contacto"   element={<Contacto />} />
              <Route path="/beneficios" element={<Beneficios />} />
            </Routes>
          </div>
        </Suspense>
      </motion.div>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AnimatedRoutes />
      <Footer />
      <WhatsAppFloat />
      <BottomNav />
    </BrowserRouter>
  )
}
