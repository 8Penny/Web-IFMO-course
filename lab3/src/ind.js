
const COLLECTION_URL =
  "https://source.unsplash.com/collection/1065412/";
const images = []
function addCanvas() {
  canvas = document.createElement("canvas");
  canvas.width = 500;
  canvas.height = 500;
  
  document.body.appendChild(canvas);

  ctx = canvas.getContext("2d");
  ctx.font = "30px Arial";
  ctx.textAlign = "center"
  ctx.filter = 'grayscale(35%)'
  
  ctx.fillText("Loading...", 250, 50)
}

function addSaveButton() {
  saveButton = document.createElement("a");
  saveButton.download = "web3.jpg"
  saveButton.innerHTML = "Save image";

  document.body.appendChild(saveButton);
}

function loadImage(width, height, left, top) {
  const image = new Image();

  image.crossOrigin = 'anonymous'

  image.src = `${COLLECTION_URL}${width}x${height}`;
  
  image.onload = () => {
    images.push({ image, left, top })

    imagesAreLoaded = 1
    if (imagesAreLoaded ) {
      ctx.drawImage(image, left, top)
    }
  };
}




window.onload = () => {
  addCanvas();
  addSaveButton();
  loadImage(300, 200, 0, 0);

}