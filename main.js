async function getPost(){
const data=await fetch(`https://jsonplaceholder.typicode.com/users`);
const display=await data.json();
const print=display.map(function(ele){
return`
<div class=pri>
   <h2>${ele.id}</h2>
   <h2>${ele.name}</h2>
   <h2 class="h2">${ele.username}</h2>
   <p>E-mail: ${ele.email}</p>
   <p>Address Street: ${ele.address.street}</p>
   <p>Address City: ${ele.address.city}</p>
   <p>Address Zipcode: ${ele.address.zipcode}</p>
   <p>Address Geo_lng: ${ele.address.geo.lng}</p>
   <p>Address Geo_lat: ${ele.address.geo.lat}</p>
   <p>Phone: ${ele.phone}</p>
   <p>Company Name: ${ele.company.name}</p>
   <p>Company CatchPhrase: ${ele.company.catchPhrase}</p>
   <p>Company BS: ${ele.company.bs}</p>

</div>`
}).join('');
document.querySelector('.print').innerHTML=print;
}
getPost();
