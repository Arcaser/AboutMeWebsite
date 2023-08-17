function connectRects(rect1, rect2) {
    let startpoint = {x: rect1.x.baseVal.value + rect1.width.baseVal.value / 2, y: rect1.y.baseVal.value + rect1.height.baseVal.value / 2};
    
 
  
}

function connectPoints(point1, point2) {
    const svg = document.getElementById("maze_svg");
    var line = $(document.createElementNS('http://www.w3.org/2000/svg', 'line')).attr({
    x1: point1.x,
    y1: point1.y,
    x2: point2.x,
    y2: point2.y,
    stroke: "black",
    "stroke-width": "5"
  });
  svg.appendChild(line[0]);
}

const walls = document.getElementsByClassName("wall");
for(let i = 0; i < walls.length; i++) {
    console.log(walls[i].x1)
$document = $(document);
$document.ready(function () {
    $("#submit").click(function () {
        let rect1 = document.getElementById($("#menu1").val());
        let rect2 = document.getElementById($("#menu2").val());
        connectRects(rect1, rect2);
    });
});