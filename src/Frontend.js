import React from 'react'
// import Carousel from 'react-bootstrap/Carousel';

function Frontend() {
  return (
    <>
      <div className=' hidden md:block  mt-5 ' style={{ position: 'relative', textAlign: '' }}  >
        <   image src="https://baroque.pk/cdn/shop/files/MAin_BAnner68.jpg?v=1726313443&width=2000" alt="ndi" style={{ width: '', height: 'auto' }} />

        
          <button className="hidden md:block " style={{
            position: 'absolute',
            bottom: "40px",
          transform: "translateX(-50%)",
            border: "2px solid white",
            width: "130px",
            left: "49%",
            padding: "10px 10px",
            fontSize: "18px",
            letterSpacing: '2px',
          transition: "background-color 0.3s ease", 
           backgroundColor:"white" 
            
            
          
            
          }}

            onMouseEnter={(a) => {
              a.currentTarget.style.backgroundColor = "transparent";
              a.currentTarget.style.color = "white"
            }}
            onMouseLeave={(a) => {
              a.currentTarget.style.backgroundColor = "white";
              a.currentTarget.style.color = "black"
            }}
          >
            Shop Now</button>

        
      </div>

    </>
  )
}

export default Frontend
