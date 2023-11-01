window.addEventListener("DOMContentLoaded", () => {
  const inputAvatar = document.querySelector("#input-avatar");
  const formContainer = document.querySelector("#form-container");

  /* Onclick on form container trigger file select window */
  formContainer.addEventListener("click", () => {
    inputAvatar.click();
  });

  /* On selected file upload user avatar */
  inputAvatar.addEventListener("change", () => {
    formContainer.submit();
  });
});
