import React, { useEffect, useState } from 'react'
import "./App.css"
const App = () => {
const data={name:"",email:"",password:"",phone:"",address:""}

const [inputData,setinputData]=useState(data);

const [flag,setflag]=useState(false);
useEffect(()=>{
console.log("registered")
},[flag])

function handleData(e){

  setinputData({...inputData,[e.target.name]:e.target.value})
 console.log(inputData)
}

function handleSubmit(e){
  e.preventDefault();
if(!inputData.name || !inputData.email ||  !inputData.password || !inputData.phone || !inputData.address ){

alert("please enter all fill are meditory")

   }else{
    setflag(true)
   }
}
return (
  <>
  <pre>{(flag)?<h2 className='ui-define'>hello {inputData.name},
   you are register sucssefully</h2>:""}</pre>

<form className='main_container' onSubmit={handleSubmit}>
<div className='box'> 
<p style={{color:"white", fontSize:"40px"}}>Register page</p>
</div>

<div>
<p style={{color:"white" , fontFamily:"poppins "}}>name</p>
<input className='name' type='text' placeholder='Enter your name'
 name='name' value={inputData.name} onChange={handleData}></input>
</div>
 
<div>
<p style={{color:"white"}}>email</p>
  <input className='email' type='text' placeholder='Enter your email'
   name='email' value={inputData.email} onChange={handleData}></input>
</div>

<div>
<p style={{color:"white"}}>Password</p>
  <input className='password' type='text' placeholder='Enter your password' 
  name='password' value={inputData.password} onChange={handleData}></input>
</div>

<div>
<p style={{color:"white"}}>phone</p>
  <input className='phone' type='text' placeholder=' Enter your phon' name='phone'
   value={inputData.phone} onChange={handleData}></input>
</div>

<div>
<p style={{color:"white"}}>Address</p>
  <input className='Address' type='text' placeholder='Enter your Address' name='address'
   value={inputData.address} onChange={handleData}></input>
</div>

<button className='button' onSubmit={handleSubmit}>submit</button>
    </form>
    </>
  )
}

export default App;
