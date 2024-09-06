import { AppRouter } from "./router";
import { BrowserRouter } from "react-router-dom";
import "@/assets/styles/globals.css";

export default function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}
