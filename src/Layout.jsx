import Navbar from "./ui/NavBar.jsx";
import Footer from "./ui/Footer.jsx";
import { Outlet } from "react-router-dom";

function Layout(){
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-900 to-navy-900 text-white">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout