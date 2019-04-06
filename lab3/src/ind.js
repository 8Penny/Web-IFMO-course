window.onload = () => {
  canvas = document.createElement("canvas");
  canvas.width = 500;
  canvas.height = 500;
  
  document.body.appendChild(canvas);

  ctx = canvas.getContext("2d");
  ctx.font = "30px Arial";
  ctx.textAlign = "center"
  ctx.filter = 'grayscale(35%)'
  
  ctx.fillText("SIMPLE TEXT", 250, 50)
  saveButton = document.createElement("a");
  saveButton.download = "web3.jpg"
  saveButton.innerHTML = "Save image";
  ctx.fillText("Another text", 250, 250)
  document.body.appendChild(saveButton);
  
}