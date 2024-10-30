import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";

export function App() {
  return (
    <div className="relative">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

