import { useEffect } from "react";
import About from "../Components/about"

const AboutPage = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <About />
    </div>
  )
}

export default AboutPage
