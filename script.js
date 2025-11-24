function toggleMenu() {
    const nav = document.querySelector("nav");
    nav.classList.toggle("open");
}

function validateForm() {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    const error = document.getElementById("error-message");

    let messages = [];

    if (name.value.trim() === "") messages.push("Name is required.");
    if (email.value.trim() === "" || !email.value.includes("@")) messages.push("Valid email is required.");
    if (message.value.trim().length < 10) messages.push("Message must be at least 10 characters long.");

    if (messages.length > 0) {
        error.innerHTML = messages.join("<br>");
        error.style.display = "block";
        return false;
    }

    alert("Message sent successfully!");
    return true;
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("year").textContent = new Date().getFullYear();
});
