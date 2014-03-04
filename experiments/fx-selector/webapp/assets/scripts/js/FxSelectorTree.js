///<reference path="d3.d.ts" />
var FxSelectorTree = (function () {
    //"#body",720, 500
    function FxSelectorTree(placeholder, height, width) {
        this.m = [10, 60, 10, 60], this.w = width - this.m[1] - this.m[3];
        this.h = height - this.m[0] - this.m[2];
        this.i = 0;
        this.root = null;

        this.tree = d3.layout.tree().size([this.h, this.w]);
        var sep = this.tree.separation;
        this.diagonal = d3.svg.diagonal().projection(function (d) {
            return [d.y - 10, d.x];
        });

        this.vis = d3.select(placeholder)
		.style("width",String(width)+"px").style("height",String(height)+"px")
		.append("svg:svg").attr("width", "100%").attr("height", "100%").attr("viewBox", "0 0 " + String(this.w + this.m[1] + this.m[3]) + " " + String(this.h + this.m[0] + this.m[2])).append("svg:g").attr("transform", "translate(" + this.m[3] + "," + this.m[0] + ")");
        
		this.vis.append('svg:defs').append('svg:marker').attr('id', 'end-arrow').attr('viewBox', '0 -5 10 10').attr('refX', 6).attr('refy', 0).attr('markerWidth', 4).attr('markerHeight', 4).attr('orient', 'auto').append('svg:path').attr('d', 'M0,-5L10,0L0,5').attr('fill', '#000');

        this.vis.append("g").attr("id", "links");
        this.vis.append("g").attr("id", "nodes");

    }
    FxSelectorTree.prototype.show = function (json) {
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

    FxSelectorTree.prototype.update = function (source) {
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

		var _this = this;
		setTimeout(
			function(){
			//_this.updateLinks(_this.vis, links, source, duration);
			},
		0);
		setTimeout(
			function(){
			//_this.updateNodes(_this.vis, links, source, duration);
			},
		0);
        this.updateLinks(this.vis, links, source, duration);
        this.updateNodes(this.vis, nodes, source, duration);

        // Stash the old positions for transition.
        nodes.forEach(function (d) {
            d.x0 = d.x;
            d.y0 = d.y;
        });
        // updateRegion(vis,nodes);
    };

    FxSelectorTree.prototype.updateNodes = function (svg, nodes, source, duration) {
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
            return d.children || d._children ? "-1.35em" : ".35em";
        }).attr("text-anchor", function (d) {
            return d.children || d._children ? "end" : "start";
        }).text(function (d) {
            return d.name;
        }).style("fill-opacity", 1e-6);

        nodeEnter.append("svg:text").attr("x", function (d) {
            return -8;
        }).attr("y", function (d) {
            return 6;
        }).attr("text-anchor", function (d) {
            return "start";
		})
        //}).html(function (d) {
        //    return IconMoonFont.getTspan(d.icon);
        //})
		.style("fill-opacity", 1e-6).style("cursor","pointer")
		 .append("tspan")
			.style("font-family",IconMoonFont.fontFamily)
			//.style("cursor","pointer")
			.text(function (d) {
				return IconMoonFont.getCode(d.icon);
			});//*/
			

        //Update
        // Transition nodes to their new position.
        var nodeUpdate = node.transition().duration(duration).attr("transform", function (d) {
			if(d.type === "root"){
				return "translate(" + (d.y-4) + "," + d.x + ")";
			}else{
				return "translate(" + (d.y+4) + "," + d.x + ")";
			}
            
        });

        //make cirlce visible
        nodeUpdate.select("circle").attr("r", 12).style("fill", function (d) {
            return d._children ? "lightsteelblue" : "#fff";
        });

        //make text visible
        nodeUpdate.selectAll("text").style("fill-opacity", 1);

        //Exit
        // Transition exiting nodes to the parent's new position.
        var nodeExit = node.exit().transition().duration(duration).attr("transform", function (d) {
            return "translate(" + source.y + "," + source.x + ")";
        }).remove();

        nodeExit.select("circle").attr("r", 1e-6);

        nodeExit.selectAll("text").style("fill-opacity", 1e-6);
    };

    FxSelectorTree.prototype.updateLinks = function (svg, links, source, duration) {
        // Update the links…
        var link = this.vis.select("#links").selectAll(".link").data(links, function (d) {
            return d.source.x + "-" + d.source.name + d.source.y + "-" + d.target.x + "-" + d.target.y + d.target.name;
        });

        var _this = this;

        // Enter any new links at the parent's previous position.
		var insert = link.enter().insert("svg:path", "g");
		//IE has a bug for markers		
        insert.attr("class", "link").style('marker-start', 'url(#start-arrow)').style('marker-end', 'url(#end-arrow)').attr("d", function (d) {
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

    FxSelectorTree.prototype.updateRegion = function (vis, nodes) {
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
    FxSelectorTree.prototype.toggle = function (d) {
        if (d.entries) {
            d._children = d.entries;
            d.entries = null;
        } else {
            d.entries = d._children;
            d._children = null;
        }
    };
    return FxSelectorTree;
})();

var IconMoonFont = (function () {
    function IconMoonFont() {
    }
    IconMoonFont.getTspan = function (icon) {
        var code = IconMoonFont[icon];
        if (code) {
            return "<tspan style=\"font-family: " + IconMoonFont.fontFamily + ";cursor: pointer;\">" + code + "</tspan>";
        } else {
            return "";
        }
    };

    IconMoonFont.getCode = function (icon) {
        var code = IconMoonFont[icon];
        if (code) {
            return IconMoonFont[icon];
        } else {
            return "";
        }
    };
    IconMoonFont.fontFamily = "'icomoon'";

    IconMoonFont["fa-screen"] = "\ue600";

    IconMoonFont["fa-laptop"] = "\ue601";

    IconMoonFont["fa-mobile"] = "\ue602";//"\ue602";

    IconMoonFont["fa-mobile2"] = "\ue603";

    IconMoonFont["fa-tablet"] = "\ue604";

    IconMoonFont["fa-tv"] = "\ue605";

    IconMoonFont["fa-tree"] = "\ue606";
	
	IconMoonFont["fa-sitemap"] = IconMoonFont["fa-tree"];

    IconMoonFont["fa-user"] = "\ue607";

    IconMoonFont["fa-users"] = "\ue608";

    IconMoonFont["fa-storage"] = "\ue609";

    IconMoonFont["fa-uniF51D"] = "\ue60a";

    IconMoonFont["fa-uniF51C"] = "\ue60b";

    IconMoonFont["fa-server"] = "\ue60c";

    IconMoonFont["fa-servers"] = "\ue60d";
	IconMoonFont["fa-serverbox"] = "\ue60d";

    IconMoonFont["fa-network"] = "\ue60e";

    IconMoonFont["fa-hdtv"] = "\ue60f";

    IconMoonFont["fa-user2"] = "\ue610";

    IconMoonFont["fa-friends"] = "\ue611";

    IconMoonFont["fa-monitor"] = "\ue612";
	IconMoonFont["fa-desktop"] = "\ue612";
	
    IconMoonFont["fa-treediagram"] = "\ue613";

    IconMoonFont["fa-iphone"] = "\ue614";

    IconMoonFont["fa-nexus"] = "\ue615";

    IconMoonFont["fa-imac"] = "\ue616";

    IconMoonFont["fa-tablet2"] = "\ue617";

    IconMoonFont["fa-touchpad"] = "\ue618";

    IconMoonFont["fa-sidebar"] = "\ue619";

    IconMoonFont["fa-browser"] = "\ue61a";
	IconMoonFont["fa-client"] = "\ue61a";
    IconMoonFont["fa-android"] = "\ue61b";
    IconMoonFont["fa-windows"] = "\ue61c";
    IconMoonFont["fa-apple"] = "\ue61d";
    IconMoonFont["fa-osx"] = "\ue61d";
    IconMoonFont["fa-mac"] = "\ue61d";
    IconMoonFont["fa-linux"] = "\ue61e";
    IconMoonFont["fa-cogs"] = "\ue61f";
    IconMoonFont["fa-device"] = "\ue61f";
	IconMoonFont["fa-ios"] = "\ue61d";
	IconMoonFont["fa-winphone"] = "\ue61c";

    return IconMoonFont;
})();