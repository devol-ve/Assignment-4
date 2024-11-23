let count = 0;

function initializeCounter() {
    const counter = document.getElementById('counter');
    counter.innerHTML = count;
}

function incrementCounter() {
    const counter = document.getElementById('counter');
    counter.innerHTML = ++count;
}