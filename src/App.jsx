import { BrowserRouter} from "react-router-dom";

import {About, Contact, Tech, Works, Experience, MySkills, Feedbacks, Navbar, Hero, StarsCanvas} from "./components";

const App = () => {
  return (
    <BrowserRouter >
      <div className="relateive z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center"> 
           <Navbar />
           <Hero />
        </div>
          {/* <About /> */}
          <Experience />
          <MySkills />
          <Tech />
          <Works />
          <Feedbacks /> 
          <Contact />
          <StarsCanvas />
      </div>
  </BrowserRouter>
  );
};

export default App;
