// Get the container element with the class of "container"
const container = document.querySelector('.container');
// Get the sign up button element inside the element with the class of "green-bg"
const signUpBTN = document.querySelector('.green-bg button');

// Listen for a click event on the sign up button
signUpBTN.addEventListener('click', () => {
    // Toggle the "change" class on the container element when the button is clicked
    container.classList.toggle("change");
});