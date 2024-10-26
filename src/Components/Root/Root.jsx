import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import './Root.css'
const Root = () => {
  return (
    <div className="root">
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  );
};

export default Root;