// global variables & query selectors

var ideas = []
var newIdea

var inputTitle = document.querySelector('#input-title')
var inputBody = document.querySelector('#input-body')
var userIdeas = document.querySelector('.user-ideas')
var ideaCardTemplate = document.querySelector('#unique-card')
var searchBarInput = document.querySelector('#input-search')

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
searchBarInput.addEventListener('keyup', searchIdeas)


userIdeas.addEventListener('click', function(event) {
  if (event.target.className === 'icon-delete') {
    removeCardFromArray()
    removeCardFromDisplay(event.target.getAttribute('data-card-id'))
  }
});

userIdeas.addEventListener('click', function(event) {
  if (event.target.className === 'icon-star') {
    toggleStarred(event)
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
  updateLocalStorage()
}

function toggleStarred(event) {
  for (var i = 0; i < ideas.length; i++) {
    if (`${ideas[i].id}` === event.target.parentElement.parentElement.id) {
      ideas[i].star = !ideas[i].star
    }
  }

  if (event.target.parentElement.parentElement.classList.contains('starred')) {
    event.target.parentElement.parentElement.classList.remove('starred')
    event.target.src = './assets/star.svg'
  } else {
    event.target.parentElement.parentElement.classList.add('starred')
  }
  updateLocalStorage()
}

function removeCardFromDisplay(id) {
  var cardToDelete = document.getElementById(id)
  userIdeas.removeChild(cardToDelete)
  updateLocalStorage()
}

function removeCardFromArray() {
  var deleteIdea = event.target.getAttribute('data-card-id')

  for (var i = 0; i < ideas.length; i++) {
    if (deleteIdea == ideas[i].id) {
      ideas.splice(i, 1)
    }
  }
}

function searchIdeas() {
  if (searchBarInput.value === "") {
    userIdeas.classList.remove('show-search-ideas')
  } else {
    userIdeas.classList.add('show-search-ideas')
    checkInputField()
  }
}

function checkInputField() {
  for (var i = 0; i < ideas.length; i++) {
    var cardTitle = ideas[i].title.toLowerCase()
    var cardBody = ideas[i].body.toLowerCase()
    var inputField = searchBarInput.value.toLowerCase()
    if (cardTitle.includes(inputField) || cardBody.includes(inputField)) {
      document.getElementById(`${ideas[i].id}`).classList.add('search-includes')
    } else {
      document.getElementById(`${ideas[i].id}`).classList.remove('search-includes')
    }
  }
}

function toggleIdeasDisplay() {
  if (userIdeas.classList.contains('show-starred-ideas')) {
    showStarredIdeasButton.innerText = 'Show Starred Ideas'
  } else {
    showStarredIdeasButton.innerText = 'Show All Ideas'
  }
  userIdeas.classList.toggle('show-starred-ideas')
  updateLocalStorage()
}

function updateLocalStorage() {
  var stringifiedCards = JSON.stringify(ideas)
  var starredButtonState = JSON.stringify(showStarredIdeasButton.innerText)
  localStorage.setItem('saved-cards', stringifiedCards)
  localStorage.setItem('starred-button', starredButtonState)
}

function displayButtonFromStorage() {
  var parsedButtonState = JSON.parse(localStorage.getItem('starred-button'))
  if(parsedButtonState === 'Show All Ideas') {
    userIdeas.classList.add('show-starred-ideas')
    showStarredIdeasButton.innerText = parsedButtonState
  }
}

function displayStoredIdeas() {
  if (localStorage.getItem('saved-cards')) {
    var parsedIdeas = JSON.parse(localStorage.getItem('saved-cards'))
    ideas = parsedIdeas

    createCardsFromStorage()
    checkStarred()
    displayButtonFromStorage()
  }
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
  card.querySelector('img.icon-delete').setAttribute('data-card-id', cardId)
  card.querySelector('img.icon-star').setAttribute('data-card-id', cardId)

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
