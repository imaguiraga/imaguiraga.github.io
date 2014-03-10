/* 
 * ...
 * @author 
 */
window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame       || 
           window.webkitRequestAnimationFrame || 
         window.mozRequestAnimationFrame    || 
        window.oRequestAnimationFrame      || 
          window.msRequestAnimationFrame     || 
         function( callback ){
             window.setTimeout(callback, 1000 / 60);
          };
 })();
 
class Main {
	
	static main():void 	{
		var cScanView = new CScanView("tutorial");
		$( "#bitmap-slider-range" ).slider({
			range: true,
			min: 0,
			max: 511,
			values: [ 0, 511 ],
			slide: function( event, ui ) {
				$( "#bitmap-range" ).val( ui.values[ 0 ] + " - " + ui.values[ 1 ] );
				cScanView.updateRange(ui.values[ 0 ],ui.values[ 1 ]);
			}
		});

		$( "#bitmap-range" ).val( 
			$( "#bitmap-slider-range" ).slider( "values", 0 ) +	" - " + $( "#bitmap-slider-range" ).slider( "values", 1 )
		);
	}
	
}

class DScanView{
	//cScan:CScanView;
	canvas:any;
	layover:any;
	xres:number;
	yres:number;
	buffer:any;
		
	constructor(id:string,public cScan:CScanView){
		this.canvas = document.getElementById(id);
		this.xres = this.canvas.width/512;
		this.buffer = this.cScan.buffer; 
	}
	
	draw(x,y,buffer){
		//extract buffer
		var view = new Uint16Array(buffer);
		var canvas = this.canvas;
		if (canvas.getContext){
			var ctx  = canvas.getContext("2d");
			var w = canvas.width;
			ctx.clearRect(0,0,canvas.width,canvas.height);
			ctx.save();
			ctx.beginPath();
			ctx.strokeStyle="black";
			ctx.lineWidth=1;
			var offset = x;
			var x0 = Math.floor(this.xres * view[x+this.cScan.canvas.width]);
			ctx.moveTo(x0,0);
			//ctx.moveTo(canvas.width-x0,0);
			for(var j=1; j< canvas.height;j++){
				var y = Math.floor(this.xres * view[x+this.cScan.canvas.width*j]);
				ctx.lineTo(y,j);
			}
			ctx.stroke();
			ctx.restore();
		}
		
	}
}

class BScanView{
	//cScan:CScanView;
	canvas:any;
	layover:any;
	yres:number;
	buffer:any;
		
	constructor(id:string,public cScan:CScanView){
		this.canvas = document.getElementById(id);
		//this.layover = this.canvas.cloneNode();
		//this.canvas.parentNode.appendChild(this.layover);
		this.yres = this.canvas.height/512;
		this.buffer = this.cScan.buffer; 
	}
	
	draw(x,y,buffer){
		//extract buffer
		var view = new Uint16Array(buffer);
		var canvas = this.canvas;
		if (canvas.getContext){
			var ctx  = canvas.getContext("2d");
			var h = canvas.height;
			ctx.clearRect(0,0,canvas.width,canvas.height);
			ctx.save();
			ctx.beginPath();
			ctx.strokeStyle="black";
			ctx.lineWidth=1;
			var offset = y*canvas.width;
			var y0 = Math.floor(this.yres * view[offset]);
			ctx.moveTo(0,h-y0);
			for(var i=1; i< canvas.width;i++){
				var y = Math.floor(this.yres * view[offset+i]);
				ctx.lineTo(i,h-y);
			}
			ctx.stroke();
			ctx.restore();
		}
		
	}
}


class CScanView{
	palette:any;
	canvas:any;
	layover:any;
	bscan:BScanView;
	dscan:DScanView;
	buffer:any;
	x0:number;
	y0:number;
	drawInterval:any;
	min:number;
	max:number;
	
	constructor(id:string){
		console.log("this = "+this);
		var scan = this;
		this.palette = [];
		this.canvas = document.getElementById(id);
		this.x0 = 0;
		this.y0 = 0;
		this.min = 0;
		this.max = 511;

		//this.layover = this.canvas.cloneNode();
		//this.canvas.parentNode.appendChild(this.layover);
		
		this.bscan = new BScanView("b-scan",this);
		this.dscan = new DScanView("d-scan",this);
		var _this = this;
		this.canvas.onmousemove = function(evt){//this.layover.onmousemove = function(evt){
			var rect = this.getBoundingClientRect();
			_this.x0 = evt.clientX - rect.left;//evt.x - rect.left;
			_this.y0 = evt.clientY - rect.top;
		};
		   
		var SIZE = this.canvas.width*this.canvas.height;

		this.buffer = CScanView.initialiseBuffer(SIZE);
		this.buffer = CScanView.createRandomSquares(this.buffer,this.canvas.width,this.canvas.height);
		
		this.palette = CScanView.palette();
		//compute then refesh
		/*
		this.drawInterval = window.setInterval(function(){
			_this.refresh();
		},100);//*/
		this.refresh();	
	}
	
	refresh(){
		this.drawUpdatedRange();
		this.drawRulers(this.x0,this.y0);
		this.bscan.draw(this.x0,this.y0,this.buffer);
		this.dscan.draw(this.x0,this.y0,this.buffer);
		var _this = this;
		window.requestAnimFrame(function () {
            _this.refresh();
        });
	}
		
