import Amazing from "./components/amazing/Amazing";
import Capabilities from "./components/capabilities/Capabilities";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Newsletter from "./components/newsletter/Newsletter";
import Story from "./components/story/Story";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Story />
      <Capabilities />
      <Amazing />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
