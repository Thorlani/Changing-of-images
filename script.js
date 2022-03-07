const heading = document.getElementById("heading")
const images = document.getElementById("images")

heading.textContent = "Check out part of my Works"

let groupImage = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg']

setInterval(() => {
    let random = Math.floor(Math.random() * 5)

    images.src = groupImage[random];
}, 2000);