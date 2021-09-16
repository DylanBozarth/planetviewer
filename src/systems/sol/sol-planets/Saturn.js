import { PlanetView } from "../../../components/planetview"
export const Saturn = () => {
    return (
        <div className="earthView container-fluid text-center">
        <div className="row">
            <div className="col-lg-4 sidePlanetView"><PlanetView name="Saturn" description="Adorned with a dazzling, complex system of icy rings, Saturn is unique in our solar system. The other giant planets have rings, but none are as spectacular as Saturn's." moons="62"></PlanetView></div>
            
            <div className="col-lg-8 planetWrapper">  
       
          <div className="saturnBall">
          <div className="rings"></div>
          </div>
          
      </div>
            
           
        </div>
        
        
        
        
        
        </div>
    )
}