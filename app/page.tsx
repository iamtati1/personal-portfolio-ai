import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Terminal from "@/components/Terminal";
import Projects from "@/components/Projects";
import Hobbies from "@/components/Hobbies";
import ReactionGame from "@/components/ReactionGame";
import Contact from "@/components/Contact";
import ChatWidget from "@/components/ChatWidget";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Terminal />
        <Projects />
        <Hobbies />
        <ReactionGame />
        <Contact />
      </main>
      <ChatWidget />
    </>
  );
}
