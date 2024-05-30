import { Container } from "@mui/material";
import LoginForm from "./pages/LoginForm";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Store from "./pages/Store";
import "./App.css";

function App() {
   return (
      <BrowserRouter>
         <Navbar />
         <Container>
            <Routes>
               <Route path="/login" element={<LoginForm />} />
               <Route path="/store" element={<Store />} />
            </Routes>
         </Container>
      </BrowserRouter>
   );
}

export default App;
