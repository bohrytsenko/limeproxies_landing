$( document ).ready(function() {

    //Tabs

    $('.tabs_list div').click(function(e){
        $('.tabs_list div').removeClass('active');
        $('.tabs_img img').removeClass('active');
        $(this).addClass('active');
        $('#'+$(this).attr('data-id')).addClass('active');
        e.preventDefault();
    });

});


