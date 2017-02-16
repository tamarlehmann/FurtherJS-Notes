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
    window.addEventListener("hashchange", showNoteForCurrentHash);
  };

  function showNoteForCurrentHash(){
    showNote(getNoteFromUrl(window.location));
  };

  function getNoteFromUrl(location){
    return parseInt(location.hash.split("#notes/")[1]);
  };

  function showNote(noteId) {
    document.getElementById("singlenote").innerHTML = list.displayList()[noteId].displayNote();
  };

  // NoteController.prototype.submitNote = function(submitEvent) {
  //   this.noteList.addNote(submitEvent.srcElement.elements.textarea.value);
  // };


  document.addEventListener('submit', function (submitEvent){
    submitEvent.preventDefault();
    list.addNote(document.getElementById('textarea').value);
    controller.htmlInserter();
    controller.urlChangeShowsNote();
  });

  // NoteController.prototype.preventFormFromSubmitting = function() {
  //   document
  //     .getElementById("text")
  //     .addEventListener("submit", function(submitEvent){
  //     console.log(submitEvent);
  //     submitEvent.preventDefault();
  //     console.log(this);
  //     // debugger;
  //     this.NoteController.submitNote(submitEvent);
  //     htmlInserter();
  //   });
  // };

  exports.NoteController = NoteController;
})(this)
