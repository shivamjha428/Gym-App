import "./Dashboard.css";
import { useState } from "react";
import Logout from "./Logout";
import { useNavigate } from "react-router-dom";
const Dashboard1=()=>{
    const [ab1,SetAb1]=useState(30);
    const [cd1,SetCD1]=useState(30);
    const [WL1,SETWL1]=useState(30);
    const Navigate = useNavigate();
    const A1=()=>{
        if(ab1>0){
        SetAb1(ab1-1);
        }else{
            alert("Slot Already Booked")
        }
    }
    const B1=()=>{
        if(cd1>0){
        SetCD1(cd1-1);
        }else{
            alert("Slot Already Booked")
        }
    }
    const C1=()=>{
        if(WL1>0){
        SETWL1(WL1-1);
        }else{
            alert("Slot Already Booked")
        }
    }
    return<>
    <div className="head">
    <div className="head2" onClick={()=>Navigate("/data")}><h1> Trainer</h1></div>
    <div className="head1" onClick={()=>Navigate("/data2")}><h1>Joiner</h1></div></div>
    <Logout/>
    <div className="head">
       <div className="a1">
        <h3>Aerobics</h3>
        <img className="card1" src="aerobics.jpeg" alt="img"/>
        <div className="card">
        <div>Timing:12:00-02:00PM</div>
        <div>Booked Slot:{30-ab1}</div>
        <div>Remaining Slot:{ab1}</div>
        <div>{ab1===30 && cd1===30 && WL1===30 ? ( <button className="btn12" onClick={A1} >BookSlot</button>) :<div ><h2>your slot is booked</h2></div>}</div>
        </div>
        </div> 
       <div className="a1">
        <h3>cardio</h3>
        <img className="card1" src="wp7535570.webp" alt="img"/>
        <div className="card">
        <div>Timing:02:00-04:00PM</div>
        <div>Booked Slot:{30-cd1}</div>
        <div>Remaining Slot:{cd1}</div>
        <div>{ab1===30 && cd1===30 && WL1===30 ? ( <button className="btn12" onClick={A1} >BookSlot</button>) :<div ><h2>your slot is booked</h2></div>}</div>        </div>
        </div> 
       <div className="a1">
        <h3>Weight Lifting</h3>
        <img className="card1" src="D187_254_012_1200.jpg" alt="img"/>
        <div className="card">
        <div>Timing:04:00-06:00PM</div>
        <div>Booked Slot:{30-WL1}</div>
        <div>Remaining Slot:{WL1}</div>
        <div>{ab1===30 && cd1===30 && WL1===30 ? ( <button className="btn12" onClick={A1} >BookSlot</button>) :<div ><h2>your slot is booked</h2></div>}</div>        </div>
        </div> 
    </div>
    </>
}
export default Dashboard1;