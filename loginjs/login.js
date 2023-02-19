const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "4420jt" && password === "tagay111") {
        alert("You have successfully logged in.");
        location.replace("./Gnarlify.html");
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})
  if (username === "ruvelasco.egencia.com" && password === "password1") {
        alert("You have successfully logged in.");
        location.replace("./Gnarlify.html");
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})
