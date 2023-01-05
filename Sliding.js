import React from 'react'

function Sliding() {
function First(){
  document.getElementById("sliderimage1").src="https://www.andbeyond.com/wp-content/uploads/sites/5/Chhatrapati-Shivaji-Terminus-railway-station-mumbai.jpg";
}
function Sec(){
  document.getElementById("sliderimage1").src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbrKnTE0uopPWyrw0tTmwv5C8wVBrXth3_eA&usqp=CAU";
}
function T(){
  document.getElementById("sliderimage2").src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDt9M0bBriXKZYgbVw6P3w74t_Fr80q5zNFA&usqp=CAU";
}
function F(){
  document.getElementById("sliderimage2").src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGHJ3x9Wq5R89rjQfQZv1DeCIk5r1vTBBs4w&usqp=CAU";
}
function Fi(){
  document.getElementById("sliderimage3").src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQQHqayL3YMGbqxHNuKFrPbj0SmhymA5foPQ&usqp=CAU";
}
function Six(){
  document.getElementById("sliderimage3").src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU99Wbh5cFVcNUevvBR0qPsvP7qYRSPWEciQ&usqp=CAU";
}

setInterval(First,12000);
setInterval(Sec,4000);
setInterval(T,6000);
setInterval(F,8000);
setInterval(Fi,10000);
setInterval(Six,12000);
  return (
    <>
    <div><b>PLACE MUST TO VISIT</b></div>
<div className='slider'>
  
  <img src='' id='sliderimage1'/>
  <img src='' id='sliderimage2'/>
  <img src='' id='sliderimage3'/>



</div>
    </>
  )
}

export default Sliding