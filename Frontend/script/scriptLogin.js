// Feito por: Felipe

function login() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('senha').value;

    // AJAX request
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'your_login_endpoint', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log(xhr.responseText);
        } else {
          
            console.error('Falha no login');
        }
    };

    var data = {
        email: email,
        password: password
    };
    xhr.send(JSON.stringify(data));
}