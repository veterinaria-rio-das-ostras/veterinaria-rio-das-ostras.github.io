const images = ['imagem1.jpg', 'imagem2.jpg', 'imagem3.jpg'];
let currentIndex = 0;

function changeSlide() {
    document.getElementById('slide').src = images[currentIndex];
    currentIndex = (currentIndex + 1) % images.length;
}

setInterval(changeSlide, 5000);

function agendar() {
    // Aqui você pode adicionar a lógica para o agendamento
    alert('Você será redirecionado para a página de agendamento.');
    // Por exemplo: window.location.href = 'pagina-de-agendamento.html';
}
