import Hero from '../components/Hero'
import Features from '../components/Features'
import Products from '../components/Products'
import Combos from '../components/Combos'
import Quiz from '../components/Quiz'
import Testimonials from '../components/Testimonials'
import BlogPreview from '../components/BlogPreview'
import Newsletter from '../components/Newsletter'

export default function Home() {
  return (
    <main>
      <Hero />
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
