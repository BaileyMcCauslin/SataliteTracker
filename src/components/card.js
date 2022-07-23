import "../App.css"

// Dynamic card item( Could clean this up some style wise but it's fine for practice )
export default function card( item ){
    return(
            <div className="detail-card">
              <h1 className="box-header">{item.name}</h1>
              <div className="value-container">
               <div className="left-div">
                <h1 style={{textAlign: 'center', color:'white'}}>Data Line 1</h1>
                <p>Launch Date: {item.launchDate} </p>
                <p>Last Updated Status: {item.update}</p>
                <p>Epoch: {item.epoch} </p>
                <p>First time derivative of mean motion: { item.firstDeriv}</p>
                <p>Second time derivative of mean motion: {item.secondDeriv}</p>
                <p> BSTAR Drag term: {item.bStar}</p>  
               </div>
               <div className="mid-div">
                  <h1 className="box-header" style={{textDecorationLine: 'underline'}}>Approximate Location</h1>
                  <div className="location">
                    <p>Longitude:  {item.location.longitude}</p>
                    <p>Latitude:   {item.location.latitude}</p>  
                    <p>Altitude:   {item.location.altitude}</p>
                  </div>
                  <h1 className="box-header" style={{textDecorationLine: 'underline'}}>Approximate Velocity</h1>
                  <p style={{textAlign:'center'}}>{item.rateOfMotion} km/s</p>
                </div>
               <div className="right-div">
                <h1 style={{textAlign: 'center', color:'white'}}>Data Line 2</h1>
                <p>Inclination: {item.inclination}</p> 
                <p>Arguement of perigee: {item.perigee}</p>
                <p>Mean Anomaly: {item.meanAnomaly}</p> 
                <p>Mean Motion: {item.meanMotion}</p>
                <p> Eccentricity: {item.eccentricity}</p>
                <p>Right Ascension: {item.rightAscensionOfTheAscendingNode}</p>
                <p>Element Number: {item.elementNum}</p>
                <p>Revolution Number: {item.revolutionNum} </p>
               </div>
              </div>
            </div>
        )
}