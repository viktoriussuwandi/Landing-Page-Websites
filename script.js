card_src = [
  "https://upload.wikimedia.org/wikipedia/en/d/d7/Harry_Potter_character_poster.jpg",
  "https://upload.wikimedia.org/wikipedia/en/d/d3/Hermione_Granger_poster.jpg",
  "https://upload.wikimedia.org/wikipedia/en/5/5e/Ron_Weasley_poster.jpg"
]

let card1 = document.getElementById("card_1");
let card2 = document.getElementById("card_2");
let card3 = document.getElementById("card_3");

card1.src = card_src[0];
card2.src = card_src[1];
card3.src = card_src[2];
