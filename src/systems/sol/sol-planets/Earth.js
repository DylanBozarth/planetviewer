import "./planetView.scss"
import { PlanetView } from "../../../components/planetview"
export const Earth = () => {
    return (
        <div className="earthView container-fluid text-center">
            <div className="row">
                <div className="col-lg-4 sidePlanetView"><PlanetView name="Earf"></PlanetView></div>
                
                <div className="col-lg-8 planetWrapper">  
           
              <div className="earthBall">
               
                 <div className="planetClouds"></div> 
              </div>
           
          </div>
                
               
            </div>
            
            
            
            
            
            </div>
    )
}