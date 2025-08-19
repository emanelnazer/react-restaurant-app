import NavBar from "./component/NavBar/NavBar";
import Hero from "./component/Hero/Hero";
import Services from "./component/Services/Services";
 import AppStore from "./component/AppStore/AppStore";
import Banner from "./component/Banner/Banner";
import Testimonial from "./component/Testimonial/Testimonial"
 import Footer from "./component/Footer/Footer";
const App = () => {
  return (
    <>
     <NavBar/>
      <Hero/>
      <Services/>
       <Banner/>
       <AppStore/>
       <Testimonial/>
       <Footer/>
    </>
  );
};

export default App;