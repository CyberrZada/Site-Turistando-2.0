document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.formulario-compra');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Obrigado por sua compra! Este é apenas um exemplo e nenhuma compra real foi processada.');
    });
});
