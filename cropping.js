let fileInput = document.getElementById("file");
let image = document.getElementById("image");
let downloadButton = document.getElementById("download");
let aspectRatio = document.querySelectorAll(".aspect-ratio-button");
const previewButton = document.getElementById("preview");
const previewImage = document.getElementById("preview-image");
const options = document.querySelector(".options");
const widthInput = document.getElementById("width-input");
const heightInput = document.getElementById("height-input");
let cropper = "";
let fileName = "";

fileInput.onchange = () => {
  previewImage.src = "";
  heightInput.value = 0;
  widthInput.value = 0;
  downloadButton.classList.add("hide");

  //The FileReader object helps to read contents of file stored on the computer
  let reader = new FileReader();
  //readAsDataURL reads the content of input file
  reader.readAsDataURL(fileInput.files[0]);

  reader.onload = () => {
    image.setAttribute("src", reader.result);
    if (cropper) {
      cropper.destroy();
    }
    //Initialize cropper
    cropper = new Cropper(image);
    options.classList.remove("hide");
    previewButton.classList.remove("hide");
  };
  fileName = fileInput.files[0].name.split(".")[0];
};

//Set aspect ration
aspectRatio.forEach((element) => {
  element.addEventListener("click", () => {
    if (element.innerText == "Free") {
      cropper.setAspectRatio(NaN);
    } else {
      cropper.setAspectRatio(eval(element.innerText.replace(":", "/")));
    }
  });
});

heightInput.addEventListener("input", () => {
  const { height } = cropper.getImageData();
  if (parseInt(heightInput.value) > Math.round(height)) {
    heightInput.value = Math.round(height);
  }
  let newHeight = parseInt(heightInput.value);
  cropper.setCropBoxData({ height: newHeight });
});
widthInput.addEventListener("input", () => {
  const { width } = cropper.getImageData();
  if (parseInt(widthInput.value) > Math.round(width)) {
    widthInput.value = Math.round(width);
  }
  let newWidth = parseInt(widthInput.value);
  cropper.setCropBoxData({ width: newWidth });
});

previewButton.addEventListener("click", (e) => {
  e.preventDefault();
  downloadButton.classList.remove("hide");
  let imgSrc = cropper.getCroppedCanvas({}).toDataURL();
  //Set preview
  previewImage.src = imgSrc;
  downloadButton.download = `cropped_${fileName}.png`;
  downloadButton.setAttribute("href", imgSrc);
});

window.onload = () => {
  download.classList.add("hide");
  options.classList.add("hide");
  previewButton.classList.add("hide");
};