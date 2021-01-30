import About from "./components/About";
import Landing from "./components/Landing";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <Nav />
      <Landing />
      <main>
        <About/>
      </main>
    </>
  );
}

export default App;
