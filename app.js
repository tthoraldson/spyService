$('document').ready(function(){
  $('.newSpy').click(addSpy);

  $('.change').toggle(changeSpy);
  $('.delete').click(deleteSpy);
});
var spyCounter = 0;

function addSpy(){
  spyCounter += 1;
  $('.spies').append('<div id="' + spyCounter + '">' + spyCounter + '<button class="change">Change Spy</button><button class="delete">Delete Spy</button></div>');
  $('#' + spyCounter).css('background-color', 'yellow');

}

function changeSpy(){
  console.log('change');
  $(this).parent().addClass('.marked');
}

function deleteSpy(){
  console.log('delete');
  spyCounter -= 1;
  $(this).parent().remove();
}
