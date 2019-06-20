let arrow = document.querySelector("#arrow");
let filter = document.querySelector("#filter");
let filterDropDown = document.querySelector("#filter_drop_down");
let filterSubmitButton = document.querySelector("#filter_submit");

function rotateArrow(){
  if (arrow.classList.contains("arrow_down")) {
    arrow.classList.replace("arrow_down", "arrow_up");
  } else {
    arrow.classList.replace("arrow_up", "arrow_down");
  }
}

filter.addEventListener("click", () => {
  rotateArrow()
  filterDropDown.classList.toggle("hide_content");

});

filterSubmitButton.addEventListener("click", () => {
  rotateArrow()
  filterDropDown.className = "hide_content";
});
