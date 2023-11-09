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
