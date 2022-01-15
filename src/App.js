import "./App.scss";
import { useState, useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { Interstellar } from "./interstellar-view/interstellar";
import { SolSystem } from "./systems/sol/solsystem";
import { GenerateSystem } from "./systems/generatesystem";
import { GeneratePlanet } from "./systems/generatePlanet";
import { AnimatePresence } from "framer-motion";
import { Venus } from "./systems/sol/sol-planets/Venus";
import { Earth } from "./systems/sol/sol-planets/Earth";
import { Mars } from "./systems/sol/sol-planets/Mars";
import { Jupiter } from "./systems/sol/sol-planets/Jupiter";
import { Saturn } from "./systems/sol/sol-planets/Saturn";
import { Uranus } from "./systems/sol/sol-planets/Uranus";
import { Neptune } from "./systems/sol/sol-planets/Neptune";
import { Navigation } from "./components/navigation";
function App() {
  const [system, setSystem] = useState("");
  const [planet, setPlanet] = useState('')
 

  const location = useLocation();
  return (
    <div>
      <Navigation system={system} setSystem={setSystem} planet={planet} setPlanet={setPlanet} />
      
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
              />
            )}
          />
          <Route
            exact
            path="/:id"
            render={(props) => (
              <GenerateSystem {...props} system={system} setSystem={setSystem}   planet={planet}
              setPlanet={setPlanet} />
            )}
          />
          {/*<Route
            exact
            path="/exoplanets/:id"
            render={(props) => <GeneratePlanet {...props} />}
          />
          */}
          <Route
            path="/planets/venus"
            render={(props) => (
              <Venus {...props} setSystem={setSystem} system={system} />
            )}
          />
          <Route
            path="/planets/earth"
            render={(props) => (
              <Earth {...props} setSystem={setSystem} system={system} />
            )}
          />
          <Route
            path="/planets/mars"
            render={(props) => (
              <Mars {...props} setSystem={setSystem} system={system} />
            )}
          />
          <Route
            path="/planets/juipter"
            render={(props) => (
              <Jupiter {...props} setSystem={setSystem} system={system} />
            )}
          />
          <Route
            path="/planets/saturn"
            render={(props) => (
              <Saturn {...props} setSystem={setSystem} system={system} />
            )}
          />
          <Route
            path="/planets/uranus"
            render={(props) => (
              <Uranus {...props} setSystem={setSystem} system={system} />
            )}
          />
          <Route
            path="/planets/neptune"
            render={(props) => (
              <Neptune {...props} setSystem={setSystem} system={system} />
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
              />
            )}
          />
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
