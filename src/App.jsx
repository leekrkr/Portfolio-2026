import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import AntiPage from "./pages/anti";
import AsicsPage from "./pages/asics";
import CapsiPage from "./pages/capsi";
import HowkikiPage from "./pages/howkiki";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/project1" element={<CapsiPage />} />
      <Route path="/project2" element={<AntiPage />} />
      <Route path="/project3" element={<AsicsPage />} />
      <Route path="/project4" element={<HowkikiPage />} />
    </Routes>
  );
}

export default App;
