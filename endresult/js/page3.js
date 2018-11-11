/*слайдшоу*/
var slideNow = 1;
var translateHeight = 0;
var slideInterval = 3000;
var slideCount = $('#slidewrapper').children().length;
console.log(slideCount);

function nextSlide() {
    if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
        $('#slidewrapper').css('transform', 'translate(0, 0)');
        slideNow = 1;
    } else {
        translateHeight = -$('#viewport').height() * (slideNow);
        $('#slidewrapper').css({
            'transform': 'translate(0 ,' + translateHeight + 'px)',
            '-webkit-transform': 'translate(0, ' + translateHeight + 'px)',
            '-ms-transform': 'translate(0, ' + translateHeight + 'px)',
        });
        slideNow++;
    }
};

$(document).ready(function () {
    setInterval(nextSlide, slideInterval);
}); 


/*Возврат выделения пункта меню, который указывает на то, на какой странице мы находимся*/
portfolioCo.onclick = function(){
    withoutPortfolio.classList.add('this_page');
    portfolio.classList.remove('this_page');
    portfolioCo.style.display = 'none';
}