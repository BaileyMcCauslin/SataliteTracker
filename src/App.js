import { useState , useEffect } from "react";
import "./App.css";
import Card from "./components/card.js";

function App() {
  // initalize states
  const [ cards , setCards ] = useState([]);
  const [ sataliteId , setSataliteId ] = useState("");

  // Get the satalite data from API and append it to state array 
  const getSataliteData = async () => {

  	// Check that id input is not empty
    if( sataliteId  === "" ){
      return alert("Enter a satalite id");
    }
    await fetch("https://tle.ivanstanojevic.me/api/tle/" + sataliteId + "/propagate")
    .then( response => {
      return response.json();
    })
    .then( data => {
    	// Localize the data so it will fall out of scope. No reason to use react state here
      var newLaunchDate;

      //To make the date more clear, append the century
		let launchDate = sliceTheData( data, true,  9 , 11 );
      if( parseInt( launchDate ) > 22 ){
      	newLaunchDate = "19" + String( launchDate );
      }
      else{
      	newLaunchDate = "20" + String( launchDate );
      }
      /*
      	ANNOYING: For the TLE Lines it returns strings of data instead of the values.( my guess is to save resources )
      	So we have to split the strings( or massive for loops). Since its not a CSV, There is not a clear way better than this.
      	For Example: line1 = "1 36797U 10035C   22202.76762154  .00001275  00000+0  14828-3 0  9997"
      */
   

      // Create a new object from gathered information
      // sliceTheData( data, isLine1, startIndex, endIndex )
      const satalite = {
        name: data.tle.name,
        launchDate: newLaunchDate,
        update: data.tle.date,
        epoch: sliceTheData( data, true, 19, 32 ),
        firstDeriv: sliceTheData( data, true, 35, 43 ),
        secondDeriv: sliceTheData( data, true, 46,  52 ),
        bStar: sliceTheData( data, true, 55, 61 ),
        elementNum: sliceTheData( data, true, 66, 69 ),
        checkSum: sliceTheData( data, true, 69, 69 ),
        inclination: sliceTheData( data, false, 9, 16 ),
        rightAscensionOfTheAscendingNode: sliceTheData( data, false , 18, 25 ),
        eccentricity: sliceTheData(  data, false, 27, 33 ),
        perigee: sliceTheData( data, false, 35, 43 ),
        meanAnomaly: sliceTheData( data, false, 43 , 51 ),
        meanMotion: sliceTheData( data, false, 52, 63 ),
        revolutionNum: sliceTheData( data, false , 63, 68),
        rateOfMotion: data.vector.velocity.r,
        location:{
        	longitude: data.geodetic.longitude,
        	latitude: data.geodetic.latitude,
        	altitude: data.geodetic.altitude
        }
      }
      //Append the new object to the state array for display 
      setCards(  startArray => [ satalite , ...startArray ] );
    })
    .catch( error => {
    	// We could check for different errors here but since its a practice project I wont worry about it 
      console.log( error );
      alert("Satalite with that ID not found");
    })
  }

  // return spliced sub-string
  const sliceTheData = ( data , isLineOne , startIndex , endIndex ) => {
  	if( isLineOne ){
  		return data.tle.line1.slice( startIndex , endIndex );
  	}
  	else{
  		return data.tle.line2.slice( startIndex , endIndex );
  	}
  }

  // Return App 
  return (
    <div className="App">
      <div>
        <h1 className="project-title">
          Project Overview
        </h1>
        <p style={ align }>
          Tracking a given satalite using the TLE( Two-line element set ) API call. Enter a satalite id to get information about its position.
        </p>
        <div style={ cardContainer }>
          <input style={inputBar} placeholder="Satalite Id" type="number" value={ sataliteId} onChange={ e => setSataliteId( e.target.value ) }/>
          <button style={ btn } onClick={ getSataliteData }>Search</button>
        </div>
      </div>
      <ul>
        { cards.map( ( item , index ) => {
          return(
          	<Card { ...item } />
          )
        })}
      </ul>
    </div>
  );
}

//JavaScript styles
 const align = {
    textAlign: 'center',
    color: 'white',
    marginTop: 10
  }

 const inputBar = {
    marginTop: 15,
    height: 50,
    borderColor: "white",
    color: 'white',
    borderRadius: 10,
    borderWidth: 1,
    width: '50%',
    backgroundColor: 'rgb(2, 134, 227)'
  }

 const btn = {
    height: 30,
    width: '10%',
    color: 'white',
    borderColor: 'white',
    backgroundColor: 'rgb(2, 134, 227)',
    alignContent: 'center',
    borderWidth: 1,
    marginLeft: 15,
    borderRadius: 10
  }

 const cardContainer = {
    textAlign: 'center'
  }

export default App;
