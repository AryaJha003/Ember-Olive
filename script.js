// =========================
// RESERVATION FORM
// =========================

const reservationForm = document.querySelector(".reservation-form");

if (reservationForm) {

    reservationForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.querySelector("#name").value;

        alert(
            "Thank you, " + name +
            "! Your reservation request has been received."
        );

        reservationForm.reset();

    });

}


// =========================
// MOBILE MENU
// =========================

const menuToggle = document.getElementById("menuToggle");
const nav = document.querySelector(".navbar nav");

if (menuToggle && nav) {

    // Open / close menu
    menuToggle.addEventListener("click", function () {
        nav.classList.toggle("active");
    });

    // Close menu after clicking a navigation link
    const navLinks = nav.querySelectorAll("a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {
            nav.classList.remove("active");
        });

    });

}