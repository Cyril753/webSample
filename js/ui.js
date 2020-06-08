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

$.fn.UiTab = function(header, content, focus_prefix){
    var ui = $(this);
    var tabs = $(header, ui);
    var cons = $(content, ui);
    var focus_prefix = focus_prefix || '';

    tabs.on('click', function(){
        var index = $(this).index();
        tabs.removeClass(focus_prefix + 'item_focus').eq(index).addClass(focus_prefix + 'item_focus');
        cons.hide().eq(index).show();

        return false;
    })
}

//back-top

$.fn.UiBackTop = function(){
    var ui = $(this);
    var el = $('<a class="ui-backTop" href="0"></a>');
    ui.append(el);

    var windowHeight = $(window).height();
    $(window).on('scroll',function(){
        var top = $('body').scrollTop();
        if(top > windowHeight){
            el.show();

        }else{
            el.hide();
        }
    });
    el.on('click',function(){
        $(window).scrollTop(0);
    });

}

$(function(){
    $('.ui-search').UiSearch();

    $('.content-tab').UiTab('.caption > .item','.block > .item');
    $('.content-tab .block .item').UiTab('.block-caption > a','.block-content > .block-wrap', 'block-caption-');
    $('body').UiBackTop();
});