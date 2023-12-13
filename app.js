const wrapper = document.querySelector(".wrapper");
const inputEl = document.querySelector("input");
const searchIcon = document.querySelector(".inp i");
const btnClose = document.querySelector(".close");

console.log(searchIcon, btnClose);
searchIcon.addEventListener("click", () => {
  wrapper.classList.add("show");
  inputEl.placeholder = "Search Bar";
});

btnClose.addEventListener("click", () => {
  if (inputEl.value) return;
  wrapper.classList.remove("show");
  inputEl.placeholder = "";
});
