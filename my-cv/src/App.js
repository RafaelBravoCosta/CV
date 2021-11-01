import { useState } from "react";
import "./App.css";
// import { Hero, About, Education, Experience, More } from "./components";
import { CV } from "./CV/CV";
import Hero from "./components/Hero/Hero";
import Education from "./components/Education/Education";
import Projects from "./components/Projects/Projects";
import Technologies from "./components/Technologies/Technologies";
import Languages from "./components/Languages/Languages";

const { hero, education, projects, languages, technologies } = CV;

function App() {
  const [showEducation, setShowEducation] = useState(true);

  return (
    <div className="App">
      <Hero hero={hero} />
      {/* <About hero={hero} />
        <Education education={education} />
        <Experience ence={experience} />
	      <More
        languages={languages}  */}

      {/* volunteer={volunteer}
	      /> */}
      <div className="alignButton">
        <button
          className="custom-btn btn-4"
          onClick={() => setShowEducation(true)}
        >
          Education
        </button>
        <button
          className="custom-btn btn-4"
          onClick={() => setShowEducation(false)}
        >
          Project
        </button>
      </div>
      <div>
        {showEducation ? (
          <Education education={education} />
        ) : (
          <Projects projects={projects} />
        )}
      </div>
      <div>
        <Technologies technologies={technologies} />
      </div>
      <div>
        <Languages languages={languages} />
      </div>
    </div>
  );
}

export default App;
