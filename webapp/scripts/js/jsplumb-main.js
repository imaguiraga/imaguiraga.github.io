
function jsplumbGrpah(){

    jsPlumb.ready(function() {
        var firstInstance = jsPlumb.getInstance();
        firstInstance.importDefaults({
          Connector : [ "Bezier", { curviness: 150 } ],
          Anchors : [ "TopCenter", "BottomCenter" ]
        });
    
        firstInstance.connect({
          source:"container1", 
          target:"container0", 
          scope:"someScope" 
        });
    });

}
