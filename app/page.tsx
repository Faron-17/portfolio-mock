import AboutMe from "@/components/AboutMe";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MyProjects from "@/components/MyProjects";
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
    </div>
  );
}
