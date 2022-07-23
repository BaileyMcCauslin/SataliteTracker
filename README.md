# Satalite Tracker
## Overview
  > Using Celestrak data(<a href="https://celestrak.org/">Here</a>) we get the positon of a satalite for any given time the data is updated
   Now luckily, this data is already calculated and put into a JSON format for me so I don't have to do any of the complex geometry of calculating the satalites' motion    for any given moment in time.
## How to run 
  >* Make sure you have node installed (Install <a href="https://nodejs.org/en/download/">Here</a>)
  >* Clone this reposity
  >* Get into the project folder
  >* Run this command to start the local server
  >   >npm start
  
## User Interface
  >* User searches for a satalite using a satalite ID, information pertainting to that satalites' position will dislay( user can display as many satalites as they like).
  >* Although a very simple UI, it is very easy to use.
  >* Basic UI Image:
  > ![Screenshot (80)](https://user-images.githubusercontent.com/66763821/180581915-eab3bea4-4303-4a07-a81b-753c304850b7.png)

## API Used
  > Although the data is supplied by Celetrak, the API is by ivanstan. Link to API documentation: <a href="https://github.com/ivanstan/tle-api" >Here</a><br>
  > With the code repository that powers backend support of the API <a href="https://api.nasa.gov/">Here</a>
