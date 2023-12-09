const images = [
    'images/pic-1.jpg',
    'images/pic-2.jpg',
    'images/pic-3.jpg',
    'images/pic-4.jpg',
    'images/pic-5.jpg',
    'images/pic-6.jpg',
    'images/pic-7.jpg',
    'images/pic-8.jpg',
    'images/pic-9.jpg',
];
const imgElement = document.getElementById('img-slider');
let imgIndex = 0;

const showImage = () => {
    const imgUrl = images[imgIndex];
    imgElement.setAttribute('src', imgUrl);
}

const preImg = () => {
    imgIndex = (imgIndex - 1 + images.length) % images.length;
    showImage();
}

const nextImg = () => {
    imgIndex = (imgIndex + 1) % images.length;
    showImage();
}

/* setInterval(() => {
    nextImg();
}, 2000); */
setInterval(nextImg, 2000);
document.getElementById('pre').addEventListener('click', preImg);
document.getElementById('next').addEventListener('click', nextImg);