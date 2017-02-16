function testSingleNoteView(){
  var note = new Note("This is a note");
  var singleNoteView = new SingleNoteView(note);
  var htmlString = "<div>This is a note</div>"
  assert.isTrue(singleNoteView.display() === htmlString);
}
console.log("13. Returns a string of HTML that represents the single note view.");
testSingleNoteView()
