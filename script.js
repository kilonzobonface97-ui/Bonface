
const button =
    document.getElementById("mode-btn") ||
    document.getElementById("made-btn");

if (button) {

    button.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {

            button.innerHTML = "☀️ Light Mode";

        } else {

            button.innerHTML = "🌙 Dark Mode";

        }

    });

}


const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const message =
            document.getElementById("message") ||
            document.getElementById("massage");

        if (
            name.value.trim() === "" ||
            email.value.trim() === "" ||
            message.value.trim() === ""
        ) {

            alert("Please fill in all the fields.");

            return;
        }

        alert("Thank you, " + name.value + "! Your message has been received.");

        form.reset();

    });

}


window.addEventListener("load", function () {

    console.log("Welcome to Boniface Kilonzo's Portfolio Website!");

});