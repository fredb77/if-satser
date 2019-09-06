
var btn = document.getElementById("btn-1");

btn.addEventListener("click", function() {
    var input = document.getElementById("input-1").value;
    var result = document.getElementById("result-1");

    if(isNaN(input)) {
        result.innerText = "Detta var inget nummer!";
    }else if(input >= 18 && input <= 65) {
        result.innerText = "Hej! Grattis du kommer in här :D";
    }else if(input < 18) {
        result.innerText = "Oj! Du är nog lite FÖR ung! vänta några år grabben!";
    }else {
        result.innerText = "Oj! Du är nog lite FÖR gammal!!";
    }
});
