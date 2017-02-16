function testNoteControllerCanBeInstantiated() {
  var list = new NoteList();
  var controller = new NoteController(list);
  assert.isTrue(controller instanceof NoteController);
}

console.log("8. A NoteController can be instantiated.");
testNoteControllerCanBeInstantiated();

function testAppElementContainsNotesAsHTML() {
  var doubleElement = document.createElement('div');
  var list = new NoteList();
  list.addNote("Hello, I love Javascript!");
  var controller = new NoteController(list, doubleElement);
  controller.htmlInserter();
  assert.isTrue(controller.element.innerHTML === "<ul><li><div><a href=\"#notes/" + 0 + "\">" + "Hello, I love Javasc</a></div></li></ul>");
}

console.log("9. The app element contains notes as HTML string.");
testAppElementContainsNotesAsHTML();

function testClickedNoteDisplaysSingleNote(){
  var list = new NoteList();
  list.addNote('Hello, I love Javascript!');
  var linkDouble = document.createElement('app');
  var noteDouble = document.createElement('singlenote');
  var controller = new NoteController(list, linkDouble);
  console.log(controller.noteList)
  controller.htmlInserter();
  controller.urlChangeShowsNote();
  linkDouble.querySelector('a').click();
  assert.isTrue(noteDouble.innerHTML === "Hello, I love Javascript!");
};

console.log("10. The singlenote element contains the full text of the note.");
testClickedNoteDisplaysSingleNote()

function testEmptyListOnAppStart() {
  var doubleElement = document.createElement('div');
  doubleElement.innerHTML = "Please add a note";
  var list = new NoteList();
  var controller = new NoteController(list, doubleElement);
  assert.isTrue(controller.element.innerHTML === "Please add a note");
}

console.log("11. When the app loads, the HTML for an empty note list is displayed");
testEmptyListOnAppStart();

function testNewNoteWrittenToAppElement() {
  var doubleFormElement = document.createElement('form');
  doubleFormElement.value = "This is my test. Hi Test";
  var doubleElement = document.createElement('div');
  var list = new NoteList();
  var controller = new NoteController(list, doubleElement);
  list.addNote(doubleFormElement.value)
  controller.htmlInserter();
  controller.urlChangeShowsNote();
  assert.isTrue(controller.element.innerHTML === "<ul><li><div><a href=\"#notes/0\">This is my test. Hi </a></div></li></ul>");
}

console.log("12. When a submit event is triggered, the HTML for a note list with the new note is written to the app element");
testNewNoteWrittenToAppElement();
