// let img = document.querySelectorAll('.one');
// img[0].style.display="block";
// document.getElementById('nex').onclick = function(){
//     for (let i = 1; i < img.length; i++){
//         img[1].style.display="block";
//         img[0].style.display="none";
//         img[2].style.display="none";
//         break;
//     }
// }
// document.getElementById('pre').onclick = function(){
//     for (let i = 1; i < img.length; i++){
//         img[0].style.display="block";
//         img[2].style.display="none";
//         img[1].style.display="none";
//         break;
//     }
// }
// document.getElementById('med').onclick = function(){
//     for (let i = 1; i < img.length; i++){
//         img[2].style.display="block";
//         img[0].style.display="none";
//         img[1].style.display="none";
//         break;
//     }
// }

let img = document.querySelectorAll('.one');
let currentIndex = 0;

// Function to hide all elements except the one at the specified index
function showImage(index) {
    for (let i = 0; i < img.length; i++) {
        img[i].style.display = i === index ? "block" : "none";
    }
}

// Initial display
showImage(currentIndex);

// Set interval to switch images every 3 seconds
let intervalId = setInterval(function () {
    currentIndex = (currentIndex + 1) % img.length;
    showImage(currentIndex);
}, 4000);

// Stop the interval when the user clicks on a navigation button
document.getElementById('nex').onclick = function () {
    clearInterval(intervalId);
    currentIndex = (currentIndex + 1) % img.length;
    showImage(currentIndex);
};

document.getElementById('pre').onclick = function () {
    clearInterval(intervalId);
    currentIndex = (currentIndex - 1 + img.length) % img.length;
    showImage(currentIndex);
};

document.getElementById('med').onclick = function () {
    clearInterval(intervalId);
    currentIndex = 2; // Change this index as needed
    showImage(currentIndex);
};
