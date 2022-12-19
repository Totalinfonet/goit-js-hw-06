const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("blur", () => {
  if (inputRef.value.length !== Number(inputRef.dataset.length)) {
    inputRef.classList.add("invalid");
    inputRef.classList.remove("valid");
  } else {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
  }
});
