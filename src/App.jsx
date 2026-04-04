import "./App.css";
import Home from "./pages/Home";
import LatestWorks from "./pages/LatestWorks";
import People from "./pages/People";
import Travel from "./pages/Travel";
import About from "./pages/About";
import Contact from "./pages/Contact";
import GradSolos from "./pages/Graduation/GradSolos";
import GradGroups from "./pages/Graduation/GradGroups";
import GraduationAll from "./pages/Graduation/GraduationAll";
import NotFound from "./pages/NotFound";
import { Routes, Route } from "react-router";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/latestworks" element={<LatestWorks />} />
      <Route path="/graduation" element={<GraduationAll />} />
      <Route path="/graduation/solos" element={<GradSolos />} />
      <Route path="/graduation/groups" element={<GradGroups />} />
      <Route path="/people" element={<People />} />
      <Route path="/travel" element={<Travel />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
