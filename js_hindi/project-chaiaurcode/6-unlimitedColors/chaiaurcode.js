// generate a random color

const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};
let intervalId;
const startChaningColor = function () {
    if (!intervalId) {
        intervalId = setInterval(changeGbColor, 1000)
    }
    function changeGbColor() {
        document.body.style.backgroundColor = randomColor();
    }
}
const stopChaningColor = function () {
    clearInterval(intervalId);
    intervalId = null;
}
document.querySelector("#start").addEventListener('click', startChaningColor)
document.querySelector("#stop").addEventListener('click', stopChaningColor)
