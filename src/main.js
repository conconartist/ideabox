// global variables & query selectors

var ideas = []
var favIdeas = []; //starred and saved to local storage

var inputTitle = document.querySelector('#input-title')
var inputBody = document.querySelector('#input-body')
var userIdeas = document.querySelector('.user-ideas')
var ideaCardTemplate = document.querySelector('#unique-card')

var saveButton = document.querySelector('#button-save')
var deleteIdea = document.querySelector('.icon-delete')
var favIdea = document.querySelector('.icon-star')
var showFavIdeasButton = document.querySelector('#button-starred')

// event listeners
saveButton.addEventListener('click', saveNewIdea)
inputBody.addEventListener('keyup', setSaveButtonState)
inputTitle.addEventListener('keyup', setSaveButtonState)
showFavIdeasButton.addEventListener('click', )

userIdeas.addEventListener('click', function(event) {
  if (event.target.className === 'icon-delete') {
    removeCardDisplay(event.target.id)
    removeCardFromArray()
  }
});

userIdeas.addEventListener('click', function(event) {
  if (event.target.className === 'icon-star') {
    activeStar()
    addStar(event.target.id)
  }
});

// functions

function saveNewIdea() {
  var newIdea = new Idea(inputTitle.value, inputBody.value)
  ideas.push(newIdea)

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
  var cardToStar = event.target.id
  for (i = 0; i < ideas.length; i++) {
    if(ideas[i].id == cardToStar) {
      ideas[i].star = true;
    }
  }
}

function  activeStar() {
  if (event.target.src.includes('/assets/star.svg')) {
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

function saveCardToLocalStorage () {
//all cards created are saved to local storage from ideas array
//use idea class currentIdea.saveToStorage();
}

function deleteCardFromLocalStorage() {
  //remove card from ideas array
  //remove card from fav ideas array
}

function showStarredIdeas() {
  //retrieve cards from localStorage
  //loop through star = true
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
