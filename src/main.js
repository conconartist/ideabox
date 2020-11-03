// global variables & query selectors

var ideas = []
var newIdea

var inputTitle = document.querySelector('#input-title')
var inputBody = document.querySelector('#input-body')
var userIdeas = document.querySelector('.user-ideas')
var ideaCardTemplate = document.querySelector('#unique-card')

var saveButton = document.querySelector('#button-save')
var deleteIdea = document.querySelector('.icon-delete')
var favIdea = document.querySelector('.icon-star')
var showStarredIdeasButton = document.querySelector('#button-starred')

// event listeners
window.addEventListener('load', displayStoredIdeas)
saveButton.addEventListener('click', saveNewIdea)
inputBody.addEventListener('keyup', setSaveButtonState)
inputTitle.addEventListener('keyup', setSaveButtonState)
showStarredIdeasButton.addEventListener('click', toggleIdeasDisplay)

userIdeas.addEventListener('click', function(event) {
  if (event.target.className === 'icon-delete') {
    removeCardFromDisplay(event.target.id)
    // event.target.getAttribute('name')
    removeCardFromArray()
  }
});

userIdeas.addEventListener('click', function(event) {
  if (event.target.className === 'icon-star') {
    toggleStarred(event)
    // addStar(event.target.id)
    // event.target.getAttribute('name')
  }
});

// functions

function saveNewIdea() {
  newIdea = new Idea(inputTitle.value, inputBody.value)
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
  newIdea.saveToStorage()
}

function toggleStarred(event) {
  // change card.star to true

  for (var i = 0; i < ideas.length; i++) {
    if (`${ideas[i].id}` === event.target.parentElement.parentElement.id) {
      ideas[i].star = !ideas[i].star
    }
  }

  if (event.target.parentElement.parentElement.classList.contains('starred')) {
    // add starred class to idea-card
    event.target.parentElement.parentElement.classList.remove('starred')
    // toggle star icon
    event.target.src = './assets/star.svg'
  } else {
    event.target.parentElement.parentElement.classList.add('starred')
    // event.target.src = './assets/star-active.svg'
  }
  // if (event.target.src.includes('/assets/star.svg')) { // includes rather than === explanation
  //   event.target.src = './assets/star-active.svg'
  // } else {
  //   event.target.src = './assets/star.svg'
  // }
}

function removeCardFromDisplay(id) {
  var cardToDelete = document.getElementById(id)
  userIdeas.removeChild(cardToDelete)
}

function removeCardFromArray() {
  var deleteIdea = event.target.id

  for (var i = 0; i < ideas.length; i++) {
    if (deleteIdea == ideas[i].id) {
      ideas.splice(i, 1)
    }
  }
}

function toggleIdeasDisplay() {
  // when show starred ideas button is clicked:
  if (userIdeas.classList.contains('show-starred-ideas')) {
    showStarredIdeasButton.innerText = 'Show Starred Ideas'
  } else {
    showStarredIdeasButton.innerText = 'Show All Ideas'
  }
  // add show-starred-ideas class to user-ideas
  userIdeas.classList.toggle('show-starred-ideas')
  // change button innertext to say 'show all ideas'
}

function displayStoredIdeas() {
  var parsedIdeas = JSON.parse(localStorage.getItem('saved-cards'))
  ideas = parsedIdeas

  createCardsFromStorage()
  checkStarred()
}

function createCardsFromStorage() {
  for (var i = 0; i < ideas.length; i++) {
    var ideaCard = ideaCardTemplate.content.cloneNode(true)
    addTitleToTemplate(ideaCard, ideas[i].title)
    addBodyToTemplate(ideaCard, ideas[i].body)
    addIdToTemplate(ideaCard, ideas[i].id)

    userIdeas.appendChild(ideaCard)
  }
}

function checkStarred() {
  for (var i = 0; i < ideas.length; i++) {
    if (ideas[i].star) {
      document.getElementById(`${ideas[i].id}`).classList.add('starred')
    }
  }
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

  // element.setAttribute('name', value)
  // name = 'data-card-id'
}
//instead setting each item by id, set the whole array ideas, starred ideas
//every time i create a card, uplaod to idea array, push to local saveToStorage
//every time I star a card, upload to favorites array, push to local saveToStorage
//any time you change the array, save to local saveToStorage
//the only time you need to get the data is on page load
//use if statement (if local storage exists, set array to local storage items), or default
//to empty arrays
