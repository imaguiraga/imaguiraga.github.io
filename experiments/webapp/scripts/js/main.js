
$(document).ready(function(){
    var nodes = {
            
        "platform":[],
        "mobile":["ios", "winphone", "android"],
        "web":[],
        
        "device":["mobile", "desktop"],
        
        "html5":["phonegapSDK",  "titaniumSDK", "tideSDK"],
        
        "tideSDK":["desktop"],
        
        "rapSDK":[ "html5"],
        
        "titaniumSDK":["mobile"],
        
        "phonegapSDK":["mobile"],
        
        "openFLSDK":[ "html5"],
        
        "haxeSDK":["openFLSDK"],
        
        "nodejsSDK":[],
        
        "gwtSDK":["html5"],
        
        "ios":[],
        
        "winphone":[],
        
        "android":[],
        
        "desktop":[]
    };
    
    sigmaGraph(nodes);
    draculaGraph(nodes,"canvas",600,600);
    jointjsGraph(nodes,"jointjs",600,200); 
    //jsvGraph(nodes,"jsvgraph",600,600); 
});

/*
GWT->HTML5
HAXE->OpenFL
OpenFL->HTML5
OpenFL->Flash
OpenFL->CPP
RAP->HTML5
HTML5->PhoneGAP
PhoneGAP-> WP
PhoneGAP-> IOS
PhoneGAP-> AND
PhoneGAP-> DESKTOP
HTML5->AppCelerator
AppCelerator-> WP
AppCelerator-> IOS
AppCelerator-> AND
AppCelerator-> DESKTOP
HTML5{color:#c6531e}
 */
function draculaGraph(nodes,id,width,height){
    /* First: Write a custom node render function. */
    var render = function(r, n) {
            /* the Raphael set is obligatory, containing all you want to display */
            var set = r.set().push(
                /* custom objects go here */
                r.rect(n.point[0]-30, n.point[1]-13, 62, 86)
                    .attr({"fill": "#fa8", "stroke-width": 2, r : "9px"}))
                    .push(r.text(n.point[0], n.point[1] + 30, n.id)
                        .attr({"font-size":"20px"}));
            /* custom tooltip attached to the set */
            set.items.forEach(
                function(el) {
                    el.tooltip(r.set().push(r.rect(0, 0, 30, 30)
                        .attr({"fill": "#fec", "stroke-width": 1, r : "9px"})))});
            return set;
        };
     
    
    var g = new Graph();
    $.each(nodes,function(key,value){
        var parent = key;
        g.addNode(parent);//,{render : render});
        $.each(value,function(key,value){
            g.addEdge(parent, value, { directed : true } );
        });
    });

    /* layout the graph using the Spring layout implementation */
    var layouter = new Graph.Layout.Spring(g);
    layouter.layout();
     
    /* draw the graph using the RaphaelJS draw implementation */
    var renderer = new Graph.Renderer.Raphael(id, g, width, height);
    renderer.draw();
}

function jsvGraph(nodes,id,width,height){
   var g = new Graph(id, width, height );
    g.repulsion = g.repulsion * 2; // stronger repulsion
    g.spring_length = 50; // longer springs

     $.each(nodes,function(key,value){
        var parent = key;
        g.createVertex(parent);//,{render : render});
        $.each(value,function(key,value){
            g.createVertex(value)
            style = "stroke: #666; stroke-width: 5;";
            g.createEdge(parent,value,style);
        });
    });
    g.go(); 
    
}