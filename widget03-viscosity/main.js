import Graph from "./js/graph.js";



var ob2 = document.getElementById("canvas_1");
var slider_y1= 350;
var slider_y2= 450;
var ax = 90;
var bx = 390;
var by= 180;
var ay= 100;




// Create a Two.js instance
var two = new Two({
  fullscreen: false,
  width: 500,
  height: 800,
}).appendTo(ob2);

//creating twojs lines for graph


var points1 = [
  new Two.Anchor(ax, ay),
  new Two.Anchor(bx, ay),
  new Two.Anchor(bx, by),
  new Two.Anchor(ax, by),
  
];
var points2 = [
  new Two.Anchor(ax, by),
  new Two.Anchor(bx, by),
  new Two.Anchor(bx, by+10),
  new Two.Anchor(ax, by+10),
];
var points3= [
  new Two.Anchor(ax, ay),
  new Two.Anchor(ax+50, ay),
  new Two.Anchor(ax+50, ay-10),
  new Two.Anchor(ax, ay-10),
];


var graph1 = new Graph(two, points1," " , "#276BB0", 0.5, 4);
var graph2 = new Graph(two, points2," " , "#grey", 0.5, 4);
var graph3 = new Graph(two, points3," " , "#grey", 0.5, 4);


//sliders
var mue = document.getElementById("mue");
var time = document.getElementById("time");
var initialValue = 1;

//slider for mue
mue.oninput = (()=>{
  let value1= parseFloat(document.querySelector("#mue").value);
  let value2=parseFloat(document.querySelector("#time").value);
  time.value=initialValue;
  console.log(value1,value2);
  


  two.update();
})
//adding text
var muetext= two.makeText("μ",25,305);
muetext.size = 32;
var pos = two.makeText("1 centipoise",100,330);
pos.size = 15;
var pos1 = two.makeText("100 centipoise",440,330);
pos1.size = 15;
var loadtext1 = two.makeText("t", 25, 383);
loadtext1.size = 32;
var pos = two.makeText("0 sec",80,410);
pos.size = 15;
var pos1 = two.makeText("100 sec",420,410);
pos1.size = 15;
//adding rectangle
var l1 = two.makeLine(ax,ay,bx,ay);
var l2 = two.makeLine(ax,ay,ax,by);
var l1 = two.makeLine(ax,by,bx,by);
var l1 = two.makeLine(bx,by,bx,ay);
two.update();

//slider for load
time.oninput = (()=>{
  let value1= parseFloat(document.querySelector("#mue").value);
  let value2=parseFloat(document.querySelector("#time").value);
  let mueval= value1*2;
  let timeval= value2*5;
  console.log(value1,value2)
  if(value1==1){
    points3[0].x= ax + timeval;
    points3[1].x= ax+50 + timeval;
    points3[2].x= ax+50 + timeval ; 
    points3[3].x= ax + timeval;
    }
    if(value2==1){
      points3[0].x= ax ;
      points3[1].x= ax+50 ;
      points3[2].x= ax+50 ; 
      points3[3].x= ax ;
      }
    else{
      points3[0].x= ax + timeval*2/mueval;
      points3[1].x= ax+50 + timeval*2/mueval;
      points3[2].x= ax+50 + timeval*2/mueval;
      points3[3].x= ax + timeval*2/mueval ;
    }
    two.update();
  


})
