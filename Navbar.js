import React from 'react'
import { Link,Routes,Route } from 'react-router-dom'
import About from './About'
import Contect from './Contect'
import Error_page from './Error_page'
import HO from './Home'
function Navbar(){
  return (
    <>
        <div className='Navbar'>

       <div className='logo'><b><b id="cels">&#8451;</b>elsius.COM</b></div>

        <div className='Main'><Link to='/'  style={{textDecoration: 'none'}}><span className='ma'>HOME</span></Link></div>
       <div className='Ab'> <Link to='/About'style={{textDecoration: 'none'}}><span className='ma'>ABOUT</span></Link></div>
        <div className='Con'><Link to='/Contect'style={{textDecoration: 'none'}}> <span className='ma'>CONTECT</span></Link></div>
        
    </div>
    <div>
    <Routes>
       <Route path='/' element={<HO/>}/>
        <Route path='/About' element={<About/>}/>
            <Route path='/Contect' element={<Contect/>}/>
            <Route path='*' element={<Error_page/>}/>
           
        </Routes>
    </div>
    </>
  )
}

export default Navbar