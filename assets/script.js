const images = [
    'https://veterinaria-rio-das-ostras.github.io/assets/image-1.jpeg',
    'https://veterinaria-rio-das-ostras.github.io/assets/image-2.jpeg',
    'https://veterinaria-rio-das-ostras.github.io/assets/image-3.jpeg'
];

let currentIndex = 0;

function changeSlide() {
    document.getElementById('slide').src = images[currentIndex];
    currentIndex = (currentIndex + 1) % images.length;
}

setInterval(changeSlide, 5000);

function agendar() {
    alert('Você será redirecionado para a página de agendamento.');
}
