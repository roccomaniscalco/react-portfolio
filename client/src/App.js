import About from "./components/About";
import Landing from "./components/Landing";
import Nav from "./components/Nav";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Nav />
      <Landing />
      <main>
        <About/>
        <Projects/>
      </main>
    </>
  );
}

export default App;
