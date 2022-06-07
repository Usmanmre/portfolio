import Header from "./components/header/header";
import Navbar from "./components/nav/nav";
import Home from "./components/home/home";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";

function WebContent() {
  return (
    <>
      <Header />
      <Navbar />
      <Home />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
export default WebContent;