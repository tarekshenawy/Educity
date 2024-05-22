import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Background from "./components/Background/Background";
import Program from "./components/Programs/Program";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import Gallery from "./components/Gallery/Gallery";
import Testimonials from "./components/Testimonilas/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div>
      <Navbar/>
      <Background/>
      <div className="container">
        <Title title1="our program" title2="what we offer " />
       <Program/>
       <About/>
       <Title title1="Gallery" title2="Campus Photos " />
       <Gallery/>
       <Title title1="Testimonials" title2="What Students says " />
       <Testimonials/>
       <Title title1="Contacts" title2="Get in Touch" />
       <Contact/>
       <Footer/>
      </div>
    
   
    
    </div>
   
  );
}

export default App;


