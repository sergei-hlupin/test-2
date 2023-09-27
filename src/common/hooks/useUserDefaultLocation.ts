import { useEffect, useState } from 'react';

interface Coordinates {
  lat: number;
  lng: number;
}

function useUserDefaultLocation(postion?: GeolocationCoordinates) {
  const [userLocation, setUserLocation] = useState<Coordinates & { zoom: number }>({
    lat: postion?.latitude ?? 54.92850150169577,
    lng: postion?.longitude ?? -36.96348841245958,
    zoom: 13,
  });

  useEffect(() => {
    if (postion) {
      setUserLocation({ lat: postion.latitude, lng: postion.longitude, zoom: 13 });
    }
  }, [postion]);

  return {
    userLocation,
  };
}

export default useUserDefaultLocation;
