import logo from './logo.svg';
import './App.css';
import Home from "./Home";
import About from './About';
import Contact from './Contact';
import Cart from './Cart';
import Product from './Product';
import {Link,Routes,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav} from 'react-bootstrap'
import { FiShoppingCart} from "react-icons/fi";
import {CgMenu,CgClose} from "react-icons/cg"

function App() {
  return (
    <div>
    <div>
      <Navbar bg="dark" variant="dark">
      <img src='./images/ecom2.png' alt='my image' class="logo-ecom"></img>
          <Nav className="me-auto header-link">
          <Link to="/">Home</Link>
          <Link to="/About">About</Link>
          <Link to="/Contact">Contact</Link>
          <Link to="/Product">Product</Link>
          <Link to="/Cart"><FiShoppingCart/></Link>
          <div className='mobile-link'>
          <Link to="/Cgmenu" className='mobile-icon'><CgMenu/></Link>
          <Link to="/Close" className='mobile-icon'><CgClose/></Link>
          </div>
          </Nav>
      </Navbar>
    </div>
   <div>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/About" element={<About/>}></Route>
        <Route path="/Contact" element={<Contact/>}></Route>
        <Route path="/Product" element={<Product/>}></Route>
        <Route path="/Cart" element={<Cart/>}></Route>
      </Routes>
    </div>
    </div>
  );
}

export default App;