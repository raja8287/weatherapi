import React, { useState } from "react";
import Sliding from "./Sliding";

function HO() {
  const [da, setDa] = useState([]);
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "737da948ebmsh59a2e80c61a023dp1be28ajsn46c82dfad5ed",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };

  const getWt = (city) => {
    fetch(
      "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setDa(response);
        document.getElementById("temp").innerHTML=da.temp;


      });
  };

  const [cimg, setCimg] = useState([]);

  function Ele() {
    var x = document.getElementById("search").value;
  
    
      document.getElementById("locat").innerHTML = x;
    
    
    
  
   
    getWt(x);
    status();
    Ferentocal();
  }

  function imgcha() {
    var x = document.getElementById("search").value;
    const options = {
      method: "GET",
      headers: {
        Key: "qqLIdOj9U2KxBQFY_pP7kyGe63blQ_2o5cnxY_SlqBI",
      },
    };
    var ke = "qqLIdOj9U2KxBQFY_pP7kyGe63blQ_2o5cnxY_SlqBI";
    fetch(
      "https://api.unsplash.com/search/photos?query=" +
        x +
        "&client_id=" +
        ke +
        "&per_page=1&q=80&w=400",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response.results[0].urls.small);
        setCimg(response.results[0].urls.small);
      })

      .catch((err) => console.error(err));
  }

  function status() {
    var r=da.temp
    

    if (r >= 20) {
      document.getElementById("condit").innerHTML = "SUNNY";
      document.getElementById("inneR").innerHTML = "&#x1F31E;";
    } else if (r < 20) {
      document.getElementById("condit").innerHTML = "COLD";
      document.getElementById("inneR").innerHTML = "&#x2744;";
    } else {
      document.getElementById("condit").innerHTML = "NOT AVIBABLE";
      document.getElementById("inneR").innerHTML = "&#128533;";
    }
  }
function Ferentocal(){
  var i=(da.temp*1.8)+32;
 
    document.getElementById("f").innerHTML=Math.trunc(i)+"F";

  

}
function Redirect()
{
  var city=document.getElementById("search").value;
  window.location.href = "https://en.wikipedia.org/wiki/"+city;
}

function Toggel(){
  var d=document.getElementById("f");
  if(d.style.display==="block"){
    document.getElementById("f").style.display="none";
  }
  else{
    document.getElementById("f").style.display="block";

  }
}



  return (
    <>
    <div className="se" id="SE">
    <input
        type="text"
        placeholder="CITY"
        id="search"
        className="searc"
        onChange={() => {
        
          Ele();status();
        }}
      />
      <button type="submit" id="sub" onClick={() => {Ele(); imgcha()}}><i class="fa fa-search"></i></button>
    </div>
     
<div className="abc">



      <div id="status">
        <p></p>
        <button class="close">
          <i class="fa fa-times" aria-hidden="true" ></i>
        </button>
      </div>
      <div id="current" class="wrapper" style={{ padding: "20px 0px" }}>
        <nav>
         

            <button id="locateBtn"  onClick={()=>{Redirect()}} >
            <i class="fa fa-location-arrow" aria-hidden="true">
           </i>
          </button>
            
           
          <div className="photoimg">
          <img src={cimg} alt=""/>
        </div>
          <button id="unitBtn" data-units="f"/* onClick={()=>{Toggel();}}*/>
            <span id="f">f</span>
          </button>

        </nav>
        <h1 class="location" id="locat">
         <span>CITY, IL</span> 
        </h1>
        <h2 class="date" id="days">Sunday, January 8, 2023</h2>
        <div class="weatherIcon" id="wedicon">
          <div class="sunny">
            <div class="inner" id="inne">
              <span id="inneR">&#x1F31E;</span>
            </div>
          </div>
        </div>
        <p class="temp" id="tempo">
         <span id="di">{da.temp}C</span> <span id="fara"></span>
        </p>
        <p class="conditions">
          <span id="condit">Sunny</span>
        </p>

        

        
      </div>
<div className="photo">
  <div className="detail">
    <div className="humi"><p> HUMIDITY:<h3><b>{da.humidity}</b>%</h3></p></div>
    <div className="wind"><p>WIND SPEED:<h3>{da.wind_speed} KM/H</h3></p></div>
    <div className="feel"><p>FEELS LIKE:<h3>{da.feels_like}</h3></p></div>
    
    
  </div>
  

</div>


</div>



















    </>
  );
}

export default HO;
