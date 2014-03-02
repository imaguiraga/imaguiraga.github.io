///<reference path="d3.d.ts" />
var WorkflowTree = (function () {
    //"#body",720, 500
    function WorkflowTree(placeholder, height, width) {
        this.m = [10, 60, 10, 60], this.w = width - this.m[1] - this.m[3];
        this.h = height - this.m[0] - this.m[2];
        this.i = 0;
        this.root = null;

        this.tree = d3.layout.tree().size([this.h, this.w]);
        var sep = this.tree.separation;
        this.diagonal = d3.svg.diagonal().projection(function (d) {
            return [d.y - 10, d.x];
        });

        this.vis = d3.select(placeholder).append("svg:svg")
		.attr("width", "100%")
            .attr("height",  "100%")
            //.attr("width", this.w + this.m[1] + this.m[3])
            //.attr("height", this.h + this.m[0] + this.m[2])
            .attr("viewBox", "0 0 "+String(this.w + this.m[1] + this.m[3]) +" "+String(this.h + this.m[0] + this.m[2]))
		.attr("transform", "translate(" + this.m[3] + "," + this.m[0] + ")");

        this.vis.append("g").attr("id", "links");
        this.vis.append("g").attr("id", "nodes");

        this.vis.append('svg:defs').append('svg:marker').attr('id', 'end-arrow').attr('viewBox', '0 -5 10 10').attr('refX', 6).attr('refy', 0).attr('markerWidth', 4).attr('markerHeight', 4).attr('orient', 'auto').append('svg:path').attr('d', 'M0,-5L10,0L0,5').attr('fill', '#000');
    }
    WorkflowTree.prototype.show = function (json) {
        this.root = json;
        this.root.x0 = this.h / 2;
        this.root.y0 = 0;

        var _this = this;
        function toggleAll(d) {
            if (d.children) {
                d.children.forEach(_this.toggleAll);
                _this.toggle(d);
            }
        }

        // Initialize the display to show a few nodes.
        //root.children.forEach(toggleAll);
        //toggle(root.children[1]);
        //toggle(root.children[1].children[2]);
        //toggle(root.children[9]);
        //toggle(root.children[9].children[0]);
        this.update(this.root);
    };

    WorkflowTree.prototype.update = function (source) {
        var duration = d3.event && d3.event.altKey ? 5000 : 500;

        // Compute the new tree layout.
        this.tree.children(function (d) {
            return d.entries;
        });
        var nodes = this.tree.nodes(this.root).filter(function (d, i) {
            return (d.name != "root") ? d : null;
        }).reverse();

        // Normalize for fixed-depth.
        nodes.forEach(function (d) {
            d.y = d.depth * 80;
        });
        var links = this.tree.links(nodes);

        this.updateLinks(this.vis, links, source, duration);
        this.updateNodes(this.vis, nodes, source, duration);

        // Stash the old positions for transition.
        nodes.forEach(function (d) {
            d.x0 = d.x;
            d.y0 = d.y;
        });
        // updateRegion(vis,nodes);
    };

    WorkflowTree.prototype.updateNodes = function (svg, nodes, source, duration) {
        // Update the nodes…
        var _this = this;
        var node = svg.select("#nodes").selectAll("g.node").data(nodes, function (d) {
            return d.id || (d.id = ++_this.i);
        });

        //Enter
        // Enter any new nodes at the parent's current position.
        var _this = this;
        var nodeEnter = node.enter().append("svg:g").attr("class", "node").attr("transform", function (d) {
            return "translate(" + source.y + "," + source.x + ")";
        }).on("click", function (d) {
            _this.toggle(d);
            _this.update(d);
        });

        //invisible circle
        nodeEnter.append("svg:circle").attr("r", 1e-6).style("fill", function (d) {
            return d._children ? "lightsteelblue" : "#fff";
        });

        //invisible text
        nodeEnter.append("svg:text").attr("x", function (d) {
            return d.children || d._children ? -10 : 10;
        }).attr("dy", function (d) {
            return d.name === "root" ? ".35em" : "-1.35em";
        }).attr("text-anchor", function (d) {
            return d.children || d._children ? "end" : "start";
        }).text(function (d) {
            return d.name + " - " + d.ts;
        }).style("fill-opacity", 1e-6);

        //Update
        // Transition nodes to their new position.
        var nodeUpdate = node.transition().duration(duration).attr("transform", function (d) {
            return "translate(" + d.y + "," + d.x + ")";
        });

        //make cirlce visible
        nodeUpdate.select("circle").attr("r", 6).style("fill", function (d) {
            return d._children ? "lightsteelblue" : "#fff";
        });

        //make text visible
        nodeUpdate.select("text").style("fill-opacity", 1);

        //Exit
        // Transition exiting nodes to the parent's new position.
        var nodeExit = node.exit().transition().duration(duration).attr("transform", function (d) {
            return "translate(" + source.y + "," + source.x + ")";
        }).remove();

        nodeExit.select("circle").attr("r", 1e-6);

        nodeExit.select("text").style("fill-opacity", 1e-6);
    };

    WorkflowTree.prototype.updateLinks = function (svg, links, source, duration) {
        // Update the links…
        var link = this.vis.select("#links").selectAll(".link").data(links, function (d) {
            return d.source.x + "-" + d.source.name + d.source.y + "-" + d.target.x + "-" + d.target.y + d.target.name;
        });

        var _this = this;

        // Enter any new links at the parent's previous position.
        link.enter().insert("svg:path", "g").attr("class", "link").style('marker-start', 'url(#start-arrow)').style('marker-end', 'url(#end-arrow)').attr("d", function (d) {
            var o = { x: source.x0, y: source.y0 };
            return _this.diagonal({ source: o, target: o });
        }).transition().duration(duration).attr("d", _this.diagonal);

        // Transition links to their new position.
        link.transition().duration(duration).attr("d", _this.diagonal);

        //*/
        // Transition exiting nodes to the parent's new position.
        link.exit().transition().duration(duration).attr("d", function (d) {
            var o = { x: source.x, y: source.y };
            return _this.diagonal({ source: o, target: o });
        }).remove();
    };

    WorkflowTree.prototype.updateRegion = function (vis, nodes) {
        //bounding boxes
        var filtered = nodes;

        var container = vis.selectAll(".container").data(filtered);
        container.exit().remove();

        container.enter().append("g").attr("class", "container").attr("transform", function (d) {
            //find min max d.x
            var minx = Number.MAX_VALUE;
            var maxx = Number.MIN_VALUE;
            for (var i in d.children) {
                minx = Math.min(minx, d.children[i].x - 30);
                maxx = Math.max(maxx, d.children[i].x + 30);
            }

            console.log("min=" + minx + " max=" + maxx);
            d.minx = minx;
            d.maxx = maxx;

            return "translate(" + (d.children[0].y - 20) + "," + (minx) + ")";
        });

        //x0,y=0 before translation
        container.append("rect").attr("height", function (d) {
            return d.maxx - d.minx;
        }).attr("width", function (d) {
            //return off-40;
            return 60;
        });
    };

    // Toggle children.
    //
    /*
    function toggle(d) {
    if (d.children) {
    d._children = d.children;
    d.children = null;
    } else {
    d.children = d._children;
    d._children = null;
    }
    }//*/
    WorkflowTree.prototype.toggle = function (d) {
        if (d.entries) {
            d._children = d.entries;
            d.entries = null;
        } else {
            d.entries = d._children;
            d._children = null;
        }
    };
    return WorkflowTree;
})();
