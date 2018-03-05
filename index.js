//which of the following are real mouse events?
//mouseout, mousemove, and mouseover
//NOT mouse click or mouseon

//jQuery Event Listener Quiz 2
$(the target element being listended to).on(the type of event being listened for, a function with the stuff we want to do)


//jQuery to set up an event listener.
// remove my-button and add success to body 
$('#my-button').on('click',function() {
    $('#my-button').remove(); 
    $('body').addClass('success');
});
