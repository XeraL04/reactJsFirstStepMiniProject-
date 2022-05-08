import React from "react";
import Axios from "axios";
import{useState} from "react"
const ImeiList = () => {
    
    const [imei, setImei] = useState([])

    const getImei =() => {

        Axios.get("http://localhost:5000/getImei")
        .then (response =>{
                console.log(response.data);
                setImei(response.data);
            }).catch(error=>{
                console.log(error);
            })
    }

    return ( 
        <div>
            <h1>now we are in the imei page</h1>
            <button onClick={getImei}>get the imei list</button>
            <div>
                <h3>
                {imei.map((item,index)=> <p key={index}> {item.name} </p>)}
                </h3>
                
            </div>
            {/* <div>
            {
                    imei.map((item,index)=> 
                    <p key={index}> {item.imeiList} </p>)
                }
            </div> */}
        </div>
     );
}
 
export default ImeiList;