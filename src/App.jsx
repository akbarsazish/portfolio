import { BrowserRouter} from "react-router-dom";

import {About, Contact, Tech, Works, Experience, Feedbacks, Navbar, Hero, StarsCanvas} from "./components";

const App = () => {
  return (
    <BrowserRouter >
      <div className="relateive z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center"> 
          <Navbar />
          <Hero />
         </div>

         <About />
         <Experience />
         <Tech />
         <Works />
         <Feedbacks /> 
         
      </div>
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
  </BrowserRouter>
  );
};

export default App;
