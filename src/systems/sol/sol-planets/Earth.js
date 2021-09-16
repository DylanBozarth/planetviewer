import "./planetView.scss"
import { PlanetView } from "../../../components/planetview"
export const Earth = () => {
    return (
        <div className="earthView container-fluid text-center">
            <div className="row">
                <div className="col-lg-4 sidePlanetView"><PlanetView name="Earth" description="Our home planet, is the only place we know of so far that’s inhabited by living things. It's also the only planet in our solar system with liquid water on the surface." moons="1"></PlanetView></div>
                
                <div className="col-lg-8 planetWrapper">  
           
              <div className="earthBall">
               
                 <div className="planetClouds"></div> 
              </div>
           
          </div>
                
               
            </div>
            
            
            
            
            
            </div>
    )
}