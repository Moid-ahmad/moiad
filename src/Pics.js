import React from 'react';
import  { useState } from 'react';
import { Container, Row, Col, } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Pics() {
const [show , setShow]=useState("https://baroque.pk/cdn/shop/files/39_bb516716-16fd-4701-a668-3fc0bde0e0e4.jpg?v=1727772505&width=800")
  
 
  return (
    
     
   <Container fluid>
<Row className=' '>


  <Col  md={2} lg={2} xl={2}></Col>

  
  <Col xs={12} sm={12} md={5} lg={5}>
    <div className='mt- text-center'>
      <img
  
        src="https://baroque.pk/cdn/shop/files/Shop_The_Look82.jpg?v=1728049596&width=600 " 
        alt="Second Banner Image" 
        className="w-"
      />
    </div>
  </Col>
    <Col xs={12} sm={12} md={3} lg={3}  className="d-none d-lg-block">
    <div className='mt-5  text-center'
   
    
    >
      <img 
                  src={show}

        alt="First Banner Image" 
        className="w-"
        style={{}}
        onMouseEnter={()=>setShow("https://baroque.pk/cdn/shop/files/30_94e24345-0b1e-405c-a0c0-b7be6f30fd17.jpg?v=1727772462&width=800")}
        onMouseLeave={()=>setShow("https://baroque.pk/cdn/shop/files/39_bb516716-16fd-4701-a668-3fc0bde0e0e4.jpg?v=1727772505&width=800")}
      
      />
      {/* https://baroque.pk/cdn/shop/files/30_94e24345-0b1e-405c-a0c0-b7be6f30fd17.jpg?v=1727772462&width=800 */}
      
    </div>

    <div className='mt-3 text-center'>
      <h6>EMBROIDERED PRINTED LAWN <br />
        UF-711 <br />PKR 8,990.00
      </h6>
      <div className="mt-2 text-center">
        <Link to="/Product"> 
          <button className="px-4 py-2 font-extrabol  " style={{width:"", backgroundColor:"black", color:" white", border: "1px solid black", transition: "background-color 0.40s ease",  }}
     
     onMouseEnter={(e)=>{
e.currentTarget.style.border="1px solid black"
e.currentTarget.style.backgroundColor="transparent"
e.currentTarget.style.Color="black"

      }}
      onMouseLeave={(e)=>{
        e.currentTarget.style.backgroundColor="black"
        e.currentTarget.style.Color="white"
        
              }}
             
      
      
      >
        View Product
      </button></Link>
    </div></div>
    </Col>


  <Col xs={12} className="d-lg-none text-center">
    <div className="mt-4">
         
    <Link to="/Product"><button className="px-4 py-2   " style={{width:"100%", backgroundColor:"black", color:"white", border: "1px solid black", transition: "background-color 0.40s ease",  }}
     
     onMouseEnter={(a) => {
      a.currentTarget.style.fontWeight = ""
      a.currentTarget.style.backgroundColor = "transparent";
      a.currentTarget.style.color = "black"
    }}
    onMouseLeave={(a) => {
      a.currentTarget.style.backgroundColor = "black";
      a.currentTarget.style.color = "white"
    }}             
      >
        View Product
      </button></Link>
    </div>
  </Col>
  <Col xs sm md lg xl="1"></Col>
</Row>
</Container>
);
} 


export default Pics










// import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';

// const ResponsiveGrid = () => {
//   return (
//     <Container fluid>
//       <Row className='grid mx-auto'>
//         {/* Empty column for spacing */}
//         <Col xs sm md lg xl="1"></Col>

//         {/* First Image: Will show in all screen sizes */}
//         <Col xs={12} sm={12} md={4} lg={4}>
//           <div className='mt-4 mx-auto text-center'>
//             <img 
//               src="https://baroque.pk/cdn/shop/files/Shop_The_Look76.jpg?v=1725975148&width=460" 
//               alt="First Banner Image" 
//               className="w-100"
//             />
//           </div>
//         </Col>

//         {/* Second Image: Will show only on lg and larger */}
//         <Col xs={12} sm={12} md={6} lg={5} className="d-none d-lg-block">
//           <div className='mt-5 text-center'>
//             <img 
//               src="https://baroque.pk/cdn/shop/files/24_d8ca67ea-d0ee-48da-95db-a57ed8b3055f.jpg?v=1725624149&width=300" 
//               alt="Second Banner Image" 
//               className="w-100"
//             />
//           </div>
//           <div className='mt-3 text-center'>
//             <h6>EMBROIDERED PRINTED LAWN <br />
//               UF-711 <br />PKR 8,990.00
//             </h6>
//             <div className="mt-2 text-center">
//               <button className="px-4 py-2 font-extrabold text-white bg-black hover:bg-white hover:text-black">
//                 View Product
//               </button>
//             </div>
//           </div>
//         </Col>

//         {/* Button for small screens */}
//         <Col xs={12} className="d-lg-none text-center">
//           <div className="mt-2">
//             <button className="px-4 py-2 font-extrabold text-white bg-black hover:bg-white hover:text-black">
//               View Product
//             </button>
//           </div>
//         </Col>

//         {/* Empty column for spacing */}
//         <Col xs sm md lg xl="1"></Col>
//       </Row>
//     </Container>
//   );
// }

// export default ResponsiveGrid;
