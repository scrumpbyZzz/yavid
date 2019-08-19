const documentWindow = document;
const clickSearch = documentWindow.querySelector(".header-search");
const showBlock = documentWindow.querySelector(".header-search_input");
const clickSearchIcon = documentWindow.querySelector(".header-search_input_icon");

export function showSearchInput() {
  clickSearch.addEventListener("click", (event) => {
    event.preventDefault();
    if (showBlock !== showBlock.classList.contains("show-search") &&
      event.target.classList[0] !== "header-search_input_icon") {
      showBlock.classList.add("show-search")
    }
  })
}

export function closeSearchInput() {
  clickSearchIcon.addEventListener("click", (event) => {
    event.preventDefault();
    if (showBlock.classList.contains("show-search")) {
      showBlock.classList.remove("show-search");
    }
  })
}
