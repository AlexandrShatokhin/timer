import { BrowserRouter, Route, Routes } from "react-router-dom";
import Timer from "./pages/Timer/Timer";
import Countdown from "./pages/Countdown/Countdown";
import MainPage from "./pages/MainPage/MainPage";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} index />
        <Route path="/timer" element={<Timer />} />
        <Route path="/countdown" element={<Countdown />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
