import { BrowserRouter, Route, Routes } from "react-router-dom";
import FinishPage from "./pages/Finish";
import Home from "./pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/finish" element={<FinishPage />} />
      </Routes>
    </BrowserRouter>
  );
}
