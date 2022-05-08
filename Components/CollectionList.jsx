import React from "react";
import Axios from "axios";
import {useState} from "react"

const CollectionList = () => {

    const [collection, setCollection] = useState([])

    const getCollectionList =() =>{
        Axios.get("http://localhost:5000/collection")
            .then (response => {
                console.log(response);
                setCollection(response.data);
            }).catch(err => {
                console.log(err);
            })
    }

    return ( 
        <div className="collection-list">
            <h2>we are in the collection list page</h2>
            <button onClick={getCollectionList}>Show The List</button>
            <div>
                <h3>{collection.map((item,index)=> <p key={index}> {item.name} </p>)}</h3>
                
            </div>
        </div>
     );
}
 
export default CollectionList;