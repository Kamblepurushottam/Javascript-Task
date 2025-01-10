let btn = document.querySelectorAll(".calValue");
for (i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function (txt) {
    document.querySelector("#screen").value += this.innerText;
  });
}

document.querySelector("#totalBtn").addEventListener("click", () => {
  let inputVal = document.querySelector("#screen").value;
  document.querySelector("#screen").value = eval(inputVal);
});

document.querySelector("#ac").addEventListener("click", () => {
  document.querySelector("#screen").value = "";
});

document.querySelector("#del").addEventListener("click", () => {
  let inputVal = document.querySelector("#screen").value;
  document.querySelector("#screen").value = inputVal.slice(0, -1);
});
