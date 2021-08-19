import React, { useState } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { SelectionContext } from "./context/SelectionContext";
import Home from "./pages/home";
import Test from "./pages/test";
import ProjectPage from "./pages/ProjectPage";

function App() {
  const [selectedSkills, setSelectedSkills] = useState([]);

  return (
    <>
      <SelectionContext.Provider value={{ selectedSkills, setSelectedSkills }}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/test" component={Test} />
          <Route exact path="/:project" component={ProjectPage} />
        </Switch>
      </SelectionContext.Provider>
    </>
  );
}

export default App;
