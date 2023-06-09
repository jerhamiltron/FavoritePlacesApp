import { MAPS_API_KEY } from '@env';

export const getMapPreview = (lat, long) => {
  const url = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${long}&zoom=14&size=400x300&maptype=roadmap&markers=color:red%7Clabel:S%7C${lat},${long}&key=${MAPS_API_KEY}`;
  return url;
};
