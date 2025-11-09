document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const recoveryForm = document.getElementById('recoveryForm');
    const inputMail = document.getElementById('inputMail');
    
    const recoveryModalEl = document.getElementById('recoveryModal');
    const successModalEl = document.getElementById('successModal');
    
    // Instância da Modal de Recuperação (para controle via JS)
    const recoveryModal = bootstrap.Modal.getOrCreateInstance(recoveryModalEl);

    // --- Lógica de Login (Modal de Sucesso) ---
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o recarregamento da página
        
        // 1. Captura os valores dos campos
        const login = document.getElementById('inputLogin').value;
        const password = document.getElementById('inputPassword').value;
        
        // 2. Insere os valores no Modal de Sucesso
        document.getElementById('outputLogin').textContent = login;
        document.getElementById('outputPassword').textContent = password;
        
        // 3. Exibe o Modal
        const successModal = bootstrap.Modal.getOrCreateInstance(successModalEl);
        successModal.show();
    });

    // Ação ao FECHAR o Modal de Sucesso: Limpa o formulário de login.
    successModalEl.addEventListener('hidden.bs.modal', function () {
        loginForm.reset(); 
    });


    // --- Lógica de Recuperação de Senha (Modal de Recuperação) ---
    recoveryForm.addEventListener('submit', function (event) {
        event.preventDefault(); 
        
        // Simula o sucesso da recuperação e fecha a modal
        inputMail.value = '';
        recoveryModal.hide();
    });
    
    // Limpa o formulário de recuperação quando a modal é fechada (Cancelar ou X)
    recoveryModalEl.addEventListener('hidden.bs.modal', function () {
        recoveryForm.reset();
    });
});