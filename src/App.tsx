import About from "./components/layout/About";
import ArtRoom from "./components/layout/ArtRoom";
import Contact from "./components/layout/Contact";
import Footer from "./components/layout/Footer";
import Hero from "./components/layout/Hero";
import Navbar from "./components/layout/Navbar";
import Resume from "./components/layout/Resume";
import Work from "./components/layout/Work";
import ResponsiveNotice from "./components/ui/ResponsiveNotices";



export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Work />
      <ArtRoom />
      <Resume />
      <Contact />
      <Footer/>
      <ResponsiveNotice />
    </>
  );
}