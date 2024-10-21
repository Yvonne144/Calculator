// Select all buttons, screen, and special buttons (clear and equal)
const buttons = document.querySelectorAll('.btn');
const screen = document.querySelector('.screen');
const clear = document.querySelector('.btn-clear');
const equal = document.querySelector('.btn-equal');

// Add event listeners to number and operator buttons
buttons.forEach(function(button) {
    button.addEventListener('click', function(e) {
        const value = e.target.dataset.num;

        // Append the clicked value to the screen, except for "=" and "C" buttons
        if (value !== undefined) {
            screen.value += value;
        }
    });
});

// Add functionality to evaluate the expression when "=" is clicked
equal.addEventListener('click', function() {
    if(screen.value === '') {
        screen.value = 'Enter a valid expression';
    } else {
        try {
            // Evaluate the expression entered on the screen
            const result = eval(screen.value);
            screen.value = result;
        } catch (error) {
            // If invalid input, show "Error"
            screen.value = 'Error';
        }
    }
});

// Clear the screen when "C" button is clicked
clear.addEventListener('click', function() {
    screen.value = '';
});
