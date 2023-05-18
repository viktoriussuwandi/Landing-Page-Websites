cards_src = [
  "https://upload.wikimedia.org/wikipedia/en/d/d7/Harry_Potter_character_poster.jpg",
  "https://upload.wikimedia.org/wikipedia/en/d/d3/Hermione_Granger_poster.jpg",
  "https://upload.wikimedia.org/wikipedia/en/5/5e/Ron_Weasley_poster.jpg"
]

let card1 = document.getElementById("card_1");
let card2 = document.getElementById("card_2");
let card3 = document.getElementById("card_3");

card1.src = cards_src[0];
card2.src = cards_src[1];
card3.src = cards_src[2];

shapshot_src = [
  "https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Harry_Potter_and_the_Philosopher%27s_Stone_banner.jpg/330px-Harry_Potter_and_the_Philosopher%27s_Stone_banner.jpg",
  "https://upload.wikimedia.org/wikipedia/en/thumb/c/c0/Harry_Potter_and_the_Chamber_of_Secrets_movie.jpg/330px-Harry_Potter_and_the_Chamber_of_Secrets_movie.jpg",
  "https://upload.wikimedia.org/wikipedia/en/thumb/b/bc/Prisoner_of_azkaban_UK_poster.jpg/330px-Prisoner_of_azkaban_UK_poster.jpg"
]

let carausel1 = document.getElementById("carausel1");
let carausel2 = document.getElementById("carausel2");
let carausel3 = document.getElementById("carausel3");

carausel1.src = shapshot_src[0];
carausel2.src = shapshot_src[1];
carausel3.src = shapshot_src[2];

txt_title = ["title1", "title2", "title3"]
txt_des   = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."

title_carausel1 = document.getElementsByClassName("movie_title1");
title_carausel1.innerHTML = txt_title[0];

title_carausel2 = document.getElementsByClassName("movie_title2");
title_carausel2.innerHTML = txt_title[1];

title_carausel3 = document.getElementsByClassName("movie_title3");
title_carausel3.innerHTML = txt_title[2];
