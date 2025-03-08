import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import MyExperience from "@/components/MyExperience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MyProjects from "@/components/MyProjects";
import MyTestimonial from "@/components/MyTestimonial";
import MySkills from "@/components/MySkills";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <MySkills />
      <MyExperience />
      <AboutMe />
      <MyProjects />
      <MyTestimonial />
      <Contact />
      <Footer />
    </div>
  );
}
