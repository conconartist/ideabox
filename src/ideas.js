class Idea {
  constructor(ideaTitle, ideaBody) {
    this.id = Date.now();
    this.title = ideaTitle;
    this.body = ideaBody;
    this.star = false;
  }

  saveToStorage() {
    // this.star = true
    // add to localStorage
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
