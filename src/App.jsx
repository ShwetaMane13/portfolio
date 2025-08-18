import "./App.css";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { EducationWorkExperience } from "./components/about/EducationWorkExperience";

function App() {
  return (
    <div class="border-2 border-red-500">
      <Navbar />
      <div className="pt-18">
        <Home />
      </div>
      <EducationWorkExperience />
    </div>
  );
}

export default App;
