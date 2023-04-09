function check_rotate() {
    var center = document.getElementById("center");
    var img = center.childNodes[0];
    var deg = 0;
    var transform = img.style.transform;
    var match = transform.match(/rotate\((\d+)deg\)/)
    if (match != null) {
      deg = parseInt(match[1]);
      if (deg == 360) {
        deg = deg - 360;
      }
      console.log("deg = " + deg);
    }
  }
  
  
  //gets the image in the center div. If there is no image, creates one from the default eye img. 
  //rotates if there is.
  function rotate() {
    var center = document.getElementById("center");
    var img = document.getElementById("center").childNodes[0];
    console.log(img.nodeName)
    if (img.nodeName.toLowerCase() != "img") {
      img.remove();
      // create a new image element and add it to the center div
      img = document.createElement("img");
      img.setAttribute("src", "Graphics/Eyes/background_svg.svg");
      center.appendChild(img);
    }
    var deg = img.getAttribute("data-deg");
    if (deg == null) {
      deg = -90;
    }
    deg = parseInt(deg) + 40;
    img.setAttribute("data-deg", deg);
    img.style.transform = "rotate(" + deg + "deg)";
    check_rotate();
  }


function changecolor(){
    const outer = $(".Outer_grid").children();
    //set all the outer divs to the same color
    for (var i = 0; i < outer.length; i++) {
      console.log(outer[i]);
    }
  }
  
  const toggle = $("#toggle_btn");
toggle.click(function(){
  console.log("toggle_btn clicked");
  const centerchild = $("#center").children().first();
  centerchild.remove();
  $("#center").append("<p>hello</p>");
});

  
const center = document.getElementById("center");
center.addEventListener("click", rotate);

const outer = $(".outer_grid").children();
center.addEventListener("click", changecolor);