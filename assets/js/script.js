let type =  "show";
const OpenMenuChild = (val) => {

    $('.menu-block').hide();

    $('.left-menu').removeClass('active');

    switch(val) {
        case 1:
            $('.left-menu:eq(0)').addClass('active');
            $('.menu-one').show();
            break;
        case 2:
            $('.left-menu:eq(1)').addClass('active');
            $('.menu-two').show();
            break;
        case 3:
            $('.left-menu:eq(2)').addClass('active');
            $('.menu-three').show();
            break;
        case 4:
            $('.left-menu:eq(3)').addClass('active');
            $('.menu-four').show();
            break;
        case 5:
            $('.left-menu:eq(4)').addClass('active');
            $('.menu-five').show();
            break;
        default:
            $('.left-menu:eq(0)').addClass('active');
            $('.menu-one').show();
    }
}

const OpenLeftSideBar = () => {
    $('.left-sidebar').css('left' , '0')
}

const CloseLeftSideBar = () => {
   
    $('.left-sidebar').css('left' , '-100%')
}

const OpenRightSideBar = () => {
    $('.right-sidebar').css('right' , '0')
}

const CloseRightSideBar = () => {
    $('.right-sidebar').css('right' , '-100%')
}

const OpenMobileCart = () => {
    $('.money-cart').css('bottom' , 0);
}

const CloseMobileCart = () => {
    $('.money-cart').css('bottom' , '-100%');
}


const BaccaratShowResult =  () =>  {
    if(type == "unshow") {
        $('.frame-wrapper').css('aspect-ratio'  , '11.7 / 11')
        return type = "show";
    }
    
    if(type == "show") {
        $('.frame-wrapper').css('aspect-ratio'  , '6.1 / 11')
        return type = "unshow";
    }
}

const BoomShowResult  = () => {
    if(type == "unshow") {
        $('.frame-wrapper').css('aspect-ratio'  , '10.18 / 11')
        return type = "show";
    }
    
    if(type == "show") {
        $('.frame-wrapper').css('aspect-ratio'  , '7.7 / 11')
        return type = "unshow";
    }
}

const MarioShowResult  = () => {
    if(type == "unshow") {
        $('.frame-wrapper').css('aspect-ratio'  , '12.15 / 11')
        return type = "show";
    }
    
    if(type == "show") {
        $('.frame-wrapper').css('aspect-ratio'  , '8.7 / 11')
        return type = "unshow";
    }
}

const OhmygoshResult = () => {
    if(type == "unshow") {
        $('.frame-wrapper').css('aspect-ratio'  , '15 / 11')
        return type = "show";
    }
    
    if(type == "show") {
        $('.frame-wrapper').css('aspect-ratio'  , '9.53 / 11')
        return type = "unshow";
    }
}



const HandleHistoryButton = () => {
    $('.history-wrapper').toggle();
    let frame2 = $('.result-frame');
    let frame2W = frame2.width();
    let frame2H = frame2.height();
    let parent2 = frame2.parent()[0].offsetWidth;
    let config2 = parent2 / frame2W;

    frame2.css('transform' ,`scale(${config2})`)
}

const HandleGameResize = () => {

    let frame = $('.main-frame');

    if(!frame.length) return
    let frameW = frame.width();
    let frameH = frame.height();
    let parent = frame.parent()[0].offsetWidth;
    let config = parent / frameW;

    frame.css('transform' ,`scale(${config})`)
    console.log($('.result-frame').parent())
    if($('.result-frame').parent().length  > 0)  {

        let frame2 = $('.result-frame');
        let frame2W = frame2.width();
        let frame2H = frame2.height();
        let parent2 = frame2.parent()[0].offsetWidth;
        let config2 = parent2 / frame2W;

        frame2.css('transform' ,`scale(${config2})`)

    }
}


HandleGameResize();

$(window).resize(() => {
    HandleGameResize();
})  


const ShowChildMenu = (elem) => {
    $(elem).find('.menu-child-lists').toggle();
}

$('.memo-table td').click(function() {
   $(this).parent().next().toggle();
});
