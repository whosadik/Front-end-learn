document.getElementById("btn").addEventListener("click", () => {
  alert("The item added to cart");
});

function updateImage() {
  const image = document.getElementById("image");
  if (window.innerWidth <= 768) {
    image.src = "images/image-product-mobile.jpg";
  } else {
    image.src = "images/image-product-desktop.jpg";
  }
}

window.addEventListener("load", updateImage);
window.addEventListener("resize", updateImage);
