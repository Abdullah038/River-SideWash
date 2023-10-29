document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.querySelector(".gallery");
    const carousel = document.querySelector(".carousel");
    const carouselImg = carousel.querySelector("img");
    const closeBtn = document.querySelector(".carousel-close");
    const leftArrow = document.querySelector(".carousel-arrow.left");
    const rightArrow = document.querySelector(".carousel-arrow.right");
    const counter = document.querySelector(".carousel-counter");
    let currentIndex = 0;
  
    gallery.addEventListener("click", function (e) {
      if (e.target.closest(".expand-icon") || e.target.tagName === "IMG") {
        const imgContainer = e.target.closest(".img-container") || e.target.parentElement;
        currentIndex = Number(imgContainer.dataset.index);
        openCarousel(currentIndex);
      }
    });
  
    function openCarousel(index) {
      const imgSrc = gallery.querySelectorAll(".img-container img")[index].src;
      carouselImg.src = imgSrc;
      carousel.style.display = "flex";
      updateCounter(index);
    }
  
    closeBtn.addEventListener("click", function () {
      carousel.style.display = "none";
    });
  
    leftArrow.addEventListener("click", function () {
      if (currentIndex > 0) {
        currentIndex--;
      } else {
        currentIndex = gallery.querySelectorAll(".img-container").length - 1;
      }
      openCarousel(currentIndex);
    });
  
    rightArrow.addEventListener("click", function () {
      if (currentIndex < gallery.querySelectorAll(".img-container").length - 1) {
        currentIndex++;
      } else {
        currentIndex = 0;
      }
      openCarousel(currentIndex);
    });
  
    function updateCounter(index) {
      const totalImages = gallery.querySelectorAll(".img-container").length;
      counter.textContent = `${index + 1} / ${totalImages}`;
    }
  });
  