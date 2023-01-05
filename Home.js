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





  function Ele() {
    var x = document.getElementById("search").value;
    document.getElementById("city").innerHTML = x;
    getWt(x)
    status()
    document.getElementById("cityinfo").src="https://en.wikipedia.org/wiki/"+x;
    
  }
  function status(){
    var r=da.temp

    if(r>=20 ){
      document.getElementById("Statimg").innerHTML="HOT"
      document.getElementById("H").innerHTML= "hii";

    }
     else if(r<20){
      document.getElementById("Statimg").innerHTML="COLD"

    }
    else{
      document.getElementById("Statimg").innerHTML="NO INFO AVILABLE"
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
              <li>30 users <span id="Statimg"></span></li>
             <span id="H">hi</span>
              <img src="" id="wetimg"/>
            </ul>
            <button type="button" class="w-100 btn btn-lg btn-primary">
              Contact us
            </button>
          </div>

          <div class="card-body" style={{ border: "2px solid black" }}>
            <h1 class="card-title pricing-card-title">
              <span id="city">CITY</span>
            </h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li>
              </li>
            <iframe src="https://en.wikipedia.org/" id="cityinfo" title="city"></iframe>
            </ul>
            <button type="button" class="w-100 btn btn-lg btn-outline-primary">
              Sign up for free
            </button>
          </div>
        </div>
      </div>
      <Sliding />
    </>
  );
}

export default HO;