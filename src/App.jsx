import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Results from "./pages/Results";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
 children: [
    {
      path:"/",
      element: <Home/>
    },
    {
      path:"/contact",
      element: <Contact/>
    },
    
    {
      path:"/about",
      element: <About/>
    },
    {
      path:"/programs",
      element: <Programs/>
    },
    {
      path:"/results",
      element: <Results/>
    },

  ]}
]);

function App() {
  return(
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App;
