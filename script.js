const puzzleData = [
    { front: '1v.jpeg', back: '1h.jpeg' },
    { front: '2v.jpeg', back: '2h.jpeg' },
    { front: '3v.jpeg', back: '3h.jpeg' },
    { front: '4v.jpeg', back: '4h.jpeg' },
    { front: '5v.jpeg', back: '5h.jpeg' },
    { front: '6v.jpeg', back: '6h.jpeg' },
    { front: '7v.jpeg', back: '7h.jpeg' },
    { front: '8v.jpeg', back: '8h.jpeg' },
    { front: '9v.jpeg', back: '9h.jpeg' },
    { front: '10v.jpeg', back: '10h.jpeg' },
    { front: '11v.jpeg', back: '11h.jpeg' },
    { front: '12v.jpeg', back: '12h.jpeg' },
    { front: '13v.jpeg', back: '13h.jpeg' },
    { front: '14v.jpeg', back: '14h.jpeg' },
    { front: '15v.jpeg', back: '15h.jpeg' },
    { front: '16v.jpeg', back: '16h.jpeg' },
    { front: '17v.jpeg', back: '17h.jpeg' },
    { front: '18v.jpeg', back: '18h.jpeg' },
    { front: '19v.jpeg', back: '19h.jpeg' }
];

let currentIndex = 0;
const container = document.getElementById('card-container');

/// In renderCard nur die Struktur für ZWEI Bilder pro Seite anlegen
function renderCard() {
    container.innerHTML = `
        <div class="card" id="card" onclick="this.classList.toggle('is-flipped')">
            <div class="card-front">
                <img id="front-img" src="${puzzleData[currentIndex].front}" style="opacity:1;">
            </div>
            <div class="card-back">
                <img id="back-img" src="${puzzleData[currentIndex].back}" style="opacity:1;">
            </div>
        </div>
    `;
}

function updateImages() {
    const frontImg = document.getElementById('front-img');
    const backImg = document.getElementById('back-img');
    
    document.getElementById('card').classList.remove('is-flipped');
    
    // Kurze Verzögerung für die Animation
    setTimeout(() => {
        frontImg.src = puzzleData[currentIndex].front;
        backImg.src = puzzleData[currentIndex].back;
    }, 250);
}

function move(direction) {
    const card = document.getElementById('card');
    card.classList.add(direction === 'next' ? 'slide-left' : 'slide-right');
    
    setTimeout(() => {
        currentIndex = direction === 'next' 
            ? (currentIndex + 1) % puzzleData.length 
            : (currentIndex - 1 + puzzleData.length) % puzzleData.length;
        
        updateImages();
        card.classList.remove('slide-left', 'slide-right');
    }, 250);
}

// Preloading
window.onload = () => {
    puzzleData.forEach(item => {
        new Image().src = item.front;
        new Image().src = item.back;
    });
};

document.getElementById('next').addEventListener('click', () => move('next'));
document.getElementById('prev').addEventListener('click', () => move('prev'));

renderCard();