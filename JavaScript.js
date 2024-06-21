let counter = 0;

const imageElement = document.getElementById('clickable-image');
const counterElement = document.getElementById('counter');

function incrementCounter() {
    counter++;
    counterElement.innerText = counter;
}

// Add event listeners for both click and touch events
imageElement.addEventListener('click', incrementCounter);
imageElement.addEventListener('touchstart', incrementCounter);