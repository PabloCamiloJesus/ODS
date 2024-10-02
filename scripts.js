document.addEventListener('DOMContentLoaded', () => {
    const scrollContainer = document.querySelector('.cont_quadros');

    document.getElementById('scrollRightButton').addEventListener('click', () => {
        scrollContainer.scrollBy({
            left: 440, // Ajuste a quantidade de rolagem para a direita
            behavior: 'smooth' // Rolagem suave
        });
    });

    document.getElementById('scrollLeftButton').addEventListener('click', () => {
        scrollContainer.scrollBy({
            left: -440, // Ajuste a quantidade de rolagem para a esquerda
            behavior: 'smooth' // Rolagem suave
        });
    });
});
