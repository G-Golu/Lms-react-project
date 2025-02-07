import Login from "./pages/Login";
import "./App.css";
//import Navbar from "./components/Navbar";
import HeroSection from "./pages/student/HeroSection";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
//import { Router } from "express";
import { RouterProvider } from "react-router";
import Courses from "./pages/student/Courses";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: (
          <>
            <HeroSection />
           <Courses/>
          </>
        ),
      },
      {
        path: "login",
        element: <Login />,
      }
    ],
  },
]);

function App() {
  return (
    <main>
     <RouterProvider router={appRouter}/>
    </main>
  );
}

export default App;

// ///   <Navbar />
// {/* <HeroSection />
// <Login /> */}