/***********************
* Acciones de composición de Adobe Edge Animate
*
* Editar este archivo con precaución, teniendo cuidado de conservar 
* las firmas de función y los comentarios que comienzan con "Edge" para mantener la 
* capacidad de interactuar con estas acciones en Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // los alias más comunes para las clases de Edge

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      

      

      

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "window", "resize", function(sym, e) {
         if ($(window).width() < 780) {
             if ($(window).width() < 400) {
                 window.open("contenido-general-mobile.html", "_self");
             } else {
                 window.open("contenido-general-tablet.html", "_self");
             }
         } else {
             window.open("contenido_general-800.html", "_self");
         }
         
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'plantilla'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Rectangle8}", "click", function(sym, e) {
         sym.play("5");

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle8}", "touchstart", function(sym, e) {
         sym.play("5");

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle9}", "click", function(sym, e) {
         sym.play("6");

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle9}", "touchstart", function(sym, e) {
         sym.play("6");

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 24, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 87, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${actividad}", "click", function(sym, e) {
         window.open("actividad/index.html","_self");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${actividad}", "touchstart", function(sym, e) {
         window.open("actividad/index.html","_self");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${test}", "click", function(sym, e) {
         window.open("test/index.html","_self");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${test}", "touchstart", function(sym, e) {
         window.open("test/index.html","_self");
         

      });
      //Edge binding end

   })("plantilla");
   //Edge symbol end:'plantilla'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-4303127");