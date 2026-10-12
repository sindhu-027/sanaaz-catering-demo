import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Menu from './components/Menu'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#111111]">
      <Header />

      <main>
        <Hero/>
        <About/>
        <Services/>
        <Menu/>
        <Gallery/>
        <Contact/>
        <Footer/>
      </main>

      <footer className="border-t border-white/10 px-5 py-5 text-center text-xs text-white/50">
        Website concept demo — not the official website.
      </footer>
    </div>
  )
}

export default App