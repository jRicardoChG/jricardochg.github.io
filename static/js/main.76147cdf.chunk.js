(this.webpackJsonpcurriculum=this.webpackJsonpcurriculum||[]).push([[0],[,,,,,,function(e,i,a){},,function(e){e.exports=JSON.parse('{"a":{"areaFoto":{"foto":null,"perfilProfesional":"Pariatur laboris nostrud Lorem aute amet tempor anim minim cupidatat labore laborum cillum. Pariatur laboris nostrud Lorem aute amet tempor anim minim cupidatat labore laborum cillum. Lore","idiomas":[{"idioma":"Ingles","nivel":3},{"idioma":"Espa\xf1ol","nivel":5},{"idioma":"Polaco irlandes sueco","nivel":2}],"linksExternos":[{"icono":"Elit eiusmod voluptate","enlace":"sadadasdasdasdsadasdasd/sad/asdasdasdas/das","palabraEnlace":"enlace"},{"icono":"Elit eiusmod voluptate","enlace":"sadadasdasdasdsadasdasd/sad/asdasdasdas/das","palabraEnlace":"enlace"},{"icono":"Elit eiusmod voluptate","enlace":"sadadasdasdasdsadasdasd/sad/asdasdasdas/das","palabraEnlace":"enlace"}],"referencias":[{"icono":"","nombre":"Irure mollit anim deserunt ipsum aliquip.","cargo":"Ad voluptate ","empresa":"Est excepteur ","telefono":"3123123123"},{"icono":"","nombre":"Irure mollit anim deserunt ipsum aliquip.","cargo":"Ad voluptate ","empresa":"Est excepteur ","telefono":"3123123123"},{"icono":"","nombre":"Irure mollit anim deserunt ipsum aliquip.","cargo":"Ad voluptate ","empresa":"Est excepteur ","telefono":"3123123123"}]},"areaDetalles":{"nombrePersona":"Jaime Ricardo Ch\xe1vez Gonz\xe1lez","tituloProfesional":"Ingeniero Electronico","email":"richago29@gmail.com","telefono":"3219800194","ciudadResidencia":"Sogamoso","experienciaLaboral":[{"anoInicio":"2018","anoFinal":"2019","tituloCargo":"Quis tempor reprehenderit consectetur ","nombreEmpresa":"Proident cillum esse irure incididunt eiusmod.","descripcion":"Enim sit officia velit in. excepteur cupidatat pariatur id voluptate aliqua minim exercitation consequat consequat."},{"anoInicio":"2020","anoFinal":"2021","tituloCargo":"Quis tempor reprehenderit consectetur ","nombreEmpresa":"Proident cillum esse irure incididunt eiusmod.","descripcion":"Enim sit officia velit in. excepteur cupidatat pariatur id voluptate aliqua minim exercitation consequat consequat."},{"anoInicio":"2021","anoFinal":"hoy","tituloCargo":"Quis tempor reprehenderit consectetur ","nombreEmpresa":"Proident cillum esse irure incididunt eiusmod.","descripcion":"Enim sit officia velit in. excepteur cupidatat pariatur id voluptate aliqua minim exercitation consequat consequat."}],"habilidades":[{"icono":"","nombreHabilidad":"Minim veniam enim qui mollit esse cillum ex."},{"icono":"","nombreHabilidad":"Incididunt ex cupidatat nisi"}],"formacionAcademica":[{"nombreEscuela":"In ipsum laborum id nisi enim deserunt excepteur.","anoInicio":"2018","anoFinal":"2019","titulo":"Eiusmod eu officia ad non eu voluptate."},{"nombreEscuela":"In ipsum laborum id nisi enim deserunt excepteur.","anoInicio":"2018","anoFinal":"2019","titulo":"Eiusmod eu officia ad non eu voluptate."},{"nombreEscuela":"In ipsum laborum id nisi enim deserunt excepteur.","anoInicio":"2018","anoFinal":"2019","titulo":"Eiusmod eu officia ad non eu voluptate."}]}}}')},,,,,,function(e,i,a){},function(e,i,a){},,function(e,i,a){},function(e,i,a){},function(e,i,a){},function(e,i,a){},,function(e,i,a){"use strict";a.r(i);var t=a(1),o=a.n(t),n=a(9),r=a.n(n),s=(a(14),a(2)),c=a(3),l=a(5),d=a(4),u=(a(6),a(15),a(0)),p=function(e){Object(l.a)(a,e);var i=Object(d.a)(a);function a(){return Object(s.a)(this,a),i.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return Object(u.jsx)("div",{id:"detalles",className:"esqueleto flexFatherColum areaDetalles",children:Object(u.jsx)("h1",{children:"Detalles de contenido"})})}}]),a}(t.Component),m=(a(17),a.p+"static/media/Estrella_vacia.07fd9b57.png"),b=a.p+"static/media/Estrella_llena.b821b072.png",j=function(e){Object(l.a)(a,e);var i=Object(d.a)(a);function a(e){var t;return Object(s.a)(this,a),(t=i.call(this,e)).estilosPunto={backgroundColor:"black",height:"10px",width:"10px"},t.estilosArea={padding:"1px",boxSizing:"border-box"},t.cambiarEstilos=function(e){t.estilosPunto.backgroundColor=e},void 0!==t.props.lleno&&void 0!==t.props.color&&!0===t.props.lleno?t.cambiarEstilos(t.props.color):t.cambiarEstilos("black"),t}return Object(c.a)(a,[{key:"render",value:function(){return Object(u.jsx)("div",{id:"areaPunto"+this.props.id,style:this.estilosArea,children:Object(u.jsx)("div",{id:"puntoCalificacion"+this.props.id,style:this.estilosPunto,className:"redondo"})})}}]),a}(t.Component),f=function(e){Object(l.a)(a,e);var i=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var t=arguments.length,o=new Array(t),n=0;n<t;n++)o[n]=arguments[n];return(e=i.call.apply(i,[this].concat(o))).state={maximo:10},e.renderizarEstrellas=function(e,i){for(var a=[],t=0;t<i;t++)a[t]=t<e?Object(u.jsx)("img",{id:"estrella"+t,src:b,alt:"estrellanivel",className:"estrellas"}):Object(u.jsx)("img",{id:"estrella"+t,src:m,alt:"estrellanivel",className:"estrellas"});return a},e.renderizarPuntos=function(e,i){for(var a=[],t=0;t<i;t++)a[t]=t<e?Object(u.jsx)(j,{id:t,lleno:!0,color:"rgb(25, 124, 170)"}):Object(u.jsx)(j,{id:t,lleno:!1,color:"rgb(25, 124, 170)"});return a},e.renderizarIdiomas=function(){var e=[];if(void 0!==this.props.dataIn)for(var i=0;i<this.props.dataIn.length;i++)e[i]=Object(u.jsxs)("div",{id:"idioma"+i,className:"flexFatherRow esqueleto fillHor padding2px",children:[Object(u.jsx)("div",{id:"nombreIdioma"+i,className:"flexFatherRow esp65por",children:Object(u.jsx)("p",{id:"nombreIdiomaText"+i,className:"parrafoCentrado quitarMagins",children:this.props.dataIn[i].idioma})}),Object(u.jsx)("div",{id:"nivelIdioma"+i,className:"flexFatherRow esp35por",children:this.renderizarPuntos(this.props.dataIn[i].nivel,this.state.maximo)})]});return e},e}return Object(c.a)(a,[{key:"render",value:function(){return Object(u.jsx)("div",{id:"objetosCalificados",className:"flexFatherColum fillHor fillVert esqueleto",children:this.renderizarIdiomas()})}}]),a}(t.Component),A=(a(18),a(19),function(e){Object(l.a)(a,e);var i=Object(d.a)(a);function a(){return Object(s.a)(this,a),i.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return Object(u.jsxs)("div",{id:"areaLineaSeparadora",className:"espacio",children:[Object(u.jsx)("div",{id:"linealarga"}),Object(u.jsx)("div",{id:"lineaGorda"})]})}}]),a}(t.Component)),h=(a(20),function(e){Object(l.a)(a,e);var i=Object(d.a)(a);function a(){return Object(s.a)(this,a),i.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return Object(u.jsx)("div",{id:"areaNombreSeccion",className:"flexFatherColum",children:Object(u.jsx)("p",{id:"textoNombreSeccion",children:null===this.props.nombreSeccion?"Sin definir":this.props.nombreSeccion})})}}]),a}(t.Component)),v=(a(21),function(e){Object(l.a)(a,e);var i=Object(d.a)(a);function a(){return Object(s.a)(this,a),i.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return Object(u.jsx)("div",{id:"parrafoGenerico"+this.props.id,className:"contenerEspacio espo90por",children:Object(u.jsx)("p",{id:"parrafoGenericoText"+this.props.id,className:"padding4px quitarMagins contenerEspacio "+this.props.justify,children:this.props.contenido})})}}]),a}(t.Component)),O=function(e){Object(l.a)(a,e);var i=Object(d.a)(a);function a(e){var t;if(Object(s.a)(this,a),(t=i.call(this,e)).state={foto:"imagennoencontrada.png",perfilProfesional:"",idiomas:[],linksExternos:[],referencias:[]},console.log(t.props.dataIn.areaFoto.foto),void 0!==t.props.dataIn.areaFoto){var o=t.props.dataIn.areaFoto,n=o.foto,r=o.idiomas,c=o.perfilProfesional,l=o.linksExternos,d=o.referencias;t.state.foto=null===n?"data:image/png;base64,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":n,t.state.idiomas=r,t.state.perfilProfesional=c,t.state.linksExternos=l,t.state.referencias=d}return t}return Object(c.a)(a,[{key:"setDataIn",value:function(){this.dataIn=this.props.dataIn}},{key:"render",value:function(){return Object(u.jsxs)("div",{id:"lateralIzquierdo",className:" esqueleto flexFatherColum areaFoto",children:[Object(u.jsx)("div",{id:"internoFoto",className:" esqueleto internoFoto",children:Object(u.jsx)("div",{id:"borde1",children:Object(u.jsx)("div",{id:"divImagen",className:"divImagen",children:Object(u.jsx)("img",{src:this.state.foto,className:"fotoPerfil",alt:"imagen"})})})}),Object(u.jsx)(h,{nombreSeccion:"Mi Perfil"}),Object(u.jsx)(A,{}),Object(u.jsx)(v,{id:"perfilPrincipal",contenido:this.props.dataIn.areaFoto.perfilProfesional,justify:"textoJustificado"}),Object(u.jsx)(h,{nombreSeccion:"Idiomas"}),Object(u.jsx)(A,{}),Object(u.jsx)("div",{id:"seccion1",className:"seccion1 contenerEspacio",children:Object(u.jsx)(f,{dataIn:this.state.idiomas})}),Object(u.jsx)(h,{nombreSeccion:"Referencias"}),Object(u.jsx)(A,{}),Object(u.jsx)(v,{id:"referencias",contenido:this.props.dataIn.areaFoto.perfilProfesional,justify:"textoJustificado"}),Object(u.jsx)(h,{nombreSeccion:"Enlaces Redes Sociales"}),Object(u.jsx)(A,{})]})}}]),a}(t.Component),x=a(8),y=function(e){Object(l.a)(a,e);var i=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var t=arguments.length,o=new Array(t),n=0;n<t;n++)o[n]=arguments[n];return(e=i.call.apply(i,[this].concat(o))).verDatos=function(){console.log(x.a)},e}return Object(c.a)(a,[{key:"render",value:function(){return Object(u.jsx)("div",{children:Object(u.jsx)("hashRouter",{basename:"/curriculum",children:Object(u.jsxs)("div",{id:"appPrincipal",className:"flexFatherRow total margenes",children:[Object(u.jsx)(O,{dataIn:x.a}),Object(u.jsx)(p,{})]})})})}}]),a}(t.Component);r.a.render(Object(u.jsx)(o.a.StrictMode,{children:Object(u.jsx)(y,{})}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.76147cdf.chunk.js.map