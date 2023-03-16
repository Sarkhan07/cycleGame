const cycle = document.getElementById('cycle');
const barrier = document.getElementById('barrier');

document.addEventListener('keydown', function (event) {
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

    if (barrierLeft < 30 && barrierLeft > 0 && cycleTop >= 220) {
        alert('Game over!!!');
    }
}, 10);
