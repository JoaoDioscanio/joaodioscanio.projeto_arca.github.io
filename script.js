function login() {

    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;

    if (email === "tutor" && senha === "123456") {
        window.location.href = "tutor.html";
    } else if (email === "candidato" && senha === "cand!098") {
        window.location.href = "candidato.html";
    } else if (email === "Ong" && senha === "ong$-135") {
        window.location.href = "ong.html";
    } else if (email === "prefeitura" && senha === "pref@456") {
        window.location.href = "prefeitura.html";
    } else {
        document.getElementById("mensagem").innerHTML =
            "Email ou senha incorretos!";
    }

}