const firstContainer = document.querySelector(".one");
const secondContainer = document.querySelector(".two");
const submitBtn = document.getElementById("submit");
const ratingResult = document.getElementById("score");
const ratingNumber = document.querySelectorAll(".number");
const rateAgain = document.getElementById("rerate");


submitBtn.addEventListener("click", () => {
    secondContainer.classList.remove("two")
    firstContainer.style.display = "none"
});

ratingNumber.forEach((result) => {
    result.addEventListener("click", () => {
        ratingResult.innerHTML = result.innerHTML
    })
});

rateAgain.addEventListener("click", () => {
    secondContainer.classList.add("two")
    firstContainer.style.display = "block"
})