
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