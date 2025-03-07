import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MyProjects from "@/components/MyProjects";
import MyTestimonial from "@/components/MyTestimonial";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Skills />
      <Experience />
      <AboutMe />
      <MyProjects />
      <MyTestimonial />
      <Contact />
      <Footer />
    </div>
  );
}
