const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

var fadeIns = document.querySelectorAll('.fade-in');

function onScroll() {
    for (var i = 0; i < fadeIns.length; i++) {
        if (isElementInViewport(fadeIns[i])) {
            fadeIns[i].classList.add('is-visible');
        }
    }
}

window.addEventListener('scroll', onScroll);

// scroll to top function;
let mybutton = document.getElementById("my-Btn");

// Hidden until scrolled down effect
window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 550 || document.documentElement.scrollTop > 550) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// scroll to top when button is clicked
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//tooltip fadeout
$('.tooltip').hover(
    function() {
        $(this).find('.tooltiptext').removeClass('fade-out');
    },
    function() {
        $(this).find('.tooltiptext').addClass('fade-out');
    }
);

//date error
const monthInput = document.getElementById('month');
const yearInput = document.getElementsById('year');
const dateError = document.getElementById('dateError');

monthInput.addEventListener("input", function() {
    const month = monthInput.value;
    if (month.length === 2) {
        yearInput.focus();
    }
});

yearInput.addEventListener("input", function() {
    const year = parseInt(yearInput.value);
    if (year < 23 || year > 33) {
        yearInput.classList.add("error");
        dateError.style.display = "block";
    } else {
        yearInput.classList.remove("error");
        dateError.style.display = "none";
    }
});

// Collapsible
var coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");

        var content = this.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }

    });
}

// Dark mode
const toggleButton = document.getElementById('toggle-dark-mode');
const body = document.body;

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});