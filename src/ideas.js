class Idea {
  constructor(ideaTitle, ideaBody) {
    this.id = Date.now();
    this.title = ideaTitle;
    this.body = ideaBody;
    this.star = false;//if statement to true if favorited
  }

  saveToStorage() {
      // this.star = true;
      var stringifiedCard = JSON.stringify(this)
      localStorage.setItem(`${this.id}`, stringifiedCard);

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
