import "./App.css";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { EducationWorkExperience } from "./components/about/EducationWorkExperience";
import { ICanHelpYouWith } from "./components/about/ICanHelpYouWith";
import { Skills } from "./components/Skills";
import { Works } from "./components/Works";
import { Contact } from "./components/Contact";
import { useRef } from "react";
import { ScrollToTop } from "./ScrollToTop";

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);

  const sections = {
    Home: homeRef,
    About: aboutRef,
    Skills: skillsRef,
    Work: workRef,
    Contact: contactRef,
  };

  return (
    <div>
      <Navbar sections={sections} />
      <section ref={homeRef}>
        <Home sections={sections} />
      </section>
      <section ref={aboutRef}>
        <EducationWorkExperience />
      </section>
       <section>
        <ICanHelpYouWith />
      </section>
      <section ref={skillsRef} className="scroll-mt-16">
        <Skills />
      </section>
      <section ref={workRef} className="scroll-mt-16">
        <Works />
      </section>
      <section ref={contactRef}>
        <Contact sections={sections}/>
      </section>

      <ScrollToTop />
    </div>
  );
}

export default App;
