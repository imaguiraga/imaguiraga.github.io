
function jointjsGraph(nodes,id,width,height){
    var graph = new joint.dia.Graph();
    var cells = [];

    var registry = {};
    
    var paper = new joint.dia.Paper({
        el: $("#"+id),
        width: width,
        height: height,
        gridSize: 1,
        model: graph
    });
    

    $.each(nodes,function(key,value){
        var parentId = null;
        if(registry[key] === undefined){
            var parent = new joint.shapes.basic.Rect({
                position: { x: 100, y: 30 },
                size: { width: 100, height: 30 },
                attrs: { rect: { fill: 'blue' }, text: { text: key, fill: 'white' } }
            });
            
            cells.push(parent);
            parentId = parent.id;
            registry[key] = parentId;

        }else{
           parentId = registry[key] ;
        }
        
        //add child nodes
        $.each(value,function(key,value){
            var childId = null;
            if(registry[value] === undefined){
                var child = new joint.shapes.basic.Rect({
                    position: { x: 100, y: 30 },
                    size: { width: 100, height: 30 },
                    attrs: { rect: { fill: 'blue' }, text: { text: value, fill: 'white' } }
                });
                
                cells.push(child); 
                childId = child.id;
                registry[value] = childId;
            }else{
                childId = registry[value] ;
            }
            var link = new joint.dia.Link({
                source: { id: parentId },
                target: { id: childId}
            });
            cells.push(link);
        });
        
    });


    /*
    var platform = rect.clone();
    device.attr("text",{text:"platform"});
    cells.push(platform);
    //*/
    
  
    graph.addCells(cells);
    
    // joint.layout.DirectedGraph.layout(graph, { setLinkVertices: false });
    graph.on('all', function(eventName, cell) {
        console.log(arguments);
    });
    /*
    rect.on('change:position', function(element) {
        console.log(element.id, ':', element.get('position'));
    });
    //*/
}
