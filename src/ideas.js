class Idea {
  constructor(ideaTitle, ideaBody) {
    this.id = Date.now();
    this.title = ideaTitle;
    this.body = ideaBody;
    this.star = false;
  }

  saveToStorage() {
    // items stored to local storage through array rather than individually
  }

  deleteFromStorage() {
    // items deleted from local storage through array rather than individually
  }

  updateIdea(newTitle, newBody) {
    this.title = newTitle;
    this.body = newBody;
  }
}
