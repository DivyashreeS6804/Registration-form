$(document).ready(function () {
    $('#registrationForm').on('submit', function (event) {
        // Simple client-side validation
        if ($('#name').val() === '' || $('#email').val() === '' || $('#phone').val() === '') {
            alert('All fields are required!');
            event.preventDefault();
        }
    });
});