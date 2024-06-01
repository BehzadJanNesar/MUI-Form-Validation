// import LoginForm from "./pages/LoginForm";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Store from "./pages/Store";
import "./App.css";
import HomePage from "./pages/HomePage";
import LoginForm_RHF from "./pages/LoginForm-with-RHF";

function App() {
   return (
      <BrowserRouter>
         <Navbar />
         <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginForm_RHF />} />
            {/* <Route path="/login" element={<LoginForm />} /> */}
            <Route path="/store" element={<Store />} />
         </Routes>
      </BrowserRouter>
   );
}

export default App;
