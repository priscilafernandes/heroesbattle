window.onload = loadImages();

function heroChoosen1() {
  let hero1 = dropHeroMenu1.value;
  return hero1;
}

function heroChoosen2() {
  let hero2 = dropHeroMenu2.value;
  return hero2;
}

function loadImages() {
  let imagesContainer = document.getElementsByClassName("images-container");
  images.forEach((imageURL, index) => {
    let image = $('<img>');
    $('.images-container').append(
      // $('<img>')
      // .attr('src', imageURL)
      // .attr('data-id', index)
      // .addClass('image')
      `<div class='frame'><img id='index' class='image' src=${imageURL}></div>`
    );
  });

  for (let i = 0; i < imagesContainer.length; i++) {
    imagesContainer[i].addEventListener('click', showHeroes, false);
  }
}

$(".btn-fight").click(function() {
  let hero1 = heroChoosen1();
  let hero2 = heroChoosen2();
  battleResult(hero1, hero2);
});

function battleResult(hero1, hero2){
  let indexHero1 = getData("Super Name")[0].findIndex(nameHero => nameHero === hero1);
  let indexHero2 = getData("Super Name")[0].findIndex(nameHero => nameHero === hero2);

  let averageHero1 = grade(indexHero1);
  let averageHero2 = grade(indexHero2);

  if (averageHero1 > averageHero2) {
    return averageHero1;
  } else {
    return averageHero2;
  }
}

function grade(index){
  let sum = (6*getData('Intelligence')[0][index] +
    2*getData('Strength')[0][index] +
    4*getData('Speed')[0][index] +
    3*getData('Durability')[0][index] +
    5*getData('Power')[0][index] +
    getData('Combat')[0][index])/20;

  if (getData('Character Type')[0][index] === "Mutante") {
    sum+=5;
  } else if (getData('Character Type')[0][index] === "God/Eternal") {
    sum+=10;
  } else if (getData('Character Type')[0][index] === ("Alien" || "Radiation")){
    sum+=3;
  } 
  
  return sum;
}

function showHeroes(event) {
  let index = event.target.dataset.id;


}
