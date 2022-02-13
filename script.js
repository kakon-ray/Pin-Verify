let button = document.querySelectorAll(".button");
let input = document.getElementById("input");
let random = document.getElementById("random");
let pinGen = document.getElementById("pinGen");

pinGen.addEventListener("click", () => {
  random.value = Math.floor(Math.random() * 10000) + 1;
});

document.getElementById("keypad").addEventListener("click", (e) => {
  input.value = input.value + e.target.innerText;
});
let clicks = 3;
submit.addEventListener("click", (e) => {
  console.log(random.value);
  console.log(input.value);
  if (input.value === random.value) {
    document.getElementById("pinmatch").style.display = "block";
    document.getElementById("dontMatch").style.display = "none";
  } else {
    document.getElementById("pinmatch").style.display = "none";
    document.getElementById("dontMatch").style.display = "block";
  }
  if (e.target.innerText === "Submit") {
    e.stopPropagation();
  }
  clicks -= 1;
  if (clicks >= 0) document.getElementById("leftItem").innerText = clicks;
  else
    document.getElementById("leftItem").innerText = "Please Waite 10 Minutes";
});
