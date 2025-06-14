import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./Components/Navbar/MyNav";
import Landing from "./Components/Landing/Landing";
import Websites from "./Components/Websites/Websites";

function App() {
  return (
    <BrowserRouter>
      <MyNav />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/websites" element={<Websites />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
