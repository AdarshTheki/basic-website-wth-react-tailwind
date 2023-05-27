import "./App.css";
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Product from './pages/Product';
import Reports from './pages/Reports';
import Team from './pages/Team';

const ReactSidebar = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route path="/product" Component={Product} />
          <Route path="/reports" Component={Reports} />
          <Route path="/team" Component={Team} />
        </Routes>
      </Router>
    </>
  );
};

export default ReactSidebar;
