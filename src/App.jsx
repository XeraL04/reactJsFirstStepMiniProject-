import Navbar from '../Components/Navbar'
import Home from '../Components/Home'
import CollectionList from '../Components/CollectionList'
import ImeiList from '../Components/ImeiList'
import VehicleList from '../Components/VehicleList'
import ErrorPage from '../Components/ErrorPage'
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import './App.css'

function App() {

  return (

  <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/imeiList" element={<ImeiList/>}/>
        <Route path="/collections" element={<CollectionList/>}/>
        <Route path="/vehicleList" element={<VehicleList/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
  </Router>
)
}

export default App
