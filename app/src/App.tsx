import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Game from "./pages/Game";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </Router>
  );
}

export default App;
