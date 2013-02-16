$(document).ready(function(){
    var toggler = jQuery('<a/>', {
        text: 'Light theme'
    });

    $('.pull-left p:first').prepend(toggler);
})
