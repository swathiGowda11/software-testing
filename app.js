document.addEventListener("DOMContentLoaded", () => {
  const sliderItems = document.querySelectorAll(".sliderItem");
  let currentIndex = 0;

  function showSliderItem(index) {
      sliderItems.forEach((item, i) => {
          item.style.display = i === index ? "block" : "none";
      });
  }

  function nextSliderItem() {
      currentIndex = (currentIndex + 1) % sliderItems.length;
      showSliderItem(currentIndex);
  }

  showSliderItem(currentIndex);
  setInterval(nextSliderItem, 3000); // Change image every 3 seconds

  const searchInput = document.querySelector(".searchInput");
  const searchIcon = document.querySelector(".searchIcon");

  searchIcon.addEventListener("click", () => {
      const query = searchInput.value;
      if (query) {
          alert(`Search for: ${query}`);
      }
  });

  const menuItems = document.querySelectorAll(".menuItem");
  menuItems.forEach(item => {
      item.addEventListener("click", () => {
          alert(`You clicked on ${item.textContent}`);
      });
  });

  const productSizes = document.querySelectorAll(".size");
  productSizes.forEach(size => {
      size.addEventListener("click", () => {
          productSizes.forEach(s => s.classList.remove("selected"));
          size.classList.add("selected");
      });
  });

  const subscribeButton = document.querySelector(".fButton");
  subscribeButton.addEventListener("click", () => {
      const email = document.querySelector(".fInput").value;
      if (email) {
          alert(`Subscribed with email: ${email}`);
      } else {
          alert("Please enter a valid email address.");
      }
  });
});
