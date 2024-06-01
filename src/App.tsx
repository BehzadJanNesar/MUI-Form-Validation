import { Container } from "@mui/material";
import LoginForm from "./pages/LoginForm";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Store from "./pages/Store";
import "./App.css";
import HomePage from "./pages/HomePage";

function App() {
   return (
      <BrowserRouter>
         <Navbar />
         <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/store" element={<Store />} />
         </Routes>
      </BrowserRouter>
   );
}

export default App;
