import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import MainPage from "./main";
import AboutPage from "./about";
import ProjectPage from "./project";

export default function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);

      if (element) {
        element.scrollIntoView({
          behavior: "instant",
          block: "start",
        });
      }
    }
  }, [location]);

  return (
    <>
      <MainPage />
      <AboutPage />
      <ProjectPage />
    </>
  );
}
