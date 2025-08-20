import "./App.css";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { EducationWorkExperience } from "./components/about/EducationWorkExperience";
import { ICanHelpYouWith } from "./components/about/ICanHelpYouWith";

function App() {
  return (
    <div class="border-2 border-red-500">
      <Navbar />
      <div className="pt-18">
        <Home />
      </div>
      <EducationWorkExperience />
      <ICanHelpYouWith />
    </div>
  );
}

export default App;
