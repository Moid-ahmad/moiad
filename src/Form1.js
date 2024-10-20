import React from 'react'
import { Col, Container, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import  { useState } from 'react';

function Form1() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleArea = () => {
    setIsOpen(!isOpen);
  };
const Show=()=>{
  alert("successfuly complete your order Thanks!!!!!!")
} 
  return (
    <>
        <div className='bg-white shadow-  pb-4 flex justify-center  '>
        <Link to="/"> <img src="//baroque.pk/cdn/shop/files/LOGO_PNG_V01.png?v=1689675712&amp;width=200" alt='bssh' className='mt-4' /></Link>          

        </div>
        <hr />
        <div className='d-flex d-none d-lg-flex'>

        <div className='w-[45%]     ml-28 mt-5' >

        <div className='w-[100%] flex justify-between  ' >
          <span className='text-2xl font-bold'>Contact</span>
          <Link to="/Form2">
          <span className='underline text-sm cursor-pointer ' style={{}}>Log in</span>
          </Link>

          </div>
      <span  >

     <input type='text' placeholder='Email' className='mt-4 w-[100%] h-14 px-3  rounded border border-gray' />   
      </span>
<div className='mt-3 gap-2  flex'>
<span >
    <input type="checkbox"  className='w-5 h-5 text-black bg-black '/>
    </span>
<span className=' '>
Email me with news and offers
</span>
</div>

<div className='mt-4 w-[100%] h-28 px-3  rounded border border-gray bg-gray-100'>
<p className='font-bold text-lg mt-3 ml-4'>
International Website
</p>
<p className='text-sm mt-2 ml-4'>
To deliver products outside of Pakistan visit our International Website:
</p>
<p className='text-sm mt-2 ml-4'>

https://baroque.com.pk
</p>
</div>
<div className='mt-3'>
<span className='text-2xl font-bold mt-6'>Delivery</span>
</div>

<div className='mt-3 w-[100%] h-14 px-3  rounded border border-gray'>
<span className='text-xs'>Country/Region</span>

<Dropdown >
  <DropdownToggle  className='  text-sm '   variant="white">
pakistan
  </DropdownToggle>

<DropdownMenu className=''>

<DropdownItem className='text-xs'>sjvhdjcsjdhv</DropdownItem>

</DropdownMenu>

</Dropdown>
</div >
<span className='mt- flex gap-2 '>
<input type="text" placeholder='Name'className='mt-4 w-[49%] h-14 px-3  rounded border border-gray' />
<input type="text" placeholder='LastName' className='mt-4 w-[49%] h-14 px-3  rounded border border-gray'/>
</span>
<input type='text' placeholder='Address' className='mt-4 w-[100%] h-14 px-3  rounded border border-gray' />

<input type='text' placeholder='Aparment,suite ,etc' className='mt-4 w-[100%] h-14 px-3  rounded border border-gray' />   

<span className='mt- flex gap-2 '>
<input type="text" placeholder='City'className='mt-4 w-[49%] h-14 px-3  rounded border border-gray' />
<input type="text" placeholder='Postal code (optional)' className='mt-4 w-[49%] h-14 px-3  rounded border border-gray'/>
</span>

<input type='tel' placeholder='Phone' className='mt-4 w-[100%] h-14 px-3  rounded border border-gray' />

<div className='mt-3 gap-2  flex'>
<span >
    <input type="checkbox"  className='w-5 h-5 text-black bg-black '/>
    </span>
<span className=' '>
save the information for next time
</span>
</div>

<span className='text-2xl font-bold mt-8'>Select your city</span>

<div className='mt-3 w-[100%] text-end h-14 px-3  rounded border border-gray'>

<div className="relative inline-block">
      <select
        value={selectedOption}
        onChange={handleChange}
        className="bg-white text-black  rounded p-2 outline-none w-96  mt-2" 
      >
        <option value="" disabled></option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
    </div>

</div>
<div className='mt-3'>
<span className='text-2xl font-bold '>Shipping method</span>
</div>
<div className='w-[100%] flex justify-between h-14 px-2  rounded border border-gray mt-3 ' >
          <span className='text-md mt-3'>Local Delivery</span>
          <span className=' font-bold mt-3' style={{}}>FREE</span>

          </div>
          <div className='mt-4'>
    <span className='text-2xl font-bold'>Payment</span>

          </div>
          
<p className='text-sm text-gray-400 mt-2'>All transactions are secure and encrypted.</p>

<div className='h-24 mt-2 border border-gray-200'>
<div className='ml-3 mt-2 gap-2 flex'>
<input type="radio" name="options" />

Cash on Delivery (COD)

</div>
<hr className='mt-3'/>
<div className='mt-2 ml-3 gap-2 flex'>

<input type="radio" name="options" />

Safepay Checkout - pay with debit & credit cards
</div>

</div>

<div className='text-1xl font-bold mt-4'>
<span >Billing address</span>

</div>

<div className='h-24 mt-2 border border-gray-200'>
<div className='ml-3 mt-2 gap-2 flex' >
<input type="radio" name="options" />

Same as shipping address
</div>
<hr className='mt-3'/>
<div className='mt-2 ml-3 gap-2 flex'>

<input type="radio" name="options" />

Use a different billing address
</div>

</div>

<div className='w-[100%] h-16 rounded text-2xl text-white bg-black text-center font-bold mt-5 p-3 '>
<span className='mt-2 cursor-pointer'onClick={Show}>
Complete order
</span>
</div>



<div className='h-16'>

</div>

    </div>

<div className='w-[45%] ml-6  border bg-gray-200 ' style={{height:"630px", position:"sticky" , top:"0px"}}>


</div>


</div>
{/* ----------------------------------------------------------------------------------------- */}
<Container className='d-lg-none d-block'>
  <Row>
    <Col >
    <div className=''>
<div className=" gap- p-4">
      <div 
        onClick={toggleArea} 
        className="bg-gray-300 text-black w-[100%] px-4 py-2  flex justify-between  "
      >
        {isOpen ? 'Hide the oder' : 'Show the oder'}
        <span className="font-bold">0.00</span>
      </div>
      {isOpen && (
        <div className="">
          <textarea 
            className="w-full h-60 border rounded p-2 bg-gray-300"
            // placeholder="Yahan type karein..."
          />
        </div>
      )}
    </div>

    <div className='w-[100%] flex justify-between  mt-4 ' >
          <span className='text-2xl font-bold'>Contact</span>
          <Link to="/Form2">
          <span className='underline text-sm cursor-pointer ' style={{}}>Log in</span>
          </Link>

          </div>

          <span  >

<input type='text' placeholder='Email' className='mt-4 w-[100%] h-14 px-3  rounded border border-gray' />   
 </span>

 <div className='mt-3 gap-2 ml-1  flex'>
<span >
    <input type="checkbox"  className='w-5 h-5 text-black bg-black '/>
    </span>
<span className=' '>
Email me with news and offers
</span>
</div>

<div className='mt-4 w-[100%] h-30 px-3  rounded border border-gray bg-gray-100'>
<p className='font-bold text-lg mt-2 ml-4'>
International Website
</p>
<p className='text-sm mt-2 ml-4'>
To deliver products outside of Pakistan visit our International Website:
</p>
<p className='text-sm mt-2 ml-4'>

https://baroque.com.pk
</p>
</div>

<div className='mt-3'>
<span className='text-2xl font-bold mt-6'>Delivery</span>
</div>

<div className='mt-3 w-[100%] h-14 px-3  rounded border border-gray'>
<span className='text-xs'>Country/Region</span>

<Dropdown >
  <DropdownToggle  className='  text-sm '   variant="white">
pakistan
  </DropdownToggle>

<DropdownMenu className=''>

<DropdownItem className='text-xs'>sjvhdjcsjdhv</DropdownItem>

</DropdownMenu>

</Dropdown>
</div >

{/* <span className='mt- flex gap-2 '> */}
<input type="text" placeholder='Name'className='mt-4 w-[100%] h-14 px-3  rounded border border-gray' />

<input type="text" placeholder='LastName' className='mt-4 w-[100%] h-14 px-3  rounded border border-gray'/>


<input type='text' placeholder='Address' className='mt-4 w-[100%] h-14 px-3  rounded border border-gray' />

<input type='text' placeholder='Aparment,suite ,etc' className='mt-4 w-[100%] h-14 px-3  rounded border border-gray' />   

{/* <span className='mt- flex gap-2 '> */}
<input type="text" placeholder='City'className='mt-4 w-[100%] h-14 px-3  rounded border border-gray' />
<input type="text" placeholder='Postal code (optional)' className='mt-4 w-[100%] h-14 px-3  rounded border border-gray'/>
{/* </span> */}

<input type='tel' placeholder='Phone' className='mt-4 w-[100%] h-14 px-3  rounded border border-gray' />

<div className='mt-3 gap-2  flex'>
<span >
    <input type="checkbox"  className='w-5 h-5 text-black bg-black ml-1 '/>
    </span>
<span className=' '>
save the information for next time
</span>
</div>

<span className='text-1xl font-bold mt-8'>Select your city</span>

<div className='mt-3 w-[100%] text-end h-14 px-3  rounded border border-gray'>

<div className="relative inline-block">
      <select
        value={selectedOption}
        onChange={handleChange}
        className="bg-white text-black  rounded p-2 outline-none w-96  mt-2" 
      >
        <option value="" disabled></option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
    </div>

</div>

<div className='mt-3'>
<span className='text-1xl font-bold '>Shipping method</span>
</div>
<div className='w-[100%] flex justify-between h-14 px-2  rounded border border-gray mt-3 ' >
          <span className='text-md mt-3'>Local Delivery</span>
          <span className=' font-bold mt-3' style={{}}>FREE</span>

          </div>


          <div className='mt-4'>
    <span className='text-1xl font-bold'>Payment</span>

          </div>
          
<p className='text-sm text-gray-400 mt-2'>All transactions are secure and encrypted.</p>

<div className='h-24 mt-2 border border-gray-200'>
<div className='ml-3 mt-2 gap-2 flex'>
<input type="radio" name="options" />

Cash on Delivery (COD)

</div>
<hr className='mt-3'/>
<div className='mt-2 ml-3 gap-2 flex'>

<input type="radio" name="options" />

Safepay Checkout - pay with debit & credit cards
</div>

</div>



<div className='text-1xl font-bold mt-4'>
<span >Billing address</span>

</div>

<div className='h-24 mt-2 border border-gray-200'>
<div className='ml-3 mt-2 gap-2 flex' >
<input type="radio" name="options" />

Same as shipping address
</div>
<hr className='mt-3'/>
<div className='mt-2 ml-3 gap-2 flex'>

<input type="radio" name="options" />

Use a different billing address
</div>

</div>

<div className='w-[100%] h-16 rounded text-2xl text-white bg-black text-center font-bold mt-5 p-3 '>
<span className='mt-2 cursor-pointer ' onClick={Show}>
Complete order
</span>
</div>

<div className='h-16'>

</div>



</div>

    </Col>
  </Row>
</Container>



    </>
  )
}

export default Form1
