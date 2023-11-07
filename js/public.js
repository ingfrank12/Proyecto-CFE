document.getElementById('login-form').addEventListener('submit', function(event){
    event.preventDefault();
    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var cambios; 
    
    if(username === "user" && password === "password") {
      alert("Login successful!");
      // Aquí podrías redirigir al usuario a su página de perfil o dashboard
      // window.location.href = "profile.html";
    } else {
      document.getElementById('error-message').textContent = "Invalid username or password!";
    }
  });
  