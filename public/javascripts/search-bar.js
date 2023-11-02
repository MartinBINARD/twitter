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

  let searchInput = document.querySelector("#search-input");
  let ref;

  searchInput.addEventListener("input", (e) => {
    const value = e.target.value;
    // clearTimout to keep the last user key input after 2s
    if (ref) {
      clearTimeout(ref);
    }

    ref = setTimeout(() => {
      axios
        .get("/users?search=" + value)
        .then((res) => {
          menuContainer.innerHTML = res.data;
        })
        .catch((e) => console.log(e));
    }, 2000);
  });
});
