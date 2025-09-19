// Seleciona o formulário na página
const form = document.querySelector('form');

// Adiciona um evento de "escuta" para quando o formulário for enviado
form.addEventListener('submit', (event) => {
    // Impede que a página recarregue
    event.preventDefault();

    // Pega o valor dos campos de email e senha
    const emailInput = form.querySelector('input[type="email"]');
    const passwordInput = form.querySelector('input[type="password"]');

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // Verifica se os campos não estão vazios
    if (email && password) {
        alert('Login bem-sucedido! Redirecionando...');
        
        // Redireciona o usuário para a página desejada
        window.location.href = 'home.html'; 
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});