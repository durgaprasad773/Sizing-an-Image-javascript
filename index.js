let imageElement = document.getElementById("image");
let IncrementButton = document.getElementById("incrementButton");
let DecrementButton = document.getElementById("decrementButton");
let WarningMassage = document.getElementById("warningMessage");
let ImageWidthElement = document.getElementById("imageWidth");
let originalImageWidth = 200;
let maxImageWidth = 300;
let minImageWidth = 100;
let maxWidthWarningMessage = "Too big. Decrease the size of the Image.";
let minWidthWarningMessage = "Can't Visible. Increase the size of the Image.";
imageElement.style.width = originalImageWidth + "px";
ImageWidthElement.textContent = originalImageWidth + "px"

function onIncrement() {
    if (originalImageWidth >= maxImageWidth) {
        WarningMassage.textContent = maxWidthWarningMessage
    } else {
        originalImageWidth = originalImageWidth + 5;
        let updateWidth = originalImageWidth + "px";
        WarningMassage.textContent = "";
        imageElement.style.width = updateWidth;
        ImageWidthElement.textContent = updateWidth
    }
}

function onDecrement() {
    if (originalImageWidth <= minImageWidth) {
        WarningMassage.textContent = minWidthWarningMessage
    } else {
        originalImageWidth = originalImageWidth - 5;
        let updateWidth = originalImageWidth + "px";
        WarningMassage.textContent = "";
        imageElement.style.width = updateWidth;
        ImageWidthElement.textContent = updateWidth
    }
}