class Idea {
  constructor(ideaTitle, ideaBody) {
    this.id = Date.now();
    this.title = ideaTitle;
    this.body = ideaBody;
    this.star = false;//if statement to true if favorited
  }

  saveToStorage() {
    var stringifiedCards = JSON.stringify(ideas)
    localStorage.setItem('saved-cards', stringifiedCards)
  }

  deleteFromStorage() {
    // this.star = false
    // remove from localStorage

  }

  updateIdea(newTitle, newBody) {
    this.title = newTitle;
    this.body = newBody;
  }
}
