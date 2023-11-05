import eigenLine from "./js/line.JS";
import Graph from "./js/graph.js";



var ob2 = document.getElementById("canvas_1");
var slider_y1= 350;
var slider_y2= 450;
var ax = 120;
var bx = 380;
var by= 180;
var ay= 100;




// Create a Two.js instance
var two = new Two({
  fullscreen: false,
  width: 500,
  height: 800,
}).appendTo(ob2);

//creating twojs lines for graph
var domian = new eigenLine(two, 60, 140, 440, 140, 4, "black", "arrow");

var points1 = [
  new Two.Anchor(ax, ay),
  new Two.Anchor(bx, ay),
  new Two.Anchor(bx, by),
  new Two.Anchor(ax, by),
  
];



var graph1 = new Graph(two, points1," " , "#276BB0", 0.5, 4);


//sliders
var mue = document.getElementById("mue");
var load = document.getElementById("load");
let mueval=0;
let loadval=0;
var initialValue = 0;

//slider for mue
mue.oninput = (()=>{
  let value1= parseFloat(document.querySelector("#mue").value);
  let value2=parseFloat(document.querySelector("#load").value);
  mueval=value1/100;
  loadval=value2*100;
  load.value=initialValue;

  two.update();
  

})
//adding text
var loadtext = two.makeText("P", 30, 153);
loadtext.size = 32;
var statement = two.makeText("For different poisson's ratio we can show variation",250,240);
statement.size = 20;
var muetext= two.makeText("μ",25,305);
muetext.size = 32;
var pos = two.makeText("0",60,350);
pos.size = 15;
var pos1 = two.makeText("0.5",400,350);
pos1.size = 15;
var loadtext1 = two.makeText("p", 25, 383);
loadtext1.size = 32;
var pos = two.makeText("100KN",80,410);
pos.size = 15;
var pos1 = two.makeText("1000KN",420,410);
pos1.size = 15;
//adding rectangle
var l1 = two.makeLine(ax,ay,bx,ay);
var l2 = two.makeLine(ax,ay,ax,by);
var l1 = two.makeLine(ax,by,bx,by);
var l1 = two.makeLine(bx,by,bx,ay);
two.update();

//slider for load
load.oninput = (()=>{
  let value1= parseFloat(document.querySelector("#mue").value);
  let value2=parseFloat(document.querySelector("#load").value);
  mueval=value1/50;
  loadval=value2*100;
  //update points of your path
  if(value1==0){
  points1[0].x= ax - loadval/30;
  points1[1].x= bx + loadval/30
  points1[3].x= ax - loadval/30;
  points1[2].x= bx + loadval/30;
  }
  else{
    points1[0].x= ax - loadval/30;
    points1[1].x= bx + loadval/30
    points1[3].x= ax - loadval/30;
    points1[2].x= bx + loadval/30;
    points1[0].y= ay + mueval*(loadval/50);
    points1[1].y= ay + mueval*(loadval/50);
    points1[2].y= by - mueval*(loadval/50);
    points1[3].y= by - mueval*(loadval/50);
  }
  two.update();
})
