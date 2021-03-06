import React, { useState } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { SelectionContext } from "./context/SelectionContext";
import Home from "./pages/home";
import ContactPage from "./pages/ContactPage";
import ProjectPage from "./pages/ProjectPage";
import SmartUI from "./pages/SmartUI";

function App() {
  const [selectedSkills, setSelectedSkills] = useState([]);

  return (
    <>
      <SelectionContext.Provider value={{ selectedSkills, setSelectedSkills }}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={ContactPage} />
          <Route
            exact
            path="/z"
            component={() => {
              window.location.href = "https://zonapos.lucidcorner.com/login";
            }}
          />
          <Route exact path="/smart-ui" component={SmartUI} />
          <Route exact path="/:project" component={ProjectPage} />
        </Switch>
      </SelectionContext.Provider>
    </>
  );
}

export default App;
