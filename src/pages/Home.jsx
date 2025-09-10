import About from "../components/About";
import Contact from "../components/contact";
import Footer from "../components/footer";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import Particles from "../components/Particles";
import Projects from "../components/projects";
import Skills from "../components/skills";
export default function Home() {
  return (
    <div className="w-full overflow-x-hidden min-h-screen bg-black">
      <div className="w-screen bg-black">
        <Particles
          speed={0.03}
          particleBaseSize={50}
          moveParticlesOnHover={true}
          al
          particleColors={["#9d4edd", "#9d4edc"]}
          particleCount={1000}
          particleSpread={6}
          phaParticles={false}
          disableRotation={false}
        />
      </div>
      <NavBar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
