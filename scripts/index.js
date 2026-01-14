const cardWidth = 380; // ancho de la card
const visibleCards = 4;

// Guardamos el índice de cada carrusel
const slidersIndex = {};

function moveSlide(trackId, direction) {

    // Si el carrusel no existe aún, lo iniciamos
    if (slidersIndex[trackId] === undefined) {
        slidersIndex[trackId] = 0;
    }

    const track = document.getElementById(trackId);
    const totalCards = track.children.length;
    const maxIndex = totalCards - visibleCards;

    // mover
    slidersIndex[trackId] += direction;

    if (slidersIndex[trackId] < 0) slidersIndex[trackId] = 0;
    if (slidersIndex[trackId] > maxIndex) slidersIndex[trackId] = maxIndex;

    track.style.transform =
        `translateX(-${slidersIndex[trackId] * cardWidth}px)`;
}
