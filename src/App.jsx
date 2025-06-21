import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./Components/Navbar/MyNav";
import Landing from "./Components/Landing/Landing";
import Websites from "./Components/Websites/Websites";
import Projects from "./Components/Projects/Projects";
import ProjectDetail from "./Components/ProjectsDetails/ProjectDetail";
import About from "./Components/About/About";
import NotFound from "./Components/NotFound/NotFound";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <MyNav />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/websites" element={<Websites />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/aboutme" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
