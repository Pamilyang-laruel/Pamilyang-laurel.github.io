// JavaScript for Hero Slideshow
const heroSection = document.querySelector(".hero");

const images = [
    "https://live.staticflickr.com/3680/10414596184_cdaa5d2b36.jpg",
    "https://wegroup3.wordpress.com/wp-content/uploads/2016/09/jose-p-laurel.jpg",
    "https://amateurculturereporter.home.blog/wp-content/uploads/2019/04/laurel.jpg?w=1024"
];

let currentImageIndex = 0;

function changeHeroImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    heroSection.style.backgroundImage = `url(${images[currentImageIndex]})`;
}

setInterval(changeHeroImage, 2000); // Change image every 5 seconds

// JavaScript for Modal
const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");
const modal = document.getElementById("orderModal");

// Open modal
openModal.addEventListener("click", () => {
    modal.style.display = "flex";
});

// Close modal
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close modal when clicking outside of it
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
