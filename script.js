$('img').click(function() {
    
    let swap = $(this).attr('src');
    $(this).attr('src',$(this).attr('data-alt-src'));
    $(this).attr('data-alt-src',swap);
    console.log($(this).attr('src'));
    console.log($(this).attr('data-alt-src'));
});
