/**
 * Created by roisinokeeffe on 13/06/16.
 */
//================================================================================
//ACCORDIAN MENUS ON PORTFOLIO PAGES
//================================================================================

console.log('running portfolio.js');

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
    }
}

console.log('ran portfolio.js');