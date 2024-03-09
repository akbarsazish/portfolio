import { BrowserRouter} from "react-router-dom";

import {Contact, Works, Experience, MySkills, Navbar, Hero, StarsCanvas} from "./components";

const App = () => {
  return (
    <BrowserRouter >
      <div className="relateive z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center"> 
           <Navbar />
           <Hero />
        </div>
          <Experience />
          <MySkills />
          <Works />
          <Contact />
          <StarsCanvas />
      </div>
  </BrowserRouter>
  );
};

export default App;
