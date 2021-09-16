import { PlanetView } from "../../../components/planetview"
export const Mars = () => {
    return (
        <div className="earthView container-fluid text-center">
        <div className="row">
            <div className="col-lg-4 sidePlanetView"><PlanetView name="Mars" description="Mars is a dusty, cold, desert world with a very thin atmosphere. There is strong evidence Mars was billions of years ago wetter and warmer, with a thicker atmosphere." moons="2"></PlanetView></div>
            
            <div className="col-lg-8 planetWrapper">  
       
          <div className="marsBall">
          
          </div>
          
      </div>
            
           
        </div>
        
        
        
        
        
        </div>
    )
}