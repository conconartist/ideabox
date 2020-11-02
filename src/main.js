// global variables & query selectors

var ideas = []
var starredIdeas =[];
var newIdea;

var inputTitle = document.querySelector('#input-title')
var inputBody = document.querySelector('#input-body')
var userIdeas = document.querySelector('.user-ideas')
var ideaCardTemplate = document.querySelector('#unique-card')

var saveButton = document.querySelector('#button-save')
var deleteIdea = document.querySelector('.icon-delete')
var favIdea = document.querySelector('.icon-star')
var showStarredIdeasButton = document.querySelector('#button-starred')
var showAllIdeasButton = document.querySelector('#button-all')

// event listeners
// window.addEventListener('load', refreshDisplay)
saveButton.addEventListener('click', saveNewIdea)
inputBody.addEventListener('keyup', setSaveButtonState)
inputTitle.addEventListener('keyup', setSaveButtonState)
showStarredIdeasButton.addEventListener('click', showStarredIdeas)
showAllIdeasButton.addEventListener('click', showAllIdeas)

userIdeas.addEventListener('click', function(event) {
  if (event.target.className === 'icon-delete') {
    removeCardDisplay(event.target.id)
    removeCardFromArray()
  }
});

userIdeas.addEventListener('click', function(event) {
  if (event.target.className === 'icon-star') {
    activeStar(event)
    addStar(event.target.id)
  }
});

// functions

function saveNewIdea() {
  newIdea = new Idea(inputTitle.value, inputBody.value)
  ideas.push(newIdea)
  // saveCardToLocalStorage(newIdea)
  createCardFromTemplate(newIdea)
  clearInputFields()
  setSaveButtonState()
}

function setSaveButtonState() {
  if (inputTitle.value !== '' && inputBody.value !== '') {
    saveButton.disabled = false
  } else {
    saveButton.disabled = true
  }
}

function clearInputFields() {
  inputTitle.value = ''
  inputBody.value = ''
}

function createCardFromTemplate(userIdea) {
  var ideaCard = ideaCardTemplate.content.cloneNode(true)
  addTitleToTemplate(ideaCard, userIdea.title)
  addBodyToTemplate(ideaCard, userIdea.body)
  addIdToTemplate(ideaCard, userIdea.id)

  userIdeas.appendChild(ideaCard)
  clearInputFields()
}

function addStar(id) {
  // var cardToStar = event.target.id
  for (i = 0; i < ideas.length; i++) {
    if(ideas[i].id == id) {
      ideas[i].star = true;
      starredIdeas.push(ideas[i]);
    }
  }
}

function  activeStar() { //pass in event?
  if (event.target.src.includes('/assets/star.svg')) { //use === instead of includes?
    event.target.src = './assets/star-active.svg'
  } else {
    event.target.src = './assets/star.svg'
  }
}

function removeCardDisplay(id) {
  var cardToDelete = document.getElementById(id)
  userIdeas.removeChild(cardToDelete)
}

function removeCardFromArray() {
  var delIdea = event.target.id;
  for (var i = 0; i < ideas.length; i++){
    if(delIdea == ideas[i].id){
      ideas.splice(i, 1);
    }
  }
}

function saveCardToLocalStorage (currentIdea) {
  currentIdea.saveToStorage();
  // var ideasString = JSON.stringify(ideas);
  // localStorage.setItem('storedCards', ideas)
  // localStorage.setItem('savedCards', savedCard);
}

function deleteCardFromLocalStorage() {
  //remove card from ideas array
  //remove card from fav ideas array
}

function showStarredIdeas() {
    userIdeas.innerText = "";
  //figure out how to refresh page and keep the array displayed
  // for (var i = 0; i < ideas.length; i++) {
  //   if(ideas[i].star === true) {
  //     var starredIdea = localStorage.getItem(`${ideas[i].id}`);
  //     var starredItem = JSON.parse(starredIdea);
  //     starredIdeas.push(starredItem);
  //   }
  // }
  displayStarredIdeas();
  showStarredIdeasButton.classList.add('hidden');
  showAllIdeasButton.classList.remove('hidden');
}

function displayStarredIdeas() {
  userIdeas.innerText = "";
  for (var i = 0; i < starredIdeas.length; i++) {
    createCardFromTemplate(starredIdeas[i]);
    //add/hide class for icon active/ hidden?
  }
}

function showAllIdeas() {
  userIdeas.innerText = "";
  showStarredIdeasButton.classList.remove('hidden');
  showAllIdeasButton.classList.add('hidden');

  for (var i = 0; i < ideas.length; i++) {
    createCardFromTemplate(ideas[i]);
  }
}

function refreshDisplay() {
  //if an idea is created, idea card is still there when refreshDisplay
  //when two cards are made, one is deleted, the other is still there on refreshDisplay
  //when a card is favorited, the card is still red star when page is refresh

  // var retrievedCard = localStorage.getItem(`${localStorage[i]}`);
  // var parsedCard = JSON.parse(retrievedCard);
  // storedIdeas.push(parsedCard);
}

function addTitleToTemplate(card, userTitle) {
  card.querySelector('div.card-body h3').innerText = userTitle
}

function addBodyToTemplate(card, userBody) {
  card.querySelector('div.card-body p').innerText = userBody
}

function addIdToTemplate(card, cardId) {
  card.querySelector('section.idea-card').id = cardId
  card.querySelector('img.icon-delete').id = cardId
  card.querySelector('img.icon-star').id = cardId
}
//instead setting each item by id, set the whole array ideas, starred ideas
//every time i create a card, uplaod to idea array, push to local saveToStorage
//every time I star a card, upload to favorites array, push to local saveToStorage
//any time you change the array, save to local saveToStorage
//the only time you need to get the data is on page load
//use if statement (if local storage exists, set array to local storage items), or default
//to empty arrays
