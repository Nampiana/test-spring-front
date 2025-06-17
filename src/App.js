import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext"; 
import HomePage from "./pages/auth/HomePage";
import Login from "./pages/auth/Login";
import Produit from "./pages/produit/produit";
import CreateProduit from "./pages/produit/createProduit";
import UpdateProduit from "./pages/produit/editProduit";

function App() {
  return (
    <Router>
      <AuthProvider>  
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/produit" element={<Produit />} />
          <Route path="/create-produit" element={<CreateProduit />} />
          <Route path="/edit-produit/:id" element={<UpdateProduit />} />
          {/*<Route path="/Setting" element={<Setting />} />*/}
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
