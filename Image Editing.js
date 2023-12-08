// Get references to the button, input, and image elements
const insImageBtn = document.getElementById('ins_Image');
const imageInput = document.getElementById('imageInput');
const selectedImage = document.getElementById('selectedImage');

// Add an event listener to the button to trigger file input click
insImageBtn.addEventListener('click', function () {
    imageInput.click();
});

// Add an event listener to the file input for image selection
imageInput.addEventListener('change', function () {
    const selectedFile = this.files[0];

    if (selectedFile) {
        // Display the selected image
        selectedImage.style.display = 'block';
        selectedImage.src = URL.createObjectURL(selectedFile);
    }
});

var cropButton = document.getElementById('Cropping');

// Add an event listener to the button
cropButton.addEventListener('click', function() {
    // Create the "Crop" button
    var newCropButton = document.createElement('button');
    newCropButton.id = 'btn-crop';
    newCropButton.textContent = 'Crop';

    // Create the container for cropped content
    var croppedContainer = document.createElement('div');
    croppedContainer.className = 'cropped-container';

    // Create the image element
    var croppedImage = document.createElement('img');
    croppedImage.id = 'output';
    croppedImage.src = '';

    // Append elements to the container
    croppedContainer.appendChild(croppedImage);

    // Get reference to the container where you want to append the new elements
    var container = document.getElementById('yourContainerId'); // Change 'yourContainerId' to the actual id of your container

    // Append the new button and container with the elements to the existing container
    container.appendChild(newCropButton);
    container.appendChild(croppedContainer);
});

const cropper = new Cropper(selectedImage, {
    aspectRatio: 0,
});

document.querySelector('#btn-crop').addEventListener('click', function() {
    var croppedImage = cropper.getCroppedCanvas().toDataURL("image/png");
    document.getElementById('output').src = croppedImage;
    document.querySelector(".cropped-container").style.display = 'flex';
});
