var atATimeText = document.getElementById("at-a-time");

var textArray = [
    "One HTML tag at a time",
    "One block at a time",
    "One lizard at a time",
    "One blog post at a time",
    "One video at a time"
]

var randomNumber = Math.floor(Math.random()*textArray.length);

atATimeText.textContent = textArray[randomNumber];
