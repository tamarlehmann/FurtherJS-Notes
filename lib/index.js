var list = new NoteList();
var element = document.getElementById('app');
var controller = new NoteController(list, element);

document.addEventListener('submit', function(evt) {
  evt.preventDefault();
  controller.handleSubmit();
});
