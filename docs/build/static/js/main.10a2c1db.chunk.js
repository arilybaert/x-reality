(this["webpackJsonpx-reality"]=this["webpackJsonpx-reality"]||[]).push([[0],{108:function(e,t,a){e.exports=a.p+"static/media/ari_lybaert_toy.8cf117b7.glb"},158:function(e,t,a){e.exports=a.p+"static/media/glTF.ce019e05.glb"},162:function(e,t,a){e.exports=a(359)},358:function(e,t,a){},359:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(40),c=a.n(o),l=a(8),i=a(12),u=a(0),s=a(15),m=a(109),p=a(9),g=function(e){var t=Object(n.useState)(!1),a=Object(p.a)(t,2),o=(a[0],a[1]),c=Object(n.useState)(65280),i=Object(p.a)(c,2),u=i[0],m=i[1];return Object(l.f)((function(){})),r.a.createElement("group",{onClick:function(){return m(16711680)},onDoubleClick:function(){return m(255)},onPointerOut:function(){return o(!1)},onPointerOver:function(){return o(!0)}},r.a.createElement("mesh",null,r.a.createElement("boxBufferGeometry",{args:[1,.5,.01]}),r.a.createElement("meshMatcapMaterial",{color:u})),r.a.createElement(s.h,{color:"white",fontSize:.2,position:[0,0,.01]},"Click Me!"))},h=a(26),f=function(e){var t=Object(n.useState)(!1),a=Object(p.a)(t,2),o=a[0],c=a[1],i=Object(n.useState)(!1),m=Object(p.a)(i,2),g=m[0],f=m[1],b=Object(n.useState)(16711680),E=Object(p.a)(b,2),d=E[0],y=E[1],j=Object(h.c)({opacity:o?1:.5,scale:o?[1.5,1.25]:[1,1],rotation:g?[u.MathUtils.degToRad(-90),0,0]:[0,0,0]}),O=j.opacity,S=j.rotation,v=j.scale;return Object(l.f)((function(){})),r.a.createElement(h.a.group,Object.assign({},e,{onClick:function(){return f(!g)},onDoubleClick:function(){return y(d>>8)},onPointerOut:function(){return c(!1)},onPointerOver:function(){return c(!0)},rotation:S}),r.a.createElement(h.a.mesh,{scale:v},r.a.createElement("planeBufferGeometry",{args:[1,.5]}),r.a.createElement(h.a.meshMatcapMaterial,{opacity:O,color:d,transparent:!0})),r.a.createElement(s.h,{color:"white",fontSize:.2,position:[0,0,.01]},"Click Me!"))},b=a(2),E=a(6),d=function(){function e(t){Object(b.a)(this,e),this.radius=t}return Object(E.a)(e,[{key:"getCoordinates",value:function(e){var t=u.MathUtils.degToRad(e);return{x:Math.cos(t)*this.radius,y:Math.sin(t)*this.radius}}}]),e}();function y(e){return!(e%5)}var j=function(e){var t=Object(n.useRef)(),a=Object(n.useRef)(),o=Object(n.useRef)(),c=Object(n.useRef)(),i=u.MathUtils.degToRad(90);return Object(l.f)((function(){var e=new Date;a.current.rotation.z=u.MathUtils.degToRad(-30*(e.getHours()+e.getMinutes()/60)),o.current.rotation.z=u.MathUtils.degToRad(-6*e.getMinutes()),c.current.rotation.z=u.MathUtils.degToRad(-6*e.getSeconds())})),r.a.createElement("group",Object.assign({ref:t},e),r.a.createElement("group",null,r.a.createElement(s.h,{color:"black",position:[0,-.25,.01]},"Arteveldehogeschool"),Array(12).fill(null).map((function(e,t){var a=30*t+90,n=new d(.75).getCoordinates(a),o=n.x,c=n.y;return r.a.createElement(s.h,{color:16764006,position:[o,c,.01],scale:[1.2,1.2,1]},(12-t).toString())}))),r.a.createElement("group",{rotation:[0,0,i]},r.a.createElement("mesh",{receiveShadow:!0},r.a.createElement("circleBufferGeometry",{args:[1,60]}),r.a.createElement("meshStandardMaterial",{opacity:.25,transparent:!0})),r.a.createElement("group",{position:[0,0,.01]},r.a.createElement("group",{position:[0,0,.01],ref:a},r.a.createElement("mesh",{castShadow:!0,position:[.3,0,0]},r.a.createElement("boxBufferGeometry",{args:[.6,.06,.02]}),r.a.createElement("meshStandardMaterial",null))),r.a.createElement("group",{position:[0,0,.04],ref:o},r.a.createElement("mesh",{castShadow:!0,position:[.35,0,0]},r.a.createElement("boxBufferGeometry",{args:[.7,.04,.02]}),r.a.createElement("meshStandardMaterial",null))),r.a.createElement("group",{position:[0,0,.06+.01],ref:c},r.a.createElement("mesh",{castShadow:!0,position:[.4,0,0]},r.a.createElement("boxBufferGeometry",{args:[.8,.02,.02]}),r.a.createElement("meshStandardMaterial",{color:16764006})))),Array(60).fill(null).map((function(e,t){var a=u.MathUtils.degToRad(6*t);return r.a.createElement("group",{key:t,rotation:[0,0,a],position:[0,0,.005]},r.a.createElement("mesh",{position:[.95-(y(t)?.1-.01:.08)/2,0,0]},r.a.createElement("boxBufferGeometry",{args:[y(t)?.1:.08,y(t)?.02:.01,.01]}),r.a.createElement("meshStandardMaterial",{color:0===t?255:y(t)?16711680:16777215})))})),r.a.createElement("mesh",{castShadow:!0,rotation:[-90,0,0].map((function(e){return u.MathUtils.degToRad(e)})),position:[0,0,.05]},r.a.createElement("cylinderBufferGeometry",{args:[.1,.05,.1,36]}),r.a.createElement("meshStandardMaterial",null))))},O=function(e){var t=["#f00","#ff0","#0f0","#0ff","#00f","#f0f"],a=t[Math.floor(Math.random()*t.length)],o=Object(n.useRef)(),c=Object(n.useState)(!0),l=Object(p.a)(c,2),i=l[0],u=l[1],s=Object(h.c)({opacity:i?.9:.5}).opacity,m=Object(h.c)({position:i?[0,0,0]:[4,4,0].map((function(e){return(2*Math.random()-1)*e}))}).position;return r.a.createElement(h.a.mesh,Object.assign({},e,{onClick:function(){return u(!i)},position:m}),r.a.createElement("boxBufferGeometry",{args:[1,1,1]}),r.a.createElement(h.a.meshMatcapMaterial,{color:a,opacity:s,ref:o,transparent:!0}))},S=function(e){return r.a.createElement(s.f,Object.assign({args:[10,10],rotation:[u.MathUtils.degToRad(-90),0,0]},e),r.a.createElement("meshStandardMaterial",null))},v=function(e){var t=[{color:"green",label:"0",ref:Object(n.useRef)(),value:0},{color:"white",label:"10",ref:Object(n.useRef)(),value:1e3},{color:"white",label:"20",ref:Object(n.useRef)(),value:2e3},{color:"white",label:"30",ref:Object(n.useRef)(),value:3e3},{color:"white",label:"40",ref:Object(n.useRef)(),value:4e3},{color:"white",label:"50",ref:Object(n.useRef)(),value:5e3},{color:"orange",label:"60",ref:Object(n.useRef)(),value:6e3},{color:"red",label:"70",ref:Object(n.useRef)(),value:7e3},{color:"red",label:"80",ref:Object(n.useRef)(),value:8e3}],a=270/(t.length-1),o=u.MathUtils.degToRad(-135),c=1e3*(t.length-1),i=270/c,m=Object(n.useRef)(),p=0,g=0,h=60;return Object(l.f)((function(){g<=0?h=60:c<=g&&(h=-250),g+=h,p=u.MathUtils.degToRad(-i*g),m.current.rotation.z=p,t.forEach((function(e){e.ref.current.children[0].material.color.setColorName(e.value<=g?"blue":e.color)}))})),r.a.createElement("group",Object.assign({},e,{rotation:[0,0,o]}),r.a.createElement(s.b,{args:[1.2,62],position:[0,0,0],receiveShadow:!0},r.a.createElement("meshStandardMaterial",{opacity:.25,transparent:!0})),t.map((function(e,t){return r.a.createElement("group",{key:t,ref:e.ref,rotation:[0,0,-a*t].map((function(e){return u.MathUtils.degToRad(e)}))},r.a.createElement(s.a,{args:[.25,.05,.02],position:[1,0,.01]},r.a.createElement("meshStandardMaterial",{color:e.color,metalness:.1,opacity:.5,roughness:.6,transparent:!0})))})),r.a.createElement("group",{position:[0,0,.05]},r.a.createElement("group",{ref:m},r.a.createElement("group",{rotation:[0,0,-90].map((function(e){return u.MathUtils.degToRad(e)}))},r.a.createElement(s.c,{args:[.03,1,4],castShadow:!0,position:[0,.5,0]},r.a.createElement("meshStandardMaterial",{color:"orange",metalness:.1,roughness:.6})))),r.a.createElement(s.d,{args:[.1,.05,.1,36],castShadow:!0,rotation:[-90,0,0].map((function(e){return u.MathUtils.degToRad(e)}))},r.a.createElement("meshStandardMaterial",null))))},L=a(158),M=a.n(L),C=function(){var e=Object(n.useState)(!1),t=Object(p.a)(e,2),a=t[0],o=t[1],c=Object(s.i)(M.a,!0),i=Object(n.useRef)();return Object(l.f)((function(){i.current.rotation.y+=.025*(a?1:-1)})),r.a.createElement("primitive",{ref:i,object:c.scene,onClick:function(){return o(!a)},position:[0,0,0]})},R=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("ambientLight",{intensity:.1}),r.a.createElement("directionalLight",{castShadow:!0,color:16777215,intensity:1,position:[2,2,1]}),r.a.createElement("hemisphereLight",null),r.a.createElement("pointLight",{castShadow:!0,color:16737792,intensity:.5,position:[0,0,4]}),r.a.createElement("spotLight",{castShadow:!0,color:16773120,position:[0,4,4],intensity:1}))},w=function(){var e=Object(l.h)(),t=Object(l.h)(),a=Object(l.h)(),o=Object(n.useRef)(),c=Object(l.i)().scene,s=new u.Object3D;c.add(s);var m=Object(i.c)("Light helpers",{group:"Helpers",type:"boolean",value:!0}),p=(Object(i.c)("Color",{group:"Ambient Light",type:"color",value:"#ffffff"}),Object(i.c)("Intensity",{group:"Ambient Light",type:"number",value:.1,min:0,max:1})),g=Object(i.c)("Color",{group:"Directional Light",type:"color",value:"#ffffff"}),h=Object(i.c)("Intensity",{group:"Directional Light",type:"number",value:1,min:0,max:1}),f=Object(i.c)("Color",{group:"Point Light",type:"color",value:"#ffcc77"}),b=Object(i.c)("Intensity",{group:"Point Light",type:"number",value:.5,min:0,max:20}),E=Object(i.c)("Position XZ",{group:"Point Light",type:"xypad",distance:5,value:{x:-4,y:-4}}),d=Object(i.c)("Color",{group:"Spot Light",type:"color"}),y=Object(i.c)("Intensity",{group:"Spot Light",type:"number",value:1,min:0,max:20}),j=Object(i.c)("Position XZ",{group:"Spot Light",type:"xypad",distance:5,value:{x:0,y:0}});return Object(l.f)((function(){s.translateX(j.x),s.translateZ(j.y),o.current&&o.current.update()})),r.a.createElement(r.a.Fragment,null,r.a.createElement("ambientLight",{intensity:p}),r.a.createElement("directionalLight",{castShadow:!0,color:g,intensity:h,position:[4,4,1],ref:e}),r.a.createElement("pointLight",{castShadow:!0,color:f,intensity:b,position:[E.x,1,E.y],ref:t}),r.a.createElement("spotLight",{castShadow:!0,color:d,position:[0,4,4],intensity:y,ref:a,target:s,penumbra:.5,angle:u.MathUtils.degToRad(30)}),m&&r.a.createElement(r.a.Fragment,null,e.current&&r.a.createElement("directionalLightHelper",{args:[e.current,.5,g]}),t.current&&r.a.createElement("pointLightHelper",{args:[t.current,.5,f]}),a.current&&r.a.createElement("spotLightHelper",{args:[a.current,d],ref:o})))},x=function(){return r.a.createElement("group",null,r.a.createElement("ambientLight",{intensity:.1}),r.a.createElement("directionalLight",{castShadow:!0,color:"hsl(0, 0%, 70%)",intensity:.4,position:[0,2,4]}),r.a.createElement("directionalLight",{castShadow:!0,color:"hsl(210, 100%, 70%)",position:[-4,0,0]}),r.a.createElement("directionalLight",{castShadow:!0,color:"hsl(30, 100%, 70%)",position:[4,0,0]}),"s")},T=function(){var e=Object(l.h)(),t=Object(l.h)(),a=Object(l.h)(),n=Object(i.c)("Light helpers",{group:"Helpers",type:"boolean",value:!0}),o=Object(i.c)("Color",{group:"Ambient Light",type:"color",value:"hsl(0, 0%, 100%)"}),c=Object(i.c)("Intensity",{group:"Ambient Light",type:"number",value:.1,min:0,max:1}),u=Object(i.c)("Color",{group:"Front Light",type:"color",value:"hsl(0, 0%, 70%)"}),s=Object(i.c)("Intensity",{group:"Front Light",type:"number",value:.4,min:0,max:2}),m=Object(i.c)("Color",{group:"Left Light",type:"color",value:"hsl(210, 100%, 70%)"}),p=Object(i.c)("Intensity",{group:"Left Light",type:"number",value:1,min:0,max:2}),g=Object(i.c)("Color",{group:"Right Light",type:"color",value:"hsl(30, 100%, 70%)"}),h=Object(i.c)("Intensity",{group:"Right Light",type:"number",value:1,min:0,max:2});return r.a.createElement("group",null,r.a.createElement("ambientLight",{color:o,intensity:c}),r.a.createElement("directionalLight",{castShadow:!0,color:u,intensity:s,position:[0,2,4],ref:e}),r.a.createElement("directionalLight",{castShadow:!0,color:m,intensity:p,position:[-4,0,0],ref:t}),r.a.createElement("directionalLight",{castShadow:!0,color:g,intensity:h,position:[4,0,0],ref:a}),n&&r.a.createElement(r.a.Fragment,null,e.current&&r.a.createElement("directionalLightHelper",{args:[e.current,.5,u]}),t.current&&r.a.createElement("directionalLightHelper",{args:[t.current,.5,m]}),a.current&&r.a.createElement("directionalLightHelper",{args:[a.current,.5,g]})))},G=function(){return r.a.createElement("group",null,r.a.createElement("ambientLight",{intensity:.1}),r.a.createElement("spotLight",{castShadow:!0,color:"hsl(0, 0%, 70%)",position:[4,2,-4]}),r.a.createElement("spotLight",{castShadow:!0,color:"hsl(210, 100%, 70%)",position:[-4,2,4]}),r.a.createElement("spotLight",{castShadow:!0,color:"hsl(30, 100%, 70%)",position:[4,2,4]}))},U=function(){var e=Object(l.h)(),t=Object(l.h)(),a=Object(l.h)(),n=Object(i.c)("Light helpers",{group:"Helpers",type:"boolean",value:!0}),o=Object(i.c)("Color",{group:"Ambient Light",type:"color",value:"hsl(0, 0%, 100%)"}),c=Object(i.c)("Intensity",{group:"Ambient Light",type:"number",value:.1,min:0,max:1}),u=Object(i.c)("Color",{group:"Back Light",type:"color",value:"hsl(0, 0%, 70%)"}),s=Object(i.c)("Intensity",{group:"Back Light",type:"number",value:1,min:0,max:2}),m=Object(i.c)("Color",{group:"Fill Light",type:"color",value:"hsl(210, 100%, 70%)"}),p=Object(i.c)("Intensity",{group:"Fill Light",type:"number",value:.75,min:0,max:2}),g=Object(i.c)("Color",{group:"Key Light",type:"color",value:"hsl(30, 100%, 70%)"}),h=Object(i.c)("Intensity",{group:"Key Light",type:"number",value:1,min:0,max:2});return r.a.createElement("group",null,r.a.createElement("ambientLight",{color:o,intensity:c}),r.a.createElement("spotLight",{castShadow:!0,color:u,intensity:s,position:[4,2,-4],ref:e}),r.a.createElement("spotLight",{castShadow:!0,color:m,intensity:p,position:[-4,2,4],ref:t}),r.a.createElement("spotLight",{castShadow:!0,color:g,intensity:h,position:[4,2,4],ref:a}),n&&r.a.createElement(r.a.Fragment,null,e.current&&r.a.createElement("spotLightHelper",{args:[e.current,u]}),t.current&&r.a.createElement("spotLightHelper",{args:[t.current,m]}),a.current&&r.a.createElement("spotLightHelper",{args:[a.current,g]})))},B=a(361),k=function(e){var t=Object(n.useState)(!0),a=Object(p.a)(t,2),o=a[0],c=a[1],l=Object(s.j)("80CA23_B7EE37_D5FA4C_A3E434",1024),i=Object(p.a)(l,1)[0],m=Object(h.c)({config:{duration:200,easing:B.a},delay:100,from:{opacity:o?.5:1,position:o?[0,0,0]:[0,0,-2]},to:[{opacity:o?1:.5},{opacity:o?.5:1},{opacity:o?1:.5,position:o?[0,0,-2]:[0,0,0]}]}),g=m.opacity,f=m.position;return r.a.createElement("group",e,r.a.createElement("mesh",{onClick:function(){return c(!o)}},r.a.createElement("ringBufferGeometry",{args:[1.1,1.9,72,8,u.MathUtils.degToRad(90),u.MathUtils.degToRad(350)]}),r.a.createElement(h.a.meshMatcapMaterial,{matcap:i,opacity:g,side:u.DoubleSide,transparent:!0})),r.a.createElement(h.a.mesh,{position:f},r.a.createElement("torusBufferGeometry",{args:[1.5,.5,72,32,u.MathUtils.degToRad(360)]}),r.a.createElement("meshMatcapMaterial",{matcap:i,opacity:.25,transparent:!0})))},z=a(159),H=function(e){var t=Object(n.useState)(!0),a=Object(p.a)(t,2),o=a[0],c=a[1],l=Object(s.j)("80CA23_B7EE37_D5FA4C_A3E434",1024),i=Object(p.a)(l,1)[0];return r.a.createElement("group",e,r.a.createElement("mesh",{onClick:function(){return c(!o)}},r.a.createElement(z.Spring,{config:h.b.wobbly,delay:100,from:{thetaLength:o?10:350},to:{thetaLength:o?350:10}},(function(e){return r.a.createElement("ringBufferGeometry",{args:[1.1,1.9,72,8,u.MathUtils.degToRad(90),u.MathUtils.degToRad(e.thetaLength)]})})),r.a.createElement("meshMatcapMaterial",{matcap:i,opacity:1,side:u.DoubleSide,transparent:!0})),r.a.createElement("mesh",null,r.a.createElement("torusBufferGeometry",{args:[1.5,.5,36,72,u.MathUtils.degToRad(360)]}),r.a.createElement("meshMatcapMaterial",{matcap:i,opacity:.25,transparent:!0})))},I=a(36),A=a.n(I),F=function(){var e=Object(n.useState)(!1),t=Object(p.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)(!1),i=Object(p.a)(c,2),u=i[0],m=i[1],g=Object(s.i)(A.a,!0),h=g.nodes,f=g.materials,b=Object(n.useRef)();return Object(l.f)((function(){b.current.rotation.x+=.025*(u?1:0)*(a?1:-1),b.current.rotation.y+=.025*(u?1:0)*(a?1:-1),b.current.rotation.z+=.025*(u?1:0)*(a?1:-1)})),r.a.createElement("group",{ref:b,onClick:function(){return o(!a)},onDoubleClick:function(){return m(!u)}},r.a.createElement("mesh",{geometry:h.Suzanne.geometry,material:f.Paars}))},P=function(){var e=Object(s.i)(A.a,!0).nodes,t=Object(s.l)(2),a=Object(s.j)("6E5137_E8CA90_271912_B99C74",1024),n=Object(p.a)(a,1)[0];return r.a.createElement("mesh",{geometry:e.Suzanne.geometry,ref:t},r.a.createElement("meshMatcapMaterial",{matcap:n}))},D=function(){var e=Object(s.i)(A.a,!0).nodes,t=Object(s.l)(2),a=Object(s.k)(8,{anisotropy:8,offset:[0,0],repeat:[10,10]}),n=Object(p.a)(a,1)[0];return r.a.createElement("mesh",{geometry:e.Suzanne.geometry,ref:t},r.a.createElement("meshStandardMaterial",{normalMap:n}))},_=function(){var e=Object(s.i)(A.a,!0).nodes,t=Object(s.l)(2);return r.a.createElement("mesh",{geometry:e.Suzanne.geometry,ref:t},r.a.createElement("meshStandardMaterial",null))},N=function(){var e=Object(s.i)(A.a,!0).nodes,t=Object(s.l)(2);return r.a.createElement("mesh",{geometry:e.Suzanne.geometry,ref:t},r.a.createElement("meshToonMaterial",null))},Z=function(e){return r.a.createElement("group",e,r.a.createElement("mesh",null,r.a.createElement("boxBufferGeometry",{args:[1,1,1].map((function(e){return 1.5*e*.01}))}),r.a.createElement("meshMatcapMaterial",{color:16777215})),Array(3).fill(null).map((function(e,t){return r.a.createElement("group",{position:[0,0,0].map((function(e,a){return t===a?.52:e}))},r.a.createElement("mesh",null,r.a.createElement("boxBufferGeometry",{args:[1,1,1].map((function(e,a){return e*(t===a?1:.01)}))}),r.a.createElement("meshMatcapMaterial",{color:16711680>>8*t})),r.a.createElement("mesh",{position:[0,0,0].map((function(e,a){return t===a?.53:e}))},r.a.createElement("sphereBufferGeometry",{args:[.02,32,32]}),r.a.createElement("meshMatcapMaterial",{color:16777215})))})))},X=a(108),J=a.n(X),K=function(e){var t=e.light,a=Object(n.useState)(!1),o=Object(p.a)(a,2),c=o[0],i=o[1],u=Object(s.i)(J.a,!0),m=(u.nodes,u.materials),g=Object(s.i)(J.a,!0),h=Object(n.useRef)();return console.log("materials:",m),Object(n.useEffect)((function(){1==t?(g.scene.children[5].children[5].material=m.taillight,g.scene.children[5].children[3].material=m.headlight,console.log("light on")):(g.scene.children[5].children[5].material=m.grey,g.scene.children[5].children[3].material=m.base,console.log("light off"))}),[t]),Object(l.f)((function(){})),r.a.createElement("primitive",{object:g.scene,onClick:function(){return i(!c)},position:[0,0,0],ref:h})},q=function(){return r.a.createElement("mesh",{receiveShadow:!0,rotation:[4.7,0,0],position:[0,-1.2,0]},r.a.createElement("planeBufferGeometry",{attach:"geometry",args:[1500,1500]}),r.a.createElement("meshStandardMaterial",{attach:"material",color:"gray"}))},Q=function(){var e=["None","Button","Button (React Spring)","Clock","Cube","Cube (positioned)","Face","Gauge","GlTransmissionFormat","Spring","Spring (Props)","Suzanne (default)","Suzanne (MatCap Texture)","Suzanne (Normal Texture)","Suzanne (Standard Material)","Suzanne (Toon Material)","ToyCar","Tripod"],t=["None","Demo","Demo + GUI","Studio Lighting","Studio Lighting + GUI","Three Point Lighting","Three Point Lighting + GUI"],a=Object(i.c)("Effect",{group:"General",type:"boolean",value:!1}),o=Object(i.c)("Statistics",{group:"General",type:"boolean",value:!1}),c=Object(i.c)("Component",{group:"General",type:"select",value:e[16],items:e}),l=Object(i.c)("Lighting",{group:"General",type:"select",value:t[3],items:t}),p=Object(i.c)("Axes Helper",{group:"Helpers",type:"boolean",value:!1}),h=Object(i.c)("Grid Helper",{group:"Helpers",type:"boolean",value:!1}),b=Object(i.c)("Switch light",{type:"boolean",value:!0});function E(e){return l===e}function d(e){return c===e}return r.a.createElement(r.a.Fragment,null,r.a.createElement("group",null,r.a.createElement(s.e,{enablePan:!0,enableRotate:!0,enableZoom:!0}),o&&r.a.createElement(s.g,null),p&&r.a.createElement("axesHelper",null),h&&r.a.createElement("gridHelper",{args:[10,10,16777215,3355443]})),a&&r.a.createElement(m.b,null,r.a.createElement(m.a,{height:500,luminanceThreshold:0,luminanceSmoothing:.9})),E("Demo")&&r.a.createElement(R,null),E("Demo + GUI")&&r.a.createElement(w,null),E("Studio Lighting")&&r.a.createElement(x,null),E("Studio Lighting + GUI")&&r.a.createElement(T,null),E("Three Point Lighting")&&r.a.createElement(G,null),E("Three Point Lighting + GUI")&&r.a.createElement(U,null),d("Button")&&r.a.createElement(g,null),d("Button (React Spring)")&&r.a.createElement(f,null),d("Clock")&&r.a.createElement(j,null),d("Cube")&&r.a.createElement(O,null),d("Cube (positioned)")&&r.a.createElement(O,{position:[1,1,1],rotation:[45,45,45].map((function(e){return u.MathUtils.degToRad(e)}))}),d("Face")&&r.a.createElement(S,null),d("Gauge")&&r.a.createElement(v,null),r.a.createElement(n.Suspense,{fallback:null},d("ToyCar")&&r.a.createElement(K,{light:b}),r.a.createElement(q,null),d("GlTransmissionFormat")&&r.a.createElement(C,null),d("Spring")&&r.a.createElement(k,null),d("Spring (Props)")&&r.a.createElement(H,null),d("Suzanne (default)")&&r.a.createElement(F,null),d("Suzanne (MatCap Texture)")&&r.a.createElement(P,null),d("Suzanne (Normal Texture)")&&r.a.createElement(D,null),d("Suzanne (Standard Material)")&&r.a.createElement(_,null),d("Suzanne (Toon Material)")&&r.a.createElement(N,null)),d("Tripod")&&r.a.createElement(Z,null))},V=(a(358),function(){return r.a.createElement(i.b,null,r.a.createElement(l.a,{invalidateFrameloop:!1,shadowMap:!0},r.a.createElement(Q,null)),r.a.createElement(i.a,{title:"Controls"}))});c.a.render(r.a.createElement(V,null),document.getElementById("root"))},36:function(e,t,a){e.exports=a.p+"static/media/suzanne.fdd60495.glb"}},[[162,1,2]]]);
//# sourceMappingURL=main.10a2c1db.chunk.js.map