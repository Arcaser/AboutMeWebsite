function changeCenterImage() {
  console.log(1)
}
// function to add an image with src to the center div if the div is empty, otherwise rotate the image 90 degrees 
function addImageToDiv(src,div) {
  if (div.children.length == 0) {
    var img = document.createElement("img");
    img.src = src;
    div.appendChild(img);
  } else {
    div.children[0].style.transform = "rotate(90deg)";
  }
}

