import React from 'react'
import { Link } from 'react-router-dom';

      


function Footer2() {
  return (
    <div>
    
<div style={{ position: 'relative', textAlign: 'center', marginTop:"70px" }}>
      <img src='https://baroque.pk/cdn/shop/files/MAin_BAnner68.jpg?v=1726313443&width=2000' alt='' style={{ width: '100%', height: 'auto' }} />
      
   
     <Link to="/About">    <button
        className=""
        style={{
          position: "absolute",
          bottom: "43px",
          left: "49%",
          transform: "translateX(-50%)",
          zIndex: 10,
          backgroundColor: "white",
          height: '48px',
          width: '140px',
          color: 'black', 
          border: '1px solid white',
          borderRadius : '0px', 
          letterSpacing : '4px',
          transition: "background-color 0.3s ease", 
        }}

        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "transparent";
          e.currentTarget.style.color = "white";
        }}        
        onMouseLeave={(e) =>
          { e.currentTarget.style.backgroundColor = "white";
            e.currentTarget.style.color = "black";
        }
      }>
        SHOP NOW
      </button></Link>
      
    </div>

    </div>
  )
}
  
export default Footer2
