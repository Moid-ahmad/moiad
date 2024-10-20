import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Form2() {
  return (
< >
<div className='d-none d-lg-block'>
<div className='w-[100%] h-screen bg-gray-200  flex justify-center '>
      <div className='w-[30%] h-[61%]   bg-white mt-24 rounded '>

        <div className='flex justify-center'>
      <Link to="/"> <img src="//baroque.pk/cdn/shop/files/LOGO_PNG_V01.png?v=1689675712&amp;width=200" alt='bssh' className='mt-4 ' /></Link>          
      </div>
      <div className='ml-4 mt-4'>
<p className='font-bold text-2xl mt-4'>Log in</p>
<p className='text-gray-400 text-sm mt-1'>Enter your email and we'll send you a login code</p>
<p className='font-bold text-xl mt-3'>Email</p>
<input type='text ' placeholder='Email' className='w-[90%]  h-12 mt-2 p-3 outline-none border border-gray-400 rounded  ' />

<div className='text-center text-xl text-white w-[90%] rounded bg-blue-500 hover:bg-blue-600 h-10 mt-3 py-1 '>
Continue
</div>

</div>

<p className='mt-12 ml-4 text-blue-600 hover:underline text-sm'>Privacy</p>

      </div>
 </div>
 </div>

{/* ---------------------------------------------------------------------------- */}

<Container className='d-block d-lg-none'>
  <Row>
    <Col >
    <div className='flex justify-center mt-24'>
      <Link to="/"> <img src="//baroque.pk/cdn/shop/files/LOGO_PNG_V01.png?v=1689675712&amp;width=200" alt='bssh' className='mt-4 ' /></Link>          
      </div>
      <div className='ml-6 mt-14'>
<p className=' text-lg mt-4'>Log in</p>
<p className='text-gray-400 text-sm mt-1'>Enter your email and we'll send you a login code</p>
<p className=' text-lg mt-3'>Email</p>
<input type='text ' placeholder='Email' className='w-[90%]  h-12 mt-2 p-3 outline-none border border-gray-400 rounded  ' />

<div className='text-center text-xl text-white w-[90%] rounded bg-blue-500 hover:bg-blue-600 h-10 mt-3 py-1 '>
Continue
</div>

</div>
<p className='mt-12 ml-6 text-blue-600 hover:underline text-sm'>Privacy</p>

    </Col>
  </Row>
</Container>


</>
  )
}

export default Form2
