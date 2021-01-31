import About from "./containers/About";
import Landing from "./containers/Landing";
import Nav from "./components/Nav";
import Projects from "./containers/Projects";

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
