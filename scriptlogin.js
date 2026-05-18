/*function handleLogin(event) {
      event.preventDefault();

      const email = document.getElementById('email').value.trim();
      const senha = document.getElementById('senha').value.trim();

      // Simple validation
      if (email === '' || senha === '') {
        alert('⚠️ Por favor, preencha todos os campos!');
        return;
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert('⚠️ Por favor, digite um email válido!');
        return;
      }

      // Validate password length
      if (senha.length < 6) {
        alert('⚠️ A senha deve ter pelo menos 6 caracteres!');
        return;
      }

      // If everything is valid, show success message
      const userName = email.split('@')[0];
      alert(`🎉 Bem-vindo, ${userName}!\n\nVocê foi autenticado com sucesso!\nAinda estamos configurando seu acesso. 🐾`);

      // Reset form
      document.querySelector('.login-form').reset();
      
      // Optional: Redirect to home page after 2 seconds
      setTimeout(() => {
        window.location.href = 'index.html';
      }, 2000);
    }

       function handleForgotPassword(event) {
      event.preventDefault();
      alert('💌 Instruções de recuperação foram enviadas para seu email!\n\nVerifique sua caixa de entrada. Se não encontrar, verifique a pasta de spam.');
    }

    // Add smooth focus animations to inputs
    document.addEventListener('DOMContentLoaded', function() {
      const inputs = document.querySelectorAll('input');
      
      inputs.forEach(input => {
        input.addEventListener('focus', function() {
          this.parentElement.style.transform = 'scale(1.02)';
        });

        input.addEventListener('blur', function() {
          this.parentElement.style.transform = 'scale(1)';
        });
      });
    });   */