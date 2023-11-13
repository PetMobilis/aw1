var form = document.querySelector('form')

form.addEventListener('submit', function (event) {
    console.log("Submit event triggered");
    
    if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
    }

    form.classList.add('was-validated');
})

const senhaInput = document.querySelector("#password");
const confirmaSenha = document.querySelector("#confirmPassword");

senhaInput.addEventListener("keyup", () => {
    console.log("Senha keyup event triggered");
    
    const senha = senhaInput.value;
    const isValid = senha.length >= 8 && senha.length <= 20 && /[0-9]/.test(senha) && /[a-z]/.test(senha) && /[A-Z]/.test(senha);
    
    if (isValid) {
        senhaInput.classList.remove("is-invalid");
        senhaInput.classList.add("is-valid");
    } else {
        senhaInput.classList.remove("is-valid");
        senhaInput.classList.add("is-invalid");
    }
})

confirmaSenha.addEventListener("keyup", () => {
    console.log("ConfirmaSenha keyup event triggered");
    
    if (confirmaSenha.value == senhaInput.value) {
        confirmaSenha.classList.remove("is-invalid");
        confirmaSenha.classList.add("is-valid");
    } else {
        confirmaSenha.classList.remove("is-valid");
        confirmaSenha.classList.add("is-invalid");
    }
})

form.addEventListener("submit", (e) => {
    console.log("Custom submit event triggered");
    
    e.preventDefault();
    
    if (form.checkValidity()) {
        console.log("Form is valid. Submitting...");
        
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
        .then(resultado => window.location.href = "lista.html")
        .catch(error => console.error("Error during fetch:", error));
    } else {
        console.log("Form is not valid. Not submitting...");
    }
})
