import { useEffect, useState, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EmailForm from "../components/EmailForm";
import ProjectSection from "../components/ProjectSection";
import TechStack from "../components/TechStack";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Fab, Modal, Paper, Button } from "@mui/material";

const Home = () => {
  const [contentVisible, setContentVisible] = useState({
    hero: false,
    about: false,
    projects: false,
  });

  const [openModal, setOpenModal] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        setContentVisible((prevState) => ({
          ...prevState,
          [entry.target.id]: entry.isIntersecting,
        }));
      });
    };

    const createObserver = (ref, sectionName) => {
      const observer = new IntersectionObserver(
        observerCallback,
        observerOptions
      );
      if (ref.current) {
        observer.observe(ref.current);
      }
      return observer;
    };

    const aboutObserver = createObserver(aboutRef, "about");
    const projectsObserver = createObserver(projectsRef, "projects");
    const heroObserver = createObserver(heroRef, "hero");

    return () => {
      aboutObserver.disconnect();
      projectsObserver.disconnect();
      heroObserver.disconnect();
    };
  }, []);

  return (
    <>
      <Navbar />
      <div id="content" style={{ paddingTop: "64px", height: "auto" }}>
        <section
          ref={heroRef}
          id="hero"
          style={{
            height: "60vh",
            justifyContent: "center",
            // border: "1px solid #ccc",
            opacity: contentVisible.hero ? 1 : 0,
            transition: "opacity 1s ease-in-out",
          }}
          className="fade-in hero-section"
        >
          <div
            className="hero-text"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "15rem",
            }}
          >
            <h1 className="hero-solid">TIMOTHY</h1>
            <h1 className="hero-outline">GARCIA</h1>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h2 className="hero-subtitle">
              Web Developer / Software Developer
            </h2>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              margin: "2rem",
            }}
          >
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-md"
              style={{ fontFamily: "Inter", fontWeight: 300 }}
            >
              Download Resume
            </button>
          </div>
        </section>

        <section
          ref={aboutRef}
          id="about"
          style={{
            paddingTop: "15rem",
            opacity: contentVisible.about ? 1 : 0,
            transition: "opacity 1s ease-in-out",
            height: "100vh",
          }}
          className={contentVisible.about ? "fade-in" : ""}
        >
          <Paper elevation={3} sx={{ margin: "2rem" }}>
            <div style={{ paddingTop: "1rem", paddingBottom: "1rem" }}>
              <h2
                className="text-4xl"
                style={{ textAlign: "center", margin: "1rem" }}
              >
                About Me
              </h2>
              <p
                className="text-xl"
                style={{ textAlign: "center", margin: "1rem" }}
              >
                I am a passionate web developer and software developer with a
                strong background in both front-end and back-end technologies.
              </p>
              <TechStack />
            </div>
          </Paper>
        </section>

        <section
          ref={projectsRef}
          id="projects"
          style={{
            paddingTop: "3rem",
            opacity: contentVisible.projects ? 1 : 0,
            transition: "opacity 1s ease-in-out",
            height: "100vh",
          }}
          className={contentVisible.projects ? "fade-in" : ""}
        >
          <Paper elevation={3} sx={{ margin: "2rem" }}>
            <div style={{ paddingTop: "1rem", paddingBottom: "1rem" }}>
              <h2
                className="text-4xl"
                style={{ textAlign: "center", margin: "1rem" }}
              >
                My Recent Projects
              </h2>
              <ProjectSection />
            </div>
          </Paper>
        </section>
        <Fab
          color="primary"
          aria-label="contact"
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 300,
            textTransform: "none",
            position: "fixed",
            bottom: 20,
            right: 20,
            zIndex: 1000,
          }}

          onClick={() => setOpenModal(true)}
        >
          <FaEnvelope  />
        </Fab>
        <Modal
          open={openModal}
          onClose={() => setOpenModal(false)}
          aria-labelledby="contact-modal"
          aria-describedby="contact-modal-description"
        >
          <div className="max-w-md mx-auto">
            <Paper elevation={3} sx={{ margin: "2rem" }} className="w-full">
              <EmailForm />
            </Paper>
          </div>
        </Modal>
        <Footer />
      </div>
    </>
  );
};

export default Home;
