
const counters = document.querySelectorAll(".counters span");
const container = document.querySelector(".counters");
let activated = false;

// Add scroll event to the page
window.addEventListener("scroll", () => {
    // If the page is scrolled to the containers element and the counters are not activated
    if(
pageYOffset > container.offsetTop - container.offsetHeight - 200
        && activated == false) {
        // Select all counters
        counters.forEach(counter => {
            // Set counter values to zero
            counter.innerText = 0;
            // Set count variable to track the count
            let count = 0;

            // Update count function
            function updateCount() {
                // Get counter target number to count to 
                const target = parseInt(counter.dataset.count);
                // As long as the count is below the target number
                if(count < target) {
                    // Increment the count
                    count++;

                    // Set the counter text to the count
                    counter.innerText = count;
                    // Repeat this every 10 milliseconds
                    setTimeout(updateCount, 100); 
                    // Count Speed
                    // And when the target is reached
                }
                else {
                    // Set the counter text to the target number
                    counter.innerText = target;

                }

                }

                // Run the function initially
                updateCount();

              activated = true;
            });

        } else if(
            pageYOffset  < container.offsetTop - container.offsetHeight - 500
            ||pageYOffset=== 0
            && activated === true

        ){
            counters.forEach(counter => {
                counter.innerText = 0;

            });

            activated = false;
        }


    });


    // SWIPER
    
const swiper = new Swiper('.slider-wrapper', {
       
    loop: true,
    grabCursor: true,
    spaceBetween: 30,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 1
        },
        620: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        },
    }
  });



//   SCROLL REVEAL BUTTON
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", checkHeight)
    
    function checkHeight() {
    if(window.pageYOffset > 200) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
}

toTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
    behavior:"smooth" 
})
})