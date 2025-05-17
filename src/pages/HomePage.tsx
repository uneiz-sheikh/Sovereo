import { useEffect } from "react";
import Banner from "../Components/banner"
import SovereoFramework from "../Components/SovereoFramework"

const HomePage = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Banner />
      <SovereoFramework />
    </div>
  )
}

export default HomePage
