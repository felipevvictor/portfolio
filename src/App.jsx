import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Technologies from "./components/Technologies"
import Projects from "./components/Projects"
import Experince from "./components/Experience"
import Contact from "./components/Contact"

const App = () => {
  return (
    <div className="text-stone-300 antialiased">
      <div className="fixed inset-0 -z-10">
        <div className="overflow-x-hidden relative h-full w-full bg-slate-950 overflow-y-auto">
        <div className="container mx-auto px-8">
          <Navbar/>
          <Hero/>
          <Technologies/>
          <Projects/>
          <Experince/>
          <Contact/>
        </div>
        </div>
      </div>
    </div>
  )

}

export default App