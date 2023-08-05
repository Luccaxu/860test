(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function i(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(n){if(n.ep)return;n.ep=!0;const o=i(n);fetch(n.href,o)}})();const z={location:{latitude:48.8584,longitude:2.2945},bounds:{north:48.902145,south:48.815573,west:2.252149,east:2.469921},zoom:16,mapType:"roadmap"},E=[{tower:{num:1,name:"Eiffel Tower",position:{lat:48.8584,lng:2.2945},img:"/infoWindow/Eiffel.JPG",scaleSize:70,address:"Champ de Mars, 5 Avenue Anatole France, 75007 Paris, France"}},{church:{num:2,name:"The Basilica of the Sacred Heart of Paris",position:{lat:48.8867,lng:2.3431},img:"/infoWindow/Heart.JPG",scaleSize:55,address:"35 Rue du Chevalier de la Barre, 75018 Paris, France"}},{door:{num:3,name:"Arc de Triomphe",position:{lat:48.8738,lng:2.295},img:"/infoWindow/Arc.JPG",scaleSize:40,address:"Place Charles de Gaulle, 75008 Paris, France"}},{museum:{num:4,name:"Louvre",position:{lat:48.860611,lng:2.337644},img:"/infoWindow/Louvre.JPG",scaleSize:40,address:"Rue de Rivoli, 75001 Paris, France"}}],B=["restaurant","lodging","shopping_mall","tourist_attraction","hospital"],r={map:z,landmark:E,filterType:B},b="AIzaSyCTxva61j1ywo7lP-8fBeEHPCjOu_OuDf8",w=document.createElement("script");w.src=`https://maps.googleapis.com/maps/api/js?key=${b}&callback=initAutocomplete&libraries=maps,marker,places&v=weekly`;w.defer=!0;document.head.appendChild(w);let a,h,y,p="";const C=document.getElementById("filter"),I=document.getElementById("filterBtn"),g=document.getElementById("filterList"),T=document.querySelectorAll(".filterItem"),M=[...T];I.addEventListener("click",t=>{t.preventDefault(),g.parentNode?v():x()});function v(){g.parentNode&&g.parentNode.removeChild(g)}v();function x(){C.appendChild(g)}let P=null,u=[];M.forEach(t=>{t.addEventListener("click",()=>{p=t.childNodes[3].textContent.toLowerCase().trim(),p===P?(L(null),u=[]):(P=p,$(p))})});function A(){a=new google.maps.Map(document.getElementById("map"),{center:{lat:r.map.location.latitude,lng:r.map.location.longitude},restriction:{latLngBounds:r.map.bounds,strictBounds:!1},zoom:r.map.zoom,mapTypeId:r.map.mapType,mapTypeControl:!1,streetViewControl:!1,fullscreenControl:!1}),O();const t=document.getElementById("searchBar"),e=new google.maps.places.SearchBox(t);a.controls[google.maps.ControlPosition.TOP_CENTER].push(t),a.addListener("bounds_changed",()=>{e.setBounds(a.getBounds())});let i=[];e.addListener("places_changed",()=>{const s=e.getPlaces();if(s.length==0){console.log("Sorry this place missed, please give another try.");return}i.forEach(o=>{o.setMap(null)}),i=[];const n=new google.maps.LatLngBounds;s.forEach(o=>{if(!o.geometry||!o.geometry.location){console.log("Returned place contains no geometry");return}const l={url:"/star.png",size:new google.maps.Size(71,71),origin:new google.maps.Point(0,0),anchor:new google.maps.Point(17,34),scaledSize:new google.maps.Size(32,32)};i.push(new google.maps.Marker({map:a,icon:l,title:o.name,position:o.geometry.location})),o.geometry.viewport?n.union(o.geometry.viewport):n.extend(o.geometry.location),h=o.geometry.location.lat(),y=o.geometry.location.lng()}),a.fitBounds(n)})}window.initAutocomplete=A;const d=document.getElementById("searchBar");d.addEventListener("input",()=>{d.value.length>0?d.style.borderRadius="24px 24px 0 0":d.style.borderRadius="24px"});d.addEventListener("blur",()=>{d.style.borderRadius="24px"});function O(){r.landmark.forEach(t=>{let e=Object.keys(t)[0],i=t[e].position,s=t[e].name,n=t[e].img,o=t[e].address,l=t[e].scaleSize,S=t[e].num;const k={url:`/${e}.png`,size:new google.maps.Size(72,72),origin:new google.maps.Point(0,0),anchor:new google.maps.Point(20,40),scaledSize:new google.maps.Size(48,l)},m=new google.maps.Marker({position:i,map:a,icon:k,title:s});m.setMap(a);const f=new google.maps.InfoWindow;m.addListener("mouseover",()=>{const c=`<div id="infoContent"><div id="siteNotice"></div><img src=${n} class="infoImg"/></div><h1 id="infoHeading" class="infoHeading">${s}</h1><span id="infoDes" class="infoDes">${o}</span>`;f.setContent(c),f.open(a,m)}),m.addListener("mouseout",()=>{f.close()}),m.addListener("click",()=>{let c=["towerPart","musuemPart","sacrePart","arcdePart"];switch(S){case 1:window.location.href=`./intro.html#${c[0]}`;break;case 2:window.location.href=`./intro.html#${c[2]}`;break;case 3:window.location.href=`./intro.html#${c[3]}`;break;case 4:window.location.href=`./intro.html#${c[1]}`;break}})})}function $(t){console.log("filter type",t);let e,i;h&&y?(e=new google.maps.LatLng(h,y),i=3e3):(e=new google.maps.LatLng(r.map.location.latitude,r.map.location.longitude),i=1e4);const s={location:e,radius:i,type:[`${t}`]};new google.maps.places.PlacesService(a).nearbySearch(s,N)}function N(t,e){if(e==google.maps.places.PlacesServiceStatus.OK){for(const i of t)R(i);console.log("nearbyResults",t)}}function R(t){const e={url:`/${p}.png`,size:new google.maps.Size(70,85),origin:new google.maps.Point(0,0),anchor:new google.maps.Point(20,40),scaledSize:new google.maps.Size(40,50)},i=new google.maps.Marker({position:t.geometry.location,map:a,icon:e});u.push(i),L(a)}function L(t){for(let e=0;e<u.length;e++)u[e].setMap(t)}
//# sourceMappingURL=index-35bdf15e.js.map
