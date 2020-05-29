$.fn.UiSearch = function(){
    var ui = $(this);
    
    $('.ui-search-selected', ui).on('click', function(){
        $('.ui-search-select-list').show();
        return false;
    });
    $('.ui-search-select-list a', ui).on('click',function(){
        $('.ui-search-selected').text($(this).text());
        $('.ui-search-select-list').hide();
        return false;
    });

    $('body').on('click', function(){
        $('.ui-search-select-list').hide();
    })
}

$(function(){
    $('.ui-search').UiSearch();
});