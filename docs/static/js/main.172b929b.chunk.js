(this["webpackJsonpheroes-app"]=this["webpackJsonpheroes-app"]||[]).push([[0],{22:function(e,a,t){e.exports=t(46)},45:function(e,a,t){},46:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(20),l=t.n(c),s=t(8),o=t(3),i=t(1),m=Object(r.createContext)(),u="[auth] login",p="[auth] logout",h=function(e){var a=e.history,t=Object(r.useContext)(m),c=t.user,l=t.dispatch;return console.log(c),n.a.createElement("div",{className:"container mt-5"},n.a.createElement("h1",null,"Login"),n.a.createElement("hr",null),n.a.createElement("button",{className:"btn btn-primary",onClick:function(){var e=localStorage.getItem("lastPath")||"/";l({type:u,payload:{name:"Jovaslink"}}),a.replace(e)}},"Login"))},d=[{id:"dc-batman",superhero:"Batman",publisher:"DC Comics",alter_ego:"Bruce Wayne",first_appearance:"Detective Comics #27",characters:"Bruce Wayne"},{id:"dc-superman",superhero:"Superman",publisher:"DC Comics",alter_ego:"Kal-El",first_appearance:"Action Comics #1",characters:"Kal-El"},{id:"dc-flash",superhero:"Flash",publisher:"DC Comics",alter_ego:"Jay Garrick",first_appearance:"Flash Comics #1",characters:"Jay Garrick, Barry Allen, Wally West, Bart Allen"},{id:"dc-green",superhero:"Green Lantern",publisher:"DC Comics",alter_ego:"Alan Scott",first_appearance:"All-American Comics #16",characters:"Alan Scott, Hal Jordan, Guy Gardner, John Stewart, Kyle Raynor, Jade, Sinestro, Simon Baz"},{id:"dc-arrow",superhero:"Green Arrow",publisher:"DC Comics",alter_ego:"Oliver Queen",first_appearance:"More Fun Comics #73",characters:"Oliver Queen"},{id:"dc-wonder",superhero:"Wonder Woman",publisher:"DC Comics",alter_ego:"Princess Diana",first_appearance:"All Star Comics #8",characters:"Princess Diana"},{id:"dc-martian",superhero:"Martian Manhunter",publisher:"DC Comics",alter_ego:"J'onn J'onzz",first_appearance:"Detective Comics #225",characters:"Martian Manhunter"},{id:"dc-robin",superhero:"Robin/Nightwing",publisher:"DC Comics",alter_ego:"Dick Grayson",first_appearance:"Detective Comics #38",characters:"Dick Grayson"},{id:"dc-blue",superhero:"Blue Beetle",publisher:"DC Comics",alter_ego:"Dan Garret",first_appearance:"Mystery Men Comics #1",characters:"Dan Garret, Ted Kord, Jaime Reyes"},{id:"dc-black",superhero:"Black Canary",publisher:"DC Comics",alter_ego:"Dinah Drake",first_appearance:"Flash Comics #86",characters:"Dinah Drake, Dinah Lance"},{id:"marvel-spider",superhero:"Spider Man",publisher:"Marvel Comics",alter_ego:"Peter Parker",first_appearance:"Amazing Fantasy #15",characters:"Peter Parker"},{id:"marvel-captain",superhero:"Captain America",publisher:"Marvel Comics",alter_ego:"Steve Rogers",first_appearance:"Captain America Comics #1",characters:"Steve Rogers"},{id:"marvel-iron",superhero:"Iron Man",publisher:"Marvel Comics",alter_ego:"Tony Stark",first_appearance:"Tales of Suspense #39",characters:"Tony Stark"},{id:"marvel-thor",superhero:"Thor",publisher:"Marvel Comics",alter_ego:"Thor Odinson",first_appearance:"Journey into Myster #83",characters:"Thor Odinson"},{id:"marvel-hulk",superhero:"Hulk",publisher:"Marvel Comics",alter_ego:"Bruce Banner",first_appearance:"The Incredible Hulk #1",characters:"Bruce Banner"},{id:"marvel-wolverine",superhero:"Wolverine",publisher:"Marvel Comics",alter_ego:"James Howlett",first_appearance:"The Incredible Hulk #180",characters:"James Howlett"},{id:"marvel-daredevil",superhero:"Daredevil",publisher:"Marvel Comics",alter_ego:"Matthew Michael Murdock",first_appearance:"Daredevil #1",characters:"Matthew Michael Murdock"},{id:"marvel-hawkeye",superhero:"Hawkeye",publisher:"Marvel Comics",alter_ego:"Clinton Francis Barton",first_appearance:"Tales of Suspense #57",characters:"Clinton Francis Barton"},{id:"marvel-cyclops",superhero:"Cyclops",publisher:"Marvel Comics",alter_ego:"Scott Summers",first_appearance:"X-Men #1",characters:"Scott Summers"},{id:"marvel-silver",superhero:"Silver Surfer",publisher:"Marvel Comics",alter_ego:"Norrin Radd",first_appearance:"The Fantastic Four #48",characters:"Norrin Radd"}],v=function(e){var a=e.id,t=e.superhero,r=e.alter_ego,c=e.first_appearance,l=e.characters;return n.a.createElement("div",{className:"card animate__animated animate__pulse",style:{maxWidth:288}},n.a.createElement("img",{src:"./assets/heroes/".concat(a,".jpg"),className:"card-img-top",alt:a}),n.a.createElement("div",{className:"card-body"},n.a.createElement("h5",{className:"card-title"},t),n.a.createElement("h6",{className:"card-subtitle mb-2 text-muted"},r),n.a.createElement("p",{className:"card-text"},c),l!==r&&n.a.createElement("p",{className:"card-text"},n.a.createElement("small",{className:"text-muted"},l)),n.a.createElement(o.b,{to:"./heroe/".concat(a),className:"card-link"},"Ver mas")))},b=function(e){var a=e.publisher,t=Object(r.useMemo)((function(){return function(e){if(!["DC Comics","Marvel Comics"].includes(e))throw new Error("EL PUBLISHER ES INCORRECTO");return d.filter((function(a){return e===a.publisher}))}(a)}),[a]);return n.a.createElement("div",{className:"card-columns animate__animated animate__zoomIn"},t.map((function(e){return n.a.createElement(v,Object.assign({key:e.id},e))})))},E=function(){return n.a.createElement("div",null,n.a.createElement("h1",null,"Marvel Comics"),n.a.createElement("hr",null),n.a.createElement(b,{publisher:"Marvel Comics"}))},f=function(){return n.a.createElement("div",null,n.a.createElement("h1",null,"DC "),n.a.createElement("hr",null),n.a.createElement(b,{publisher:"DC Comics"}))},g=function(){var e=Object(r.useContext)(m),a=e.user,t=e.dispatch,c=Object(i.g)();console.log(a);return n.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-dark"},n.a.createElement(o.b,{className:"navbar-brand",to:"/"},"Asociaciones"),n.a.createElement("div",{className:"navbar-collapse"},n.a.createElement("div",{className:"navbar-nav"},n.a.createElement(o.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/marvel"},"Marvel"),n.a.createElement(o.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/dc"},"DC"),n.a.createElement(o.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/search"},"Search"))),n.a.createElement("div",{className:"navbar-collapse collapse w-100 order-3 dual-collapse2"},n.a.createElement("ul",{className:"navbar-nav ml-auto"},n.a.createElement("span",{className:"av-item nav-link text-info"},a.name),n.a.createElement("button",{className:"nav-item nav-link btn",onClick:function(){t({type:p}),c.replace("/login")}},"Logout"))))},C=function(e){var a=e.history,t=Object(i.i)().heroeId,c=Object(r.useMemo)((function(){return function(e){return d.find((function(a){return e===a.id}))}(t)}),[t]);if(!c)return n.a.createElement(i.a,{to:"/"});var l=c.id,s=c.superhero,o=c.alter_ego,m=c.first_appearance,u=c.characters;return n.a.createElement("div",{className:"card mb-3 ",style:{maxWidth:1540}},n.a.createElement("div",{className:"row no-gutters"},n.a.createElement("div",{className:"col-md-4"},n.a.createElement("img",{src:"../assets/heroes/".concat(l,".jpg"),className:"card-img animate__animated animate__backInLeft",alt:l})),n.a.createElement("div",{className:"col-md-8"},n.a.createElement("div",{className:"card-body"},n.a.createElement("h5",{className:"card-title"},n.a.createElement("b",null,"Nombre: "),s),n.a.createElement("h6",{className:"card-subtitle mb-2 text-muted"},n.a.createElement("b",null,"Alter Ego: "),o),n.a.createElement("p",{className:"card-text"},n.a.createElement("b",null,"Primera aparici\xf3n: "),m),u!==o&&n.a.createElement("p",{className:"card-text"},n.a.createElement("small",{className:"text-muted"},n.a.createElement("b",null,"Tambi\xe9n llamado: "),u)),n.a.createElement("button",{className:"btn btn-outline-info",onClick:function(){a.goBack()}},"Regresar")))))},N=t(11),_=t(9),y=function(e){var a=e.history,c=t(32),l=Object(i.h)(),o=c.parse(l.search).q,m=void 0===o?"":o,u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=Object(r.useState)(e),t=Object(s.a)(a,2),n=t[0],c=t[1],l=function(e){var a=e.target;c(Object(_.a)(Object(_.a)({},n),{},Object(N.a)({},a.name,a.value)))},o=function(){c(e)};return[l,n,o]}({heroeInput:m}),p=Object(s.a)(u,2),h=p[0],b=p[1].heroeInput,E=Object(r.useState)([]),f=Object(s.a)(E,2),g=f[0],C=f[1];Object(r.useEffect)((function(){C(function(e){return""===e?[]:(e=e.toLocaleLowerCase(),d.filter((function(a){return a.superhero.toLocaleLowerCase().includes(e)})))}(m))}),[m]);return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-4"},n.a.createElement("h1",null,"Buscar Heroe"),n.a.createElement("hr",null),n.a.createElement("form",{className:"form-inline",onSubmit:function(e){e.preventDefault(),a.push("?q=".concat(b))}},n.a.createElement("div",{className:"form-group mx-sm-3 mb-2"},n.a.createElement("input",{type:"text",name:"heroeInput",autoComplete:"off",className:"form-control",placeholder:"Busca Heroe",value:b,onChange:h})),n.a.createElement("button",{type:"submit",className:"btn btn-primary mb-2"},"Buscar"))),n.a.createElement("div",{className:"col-8"},n.a.createElement("h1",null,"Resultado"),n.a.createElement("hr",null),""===m&&n.a.createElement("div",{className:"alert alert-info"}," Buscar un Superheroe"),""!==m&&0===g.length&&n.a.createElement("div",{className:"alert alert-danger"}," ","No hay resultados con ",m," "),g.map((function(e){return n.a.createElement(v,Object.assign({key:e.id},e))})))))},k=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(g,null),n.a.createElement("div",{className:"container mt-3"},n.a.createElement(i.d,null,n.a.createElement(i.b,{exact:!0,path:"/marvel",component:E}),n.a.createElement(i.b,{exact:!0,path:"/heroe/:heroeId",component:C}),n.a.createElement(i.b,{exact:!0,path:"/dc",component:f}),n.a.createElement(i.b,{exact:!0,path:"/search",component:y}),n.a.createElement(i.a,{to:"marvel"}))," "))},O=t(12),M=function(e){var a=e.isAuthenticated,t=e.component,r=Object(O.a)(e,["isAuthenticated","component"]);return localStorage.setItem("lastPath",r.location.pathname),n.a.createElement(i.b,Object.assign({},r,{component:function(e){return a?n.a.createElement(t,e):n.a.createElement(i.a,{to:"/login"})}}))},S=function(e){var a=e.isAuthenticated,t=e.component,r=Object(O.a)(e,["isAuthenticated","component"]);return n.a.createElement(i.b,Object.assign({},r,{component:function(e){return a?n.a.createElement(i.a,{to:"/"}):n.a.createElement(t,e)}}))};function j(){var e=Object(r.useContext)(m).user;return n.a.createElement(o.a,null,n.a.createElement("div",null,n.a.createElement(i.d,null,n.a.createElement(S,{exact:!0,path:"/login",isAuthenticated:e.logged,component:h}),n.a.createElement(M,{path:"/",isAuthenticated:e.logged,component:k}))))}var D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case u:return Object(_.a)(Object(_.a)({},a.payload),{},{logged:!0});case p:return{logged:!1};default:return e}},x=(t(45),function(){return JSON.parse(localStorage.getItem("user"))||{logged:!1}}),w=function(){var e=Object(r.useReducer)(D,{},x),a=Object(s.a)(e,2),t=a[0],c=a[1];return Object(r.useEffect)((function(){localStorage.setItem("user",JSON.stringify(t))}),[t]),n.a.createElement(m.Provider,{value:{user:t,dispatch:c}},n.a.createElement(j,null))};l.a.render(n.a.createElement(w,null),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.172b929b.chunk.js.map