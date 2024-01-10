const imageContainer = document.getElementById('image-container');
const imagePaths = []; // Array to store image paths
let currentIndex = 0; // Current index of the displayed image
let intervalTime = 110; // Interval time in milliseconds (adjust as needed)

// Function to load images from a folder
function loadImages(folderPath, imageCount) {
  for (let i = 1; i <= imageCount; i++) {
    imagePaths.push(`${folderPath}/image${i}.jpg`); // Change the image extension if needed
  }
}

// Function to display images sequentially
function showNextImage() {
  if (currentIndex >= imagePaths.length) {
    currentIndex = 0; // Reset to the first image when all images are shown
  }
  imageContainer.src = imagePaths[currentIndex];
  currentIndex++;
}

// Call the function to load images from the 'Web_BG_Images' folder (change the folder path and image count accordingly)
loadImages('Web_BG_Images', 189); // Change 'Web_BG_Images' to your folder name and 10 to the number of images in the folder

// Show the first image immediately and then continue showing images at the specified interval
showNextImage();
setInterval(showNextImage, intervalTime);


