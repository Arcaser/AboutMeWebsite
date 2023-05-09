
//main function. takes two svgs and draws a line between them. it will avoid the elements in walls.
function connectRects(svg, svg2) {
    const walls = document.getElementsByClassName("wall");
    const master_svg = document.getElementById("maze_svg");
    const x1 = parseInt(svg.getAttribute("x")) + parseInt(svg.getAttribute("width")) / 2;
    const currspot = [x1, y1];
    const y1 = parseInt(svg.getAttribute("y")) + parseInt(svg.getAttribute("height")) / 2;
    const [xdir, ydir] = getDirection(svg, svg2);
    
}

//checks if the line is intersecting with any of the walls.
function checkIntersect(currspot,xdir,ydir){
    for(i=0;i<walls.length;i++){
        const wall = walls[i];
        const x = parseInt(wall.getAttribute("x"));
        const y = parseInt(wall.getAttribute("y"));
        const width = parseInt(wall.getAttribute("width"));
        const height = parseInt(wall.getAttribute("height"));
        
}
           

//get the direction the line should be drawn in. 
function getDirection(svg, svg2) {
    const xdiff = parseInt(svg2.getAttribute("x")) - parseInt(svg.getAttribute("x"));
    const ydiff = parseInt(svg2.getAttribute("y")) - parseInt(svg.getAttribute("y"));
    let xdir = 0;
    let ydir = 0;
    if (xdiff > 0) {
        xdir = 1;
    } else if (xdiff < 0) {
        xdir = -1;
    }
    if (ydiff > 0) {
        ydir = 1;
    } else if (ydiff < 0) {
        ydir = -1;
    }
    return [xdir, ydir];
}


//draws a line between two points
function connectpoints(point1, point2) {
    const svg = document.getElementById("maze_svg");
    const x1 = parseInt(point1.getAttribute("cx"));
    const y1 = parseInt(point1.getAttribute("cy"));
    const x2 = parseInt(point2.getAttribute("cx"));
    const y2 = parseInt(point2.getAttribute("cy"));
    var line = $(document.createElementNS('http://www.w3.org/2000/svg', 'line')).attr({
        x1: x1,
        y1: y1,
        x2: x2,
        y2: y2,
        stroke: "black",
        "stroke-width": "5"
    });
    svg.appendChild(line[0]);
}

//adding logic to the submit button so the code can actually be used. 
$document = $(document);
var walls = document.getElementsByClassName("wall");

$document.ready(function () {
    $("#submit").click(function () {
       
    });
});