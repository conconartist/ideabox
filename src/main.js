// global variables & query selectors

var ideaArray = []

var inputTitle = document.querySelector('#input-title')
var inputBody = document.querySelector('#input-body')

var saveButton = document.querySelector('#button-save')


// event listeners

saveButton.addEventListener('click', saveNewIdea)
inputBody.addEventListener('keyup', enableSaveButton)
inputTitle.addEventListener('keyup', enableSaveButton)

// functions

function saveNewIdea() {
  var newIdea = new Idea(inputTitle.value, inputBody.textarea)
  ideaArray.push(newIdea)
  
  clearInputFields()
}

function enableSaveButton() {
  if (inputTitle.value !== '' && inputBody.value !== '') {
    saveButton.disabled = false
  }
}

function clearInputFields() {
  inputTitle.value = ''
  inputBody.textarea = ''
}
