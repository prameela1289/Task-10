
        const form = document.querySelector('form');
        const password = document.getElementById('password');
        const confirmPassword = document.getElementById('confirm_password');
    
        form.addEventListener('submit', function(event) {
            if (password.value !== confirmPassword.value) {
                alert("Passwords do not match!");
                event.preventDefault();
            }
        });