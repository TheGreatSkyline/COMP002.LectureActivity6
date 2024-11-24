document.addEventListener('DOMContentLoaded', (event) => {
    const color = document.getElementById('background-color');
    const form = document.getElementById('simpleform');

    // Prevent the form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        console.log('Form submission prevented.');
    });

    // Change the background color when the color input changes
    color.addEventListener('input', function(event) {
        document.body.style.backgroundColor = color.value;
    });
});
