import "./App.css";
import ContactForm from "./components/Contact";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Testimonials from "./components/Testimonials";


function App() {
  return (
    <>
     <NavBar />
     <ContactForm/>
     <Testimonials/>
     <ContactForm/>
     <Footer/>
    </>
  );
}

export default App;
