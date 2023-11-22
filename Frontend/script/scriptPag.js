  // Funções para as estrelas funcionarem
  function Avaliar(estrela) {
    var s1 = document.getElementById("s1");
    var s2 = document.getElementById("s2");
    var s3 = document.getElementById("s3");
    var s4 = document.getElementById("s4");
    var s5 = document.getElementById("s5");
    var avaliacao = 0;

    if (estrela <= 5) {
        s1.src = "../img/star0.png";
        s2.src = "../img/star0.png";
        s3.src = "../img/star0.png";
        s4.src = "../img/star0.png";
        s5.src = "../img/star0.png";

        for (var i = 1; i <= estrela; i++) {
            var starId = "s" + i;
            document.getElementById(starId).src = "../img/star1.png";
        }

        avaliacao = estrela;
    }

    document.getElementById('rating_input').value = avaliacao;
}
function submitForm() {
    var duplicateStarsDiv = document.getElementById('duplicate-stars');
    var ratingValue = document.getElementById('rating_input').value;

    var starHTML = '';
    for (var i = 1; i <= ratingValue; i++) {
        starHTML += '<img src="../img/star1.png" class="star-img">';
    }

    duplicateStarsDiv.innerHTML = starHTML;
    return false;
}