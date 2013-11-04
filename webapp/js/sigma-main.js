
$(document).ready(function(){
  var domElement = document.getElementById("sigmajs");

  var sigInst = sigma.init(domElement);
  sigInst.addNode('hello', {
    label: 'Hello',
    x: Math.random(),
    y: Math.random()
  }).addNode('world', {
    label: 'World!',
    x: Math.random(),
    y: Math.random()
  }).addEdge('hello','world');

  sigInst.drawingProperties({
    defaultEdgeType: 'curve'
  }).mouseProperties({
    maxRatio: 32
  });
}
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