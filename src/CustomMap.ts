import { Latlng } from "./interfaces/Latlng";
import { Markable } from "./interfaces/Markable";
import { NewMapOts } from "./interfaces/NewMapOts";





export class CustomMap {
  private googleMap: google.maps.Map;
  private markers: google.maps.Marker[] = [];
  constructor(container: Element, opts?: NewMapOts) {
    this.googleMap = new google.maps.Map(container, {
      zoom: opts.zoom || 1,
      center: {
        lat: opts.center.lat || 0,
        lng: opts.center.lng || 0
      }
    });
  }
  addMarker(opts: Markable): void {
    this.markers.push(
      new google.maps.Marker({
        map: this.googleMap,
        label: opts.name,
        position: {
          lat: opts.location.lat,
          lng: opts.location.lng
        }
      })
    );
    console.log(this.markers)
  }
}
