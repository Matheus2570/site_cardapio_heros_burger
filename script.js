document.addEventListener('DOMContentLoaded', function() {
    let menu = document.getElementById('menu-opcoes');
    let icon = document.querySelector('.bx-menu');

    icon.addEventListener('click', function() {
        if (menu.style.display === 'none' || menu.style.display === '') {
            menu.style.display = 'block';
        } else {
            menu.style.display = 'none';
        }
    });

    // Fecha o menu se clicar fora dele
    document.addEventListener('click', function(event) {
        if (!icon.contains(event.target) && !menu.contains(event.target)) {
            menu.style.display = 'none';
        }
    });
});
