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
      
      
      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      

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

      Symbol.bindElementAction(compId, symbolName, "${test}", "click", function(sym, e) {
         window.open("test/index.html","_self");

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

      Symbol.bindElementAction(compId, symbolName, "${test}", "touchstart", function(sym, e) {
         window.open("test/index.html","_self");

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'plantilla'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${icayudaact}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         
      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${icayuda}", "click", function(sym, e) {
         sym.play("ayuda");

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${icayuda}", "touchstart", function(sym, e) {
         sym.play("ayuda");

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Group_4}", "click", function(sym, e) {
         sym.play("glosario");

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Group_4}", "touchstart", function(sym, e) {
         sym.play("glosario");

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${glosario}", "click", function(sym, e) {
         sym.play("glosario");
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${glosario}", "touchstart", function(sym, e) {
         sym.play("glosario");

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${ic-biblioteca-act}", "touchstart", function(sym, e) {
         sym.play("bibliografia");

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${ic-biblioteca-act}", "click", function(sym, e) {
         sym.play("bibliografia");

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${ic_library_books_black_24px2}", "click", function(sym, e) {
         sym.play("bibliografia");

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${ic_library_books_black_24px2}", "touchstart", function(sym, e) {
         sym.play("bibliografia");

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${ic_salir_copy}", "click", function(sym, e) {
         sym.play("salir");

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${ic_salir_copy}", "touchstart", function(sym, e) {
         sym.play("salir");

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${salir}", "click", function(sym, e) {
         sym.play("salir");

      });
         //Edge binding end

      

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
         sym.stop("0");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.stop("0");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop("0");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         sym.stop("0");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5562, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6104, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6579, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7176, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7305, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7368, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${salir}", "touchend", function(sym, e) {
         sym.play("salir");

      });
      //Edge binding end

   })("plantilla");
   //Edge symbol end:'plantilla'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-772579");