import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header";
import { createContext, useEffect, useState } from "react";
import { Box } from "@mui/material";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import ReactGA from "react-ga4";

export const Context = createContext();
function App() {
  useEffect(() => {
    // Initialize GA4 with your Measurement ID
    ReactGA.initialize("G-JZCMQXMPTN");

    // Track initial page view
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);

  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const homeSection = document.getElementById("home-section");
    const aboutSection = document.getElementById("about-section");
    const experienceSection = document.getElementById("experience-section");
    const projectsSection = document.getElementById("projects-section");
    const contactSection = document.getElementById("contact-section");

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.id === "home-section") {
            setActiveLink("home");
          } else if (entry.target.id === "about-section") {
            setActiveLink("about");
          } else if (entry.target.id === "experience-section") {
            setActiveLink("experience");
          } else if (entry.target.id === "projects-section") {
            setActiveLink("projects");
          } else if (entry.target.id === "contact-section") {
            setActiveLink("contact");
          }
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    if (homeSection) observer.observe(homeSection);
    if (aboutSection) observer.observe(aboutSection);
    if (experienceSection) observer.observe(experienceSection);
    if (projectsSection) observer.observe(projectsSection);
    if (contactSection) observer.observe(contactSection);

    return () => {
      if (homeSection) observer.unobserve(homeSection);
      if (aboutSection) observer.unobserve(aboutSection);
      if (experienceSection) observer.unobserve(experienceSection);
      if (projectsSection) observer.unobserve(projectsSection);
      if (contactSection) observer.unobserve(contactSection);
    };
  }, []);

  return (
    <Context.Provider
      value={{ mobileOpen, setMobileOpen, activeLink, setActiveLink }}
    >
      {/* <BrowserRouter> */}
      <Box className="bg-pfBg">
        <Header />
        {/* <Routes> */}
        <Home />
        <About />
        <Experience />
        <Projects />
        <Contact />
        {/* </Routes> */}
      </Box>
      {/* </BrowserRouter> */}
    </Context.Provider>
  );
}

export default App;
