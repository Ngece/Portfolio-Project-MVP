// Specify the folder path where the images are stored
const folderPath = 'images/';

// Function to retrieve all image files from a folder
async function getImagesFromFolder() {
  const response = await fetch(folderPath);
  const fileList = await response.text();
  const imageFiles = fileList.split('\n').filter((file) => file.trim() !== '');
  return imageFiles;
}

// Function to shuffle an array using the Fisher-Yates algorithm
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Function to create and append <img> elements to the container
function displayImages(images) {
  const container = document.querySelector('.scrolling-pictures');
  images.forEach((image) => {
    const imgElement = document.createElement('img');
    imgElement.src = folderPath + image;
    imgElement.alt = image;
    container.appendChild(imgElement);
  });
}

// Function to scroll the images horizontally
function scrollImages() {
  const container = document.querySelector('.scrolling-pictures');
  const scrollDistance = container.scrollWidth / container.childElementCount;
  container.scrollLeft += scrollDistance;
}

// Function to start the scrolling animation
function startScrollingAnimation() {
  setInterval(scrollImages, 3000); // Change image every 3 seconds
}

// Retrieve the images from the folder, shuffle them, and display them
getImagesFromFolder()
  .then((images) => {
    const shuffledImages = shuffleArray(images);
    displayImages(shuffledImages);
    startScrollingAnimation();
  })
  .catch((error) => {
    console.error('Error retrieving images:', error);
  });
