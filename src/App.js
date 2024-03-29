import "./App.scss";
import { useState, useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { Interstellar } from "./interstellar-view/interstellar";
import { SolSystem } from "./systems/sol/solsystem";
import { GenerateSystem } from "./systems/generatesystem";
import { GeneratePlanet } from "./systems/generatePlanet";
import { AnimatePresence } from "framer-motion";
import { GenerateExoPlanet } from "./systems/generateExoPlanet";

import { Navigation } from "./components/navigation";
import { Testzone } from "./components/testzone";
function App() {
  const [system, setSystem] = useState("");
  const [planet, setPlanet] = useState("");
  const [planetData, setPlanetData] = useState("test");

  const location = useLocation();
  return (
    <div>
      <Navigation
        system={system}
        setSystem={setSystem}
        planet={planet}
        setPlanet={setPlanet}
      />

      <AnimatePresence className="App" exitBeforeEnter={true}>
        <Switch location={location} key={location.pathname}>
          <Route
            exact
            path="/interstellar"
            render={(props) => (
              <Interstellar {...props} system={system} setSystem={setSystem} />
            )}
          />
          <Route
            exact
            path="/"
            render={(props) => (
              <SolSystem
                {...props}
                system={system}
                setSystem={setSystem}
                planet={planet}
                setPlanet={setPlanet}
                planetData={planetData}
                setPlanetData={setPlanetData}
              />
            )}
          />
       <Route
            exact path="/testzone" component={Testzone} 
          />
          <Route
            exact
            path="/:id"
            render={(props) => (
              <GenerateSystem
                {...props}
                system={system}
                setSystem={setSystem}
                planet={planet}
                planetData={planetData}
                setPlanetData={setPlanetData}
                setPlanet={setPlanet}
              />
            )}
          />
        

          <Route
            path="/planets/:id"
            render={(props) => (
              <GeneratePlanet
                {...props}
                setSystem={setSystem}
                system={system}
                planet={planet}
                setPlanet={setPlanet}
                planetData={planetData}
                setPlanetData={setPlanetData}
              />
            )}
          />
           <Route
            path={`/exoPlanets/:id`}
            render={(props) => (
              <GenerateExoPlanet
                {...props}
                setSystem={setSystem}
                system={system}
                planet={planet}
                setPlanet={setPlanet}
                planetData={planetData}
                setPlanetData={setPlanetData}
              />
            )}
          />
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