	drawRulers(x0,y0){
		var canvas = this.canvas;
		var ctx  = canvas.getContext("2d");
		
		//clear drawing area
		ctx.save();
		//ctx.clearRect(0,0,canvas.width,canvas.height);
		ctx.beginPath();
		ctx.strokeStyle="black";
		ctx.lineWidth=1;
		ctx.moveTo(0,y0);
		ctx.lineTo(canvas.width,y0);
		ctx.moveTo(x0,0);
		ctx.lineTo(x0,canvas.height);
		ctx.stroke();
		ctx.restore();
		//this.bscan.draw(x0, y0, this.buffer);
        //this.dscan.draw(x0, y0, this.buffer);
	}		
	static palette(){
		var canvas = document.createElement("canvas");
		canvas.width=512;
		canvas.height = 1;
		var palette = [] ;
		if (canvas.getContext){
			var ctx = canvas.getContext('2d');
			// Create gradient
			var grd=ctx.createLinearGradient(0,0,canvas.width,0);
			grd.addColorStop(0,"blue");
			grd.addColorStop(0.5,"yellow");
			grd.addColorStop(1,"red");

			// Fill with gradient
			ctx.fillStyle=grd;
			ctx.fillRect(0,0,canvas.width,canvas.height);
			var imgData=ctx.getImageData(0,0,canvas.width,canvas.height);
			//create palette

			var data = imgData.data;
			//use the first line to extract the color palette
			for(var i=0; i< canvas.width;i++){
				var offset = 4*i;
				palette.push(
				  { value:[
					  data[offset+0],data[offset+1],data[offset+2],data[offset+3]
					]
				  }

				);
			}
			console.log("palette="+palette.length);
		}
		return palette;
	}
	
	static createRandomSquares(buffer,width,height){
		var view = new Uint16Array(buffer);

		for(var i = 0;i < 30;i++){
			var x0 = Math.floor(Math.random()*(width-20));
			var y0 = Math.floor(Math.random()*(height-20));
			var value = Math.floor(Math.random()*10);
			value = Math.floor(511/value);
			value = Math.floor(Math.random()*512);

			x0 = x0+y0*width;

			for (var r = 0; r < 20; r++) {
				for (var c = 0; c < 30; c++) {
					var index = r*width+x0+c;
					view[index] = value;
				}
			}
		}
		return buffer;

	}
	static createRandomData(buffer,width,height){
		var view = new Uint16Array(buffer);

		for(var i = 0;i < 30;i++){
			var x0 = Math.floor(Math.random()*(width-20));
			var y0 = Math.floor(Math.random()*(height-20));
			var value = Math.floor(Math.random()*10);
			value = Math.floor(511/value);
			value = Math.floor(Math.random()*512);

			x0 = x0+y0*width;

			for (var r = 0; r < 20; r++) {
				for (var c = 0; c < 30; c++) {
					var index = r*width+x0+c;
					view[index] = value;
				}
			}
		}
		return buffer;

	}
	
	static initialiseBuffer(size){
		var buffer = new ArrayBuffer(size*Uint16Array.BYTES_PER_ELEMENT);
		var view = new Uint16Array(buffer);

		for(var i = 0;i < size;i++){
			var value = Math.floor(Math.random()*511);
			view[i] = value;
		}
		return buffer;
	}
	
	updateRange(min,max){
		
		this.min = min;
		this.max = max;

	}
	
	drawUpdatedRange(){
		//if(this.min != this.newMin && this.max != newMax){
			//this.min = this.newMin;
			//this.max = this.newMax;
			var canvas = this.canvas;
			var view = new Uint16Array(this.buffer);
		
			if (canvas.getContext){
				var ctx = canvas.getContext('2d');
				var imgData=ctx.getImageData(0,0,canvas.width,canvas.height);
				var data = imgData.data;

				for(var i=0; i< view.length; i++){
					var offset = 4*i;
					//lookup palette value
					var value = view[i];
					var color = this.palette[value];
					data[offset+0] = color.value[0];
					data[offset+1] = color.value[1];
					data[offset+2] = color.value[2];
					data[offset+3] = color.value[3];
					this.filter(data,offset,value,this.min,this.max);
				}
				ctx.putImageData(imgData,0,0);
			}
		//}
	}
	
	filter(data,offset,value,min,max){
		if(value < min || value > max){
			data[offset+3] = 0;
		}
	}
	
	draw(){
		var canvas = this.canvas;
		var view = new Uint16Array(this.buffer);

		if (canvas.getContext){
			var ctx = canvas.getContext('2d');
			var imgData=ctx.getImageData(0,0,canvas.width,canvas.height);
			//create palette

			var data = imgData.data;
			var length = view.length;
			console.log(" length="+length);
			for(var i=0; i< length; i++){
				var offset = 4*i;
				//lookup palette value
				var value = view[i];
				var color = this.palette[value];
				if( typeof color === "undefined"){
					console.log(i+" color="+value);
				}
				data[offset+0] = color.value[0];
				data[offset+1] = color.value[1];
				data[offset+2] = color.value[2];
				data[offset+3] = color.value[3];

			}
			ctx.putImageData(imgData,0,0);
			return imgData;
		}
	}
}

$(document).ready(function() {
	Main.main();
})