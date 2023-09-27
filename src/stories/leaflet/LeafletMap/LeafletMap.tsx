import { Marker, useMap, Popup } from 'react-leaflet';
import useGeoLocation from 'common/hooks/useGeoLocation';
import useUserDefaultLocation from 'common/hooks/useUserDefaultLocation';
import { useEffect } from 'react';
import L from 'leaflet';
import styles from './LeafletMap.module.scss';
import icon_cart from '../../../common/images/icon_cart.png';

interface IShop {
  id: number;
  name: string;
  location: number[];
  streetAddress: string;
  inOpen: boolean;
  inNear: boolean;
  description: string;
}

interface IShops {
  shops: IShop[];
}

export const LeafletMap: React.FC<IShops> = ({ shops }) => {
  const { position } = useGeoLocation();
  const { userLocation } = useUserDefaultLocation(position);

  const map = useMap();

  useEffect(() => {
    map.setView(userLocation);
  }, [map, userLocation]);

  return (
    <div>
      {shops.map((shop) => {
        const icon = L.icon({
          iconUrl: icon_cart,
          iconSize: [30, 30],
          iconAnchor: [25, 25],
          className: styles.marker,
        });

        return (
          <Marker key={shop.id} icon={icon} position={{ lat: shop.location[0], lng: shop.location[1] }}>
            <Popup>
              <div>
                Name: <h4>{shop.name}</h4>
              </div>
              <p>{shop.description}</p>
            </Popup>
          </Marker>
        );
      })}
    </div>
  );
};
