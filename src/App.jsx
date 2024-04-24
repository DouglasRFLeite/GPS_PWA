import { useEffect, useState } from "react";
import "./App.css";
import CurrentLocationMap from "./components/CurrentLocationMap";

function App() {
  const [position, setPosition] = useState({lat: 0, lng: 0});

  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(
      (pos)=>{
        setPosition({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude
        })
      },
      (err) => console.log(err)
    );
  }, [])

  return (
    <>
      <CurrentLocationMap
        position={position}
      />
    </>
  );
}

export default App;
