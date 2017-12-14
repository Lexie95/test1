var myColor = ['#FE2F2A', //0.red
            '#ECC2A8', // 1.skin1
            '#264496', // 2.blue
            '#563E7F', // 3.purple 3
            '#A2788D',// 4.purple 2
            '#DFA691',//5.skin 2
            '#C4B6C1' // 6.warm grey
  ];

function setup() {
  createCanvas(windowWidth, 2000);
  background(105);
}

function draw() {
  
  fill(100);
  rect(0,0, windowWidth,500);
  fill(100);
  rect(0,0, windowWidth,500);
  fill(100);
  rect(0,0, windowWidth,500);
  
}

function windowResized(){
    resizeCanvas(windowWidth,windowHeight);
}