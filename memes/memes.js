// Define the URL of the Reddit memes API
const url = "https://www.reddit.com/r/memes/.json?limit=100";

// Fetch the memes from the API
fetch(url)
  .then(response => response.json())
  .then(data => {

    const memePosts = data.data.children;

    
    const swiperWrapper = document.querySelector(".swiper-wrapper");
    memePosts.forEach(post => {
      
      const imageUrl = post.data.url;

      const slide = document.createElement("div");
      slide.classList.add("swiper-slide");
      slide.style.display = "flex"
      slide.style.justifyContent = "center"
      slide.style.alignItems = "center"

      const imageElement = document.createElement("img");
      imageElement.src = imageUrl;
      imageElement.style.height = "80vh"

      slide.appendChild(imageElement);

      swiperWrapper.appendChild(slide);

    });
    
    // Create a new Swiper instance
    const swiper = new Swiper(".swiper-container", {
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  })
  .catch(error => console.log(error));