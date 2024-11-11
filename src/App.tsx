import { BrowserRouter } from "react-router-dom";
import { Router } from "./router";

export function App() {
  return (
    <div className="relative">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  )
}

