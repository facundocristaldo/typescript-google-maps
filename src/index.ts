import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from "./CustomMap";

const user = new User();
const company = new Company();
console.log(user)
console.log(company)

const mapcontainer = document.querySelector("#map")
const map = new CustomMap(mapcontainer,{zoom:1,center:{lat:0,lng:0}})
map.addMarker(user)
map.addMarker(company)