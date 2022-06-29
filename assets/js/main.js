// Load Bootstrap JS
import bootstrap from 'bootstrap';
import $ from 'jquery';

// Load Styles
import '../scss/main.scss';

$(document).ready(function() {

    let elementsColLeft = $('.elements-col-left');
    let elementsColRight = $('.elements-col-right');

    $.get("https://jsonplaceholder.typicode.com/posts", function(data) {
        for (let i = 0; i < data.length; i++) {
            i < (data.length / 2) ? elementsColLeft.append(`<li> ${i + 1} ${data[i].title} </li>`) : elementsColRight.append(`<li> ${i + 1} ${data[i].title} </li>`);
        }
    });
});