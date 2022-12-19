const formRef = document.querySelector(".login-form");
formRef.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();

  const email = formRef.elements.email;
  const password = formRef.elements.password;

  if (email.value === "" || password.value === "") {
    alert("Please fill in all the fields!");
  } else {
    const formData = {
      email: email.value,
      password: password.value,
    };
    console.log(formData);
    formRef.reset();
  }
}
