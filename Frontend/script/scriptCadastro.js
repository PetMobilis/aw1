// Feito por: Felipe

var form = document.querySelector('form')

form.addEventListener('submit', function (event) {
    console.log("Submit event triggered");
    
    if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
    }

    form.classList.add('foi-validado');
})

const senhaInput = document.querySelector("#password");
const confirmaSenha = document.querySelector("#confirmPassword");

senhaInput.addEventListener("keyup", () => {
    console.log("Senha keyup event triggered");
    
    const senha = senhaInput.value;
    const isValid = senha.length >= 8 && senha.length <= 20 && /[0-9]/.test(senha) && /[a-z]/.test(senha) && /[A-Z]/.test(senha);
    
    if (isValid) {
        senhaInput.classList.remove("invalido");
        senhaInput.classList.add("valido");
    } else {
        senhaInput.classList.remove("valido");
        senhaInput.classList.add("invalido");
    }
})

confirmaSenha.addEventListener("keyup", () => {
    console.log("ConfirmaSenha keyup event triggered");
    
    if (confirmaSenha.value == senhaInput.value) {
        confirmaSenha.classList.remove("invalid");
        confirmaSenha.classList.add("valido");
    } else {
        confirmaSenha.classList.remove("valido");
        confirmaSenha.classList.add("invalido");
    }
})

form.addEventListener("submit", (e) => {
    console.log("Custom submit event triggered");
    
    e.preventDefault();
    
    if (form.checkValidity()) {
        console.log(" O formulário é válido. Enviando..");
        
        let dados = {
            nome: document.querySelector("#firstname").value,
            sobrenome: document.querySelector("#lastname").value,
            email: document.querySelector("#email").value,
            senha: senhaInput.value,
            confirmPassword: confirmaSenha.value,
            celular: document.querySelector("#number").value
        }

        fetch("http://localhost:8080/usuario", {
            method: "POST",
            body: JSON.stringify(dados),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(resposta => resposta.json())
        .catch(error => console.error("Erro durante a busca:", error));
    } else {
        console.log("O formulário não é válido. Não submetendo...");
    }
})
