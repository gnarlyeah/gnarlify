const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

var x = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "store.php?lat=" + position.coords.latitude + "&long=" + position.coords.longitude);
    xhttp.send();
}

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


