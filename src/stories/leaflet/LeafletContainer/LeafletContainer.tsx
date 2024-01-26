import styles from './LeafletContainer.module.scss';
import { MapContainer, TileLayer } from 'react-leaflet';
import useGeoLocation from 'common/hooks/useGeoLocation';
import useUserDefaultLocation from 'common/hooks/useUserDefaultLocation';

interface LeafletContainerProps {
  children: React.ReactNode;
}

export const LeafletContainer: React.FC<LeafletContainerProps> = ({ children }) => {
  const { position } = useGeoLocation();
  const { userLocation } = useUserDefaultLocation(position);

  return (
    <MapContainer className={styles.leaflet} zoom={userLocation.zoom} center={userLocation}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      {children}
    </MapContainer>
  );
};
