
  const cardArray = [
    {
      name: "Luffy",
      img: "./Assests/Images/luffy.jpg",
    },
    {
      name: "Zoro",
      img: "./Assests/Images/zoro.jpg",
    },
    {
      name: "Nami",
      img: "./Assests/Images/nami.jpg",
    },
    {
      name: "Usopp",
      img: "./Assests/Images/ussop.jpg",
    },
    {
      name: "Sanji",
      img: "./Assests/Images/sanji.jpg",
    },
    {
      name: "Chopper",
      img: "./Assests/Images/chopper.jpg",
    },
    {
      name: "Robin",
      img: "./Assests/Images/robin.jpg",
    },
    {
      name: "Franky",
      img: "./Assests/Images/franky.jpg",
    },
    {
      name: "Brook",
      img: "./Assests/Images/brooke.jpg",
    },
    {
      name: "jimbe",
      img: "./Assests/Images/jimbe.jpg",
    },
    {
      name: "Luffy",
      img: "./Assests/Images/luffy.jpg",
    },
    {
      name: "Zoro",
      img: "./Assests/Images/zoro.jpg",
    },
    {
      name: "Nami",
      img: "./Assests/Images/nami.jpg",
    },
    {
      name: "Usopp",
      img: "./Assests/Images/ussop.jpg",
    },
    {
      name: "Sanji",
      img: "./Assests/Images/sanji.jpg",
    },
    {
      name: "Chopper",
      img: "./Assests/Images/chopper.jpg",
    },
    {
      name: "Robin",
      img: "./Assests/Images/robin.jpg",
    },
    {
      name: "Franky",
      img: "./Assests/Images/franky.jpg",
    },
    {
      name: "Brook",
      img: "./Assests/Images/brooke.jpg",
    },
    {
      name: "jimbe",
      img: "./Assests/Images/jimbe.jpg",
    },
  ];

  cardArray.sort(() => 0.5 - Math.random());
  const gridDisplay = document.querySelector("#grid");
  const resultDisplay = document.querySelector("#score");
  let cardsChosen = [];
  let cardsChosenIds = [];
  const cardsWon = [];

  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement("img");
      card.setAttribute("src", "./Assests/Images/onepiecebg.png");
      card.setAttribute("data-id", i);
      card.setAttribute("id", "card");
      card.addEventListener("click", flipCard);
      gridDisplay.appendChild(card);
    }
  }
  function checkMatch() {
    const cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenIds[0];
    const optionTwoId = cardsChosenIds[1];

    if (optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute("src", "./Assests/Images/onepiecebg.png");
      cards[optionTwoId].setAttribute("src", "./Assests/Images/onepiecebg.png");
      // alert('You have clicked the same image!')
    } else if (cardsChosen[0] == cardsChosen[1]) {
      //  alert('You found a match')
      cards[optionOneId].setAttribute("src", "./Assests/Images/Background.svg");
      cards[optionTwoId].setAttribute("src", "./Assests/Images/Background.svg");
      cards[optionOneId].removeEventListener("click", flipCard);
      cards[optionTwoId].removeEventListener("click", flipCard);
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute("src", "./Assests/Images/onepiecebg.png");
      cards[optionTwoId].setAttribute("src", "./Assests/Images/onepiecebg.png");
      // alert('Sorry, try again')
    }
    cardsChosen = [];
    cardsChosenIds = [];
    resultDisplay.innerHTML = cardsWon.length;

    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.innerHTML = "Congratulations! You found them all!";
    }
  }
  //flip your card
  function flipCard() {
    let cardId = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenIds.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkMatch, 350);
    }
  }
  createBoard();

