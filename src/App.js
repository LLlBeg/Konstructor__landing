import "./App.css";
import Amazing from "./components/amazing/Amazing";
import Capabilities from "./components/capabilities/Capabilities";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Story from "./components/story/Story";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Story />
      <Capabilities />
      <Amazing />
      <Footer />
    </>
  );
}

export default App;
