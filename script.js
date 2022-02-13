let button = document.querySelectorAll(".button");
let input = document.getElementById("input");
let random = document.getElementById("random");
let pinGen = document.getElementById("pinGen");

function check(pinmatch, dontMatch) {
  document.getElementById("pinmatch").style.display = pinmatch;
  document.getElementById("dontMatch").style.display = dontMatch;
  input.value = "";
}

function verifyInputValue() {
  if (input.value === random.value) {
    check("block", "none");
  } else {
    check("none", "block");
  }
}

function errorShow() {
  if (clicks >= 0) document.getElementById("leftItem").innerText = clicks;
  else
    document.getElementById("leftItem").innerText = "Please Waite 10 Minutes";
}

pinGen.addEventListener("click", () => {
  random.value = Math.floor(Math.random() * 10000) + 1;
});

document.getElementById("keypad").addEventListener("click", (e) => {
  input.value = input.value + e.target.innerText;
});

let clicks = 3;
submit.addEventListener("click", (e) => {
  if (input.value === "") {
    document.getElementById("leftItem").innerText =
      "Please add Number Input Fild";
    if (e.target.innerText === "Submit") {
      e.stopPropagation();
    }
  } else {
    clicks -= 1;
    verifyInputValue();
    if (e.target.innerText === "Submit") {
      e.stopPropagation();
    }

    errorShow();
  }
});
