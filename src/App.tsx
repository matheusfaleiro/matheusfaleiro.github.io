import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { Principles } from '@/components/sections/Principles'
import { Experience } from '@/components/sections/Experience'
import { Skills } from '@/components/sections/Skills'
import { Education } from '@/components/sections/Education'
import { Contact } from '@/components/sections/Contact'

export function App() {
  return (
    <div className="min-h-screen bg-surface-canvas text-on-surface antialiased flex flex-col w-full">
      <Header />
      <main className="w-full pt-20 flex flex-col">
        <Hero />
        <Principles />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
