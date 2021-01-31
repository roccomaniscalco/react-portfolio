import React from "react";
import { BrowserRouter, Route } from "react-router-dom"

import About from "./containers/About";
import Landing from "./containers/Landing";
import Nav from "./components/Nav";
import Projects from "./containers/Projects";
import Contact from "./containers/Contact";

function App() {
  return (
    <>
      <Nav />
      <BrowserRouter>
        <Route exact path="/" component={Landing} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
      </BrowserRouter>
    </>
  );
}

export default App;
