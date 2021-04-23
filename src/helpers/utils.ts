import { Latlng } from "../interfaces/Latlng";
import faker from "faker";

export const getRandomCoordinate=():Latlng=>{
  let lat=undefined;
  let lng= undefined;
  do {
    lat = parseFloat(faker.address.latitude());
  } while ( lat ===undefined || lat < -85 || lat > 85);
  do {
    lng = parseFloat(faker.address.longitude());
  } while ( lng === undefined || lng < -180 || lng > 180);
  
  return {
    lat,
    lng
  }
}


// var strictBounds = new google.maps.LatLngBounds(
//   new google.maps.LatLng(85, -180),           // top left corner of map
//   new google.maps.LatLng(-85, 180)            // bottom right corner
// );