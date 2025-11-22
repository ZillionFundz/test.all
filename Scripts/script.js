const exitBtn = document.getElementById('exit-btn');
const overlay = document.getElementById('overlay');
const popup = document.getElementById('popup');
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');

exitBtn.addEventListener('click', () => {
    overlay.style.display = 'block';
    exitBtn.style.display = 'none';
    popup.style.display = 'block';
    setTimeout(() => {
        popup.style.bottom = '-2%';
    }, 200)
})


//DRAG VARIABLES HERE:...👇
let startY = 0;
let currentY = 0;
let dragging = false;


popup.addEventListener('touchstart', (e) => {
    startY = e.touches[0].clientY;
    dragging = true;
    popup.style.transition = 'none'; // Disable transition during drag
});

popup.addEventListener('touchmove', (e) => {
    if (!dragging) return;
    currentY = e.touches[0].clientY;
    let diffY = currentY - startY;
    if (diffY > 0) { // Only allow dragging downwards
        popup.style.transform = `translateY(${diffY}px)`; // Move the popup with finger
    }
});

popup.addEventListener('touchend', () => {
    dragging = false;
    popup.style.transition = 'bottom 0.5s ease, transform 0.25s ease'; // Re-enable transition

    //if dragged down enough, close it
    if (currentY - startY > 150) {
        closePopup();
    } else {
        //Return to normal
        popup.style.transform = 'translateY(0)';
    }
});

function closePopup() {
    popup.style.bottom = '-100%';
    popup.style.transform = 'translateY(0)';
    setTimeout(() => {
        popup.style.display = 'none';
        overlay.style.display = 'none';
        exitBtn.style.display = 'block';
    }, 300);
}

overlay.addEventListener('click', () => {
    popup.style.bottom = '-100%';
    popup.style.display = 'none';
    overlay.style.display = 'none';
    exitBtn.style.display = 'block';
})
noBtn.addEventListener('click', () => {
    popup.style.bottom = '-100%';
    popup.style.display = 'none';
    overlay.style.display = 'none';
    exitBtn.style.display = 'block';
})
