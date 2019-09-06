
var btn = document.getElementById("btn-1");

btn.addEventListener("click", function() {
    var input = document.getElementById("input-1").value;
    var result = document.getElementById("result-1");

    if(isNaN(input)) {                                              // skapar en if sats och kollar om det är ett nummer in input       
        result.innerText = "Detta var inget nummer!";               // om inte så skrivs detta ut
    }else if(input >= 18 && input <= 65) {                          // är nummret mellan 18 och 65 så händer detta
        result.innerText = "Hej! Grattis du kommer in här :D";
    }else if(input < 18) {                                          // detta händer om nummret är under 18
        result.innerText = "Oj! Du är nog lite FÖR ung! vänta några år grabben!";
    }else {
        result.innerText = "Oj! Du är nog lite FÖR gammal!!";       // annars händer detta
    }
});
