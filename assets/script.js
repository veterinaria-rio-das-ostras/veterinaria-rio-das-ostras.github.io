const images = [
    'https://veterinaria-rio-das-ostras.github.io/assets/image-2.jpeg',
    'https://veterinaria-rio-das-ostras.github.io/assets/image-3.jpeg',
    'https://veterinaria-rio-das-ostras.github.io/assets/image-1.jpeg'
];

let currentIndex = 0;

function changeSlide() {
    document.getElementById('slide').src = images[currentIndex];
    currentIndex = (currentIndex + 1) % images.length;
}

setInterval(changeSlide, 5000);

function agendar() {
    var mensagem = encodeURIComponent("Olá, gostaria de agendar uma consulta com você.");
    window.location.href = "https://api.whatsapp.com/send?phone=+5511946273408&text=" + mensagem;
}

function animateButton() {
    const button = document.querySelector('.agendar');
    button.classList.remove('agendar');
    setTimeout(() => {
        button.classList.add('agendar');    
    }, 500);
    
}

function repeatAnimation() {
    animateButton();
    setTimeout(repeatAnimation, 5000);
}

repeatAnimation();
