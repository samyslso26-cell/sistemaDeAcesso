let texto = document.getElementById("texto");
let botao = document.getElementById("entrar");
let senha = document.getElementById("senha");

console.log(texto, botao, senha);

botao.addEventListener("click", function () {
    if (senha.value === "leitinhoqualhado") {
        window.location.href = "admin.html";
    } else if (senha.value === "molangodolove") {
        window.location.href = "aluno.html";
    } else {
        alert("Senha incorreta! Tente novamente.");
    }
});
