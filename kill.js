function blockAndDisplay() {
    var content = $('.content');
    var message = $('#distracted');

    content.empty();
    if (content.length == 0) {
        message.remove();
    } else if (message.length == 0) {
        message = $('<h1>')
            .attr('id', 'distracted')
            .text("Don't get distracted by Reddit!")
            .css('font-size', '30px')
            .css('font-family', "'Helvetica Neue', Helvetica, Arial, 'lucida grande', tahoma, verdana, arial, sans-serif")
            .css('position', 'relative')
            .css('text-align', 'center')
            .css('top', '10px');
        content.after(message);
     }
}

window.setInterval(blockAndDisplay, 100);
