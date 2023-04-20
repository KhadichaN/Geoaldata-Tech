const parallaxSection1 = document.querySelector("#parallax-section-1");
const parallaxItems1 = parallaxSection1.querySelectorAll(".parallax-item");
let activeIndex1 = 0;

const parallaxSection2 = document.querySelector("#parallax-section-2");
const parallaxItems2 = parallaxSection2.querySelectorAll(".parallax-item");
let activeIndex2 = 0;

const setItemVisibility = (parallaxItems, activeIndex) => {
  parallaxItems.forEach((item, index) => {
    if (index === activeIndex) {
      item.style.opacity = 1;
      item.style.transform = "translateY(0%)";
    } else {
      item.style.opacity = 0;
      item.style.transform = "translateY(-100%)";
    }
  });
};

parallaxSection1.addEventListener("click", () => {
  if (activeIndex1 === parallaxItems1.length - 1) {
    activeIndex1 = 0;
  } else {
    activeIndex1++;
  }

  setItemVisibility(parallaxItems1, activeIndex1);
});

parallaxSection2.addEventListener("click", () => {
  if (activeIndex2 === parallaxItems2.length - 1) {
    activeIndex2 = 0;
  } else {
    activeIndex2++;
  }

  setItemVisibility(parallaxItems2, activeIndex2);
});
