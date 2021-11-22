function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

// varible
var cards = document.querySelectorAll("card");

//functions

// event listeners

  cards.forEach(item => {
    item.addEventListener('click',function (event)  {
        event.target.classList.add("open");
    })
  })