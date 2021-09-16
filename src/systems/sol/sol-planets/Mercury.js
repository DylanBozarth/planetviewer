import { PlanetView } from "../../../components/planetview"
export const Mercury = () => {
    return (
        <div className="earthView container-fluid text-center">
        <div className="row">
            <div className="col-lg-4 sidePlanetView"><PlanetView name="Mercury" moons="0" description="The smallest planet in our solar system and closest to the Sun—is only slightly larger than Earth's Moon. Mercury is the fastest planet, zipping around the Sun every 88 Earth days."></PlanetView></div>
            
            <div className="col-lg-8 planetWrapper">  
       
          <div className="mercuryBall">
           
          </div>
       
      </div>
            
           
        </div>
        
        
        
        
        
        </div>
    )
}