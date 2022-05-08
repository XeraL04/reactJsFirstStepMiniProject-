import React from "react";
import Axios from "axios";
import{useState} from "react"

const VehicleList = () => {
    const [vehicle, setVehicle] = useState([])

    const getVehicleList =() => {

        Axios.get("http://localhost:5000/vehicleList")
        .then (response =>{
                console.log(response.data);
                setVehicle(response.data);
            }).catch(error=>{
                console.log(error);
            })
    }

    return ( 
        <div className="vehicle-list">
            <h2>we are in the vehicle list page</h2>
            <button onClick={getVehicleList}>get the imei list</button>
            <div>
                <h3>
                {vehicle.map((item,index)=> <p key={index}> {item.vehicleList} </p>)}
                </h3>
                
            </div>
        </div>
     );
}
 
export default VehicleList;