var msuStore;

require([
    "dojo/dom"
  , "dojo/parser"
  , "dojo/store/Memory"
  , "dojo/store/Observable"
  , "dojo/data/ItemFileWriteStore"
  , "dijit/layout/BorderContainer"
  , "dijit/layout/TabContainer"
  , "dijit/layout/ContentPane"
  , "dijit/form/VerticalSlider"
  , "dijit/form/VerticalRule"
  , "dijit/form/VerticalRuleLabels"
  , "dojo/domReady!"]
  , function() {dojo.ready( ready ) } ) // the callback function to run when done asynchronously

function ready() {
    // init needed to begin program after successful loading
    // run loading icon for start of program
    var n = dojo.byId("preLoader");
    dojo.fadeOut({
node:n,
duration:720,
onEnd:function(){
dojo.style(n,"display","none");
}
}).play();


};
