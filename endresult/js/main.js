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




/*Portfolio*/
var portfolio = document.getElementById('portfolio');
var portfolioCo = document.getElementById('content-portfolio');
var withoutPortfolio = document.querySelector('.cl-effect-4 li a');


portfolio.onclick = function(){
    portfolio.classList.add('this_page');
    portfolioCo.style.display = 'block';
    withoutPortfolio.classList.remove('this_page');
}
portfolioCo.onclick = function(){
    portfolio.classList.remove('this_page');
    portfolioCo.style.display = 'none';
    withoutPortfolio.classList.add('this_page');
}