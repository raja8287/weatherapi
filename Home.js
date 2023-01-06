import React, { useState } from "react";
import Sliding from "./Sliding";

function HO() {
  const [da,setDa]=useState([])
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "737da948ebmsh59a2e80c61a023dp1be28ajsn46c82dfad5ed",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };

const getWt=(city)=>{
  fetch(
    'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response)
      setDa(response);

   document.getElementById  ("Cloud").innerHTML = response.cloud_pct;
   document.getElementById  ("Feels_like").innerHTML = response.feels_like;
   document.getElementById  ("Humidity").innerHTML = response.humidity;
   document.getElementById  ("Max_temp").innerHTML = response.max_temp;
   document.getElementById  ("Min_temp").innerHTML = response.min_temp;
   document.getElementById  ("Sunrise").innerHTML = response.sunrise;
   document.getElementById  ("Sunset").innerHTML = response.sunset;
   document.getElementById  ("Temp").innerHTML = response.temp;
   document.getElementById  ("Wind_degrees").innerHTML = response.wind_degrees;
   document.getElementById  ("Wind_speed").innerHTML =response.wind_speed ;
    })
    
  }



const[cimg,setCimg]=useState([])

  function Ele() {
    var x = document.getElementById("search").value;
    document.getElementById("city").innerHTML = x;
    document.getElementById("cinfo").innerHTML=x;
    document.getElementById("infolink").href="https://en.wikipedia.org/wiki/"+x;
    document.getElementById("imgofcity").src=cimg+"&q=80&w=400";
    getWt(x)
    status()
    
   
    
  }
 
 
 
  function imgcha(){
    var x=document.getElementById("search").value;
    const options = {
      method: 'GET',
      headers: {
        'Key': 'qqLIdOj9U2KxBQFY_pP7kyGe63blQ_2o5cnxY_SlqBI',
        
      }
    };
    var ke="qqLIdOj9U2KxBQFY_pP7kyGe63blQ_2o5cnxY_SlqBI"
    fetch('https://api.unsplash.com/search/photos?query='+x+'&client_id='+ke+'&per_page=1', options)
      .then(response => response.json())
      .then(response =>{ console.log(response.results[0].urls.small)
      setCimg(response.results[0].urls.small)
    }
      )
      
      .catch(err => console.error(err));
  }
  

 
 
  function status(){
    var r=da.temp

    if(r>=20 ){
      document.getElementById("Statimg").innerHTML="&#x1F31E;"
      document.getElementById("tempinfo").innerHTML="HOT OUT SIDE"
      document.getElementById("statbtn").style.background="red"

    }
     else if(r<20){
      document.getElementById("Statimg").innerHTML="&#x2744;"
      document.getElementById("tempinfo").innerHTML="COLD OUT SIDE"
      document.getElementById("statbtn").style.background="rgb(0, 174, 255)"



    }
    else{
      document.getElementById("Statimg").innerHTML="&#128533;"
      document.getElementById("tempinfo").innerHTML="NO INFORMATION"

    }
  }

  return (
    <>
      <input type="text" placeholder="CITY" id="search" onChange={()=>{Ele()}} />
      <button
        type="submit"
        id="sub"
       onClick={() => {
         Ele();
         imgcha();
        }}
      >
        cl
      </button>

      <div className="homes">
        <div className="HOme">

          <div class="card-body" style={{ border: "2px solid black" }}>
            <h1 class="card-title pricing-card-title">
               <span class="w-100 btn btn-lg btn-warning"><b>INFORMATION</b></span>
            </h1>
          
            <ul class="list-unstyled mt-3 mb-4">
              <li>
              <b>TEMP:
               <h1><span id="Temp">{da.temp}&#8451;</span></h1> 
               
                </b>
              </li>
              <li>
                <b>CLOUD:<span id="Cloud" >0</span></b>
              </li>
              <li>
                <b>HUMIDITY:<span id="humidity">{da.humidity}%</span></b>
              </li>
              <li><b>FEELS LIKE:<span id="Feels_like">ms</span></b></li>
              <li><b>WIND SPEED:<span id="Sun_rise">{da.wind_speed} km/hr</span></b></li>
              <li><b>WIND DEGREES:<span id="Sun_set">{da.wind_degrees}&#176;</span></b></li>


            </ul>
           
          </div>

          <div class="card-body" style={{ border: "2px solid black" }}>
            <h1 class="card-title pricing-card-title">
              STATUS
            </h1>
            <ul class="list-unstyled mt-3 mb-4">
              <h1><li> <span id="Statimg"></span></li></h1>
             
            </ul>
            <button type="button" class="w-100 btn btn-lg btn-warning" id="statbtn" >
            <b id="tempinfo">KNOW MORE</b> 
            </button>
          </div>

          <div class="card-body" id="cityinfo" style={{ border: "2px solid black" } }>
            <h1 class="card-title pricing-card-title">
              <span id="city">CITY</span>
            </h1>
          
              
          <img src="https://images.pexels.com/photos/5841807/pexels-photo-5841807.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" id="imgofcity"/>
          
            <button type="button" class="w-100 btn btn-lg btn-warning" >
              <a href=""  id="infolink" ><b> ABOUT</b> <b><span id="cinfo">cc</span></b></a>
              
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default HO;