import About from "./containers/About";
import Landing from "./containers/Landing";
import Nav from "./components/Nav";
import Projects from "./containers/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Nav />
      <Landing />
      <main>
        <About/>
        <Projects/>
      </main>
      <Footer/>
    </>
  );
}

export default App;
