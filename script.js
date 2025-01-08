document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        let isValid = true;

        if (!emailInput.value) {
            alert("Please enter your email address.");
            isValid = false;
        } else if (!validateEmail(emailInput.value)) {
            alert("Please enter a valid email address.");
            isValid = false;
        }

        if (!phoneInput.value) {
            alert("Please enter your phone number.");
            isValid = false;
        } else if (!phoneInput.checkValidity()) {
            alert("Please enter a valid phone number in the format: 123-456-7890.");
            isValid = false;
        }

        if (isValid) {
            window.location.href = 'thankYou.html'; 
        }
    });

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});

