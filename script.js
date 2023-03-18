const cycle = document.getElementById('cycle');
const barrier = document.getElementById('barrier');
const game = document.querySelector('.game');

document.addEventListener('keydown', function (event) {
    jump();
});

game.addEventListener('touchstart', function (event) {
    jump();
});

function jump() {
    if (cycle.classList != 'jump') {
        cycle.classList.add('jump');
    }
    setTimeout(() => {
        cycle.classList.remove('jump');
    }, 300);
}

let isAlive = setInterval(function () {
    let cycleTop = parseInt(
        window.getComputedStyle(cycle).getPropertyValue('top')
    );

    let barrierLeft = parseInt(
        window.getComputedStyle(barrier).getPropertyValue('left')
    );

    // let time = window.getComputedStyle(barrier).animationIterationCount;

    if (barrierLeft < 30 && barrierLeft > 0 && cycleTop >= 220) {
        alert('Game over!!!');
        // time = 50;
    }
}, 10);
