
(function(compId){var _=null,y=true,n=false,x1='6.0.0',x2='5.0.0',x4='rgba(0,0,0,0)',g='image',e22='${Player}',e28='${Frame2_Copy}',e20='${bulls2}',i='none',e24='${vs2}',x3='6.0.0.400',e30='${you3}',o='opacity',lf='left',e21='${Frame1_Line}',h='height',rz='rotateZ',e29='${Frame2_CopyNow}',e27='${Button}',e26='${Lakers2}',zy='scaleY',e31='${Logo}',bt='bottom',tp='top',e23='${vs22}',x19='rgba(255,255,255,1)',e25='${Frame1_Tonight}',zx='scaleX';var g11='vs2.png',g17='Frame2_CopyNow.png',g7='Player.png',g12='you.png',g9='vs.png',g15='Frame2_Copy.png',g6='BackgroundColour.jpg',g8='Lakers.png',g10='bulls.png',g16='Logo.png',g18='Button.png',g13='Frame1_Line.png',g5='Background.jpg',g14='Frame1_Tonight.png';var im='images/',aud='media/',vid='media/',js='js/',fonts={},opts={'gAudioPreloadPreference':'auto','gVideoPreloadPreference':'auto'},resources=[],scripts=[],symbols={"stage":{v:x1,mv:x2,b:x3,stf:i,cg:i,rI:n,cn:{dom:[{id:'Background',t:g,r:['0px','0px','300px','600px','auto','auto'],f:[x4,im+g5,'0px','0px']},{id:'BackgroundColour',t:g,r:['0px','0px','300px','600px','auto','auto'],f:[x4,im+g6,'0px','0px']},{id:'Player',t:g,r:['-323px','auto','480px','535px','auto','7px'],br:["0px","0px","0px","0px"],f:[x4,im+g7,'0px','0px'],filter:[0,0,1,1,0,0,0,0,"rgba(0,0,0,0)",0,0,0]},{id:'Lakers2',t:g,r:['0px','0px','300px','600px','auto','auto'],o:'0',f:[x4,im+g8,'0px','0px'],tf:[[],[],[],['1.2','1.2']]},{id:'vs2',t:g,r:['0px','0px','300px','600px','auto','auto'],f:[x4,im+g9,'0px','0px']},{id:'bulls2',t:g,r:['0px','0px','300px','600px','auto','auto'],f:[x4,im+g10,'0px','0px']},{id:'vs22',t:g,r:['0px','0px','300px','600px','auto','auto'],f:[x4,im+g11,'0px','0px']},{id:'you3',t:g,r:['0px','0px','300px','600px','auto','auto'],f:[x4,im+g12,'0px','0px']},{id:'Frame1_Line',t:g,r:['0px','-46px','300px','600px','auto','auto'],o:'0',f:[x4,im+g13,'0px','0px'],tf:[[],[],[],['0.71','0.71']]},{id:'Frame1_Tonight',t:g,r:['-1px','42px','300px','600px','auto','auto'],o:'0',f:[x4,im+g14,'0px','0px'],tf:[[],[],[],['1.27','1.27']]},{id:'Frame2_Copy',t:g,r:['0px','0px','300px','600px','auto','auto'],o:'0',f:[x4,im+g15,'0px','0px'],tf:[[],[],[],['1.44','1.44']]},{id:'Logo',t:g,r:['0px','0px','300px','600px','auto','auto'],o:'0',f:[x4,im+g16,'0px','0px']},{id:'Frame2_CopyNow',t:g,r:['0px','0px','300px','600px','auto','auto'],o:'0',f:[x4,im+g17,'0px','0px'],tf:[[],[],[],['1','1.5']]},{id:'Button',t:g,r:['0px','0px','300px','600px','auto','auto'],o:'0',f:[x4,im+g18,'0px','0px'],tf:[[],[],[],['1.32','1.32']]}],style:{'${Stage}':{isStage:true,r:[undefined,undefined,'300px','600px'],overflow:'hidden',f:[x19]}}},tt:{d:11000,a:y,data:[["eid117",zx,1500,250,"linear",e20,'1.2','1'],["eid49",zx,1000,1630,"linear",e21,'0.71','1'],["eid17",h,0,11000,"linear",e22,'600px','535px'],["eid121",o,1750,250,"linear",e23,'0','1'],["eid128",o,3500,250,"linear",e23,'1','0'],["eid115",o,1250,250,"linear",e24,'0','1'],["eid130",o,3500,250,"linear",e24,'1','0'],["eid34",tp,500,250,"linear",e25,'42px','0px'],["eid114",zx,1250,250,"linear",e24,'1.2','1'],["eid122",zy,1750,250,"linear",e23,'1.2','1'],["eid111",o,1000,250,"linear",e26,'0','1'],["eid131",o,3500,250,"linear",e26,'1','0'],["eid93",zy,5500,250,"easeOutQuad",e27,'1.32','1'],["eid104","filter.invert",7260,0,"easeOutQuad",e22,'0','0'],["eid83",zx,4750,250,"easeOutQuad",e28,'1.44','1'],["eid55",tp,1000,1630,"linear",e21,'-46px','0px'],["eid87",o,5500,250,"easeOutQuad",e27,'0.000000','1'],["eid74",zx,4000,250,"easeOutQuad",e29,'1.5','1'],["eid119",zy,1500,250,"linear",e20,'1.2','1'],["eid132",zx,2000,250,"linear",e30,'1.2','1'],["eid113",zy,1000,250,"linear",e26,'1.2','1'],["eid6",rz,0,11000,"linear",e22,'0deg','10deg'],["eid19",bt,0,11000,"linear",e22,'-96px','7px'],["eid135",zy,2000,250,"linear",e30,'1.2','1'],["eid120",zx,1750,250,"linear",e23,'1.2','1'],["eid3",lf,0,11000,"linear",e22,'12px','-323px'],["eid133",o,2000,250,"linear",e30,'0','1'],["eid134",o,3500,250,"linear",e30,'1','0'],["eid118",o,1500,250,"linear",e20,'0','1'],["eid129",o,3500,250,"linear",e20,'1','0'],["eid15",tp,0,9778,"linear",e22,'148px','auto'],["eid98",tp,11000,0,"linear",e22,'auto','auto'],["eid28",zy,500,250,"linear",e25,'1.27','1'],["eid112",zx,1000,250,"linear",e26,'1.2','1'],["eid51",lf,1000,0,"linear",e21,'0px','0px'],["eid116",zy,1250,250,"linear",e24,'1.2','1'],["eid33",lf,500,250,"linear",e25,'-1px','0px'],["eid92",zx,5500,250,"easeOutQuad",e27,'1.32','1'],["eid44",o,1000,1630,"linear",e21,'0.000000','1'],["eid60",o,3500,250,"linear",e21,'1','0'],["eid84",zy,4750,250,"easeOutQuad",e28,'1.44','1'],["eid69",o,4000,250,"easeOutQuad",e29,'0','1'],["eid75",zy,4000,250,"easeOutQuad",e29,'1.5','1'],["eid78",o,4750,250,"easeOutQuad",e28,'0.000000','1'],["eid22",o,500,250,"linear",e25,'0.000000','1'],["eid62",o,3500,250,"linear",e25,'1','0'],["eid27",zx,500,250,"linear",e25,'1.27','1'],["eid50",zy,1000,1630,"linear",e21,'0.71','1'],["eid96",o,6000,750,"easeOutQuad",e31,'0.000000','1']]}}};AdobeEdge.registerCompositionDefn(compId,symbols,fonts,scripts,resources,opts);})("EDGE-411651457");
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;Edge.registerEventBinding(compId,function($){
//Edge symbol: 'stage'
(function(symbolName){})("stage");
//Edge symbol end:'stage'
})})(AdobeEdge.$,AdobeEdge,"EDGE-411651457");