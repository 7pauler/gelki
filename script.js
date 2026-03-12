const puzzleData = [
    { front: '1v.jpeg', back: '1h.jpeg' },
    { front: '2v.jpeg', back: '2h.jpeg' }
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