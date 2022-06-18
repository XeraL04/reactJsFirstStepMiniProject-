import React,{useState,useEffect} from 'react'
import Axios from 'axios'

import Footer from '../Components/footer/Footer'

import Navbar from '../Components/navbar/Navbar'
import Home from '../Components/home/Home'

import CollectionList from '../Components/collection/CollectionList'
import ImeiList from '../Components/imei/ImeiList'
import VehicleList from '../Components/vehicle/VehicleList'
import Documents from '../Components/Docs/Documents'

import ErrorPage from '../Components/ErrorPage'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'

function App() {

  // collection
  const [collection, setCollection] = useState([])
  const [query, setQuery] = useState("");
  
  // imei
  const [imei, setImei] = useState([]);
  // const [query, setQuery] = useState("");
  
  // vehicle
  const [vehicle, setVehicle] = useState([]);
  const [queryVehicle, setQueryVehicle] = useState("");

// use eff imei
    useEffect(() =>{
      const fetchDataImei = async ()=>{
          const res = await Axios.get(`http://localhost:5000/getImei?q=${query}`)
          setImei(res.data)
      };
      if(query.length === 0 || query.length > 2) fetchDataImei()
    },[query])


// use eff collection
    useEffect(() => {
      const fetchData = async ()=>{
        const res = await Axios.get(`http://localhost:5000/collection?q=${query}`)
        setCollection(res.data);

      };
      if(query.length === 0 || query.length > 2)fetchData()
    },[query])
    
// use eff vehicle
    useEffect(() => {
      const fetchDataVehicle = async ()=>{
        const res = await Axios.get(`http://localhost:5000/vehicleList?q=${query}`)
        setVehicle(res.data);

      };
      if(query.length === 0 || query.length > 2)fetchDataVehicle()
  
    
    },[query])

  return (
<div className="page-container">
  <div className="content-wrap">
    <Router>
      <Navbar/>
        <Routes>

          <Route path="/" element={<Home/>}/>
          
          <Route path="/collection" element={<CollectionList collection={collection} query={query} setQuery={setQuery}/>}/>         
          
          <Route path="/imeiList" element={<ImeiList  imei={imei} query={query} setQuery={setQuery}/>}/>

          <Route path="/vehicleList" element={<VehicleList vehicle={vehicle} queryVehicle={queryVehicle} setQueryVehicle={setQueryVehicle}/>}/>
          
          <Route path="/collection/:nameCollection" element={<Documents/>}/>
                                
          <Route path="*" element={<ErrorPage/>}/>

        </Routes>
    </Router>
  </div>
    <Footer/>
</div>
)
}

export default App
