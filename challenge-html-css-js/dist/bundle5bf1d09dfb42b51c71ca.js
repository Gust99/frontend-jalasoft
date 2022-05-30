(()=>{"use strict";var e={835:(e,n,a)=>{a.d(n,{Z:()=>p});var t=a(81),o=a.n(t),c=a(645),i=a.n(c)()(o());i.push([e.id,".single-container {\n  width: auto;\n  height: auto;\n  border-radius: 25px;\n  display: flex;\n  flex-flow: column wrap;\n  justify-content: center;\n  align-items: center;\n  padding: 10px;\n  margin: 10px;\n  font-weight: 800;\n  color: white;\n}\n.single-container:hover {\n  cursor: pointer;\n}\n.modal {\n  position: fixed;\n  width: 100vw;\n  height: 100vh;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.3s ease;\n  top: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal .name {\n  text-align: center;\n  font-weight: bolder;\n  font-size: large;\n}\n.modal .abilities p,\n.modal .stats p {\n  font-weight: bolder;\n}\n.modal.open {\n  visibility: visible;\n  opacity: 1;\n  transition-delay: 0s;\n}\n.modal-bg {\n  position: absolute;\n  background: rgba(0, 0, 0, 0.3);\n  width: 100%;\n  height: 100%;\n}\n.modal-container {\n  border-radius: 10px;\n  background: white;\n  position: relative;\n  padding: 30px;\n}\n.modal-close {\n  position: absolute;\n  right: 15px;\n  top: 15px;\n  outline: none;\n  appearance: none;\n  color: red;\n  background: none;\n  border: 0px;\n  font-weight: bold;\n  cursor: pointer;\n}\n",""]);const p=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var a="",t=void 0!==n[5];return n[4]&&(a+="@supports (".concat(n[4],") {")),n[2]&&(a+="@media ".concat(n[2]," {")),t&&(a+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),a+=e(n),t&&(a+="}"),n[2]&&(a+="}"),n[4]&&(a+="}"),a})).join("")},n.i=function(e,a,t,o,c){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(t)for(var p=0;p<this.length;p++){var r=this[p][0];null!=r&&(i[r]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);t&&i[s[0]]||(void 0!==c&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=c),a&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=a):s[2]=a),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),n.push(s))}},n}},81:e=>{e.exports=function(e){return e[1]}}},n={};function a(t){var o=n[t];if(void 0!==o)return o.exports;var c=n[t]={id:t,exports:{}};return e[t](c,c.exports,a),c.exports}a.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return a.d(n,{a:n}),n},a.d=(e,n)=>{for(var t in n)a.o(n,t)&&!a.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},a.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{const e={1:"#4ca04c",2:"#4ca04c",3:"#4ca04c",4:"#de3a3a",5:"#de3a3a",6:"#de3a3a",7:"#3e3ec0",8:"#3e3ec0",9:"#3e3ec0",10:"#4ca04c",11:"#4ca04c",12:"#fbf6f6",13:"#7c5151",14:"#f0f060e6",15:"#f0f060e6",16:"#7c5151",17:"#7c5151",18:"#7c5151",19:"#523352",20:"#7c5151",21:"#7c5151",22:"#7c5151",23:"#523352",24:"#523352",25:"#f0f060e6",26:"#f0f060e6",27:"#f0f060e6",28:"#f0f060e6",29:"#3e3ec0",30:"#3e3ec0",31:"#3e3ec0",32:"#523352",33:"#523352",34:"#523352",35:"#ffb6c3",36:"#ffb6c3",37:"#7c5151",38:"#f0f060e6",39:"#ffb6c3",40:"#ffb6c3",41:"#523352",42:"#523352",43:"#3e3ec0",44:"#3e3ec0",45:"#de3a3a",46:"#de3a3a",47:"#de3a3a",48:"#523352",49:"#523352",50:"#7c5151",51:"#7c5151",52:"#f0f060e6",53:"#f0f060e6",54:"#f0f060e6",55:"#3e3ec0",56:"#7c5151",57:"#7c5151",58:"#7c5151",59:"#7c5151",60:"#3e3ec0",61:"#3e3ec0",62:"#3e3ec0",63:"#7c5151",64:"#7c5151",65:"#7c5151",66:"gray",67:"gray",68:"gray",69:"#4ca04c",70:"#4ca04c",71:"#4ca04c",72:"#3e3ec0",73:"#3e3ec0",74:"#7c5151",75:"#7c5151",76:"#7c5151",77:"#f0f060e6",78:"#f0f060e6",79:"#ffb6c3",80:"#ffb6c3",81:"gray",82:"gray",83:"#7c5151",84:"#7c5151",85:"#7c5151",86:"#fbf6f6",87:"#fbf6f6",88:"#523352",89:"#523352",90:"#523352",91:"#523352",92:"#523352",93:"#523352",94:"#523352",95:"gray",96:"#f0f060e6",97:"#f0f060e6",98:"#de3a3a",99:"#de3a3a",100:"#de3a3a",101:"#de3a3a",102:"#ffb6c3",103:"#f0f060e6",104:"#7c5151",105:"#7c5151",106:"#7c5151",107:"#7c5151",108:"#ffb6c3",109:"#523352",110:"#523352",111:"gray",112:"gray",113:"#ffb6c3",114:"#3e3ec0",115:"#7c5151",116:"#3e3ec0",117:"#3e3ec0",118:"#de3a3a",119:"#de3a3a",120:"#7c5151",121:"#523352",122:"#ffb6c3",123:"#4ca04c",124:"#de3a3a",125:"#f0f060e6",126:"#de3a3a",127:"#7c5151",128:"#7c5151",129:"#de3a3a",130:"#3e3ec0",131:"#3e3ec0",132:"#523352",133:"#7c5151",134:"#3e3ec0",135:"#f0f060e6",136:"#de3a3a",137:"#ffb6c3",138:"#3e3ec0",139:"#3e3ec0",140:"#7c5151",141:"#7c5151",142:"#523352",143:"black",144:"#3e3ec0",145:"#f0f060e6",146:"#f0f060e6",147:"#3e3ec0",148:"#3e3ec0",149:"#7c5151",150:"#523352",151:"#ffb6c3"};var n=a(835);class t extends HTMLElement{constructor(e,a,t,o){super();let c=this.attachShadow({mode:"open"}),i=document.getElementById("PokemonCardTemplate").content.cloneNode(!0),p=document.createElement("style");p.textContent=n.Z,c.appendChild(p),i.querySelector(".single-container > img").setAttribute("src",e),i.querySelector(".single-container > .name").innerText=a,i.querySelector(".single-container").style.backgroundColor=t,i.querySelector(".modal .name").innerText=a,i.querySelector(".modal .abilities").innerHTML=o.abilitiesHTML,i.querySelector(".modal .stats").innerHTML=o.statsHTML,i.querySelector(".single-container").addEventListener("click",(e=>this.openModal(e))),c.appendChild(i)}openModal(e){e.preventDefault();const n=e.path.find((e=>"single-container"===e.classList[0])).nextElementSibling;n.classList.add("open"),n.querySelectorAll(".modal-exit").forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault(),n.classList.remove("open")}))}))}}customElements.define("pokemon-card",t);const o=document.querySelector(".all-container");[{name:"bulbasaur",url:"https://pokeapi.co/api/v2/pokemon/1/"},{name:"ivysaur",url:"https://pokeapi.co/api/v2/pokemon/2/"},{name:"venusaur",url:"https://pokeapi.co/api/v2/pokemon/3/"},{name:"charmander",url:"https://pokeapi.co/api/v2/pokemon/4/"},{name:"charmeleon",url:"https://pokeapi.co/api/v2/pokemon/5/"},{name:"charizard",url:"https://pokeapi.co/api/v2/pokemon/6/"},{name:"squirtle",url:"https://pokeapi.co/api/v2/pokemon/7/"},{name:"wartortle",url:"https://pokeapi.co/api/v2/pokemon/8/"},{name:"blastoise",url:"https://pokeapi.co/api/v2/pokemon/9/"},{name:"caterpie",url:"https://pokeapi.co/api/v2/pokemon/10/"},{name:"metapod",url:"https://pokeapi.co/api/v2/pokemon/11/"},{name:"butterfree",url:"https://pokeapi.co/api/v2/pokemon/12/"},{name:"weedle",url:"https://pokeapi.co/api/v2/pokemon/13/"},{name:"kakuna",url:"https://pokeapi.co/api/v2/pokemon/14/"},{name:"beedrill",url:"https://pokeapi.co/api/v2/pokemon/15/"},{name:"pidgey",url:"https://pokeapi.co/api/v2/pokemon/16/"},{name:"pidgeotto",url:"https://pokeapi.co/api/v2/pokemon/17/"},{name:"pidgeot",url:"https://pokeapi.co/api/v2/pokemon/18/"},{name:"rattata",url:"https://pokeapi.co/api/v2/pokemon/19/"},{name:"raticate",url:"https://pokeapi.co/api/v2/pokemon/20/"},{name:"spearow",url:"https://pokeapi.co/api/v2/pokemon/21/"},{name:"fearow",url:"https://pokeapi.co/api/v2/pokemon/22/"},{name:"ekans",url:"https://pokeapi.co/api/v2/pokemon/23/"},{name:"arbok",url:"https://pokeapi.co/api/v2/pokemon/24/"},{name:"pikachu",url:"https://pokeapi.co/api/v2/pokemon/25/"}].forEach((async function(n,a){let c=await async function(e){return await fetch(e).then((e=>e.json()))}(n.url);console.log(c);let i=function(e){let n="<p>Abilities</p>";return n+="<ul>",e.forEach((e=>{n+=`<li class='ability'>${e.ability.name}</li>`})),n+="</ul>",console.lo(),n}(c.abilities),p=function(e){let n="<p>Stats</p>";return n+="<ul>",e.forEach((e=>{n+=`<li class='ability'><strong>${e.stat.name}:</strong> ${e.base_stat}</li>`})),n+="</ul>",n}(c.stats),r=new t(`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${("00"+(a+1)).slice(-3)}.png`,n.name,e[a+1],{abilitiesHTML:i,statsHTML:p});o.appendChild(r)}))})()})();