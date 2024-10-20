import Navi from './Navi';
import Main from './Main';
import Frontend from './Frontend';
import Pics from './Pics';
import Video from './Video';
import Footer from './Footer';
import React from 'react';
import Footer2 from './Header';

function Firstpage() {
  return (
    <div>
      <>
 


 <Navi />
  <Footer2 />
  {/* <Frontend /> */}
     
      <Main/>
     
     <hr  className='mt-5'/>
     <div className='text-center font-bold text-2xl mb-5 mt-4 'style={{fontSize:"35px", }} >
     <h2
     ><u>SHOP THE LOOK</u></h2>
     </div>
 <Pics />
 <hr  className='mt-5'/>
 <div className='text-center font-bold text-3xl mt-4 mb-3' style={{fontSize:"35px", }} >
     <h2><u>BE INSPIRED
     </u></h2>
     </div>
  
  <Video />
  <hr className='mt-5'></hr>
 <Footer />
 {/* <hr className='mt-5'></hr> */}
 

 </>
 
    </div>
  )
}

export default Firstpage
