document.getElementById("rememberMe").addEventListener("change", function() {
    if (this.checked) {
      document.getElementById("username").value = "usuário_salvo";
      document.getElementById("password").value = "senha_salva";
    } else {
      document.getElementById("username").value = "";
      document.getElementById("password").value = "";
    }
  });