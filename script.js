// Alle Bilder vorladen
function preloadImages() {
    puzzleData.forEach(item => {
        new Image().src = item.front;
        new Image().src = item.back;
    });
}

// Aufrufen, wenn die Seite startet
window.onload = preloadImages;

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

function renderCard() {
    container.innerHTML = `
        <div class="card" id="card" onclick="this.classList.toggle('is-flipped')">
            <div class="card-front"><img src="${puzzleData[currentIndex].front}"></div>
            <div class="card-back"><img src="${puzzleData[currentIndex].back}"></div>
        </div>
    `;
}

function move(direction) {
    // Animation starten
    container.classList.add(direction === 'next' ? 'slide-left' : 'slide-right');
    
    setTimeout(() => {
        // Index ändern
        currentIndex = direction === 'next' 
            ? (currentIndex + 1) % puzzleData.length 
            : (currentIndex - 1 + puzzleData.length) % puzzleData.length;
        
        // Karte neu rendern (ist dann automatisch nicht geflippt)
        renderCard();
        
        // Animation beenden
        container.classList.remove('slide-left', 'slide-right');

        // Wir setzen die Klasse kurz neu, damit der Browser sie bemerkt
        container.style.animation = 'none';
        container.offsetHeight; // Das erzwingt ein "Reflow"
        container.style.animation = null;

    }, 500);
}

document.getElementById('next').addEventListener('click', () => move('next'));
document.getElementById('prev').addEventListener('click', () => move('prev'));


renderCard();