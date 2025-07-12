import Navbar from "./ui/Navbar.jsx";
import Footer from "./ui/Footer.jsx";
import { Outlet,ScrollRestoration } from "react-router-dom";

function Layout(){
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-900 to-navy-900 text-white">
      <ScrollRestoration/>
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout