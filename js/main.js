

var menuBtn = document.querySelector('.menu-btn');
var navItem = document.querySelector('.nav-item');
var count = 0;
var plusBtn = document.querySelector('#plus-btn');
var minusBtn = document.querySelector('#minus-btn');
var dropdownDestination = document.querySelectorAll('.dropdown-destination li');
var dropdownDeparture = document.querySelectorAll('.dropdown-departure li');
var dropdownVoyage = document.querySelectorAll('.dropdown-voyage li');
var selectedDestination = document.querySelector('.selected-destination')
var selectedDeparture = document.querySelector('.selected-departure')
var selectedDate = document.querySelector('.selected-date')
const tabs = document.querySelectorAll('.planets');
const contents = document.querySelectorAll('.destinations-overview');




menuBtn.addEventListener('click', function() {
    navItem.classList.toggle('active')
})


document.querySelector('#counting').innerText = count;

plusBtn.addEventListener('click', function () {
    increment();
})

minusBtn.addEventListener('click', function () {
    decrement();
})


var increment = () => {

    if (count >= 6) {
        count = 6
        document.querySelector('#plus-btn').classList.add('count-btn-disabled');
    } else {
        count = count + 1;
        document.querySelector('#counting').innerText = count;
        document.querySelector('#plus-btn').classList.remove('count-btn-disabled');
    }
}


var decrement = () => {

    if (count <= 1) {
        count = 1;
        document.querySelector('#minus-btn').classList.add('count-btn-disabled');
    } else {
        count = count - 1;
        document.querySelector('#counting').innerText = count;
        document.querySelector('#minus-btn').classList.remove('count-btn-disabled');
    }
}



dropdownDestination.forEach( function(menu, index) {

    menu.addEventListener('click', function() {
        var item = this.innerText;
        selectedDestination.innerText = item;
    })
} )

dropdownDeparture.forEach( function(menu, index) {

    menu.addEventListener('click', function() {
        var item = this.innerText;
        selectedDeparture.innerText = item;
    })

} )

dropdownVoyage.forEach( function(menu, index) {

    menu.addEventListener('click', function() {
        var item = this.innerText;
        selectedDate.innerText = item;
    })
} )


// destinationsTabs

tabs.forEach( function(tab, index) {
    tab.addEventListener('click', function() {
        tabs.forEach( function(tab) {
            tab.classList.remove('active');
        })

        tab.classList.add('active');

        contents.forEach( function(c) {
            c.classList.remove('active');
        })

        contents[index].classList.add('active');
    })
})