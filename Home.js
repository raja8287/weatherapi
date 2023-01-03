import React from "react";
import Footer from "./Footer";
import Sliding from "./Sliding";

function HO() {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '737da948ebmsh59a2e80c61a023dp1be28ajsn46c82dfad5ed',
      'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
  };
  
  fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle', options)
    .then(response => response.json())
    .then((response) => {console.log(response)
      const cloud_pct=response.cloud_pct
      const temp=response.temp
      const feels_like=response.feels_like
      const humidity=response.humidity
      const min_temp=response.min_temp
      const max_temp=response.max_temp
      const wind_degrees=response.wind_degrees
      const sunrise=response.sunrise
      const sunset=response.sunset
    })
    .catch(err => console.error(err));

  

  return (
    <>
    
    <div className="homes">
    
    <div className="HOme">

    
    <div class="card-body" style={{border:"2px solid black"}}>
            <h1 class="card-title pricing-card-title">$0<small class="text-muted fw-light">/mo</small></h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li>hi<span id='cloud_pct'></span></li>
              <li>2 GB of storage</li>
              <li>Email support</li>
              <li>Help center access</li>
            </ul>
            <button type="button" class="w-100 btn btn-lg btn-outline-primary">Sign up for free</button>
          </div>
          
          
          
          <div class="card-body" style={{border:"2px solid black"}}>
            <h1 class="card-title pricing-card-title">$29<small class="text-muted fw-light">/mo</small></h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li>30 users included</li>
              <li>15 GB of storage</li>
              <li>Phone and email support</li>
              <li>Help center access</li>
            </ul>
            <button type="button" class="w-100 btn btn-lg btn-primary">Contact us</button>
          </div>
          
          
          
          <div class="card-body" style={{border:"2px solid black"}}>
            <h1 class="card-title pricing-card-title">$0<small class="text-muted fw-light">/mo</small></h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li>10 users included</li>
              <li>2 GB of storage</li>
              <li>Email support</li>
              <li>Help center access</li>
            </ul>
            <button type="button" class="w-100 btn btn-lg btn-outline-primary">Sign up for free</button>
          </div>
    </div>

    </div>
    <Sliding/>
    </>
  );
}

export default HO;
