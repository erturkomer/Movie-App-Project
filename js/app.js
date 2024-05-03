var secims = document.querySelectorAll(".selects");
var secims2 = document.querySelectorAll(".select");

function dilDegistir() {
    debugger
    var secilenDil = secims.value;
    for (let i = 0; i < secims.length; i++) {
        var secilenDil = secims[i].value;
        if (secilenDil === "en") {
            window.location.href = "en.html";
            break;
        }
        else if (secilenDil === "tr") {
            window.location.href = "tr.html";
            break;
        }
    }
}


function dilDegistir2() {
    var secilenDil = secims2.value;
    for (let i = 0; i < secims2.length; i++) {
        var secilenDil = secims2[i].value;
        if (secilenDil === "en") {
            window.location.href = "en.html";
            break;
        }
        else if (secilenDil === "tr") {
            window.location.href = "tr.html";
            break;
        }
    }
}

function toggleCard(index) {
    var cardContents = document.querySelectorAll(".card-content");

    var selectedCardContent = cardContents[index];

    for (var i = 0; i < cardContents.length; i++) {
        if (i !== index) {
            cardContents[i].classList.remove("active");
        }
    }
    selectedCardContent.classList.toggle("active");
}

