import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, StarsCanvas } from "./components";
import useLenisScroll from "./utils/useLenisScroll"; // 🧈
import Spline from "@splinetool/react-spline"; // 👉 Import Spline

const App = () => {
  useLenisScroll(); // 🔁 activate Lenis globally

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />

          {/* Hero section with Spline on right */}
          <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 pt-10">
            
            {/* Left side: Hero text/content */}
            <div className="w-full md:w-1/2 z-10">
              <Hero />
            </div>

            {/* Right side: Spline model */}
            <div className="w-full md:w-1/2 flex justify-center items-center h-[500px]">
              <div className="w-[700px] h-[700px]">
                <Spline scene="https://prod.spline.design/kBZmUjfcsCPSEwkx/scene.splinecode" />
              </div>
            </div>
          </div>
        </div>

        {/* Remaining Sections */}
        <About />
        <Experience />
        <Feedbacks />

        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
