const modelBtn = document.querySelector(".modal-btn");
const bannerSection = document.querySelector(".banner");
const modelOverlay= document.querySelector(".model-overlay");
const closeBtn = document.querySelector(".close-btn");

modelBtn.addEventListener("click", function () {
    bannerSection.style.display = "none";
     modelOverlay.style.display = "block";
});

closeBtn.addEventListener("click", function () {
    modelOverlay.style.display = "none";
      bannerSection.style.display = "block";
})














































































// const modelBtn = document.querySelector(".model-btn");
// const model = document.querySelector(".model-overlay");
// const closeBtn = document.querySelector(".close-btn");

// modelBtn.addEventListener("click", function () {
//   model.classList.add("open-model");
// });

// closeBtn.addEventListener("click", function () {
//   model.classList.remove("open-model");
// });