function connectRects(rect1, rect2) {
    const svg = document.getElementById("maze_svg");
    const x1 = parseInt(rect1.getAttribute("x")) + parseInt(rect1.getAttribute("width")) / 2;
    const y1 = parseInt(rect1.getAttribute("y")) + parseInt(rect1.getAttribute("height")) / 2;
    const x2 = parseInt(rect2.getAttribute("x")) + parseInt(rect2.getAttribute("width")) / 2;
    const y2 = parseInt(rect2.getAttribute("y")) + parseInt(rect2.getAttribute("width")) / 2;
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


$document = $(document);
$document.ready(function () {
    $("#submit").click(function () {
        let rect1 = document.getElementById($("#menu1").val());
        let rect2 = document.getElementById($("#menu2").val());
        connectRects(rect1, rect2);
    });
});