// global variables & query selectors

var ideaArray = []

var inputTitle = document.querySelector('#input-title')
var inputBody = document.querySelector('#input-body')

var saveButton = document.querySelector('#button-save')


// event listeners

saveButton.addEventListener('click', storeNewIdea)

// functions

function storeNewIdea() {
  var newIdea = new Idea(inputTitle.value, inputBody.value)
  ideaArray.push(newIdea)
  console.log(ideaArray);
}
