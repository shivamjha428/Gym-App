import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import './signup.css'
import './login'
const Signup = () => {
    const Navigate=useNavigate();
    const [data, setData] = useState({});
 
//mongodb://127.0.0.1:27017/

    const Senddata = () => {
        console.log(data);
      const Navigate = useNavigate;
        axios({
          url: "  http://localhost:5007/signup",
          method: "POST",
          headers: {
  
          },
          data: {name: data.name, mobile: data.mobile,Address:data.Address,Age:data.Age,username:data.username,password:data.password,userType:data.userType}
      }).then((res) => {
        res.send(  alert(`${data.username} added successfully`));
          Navigate("/p0");       
      }).catch((err) => {
        alert("user Already present")
          console.log(err)
      })
    }
   
  return (
    <div>
      <div className='signup_container'>
      <div className='signup'>
        <div className='sign'>
        <h1 className='h1logo'>Logo</h1> <br/>
        <p className='acc'>Create New Account</p>
        
 <input className='input1' type="name" name='name' placeholder='Enter your name'  onChange={(e)=>{setData({...data,name:e.target.value})}}/> <br/>

 <input className='input1' type='Number' name='mobile' placeholder='Enter your Mobile' onChange={(e)=>{setData({...data,mobile:e.target.value})}}/> <br/>

 <input className='input1' type='address' name='Address' placeholder='Enter your Address'  onChange={(e)=>{setData({...data,Address:e.target.value})}}/>
 
 <input className='input1' type='Number' name='Age' placeholder='Enter your Age'  onChange={(e)=>{setData({...data,Age:e.target.value})}}/>
 
 <input className='input1' type='username' name='username' placeholder='username'  onChange={(e)=>{setData({...data,username:e.target.value})}}/>
 
 <input className='input1' type='password' name='password' placeholder='Enter password'  onChange={(e)=>{setData({...data,password:e.target.value})}}/>
 <div className='input2'>
    <label>Trainer:</label>
    <input type="radio" name='userType' value="Trainer" onChange={(e)=>{setData({...data,userType:e.target.value})}}/>
    <label>Joiner:</label>
    <input type="radio" name='userType' value="Joiner" onChange={(e)=>{setData({...data,userType:e.target.value})}}/>
    </div>
        <button onClick={Senddata} className="button1">Sign Up</button> <br/>
        
        </div>
    
        </div>
        <p className='signinfooter' onClick={() => { Navigate("/") }}>Sign in</p>
    </div>
    
    
    </div>
  )
}

export default Signup;