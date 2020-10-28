class Idea {
  constructor(ideaTitle, ideaBody) {
    this.id = Date.now();
    this.title = ideaTitle;
    this.body = ideaBody;
    this.star = false;
  }

  saveToStorage() {
    // this.star = true
  }

  deleteFromStorage() {
    // this.star = false
  }

  updateIdea() {

  }
}
