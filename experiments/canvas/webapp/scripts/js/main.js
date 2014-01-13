/*
* ...
* @author
*/
var Main = (function () {
    function Main() {
    }
    Main.main = function () {
        var cScanView = new CScanView("tutorial");
        $("#bitmap-slider-range").slider({
            range: true,
            min: 0,
            max: 511,
            values: [0, 511],
            slide: function (event, ui) {
                $("#bitmap-range").val(ui.values[0] + " - " + ui.values[1]);
                cScanView.updateRange(ui.values[0], ui.values[1], cScanView.buffer);
            }
        });

        $("#bitmap-range").val($("#bitmap-slider-range").slider("values", 0) + " - " + $("#bitmap-slider-range").slider("values", 1));
    };
    return Main;
})();

var CScanView = (function () {
    function CScanView(id) {
        console.log("this = " + this);
        var scan = this;
        this.palette = [];
        this.canvas = document.getElementById(id);

        this.layover = this.canvas.cloneNode();
        this.canvas.parentNode.appendChild(this.layover);
        this.layover.onmousemove = function (evt) {
            var rect = this.getBoundingClientRect();
            var x0 = evt.x - rect.left;
            var y0 = evt.y - rect.top;
            if (this.getContext) {
                var ctx = this.getContext("2d");

                //clear drawing area
                ctx.save();
                ctx.clearRect(0, 0, this.width, this.height);
                ctx.beginPath();
                ctx.strokeStyle = "black";
                ctx.lineWidth = 1;
                ctx.moveTo(0, y0);
                ctx.lineTo(this.width, y0);
                ctx.moveTo(x0, 0);
                ctx.lineTo(x0, this.height);
                ctx.stroke();
                ctx.restore();
            }
        };

        var SIZE = this.canvas.width * this.canvas.height;

        this.buffer = CScanView.initialiseBuffer(SIZE);
        this.buffer = CScanView.createRandomSquares(this.buffer, this.canvas.width, this.canvas.height);

        this.palette = CScanView.palette();
        this.draw();
    }
    CScanView.palette = function () {
        var canvas = document.createElement("canvas");
        canvas.width = 512;
        canvas.height = 1;
        var palette = [];
        if (canvas.getContext) {
            var ctx = canvas.getContext('2d');

            // Create gradient
            var grd = ctx.createLinearGradient(0, 0, canvas.width, 0);
            grd.addColorStop(0, "blue");
            grd.addColorStop(0.5, "yellow");
            grd.addColorStop(1, "red");

            // Fill with gradient
            ctx.fillStyle = grd;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

            //create palette
            var data = imgData.data;

            for (var i = 0; i < canvas.width; i++) {
                var offset = 4 * i;
                palette.push({
                    value: [
                        data[offset + 0],
                        data[offset + 1],
                        data[offset + 2],
                        data[offset + 3]
                    ]
                });
            }
            console.log("palette=" + palette.length);
        }
        return palette;
    };

    CScanView.createRandomSquares = function (buffer, width, height) {
        var view = new Uint16Array(buffer);

        for (var i = 0; i < 30; i++) {
            var x0 = Math.floor(Math.random() * (width - 20));
            var y0 = Math.floor(Math.random() * (height - 20));
            var value = Math.floor(Math.random() * 10);
            value = Math.floor(511 / value);
            value = Math.floor(Math.random() * 512);

            x0 = x0 + y0 * width;

            for (var r = 0; r < 20; r++) {
                for (var c = 0; c < 30; c++) {
                    var index = r * width + x0 + c;
                    view[index] = value;
                }
            }
        }
        return buffer;
    };

    CScanView.initialiseBuffer = function (size) {
        var buffer = new ArrayBuffer(size * Uint16Array.BYTES_PER_ELEMENT);
        var view = new Uint16Array(buffer);

        for (var i = 0; i < size; i++) {
            var value = Math.floor(Math.random() * 511);
            view[i] = value;
        }
        return buffer;
    };

    CScanView.prototype.updateRange = function (min, max, buffer) {
        var canvas = this.canvas;
        var view = new Uint16Array(this.buffer);

        if (canvas.getContext) {
            var ctx = canvas.getContext('2d');
            var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            var data = imgData.data;

            for (var i = 0; i < view.length; i++) {
                var offset = 4 * i;

                //lookup palette value
                var value = view[i];
                var color = this.palette[value];
                data[offset + 0] = color.value[0];
                data[offset + 1] = color.value[1];
                data[offset + 2] = color.value[2];
                data[offset + 3] = color.value[3];

                if (value < min || value > max) {
                    data[offset + 3] = 0;
                }
            }
            ctx.putImageData(imgData, 0, 0);
        }
    };

    CScanView.prototype.draw = function () {
        var canvas = this.canvas;
        var view = new Uint16Array(this.buffer);

        if (canvas.getContext) {
            var ctx = canvas.getContext('2d');
            var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

            //create palette
            var data = imgData.data;
            var length = view.length;
            console.log(" length=" + length);
            for (var i = 0; i < length; i++) {
                var offset = 4 * i;

                //lookup palette value
                var value = view[i];
                var color = this.palette[value];
                if (typeof color === "undefined") {
                    console.log(i + " color=" + value);
                }
                data[offset + 0] = color.value[0];
                data[offset + 1] = color.value[1];
                data[offset + 2] = color.value[2];
                data[offset + 3] = color.value[3];
            }
            ctx.putImageData(imgData, 0, 0);
            return imgData;
        }
    };
    return CScanView;
})();

$(document).ready(function () {
    Main.main();
});
