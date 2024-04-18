//estou setando os nomes e senhas possíveis para entrar.
let usuarioNome = ["paulo","rodosvaldo","teca jacu"]
let usuarioSenha = ["1234","rodavira","mazza"];

//verifica se o usuario e senha esta correto, se sim redireciona, senão alerta.
function logarConta() {
    let nome = document.getElementById("nome").value;
    let senha = document.getElementById("senha").value;
    usuIndex = usuarioNome.indexOf(nome);
    if (senha === usuarioSenha[usuIndex]) {
        window.location.href = "outra.html";
    } else {
        if (usuIndex === -1) {
            alert("Usuário incorreto.\nDesculpe! bah! tchê!");
        } else {
            alert("Senha incorreta.\nDesculpe! bah! tchê!");
        }
    }

    console.log(nome);
    console.log(senha);
    console.log(usuIndex);

}