import Navbar from "@/components/layout/navbar";
import Hero from "@/components/home/hero";
import Clients from "@/components/home/clients";
import Services from "@/components/home/services";
import Projects from "@/components/home/projects";
import Technologies from "@/components/home/technologies";
import About from "@/components/home/about";
import Blog from "@/components/home/blog";
import CTA from "@/components/home/cta";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 overflow-x-hidden font-sans selection:bg-primary/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Clients />
        <Services />
        <Projects />
        <Technologies />
        <About />
        <Blog />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
