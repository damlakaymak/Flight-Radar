import { useEffect, useState } from "react"
import Header from "./components/Header"
import MapView from "./pages/MapView"
import ListView from "./pages/ListView"
import { useDispatch } from "react-redux"
import { getFlights } from "./redux/actions"
import Modal from "./components/Modal"




const App = () => {
const [IsMapView, setIsMapView] = useState(true)
const [detailId,setDetailId] = useState(null)





const dispatch = useDispatch();

dispatch(getFlights())

useEffect(() =>{

 const intervalId = setInterval(()=>{
    dispatch(getFlights())

  },50000)

  return () => clearInterval(intervalId);
},[])

console.log(detailId)

  return (
    <div>
 <Header/>
 <div className="view-buttons">
<button className={IsMapView ? "active" : ""} onClick={()=>setIsMapView(true)}>Harita Görünümü</button>
<button  className={IsMapView ? "" : "active"} onClick={() => setIsMapView(false)}> Liste Görünümü</button>


 </div>

 {IsMapView ? <MapView setDetailId={setDetailId}/> : <ListView  setDetailId={setDetailId}/>}

 {detailId && <Modal  detailId={detailId}   close={()=> setDetailId(null)}  />}
    </div>
  )
}

export default App
