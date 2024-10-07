document.addEventListener('DOMContentLoaded', function() {
    var menu = document.getElementById('menu-opcoes');
    var icon = document.querySelector('.bx-caret-left-square');

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
