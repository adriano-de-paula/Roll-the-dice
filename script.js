let images = [
    "img/dice-01.svg",
    "img/dice-02.svg",
    "img/dice-03.svg",
    "img/dice-04.svg",
    "img/dice-05.svg",
    "img/dice-06.svg"
];

let dice = document.querySelectorAll("img");

function roll() {
    dice.forEach(function(die){
        die.classList.add("shake");
    });
    setTimeout(() => {
        dice.forEach(function(die){
            die.classList.remove("shake");
        });

        let diceOneValue = Math.floor(Math.random() * 6);
        let diceTwoValue = Math.floor(Math.random() * 6);

        document.querySelector("#dice-1").setAttribute("src", images[diceOneValue]);
        document.querySelector("#dice-2").setAttribute("src", images[diceTwoValue]);

        document.querySelector("#total").innerHTML = "O Total de " + ((diceOneValue + 1) + (diceTwoValue + 1));

    }, 1000);
}