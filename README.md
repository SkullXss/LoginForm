# Formulário de Login - Skull Dev

Este é um exemplo de um formulário de login simples, criado por Skull Dev, com uma aparência atraente.

![Login Form](https://e0.pxfuel.com/wallpapers/885/731/desktop-wallpaper-ultra-iphone-xr-my-site-ilustracao-de-paisagem-arte-da-paisagem-paisagem-desenho.jpg)

## Descrição

Este formulário de login é estilizado usando CSS e HTML. Ele possui um plano de fundo de imagem, um contêiner centralizado com sombras e campos de entrada para e-mail e senha. Além disso, há um botão de login atraente.

## Características

- Plano de fundo de imagem com estilo de paisagem.
- Layout centralizado com efeitos visuais.
- Campos de entrada para e-mail e senha.
- Opção de "Lembrar de mim" com preenchimento automático.
- Botão de login com efeito de hover.

## Uso

Para utilizar este formulário de login em seu projeto, siga estas etapas:

1. Clone este repositório para o seu ambiente local.

2. Adicione o HTML do formulário à sua página da web.

html
```
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <title>Form Login | Skull Dev</title>
    <meta charset="utf-8">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link rel="stylesheet" type="text/css" href="styles.css">
    <script src="script.js"></script>
</head>
<body>
    <div class="login-form">
        <div class="card">
            <h1>Welcome! Login:</h1>
               <p class="created-by">Created by Skull</p>
            <form>
            <label for="usuario"><i class="material-icons" style="vertical-align: middle;">email</i>E-mail</label>
                <input type="text" id="E-Mail" placeholder="E-mail" autocomplete="off">
                <br>
                <label for "usuario"><i class="material-icons" style="vertical-align: middle;">password</i>Pass</label>
                <input type="password" id="password" class="password-input" placeholder="Senha">
                <br>
                <input type="checkbox" id="rememberMe" name="rememberMe" style="vertical-align: middle;"> <label for="rememberMe">Remember Me</label>
                <p>
                    <button class="Button">Login</button>
                </p>
            </form>
        </div>
    </div>
</body>
</html>
```
1.Inclua o CSS e o JavaScript correspondentes no seu projeto.
2.Personalize o formulário de acordo com as necessidades do seu projeto.
## Lembrar de Mim
Este formulário de login inclui uma opção de "Lembrar de mim" que preenche automaticamente os campos de nome de usuário e senha quando a caixa de seleção é marcada.
Você pode personalizar os valores predefinidos no código JavaScript para corresponder às suas necessidades.Aqui está o código JavaScript utilizado:document.getElementById("rememberMe").addEventListener("change", function() {
```
    if (this.checked) {
      document.getElementById("E-Mail").value = "usuário_salvo";
      document.getElementById("password").value = "senha_salva";
    } else {
      document.getElementById("E-Mail").value = "";
      document.getElementById("password").value = "";
    }
});
```
Certifique-se de que os IDs usados no JavaScript ("E-Mail" e "password") correspondam aos IDs dos campos de entrada em seu HTML para que o código funcione conforme o esperado.
## Autor
Este formulário de login foi criado por Skull Dev(https://github.com/SkullXss)
