
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

async function generateText() {
  const response = await fetch(
    'https://thesimpsonsquoteapi.glitch.me/quotes'
  )

  const [{quote}] = await response.json()
  quoteText = quote.replace(/\.\.\./g, ' ')
  quoteIsLoaded = true 

  if (imagesAreLoaded) {
    ctx.filter = ''
    const quoteChunks = []
    let c = 0
    let j = 0

    for(let i = 0; i < quoteText.length; i++) {
      c++
      if (c > 20 && quoteText[i] === ' ') {
        quoteChunks.push(quoteText.slice(j, i))
        j = i
        c = 0
      }
    }
  
    quoteChunks.push(quoteText.slice(j))
    
    console.log(quoteChunks, quoteText)

    ctx.fillStyle = "#ffffff"

    const chunksCount = quoteChunks.length

    for (let i = 0; i< chunksCount; i++){

      ctx.shadowColor="black";
      ctx.shadowBlur=7;
      ctx.lineWidth=3;
      ctx.strokeText(quoteChunks[i], 250, 250 + (40* (i-chunksCount/2)))
      ctx.shadowBlur=0;
      ctx.fillStyle="white";

      ctx.fillText(quoteChunks[i], 250, 250 + (40* (i-chunksCount/2)))
    }
  }
}


window.onload = () => {
  addCanvas();
  addSaveButton();
  
  loadImage(300, 200, 0, 0);
  generateText();

}