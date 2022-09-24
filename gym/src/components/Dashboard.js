import "./Dashboard.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logout from "./Logout";
const Dashboard=()=>{
    const [ab,SetAb]=useState(30);
    const [cd,SetCD]=useState(30);
    const [WL,SETWL]=useState(30);
    const Navigate = useNavigate();
    const A=()=>{
        if(ab>0){
        SetAb(ab-1);
        }else{
            alert("Slot Already Booked")
        }
    }
    const B=()=>{
        if(cd>0){
        SetCD(cd-1);
        }else{
            alert("Slot Already Booked")
        }
    }
    const C=()=>{
        if(WL>0){
        SETWL(WL-1);
        }else{
            alert("Slot Already Booked")
        }
    }
    return<>
    <div className="head">
    <div className="head1" onClick={()=>Navigate("/data")}><h1> Trainer</h1></div>
    <div className="head2" onClick={()=>Navigate("/data2")}><h1>Joiner</h1></div></div>
    <Logout/>
    <div className="head">
       <div className="a1">
        <h3>Aerobics</h3>
        <img className="card1" src="aerobics.jpeg" alt="img"/>
        <div className="card">
        <div>Timing:12:00-02:00PM</div>
        <div>Booked Slot:{30-ab}</div>
        <div>Remaining Slot:{ab}</div>
        <div>{ab===30 ? ( <button className="btn12" onClick={A} >BookSlot</button>) :<div ><h2>your slot is booked</h2></div>}</div>
        </div>
        </div> 
       <div className="a1">
        <h3>cardio</h3>
        <img className="card1" src="wp7535570.webp" alt="img"/>
        <div className="card">
        <div>Timing:02:00-04:00PM</div>
        <div>Booked Slot:{30-cd}</div>
        <div>Remaining Slot:{cd}</div>
        <div>{cd===30 ? ( <button className="btn12" onClick={B} >BookSlot</button>) :<div ><h2>your slot is booked</h2></div>}</div>
        </div>
        </div> 
       <div className="a1">
        <h3>Weight Lifting</h3>
        <img className="card1" src="D187_254_012_1200.jpg" alt="img"/>
        <div className="card">
        <div>Timing:04:00-06:00PM</div>
        <div>Booked Slot:{30-WL}</div>
        <div>Remaining Slot:{WL}</div>
        <div>{WL===30 ? ( <button className="btn12" onClick={C} >BookSlot</button>) :<div ><h2>your slot is booked</h2></div>}</div>
        </div>
        </div> 
    </div>
    </>
}
export default Dashboard;