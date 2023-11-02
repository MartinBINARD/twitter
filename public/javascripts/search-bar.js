let menuContainer;

window.addEventListener("click", () => {
  menuContainer.innerHTML = "";
});

window.addEventListener("DOMContentLoaded", () => {
  menuContainer = document.querySelector("#search-menu-container");

  menuContainer.addEventListener("click", (e) => {
    /* 
        Stop propagation to prevent close menu when clicking inside
        When clicking outside menu is closed
    */
    e.stopPropagation();
  });
});
