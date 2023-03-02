function changeCenterImage() {
    console.log(1)
  }

  function addImageToDiv() {
    var img = document.createElement("img");
    img.src = "Graphics/Eye.png";
    var div = document.getElementById("center");
    div.appendChild(img);
    
  }