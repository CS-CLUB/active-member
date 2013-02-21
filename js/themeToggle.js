$(document).ready(function() {
    var toggler = jQuery('<a/>', {
        text: 'Dark theme'
    });

    $('.pull-left p:first').prepend(toggler);

    toggler.click(function() {
        switch($(this).data('theme')) {
            case 'dark':
                $(this).text('Dark theme');
                $('link.darkstrap').attr('href', '');
                $(this).data('theme', 'light');
                break;
            case 'light':
            default:
                $(this).text('Light theme');
                $('link.darkstrap').attr('href', 'css/darkstrap.css');
                $(this).data('theme', 'dark');
        }
    });
})
