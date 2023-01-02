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

       <div className='logo'><b>DL_WATHER</b></div>

        <div className='Main'><Link to='/'  style={{textDecoration: 'none'}}>HOME</Link></div>
       <div className='Ab'> <Link to='/About'style={{textDecoration: 'none'}}>ABOUT</Link></div>
        <div className='Con'><Link to='/Contect'style={{textDecoration: 'none'}}>CONTECT</Link></div>
        
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