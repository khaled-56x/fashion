google.maps.__gjsload__('overlay', function(_){var Lt=function(a){this.h=a},qla=function(){},Mt=function(a){a.oo=a.oo||new qla;return a.oo},rla=function(a){this.La=new _.Rh(function(){var b=a.oo;if(a.getPanes()){if(a.getProjection()){if(!b.on&&a.onAdd)a.onAdd();b.on=!0;a.draw()}}else{if(b.on)if(a.onRemove)a.onRemove();else a.remove();b.on=!1}},0)},sla=function(a,b){function c(){return _.Sh(e.La)}var d=Mt(a),e=d.fm;e||(e=d.fm=new rla(a));_.sb(d.Za||[],_.F.removeListener);var f=d.Ya=d.Ya||new _.Qr,g=b.__gm;f.bindTo("zoom",g);f.bindTo("offset",g);
f.bindTo("center",g,"projectionCenterQ");f.bindTo("projection",b);f.bindTo("projectionTopLeft",g);f=d.Tr=d.Tr||new Lt(f);f.bindTo("zoom",g);f.bindTo("offset",g);f.bindTo("projection",b);f.bindTo("projectionTopLeft",g);a.bindTo("projection",f,"outProjection");a.bindTo("panes",g);d.Za=[_.F.addListener(a,"panes_changed",c),_.F.addListener(g,"zoom_changed",c),_.F.addListener(g,"offset_changed",c),_.F.addListener(b,"projection_changed",c),_.F.addListener(g,"projectioncenterq_changed",c)];c();b instanceof
_.qf&&(_.og(b,"Ox"),_.cg(b,148440))},wla=function(a){if(a){var b=a.getMap();if(tla(a)!==b&&b&&b instanceof _.qf){var c=b.__gm;c.overlayLayer?a.__gmop=new ula(b,a,c.overlayLayer):c.j.then(function(d){d=d.Pa;var e=new Nt(b,d);d.nb(e);c.overlayLayer=e;vla(a);wla(a)})}}},vla=function(a){if(a){var b=a.__gmop;b&&(a.__gmop=null,b.h.unbindAll(),b.h.set("panes",null),b.h.set("projection",null),b.l.Wf(b),b.j&&(b.j=!1,b.h.onRemove?b.h.onRemove():b.h.remove()))}},tla=function(a){return(a=a.__gmop)?a.map:null},
ula=function(a,b,c){this.map=a;this.h=b;this.l=c;this.j=!1;_.og(this.map,"Ox");_.cg(this.map,148440);c.vf(this)},xla=function(a,b){a.h.get("projection")!=b&&(a.h.bindTo("panes",a.map.__gm),a.h.set("projection",b))},Nt=function(a,b){this.m=a;this.l=b;this.h=null;this.j=[]};_.C(Lt,_.G);
Lt.prototype.changed=function(a){"outProjection"!=a&&(a=!!(this.get("offset")&&this.get("projectionTopLeft")&&this.get("projection")&&_.he(this.get("zoom"))),a==!this.get("outProjection")&&this.set("outProjection",a?this.h:null))};var Ot={};_.C(rla,_.G);Ot.vf=function(a){if(a){var b=a.getMap();(Mt(a).Ar||null)!==b&&(b&&sla(a,b),Mt(a).Ar=b)}};Ot.Wf=function(a){var b=Mt(a),c=b.Ya;c&&c.unbindAll();(c=b.Tr)&&c.unbindAll();a.unbindAll();a.set("panes",null);a.set("projection",null);b.Za&&_.sb(b.Za,_.F.removeListener);b.Za=null;b.fm&&(b.fm.La.Id(),b.fm=null);delete Mt(a).Ar};var Pt={};ula.prototype.draw=function(){this.j||(this.j=!0,this.h.onAdd&&this.h.onAdd());this.h.draw&&this.h.draw()};Nt.prototype.dispose=function(){};Nt.prototype.Ac=function(a,b,c,d,e,f,g,h){var k=this.h=this.h||new _.On(this.m,this.l,function(){});k.Ac(a,b,c,d,e,f,g,h);a=_.A(this.j);for(b=a.next();!b.done;b=a.next())b=b.value,xla(b,k),b.draw()};Nt.prototype.vf=function(a){this.j.push(a);this.h&&xla(a,this.h);this.l.refresh()};Nt.prototype.Wf=function(a){_.Fb(this.j,a)};Pt.vf=wla;Pt.Wf=vla;_.Ze("overlay",{yp:function(a){if(a){(0,Ot.Wf)(a);(0,Pt.Wf)(a);var b=a.getMap();b&&(b instanceof _.qf?(0,Pt.vf)(a):(0,Ot.vf)(a))}},preventMapHitsFrom:function(a){_.Ao(a,{onClick:function(b){return _.Xn(b.event)},ud:function(b){return _.Un(b)},Gh:function(b){return _.Vn(b)},Xd:function(b){return _.Vn(b)},Dd:function(b){return _.Wn(b)}}).Ai(!0)},preventMapHitsAndGesturesFrom:function(a){a.addEventListener("click",_.cf);a.addEventListener("contextmenu",_.cf);a.addEventListener("dblclick",_.cf);a.addEventListener("mousedown",
_.cf);a.addEventListener("mousemove",_.cf);a.addEventListener("MSPointerDown",_.cf);a.addEventListener("pointerdown",_.cf);a.addEventListener("touchstart",_.cf);a.addEventListener("wheel",_.cf)}});});
