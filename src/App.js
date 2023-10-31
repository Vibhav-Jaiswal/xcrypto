import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./componenets/Header";
import Home from "./componenets/Home";
import Coins from "./componenets/Coins";
import Exchanges from "./componenets/Exchanges";
import CoinDetails from "./componenets/CoinDetails";
import Footer from "./componenets/Footer";

function App() {
  return (
   <Router>
     <Header />
     <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/coins" element={<Coins />}/>
      <Route path="/exchanges" element={<Exchanges />}/>
      <Route path="/coins/:id" element={<CoinDetails />}/>
     </Routes>
     <Footer />
   </Router>
  );
}

export default App;
