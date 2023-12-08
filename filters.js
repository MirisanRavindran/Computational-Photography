let fileInput = document.getElementById("file");
let image = document.getElementById("image");
let previewImage = document.getElementById("preview-image");
let downloadButton = document.getElementById("download");
const previewButton = document.getElementById("preview");
let fileName = "";

fileInput.onchange = () => {
  //The FileReader object helps to read contents of the file stored on the computer
  let reader = new FileReader();
  //readAsDataURL reads the content of the input file
  reader.readAsDataURL(fileInput.files[0]);

  reader.onload = () => {
    image.setAttribute("src", reader.result);
    previewButton.classList.remove("hide");
  };
  fileName = fileInput.files[0].name.split(".")[0];
};

previewButton.addEventListener("click", (e) => {
  e.preventDefault();
  downloadButton.classList.remove("hide");
  // Set preview image with blur filter
  previewImage.src = image.src;
  previewImage.style.filter = "blur(2px)";

  // Create a canvas and draw the blurred image on it
  let canvas = document.createElement("canvas");
  let ctx = canvas.getContext("2d");
  canvas.width = image.width;
  canvas.height = image.height;
  ctx.filter = "blur(2px)";
  ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

  // Convert canvas to data URL and set it as the href for download button
  let blurredDataURL = canvas.toDataURL("image/png");
  downloadButton.href = blurredDataURL;
  downloadButton.download = `blurred_${fileName}.png`;
});

window.onload = () => {
  downloadButton.classList.add("hide");
  previewButton.classList.add("hide");
};
