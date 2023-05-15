import * as Location from "expo-location"
import {useState,useEffect} from "react"
export default useLocation = ()=>{
    const [Locati, setLocati] = useState();
    const getLocation = async ()=>{
        try {
            const {granted} = await Location.requestPermissionsAsync()
            if(!granted) return;
            const{coords: {latitude,longitude}} = await Location.getCurrentPositionAsync()
            setLocati({latitude,longitude})
        } catch (error) {
            
          console.log("ERoor")
          }
        }
  useEffect(()=>{
   getLocation()
  },[])

return Locati
}
 