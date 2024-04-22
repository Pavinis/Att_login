//estou setando os nomes e senhas possíveis para entrar.
let usuarioNome = ["paulo","rodosvaldo","teca jacu"];
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
            alert("Usuário incorreto.\nDesculpe! ma que bah!... tchê!");
        } else {
            alert("Senha incorreta.\nDesculpe! ma que bah!... tchê!");
        }
    };
};

//Compoe a lista de usuarios existentes na página "outra.html"
function outra(){
    let i = 0;
    let lista = "";

    while (i < usuarioNome.length) {
        lista = (lista + usuarioNome[i]);
        lista = (lista + " (");
        lista = (lista + usuarioSenha[i]);
        lista = (lista + ")");
        if (i !== usuarioNome.length - 1) {
            lista = (lista + ", ");
        } else{
            lista = (lista + ".");
        }
        i = i + 1;
    };

    document.getElementById('lista').innerHTML = (lista);
};