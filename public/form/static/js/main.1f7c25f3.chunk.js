(this["webpackJsonptec-form"]=this["webpackJsonptec-form"]||[]).push([[0],{53:function(e){e.exports=JSON.parse('[{"name":"name","label":"Name","required":true,"fullWidth":true,"type":"text","grid":{"xs":12,"sm":12}},{"name":"email","label":"Email ID","required":true,"fullWidth":true,"type":"text","grid":{"xs":12,"sm":12}},{"name":"mobile","label":"Mobile","required":true,"fullWidth":false,"type":"text","grid":{"xs":12,"sm":6}},{"name":"whatsapp","label":"Whatsapp Number","required":true,"fullWidth":false,"type":"text","grid":{"xs":12,"sm":6}},{"type":"information","text":"Institute Information"},{"name":"institute","label":"Institute Name","required":true,"fullWidth":true,"type":"text","grid":{"xs":12,"sm":12}},{"name":"city","label":"City","required":true,"fullWidth":true,"type":"text","grid":{"xs":12,"sm":6}},{"name":"state","label":"State/Province/Region","required":false,"fullWidth":true,"type":"text","grid":{"xs":12,"sm":6}},{"name":"zip","label":"Zip / Postal code","required":true,"fullWidth":true,"type":"text","grid":{"xs":12,"sm":6}}]')},66:function(e,t,a){e.exports=a(92)},71:function(e,t,a){},91:function(e,t,a){},92:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(8),o=a.n(i),l=(a(71),a(24)),s=a(15),c=a(30),u=a(31),m=a(35),h=a(52),d=a(138),g=a(130),f=a(132),p=a(93),b=a(10),v=a(126),y=a(133),O=a(135),E=a(131),j=a(137),x=a(32),w=a.n(x),S=a(53);function W(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function k(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?W(Object(a),!0).forEach((function(t){Object(b.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):W(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var C=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={submitLoading:!1,errorMessage:"",error:!1,submitSuccess:!1,formError:{name:"",email:"",mobile:"",whatsapp:"",institute:"",city:"",state:"",zip:""},values:{name:"",email:"",mobile:"",whatsapp:"",institute:"",city:"",state:"",zip:""}},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"onFormChange",value:function(e,t){console.log(e),this.setState((function(a){return k({},a,{values:k({},a.values,Object(b.a)({},t,e))})}))}},{key:"handleSubmission",value:function(){var e=this;this.setState({submitLoading:!0}),w()({method:"POST",url:"/ca/register",data:this.state.values}).then((function(t){console.log(t),e.setState({submitLoading:!1,submitSuccess:!0})})).catch((function(t){console.log(t),e.setState({submitLoading:!1,error:!0,errorMessage:"E-Mail already registered"})}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.values;return t.submitSuccess?r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{item:!0,xs:12,sm:12},r.a.createElement(p.a,{variant:"h5",gutterBottom:!0,align:"center"},"Successfully Registered"),r.a.createElement(p.a,{variant:"h6",gutterBottom:!0,align:"center"},"Our Team Will Reach You Soon"))):r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{item:!0,xs:12,sm:12},r.a.createElement(p.a,{variant:"h6",gutterBottom:!0,align:"left"},"Contact Information")),r.a.createElement(v.a,{container:!0,spacing:3},S.map((function(t){return"information"===t.type?r.a.createElement(v.a,{item:!0,xs:12,sm:12,key:t.name},r.a.createElement(p.a,{variant:"h6",gutterBottom:!0,align:"left"},t.text)):r.a.createElement(v.a,{item:!0,xs:t.grid.xs,sm:t.grid.sm,key:t.name},r.a.createElement(y.a,{required:t.required,name:t.name,label:t.label,value:a[t.name]||"",fullWidth:t.fullWidth,onChange:function(a){e.onFormChange(a.target.value,t.name)}}))}))),r.a.createElement("div",{style:{marginTop:"4vh"}},r.a.createElement(O.a,{variant:"contained",color:"primary",onClick:function(){e.handleSubmission()}},this.state.submitLoading&&r.a.createElement(E.a,{style:{color:"#fff"}}),!this.state.submitLoading&&"Register")),r.a.createElement(j.a,{open:this.state.error,anchorOrigin:{horizontal:"right",vertical:"top"},message:this.state.errorMessage,variant:"error",onClose:function(){e.setState({error:!1})},autoHideDuration:5e3}))}}]),t}(n.Component),P=a(56);function q(){var e=Object(h.a)(["\n  width: 40vw;\n  padding: 4vh 2vw;\n  margin: 5vw 30vw;\n\n  @media(orientation:portrait) {\n    width: 100vw;\n    margin: 0;\n  }\n"]);return q=function(){return e},e}var B=Object(P.a)(g.a)(q());function F(){return r.a.createElement(p.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(f.a,{color:"inherit",href:"https://tecnoesis.org/"},"Tecnoesis 2020"),".")}var D=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,null),r.a.createElement("main",null,r.a.createElement(B,null,r.a.createElement(p.a,{component:"h1",variant:"h4",align:"center",style:{marginBottom:"10%"}},"Registration For Campus Ambassador"),r.a.createElement(r.a.Fragment,null,r.a.createElement(C,null))),r.a.createElement(F,null)))}}]),t}(n.Component);a(91);var I=function(){return r.a.createElement(D,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));w.a.defaults.headers.common["Content-Type"]="application/json",o.a.render(r.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[66,1,2]]]);
//# sourceMappingURL=main.1f7c25f3.chunk.js.map