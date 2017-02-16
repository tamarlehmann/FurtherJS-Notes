"use strict";

(function(exports){

  function NoteController(noteList, element){
    this.noteList = noteList;
    this._listView = new ListView(noteList);
    this.element = element;
  }

  NoteController.prototype.htmlInserter = function() {
    this.element.innerHTML = this._listView.displayNotes();
  };

  NoteController.prototype.urlChangeShowsNote = function() {
    window.addEventListener("hashchange", showNoteForCurrentHash)
  };

  NoteController.prototype.handleSubmit = function() {
    this.noteList.addNote(document.getElementById('textarea').value)
    this.htmlInserter();
    this.urlChangeShowsNote();
  }

  function showNoteForCurrentHash(){
    showNote(getNoteFromUrl(window.location));
  }

  function getNoteFromUrl(location){
    return parseInt(location.hash.split("#notes/")[1]);
  }

  function showNote(noteId) {
    document.getElementById("singlenote").innerHTML = list.displayList()[noteId].displayNote();
  }

  exports.NoteController = NoteController;
})(this)
