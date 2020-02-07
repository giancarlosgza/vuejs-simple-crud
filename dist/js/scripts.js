new WOW().init();

// DATA TABLES
$(document).ready(function () {
    $('table.display').DataTable();
});

// BACK TO TOP BUTTON
// When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function () {
//     scrollFunction()
// };

// function scrollFunction() {
//     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//         document.getElementById("backTop").style.display = "block";
//     } else {
//         document.getElementById("backTop").style.display = "none";
//     }
// }

// // When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//     document.body.scrollTop = 0;
//     document.documentElement.scrollTop = 0;
// }

$('.btn-fab').on('click',function(){
    if ($(this).find('i').text() == 'star_border'){
        $(this).find('i').text('star');
    } else {
        $(this).find('i').text('star');
    }
});

// TOOLTIPS ANIMATION
$(document).ready(function () {
    $('.tooltip-inner').addClass('animate zoomIn')
});

// TOOLTIP INIT
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

// SNACKBAR REMOVE
$("#snackbarAction").click(function () {
    $("#snackbar").remove();
});

// SELECT2
$(document).ready(function () {
    $('.js-example-basic-single').select2({
        minimumResultsForSearch: -1
    });
});

// SIDEBAR
$(document).ready(function () {
    $("#sidebar").mCustomScrollbar({
        theme: "minimal"
    });

    $('#sidebarCollapse').on('click', function () {
        // open or close navbar
        $('#sidebar, #content').toggleClass('active');
        // close dropdowns
        $('.collapse.in').toggleClass('in');
        // and also adjust aria-expanded attributes we use for the open/closed arrows
        // in our CSS
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });

});

// SIDE SHEET
$(document).ready(function () {
    $("#sidebar2").mCustomScrollbar({
        theme: "minimal"
    });

    $('#dismiss, .overlay').on('click', function () {
        $('#sidebar2').removeClass('active');
        $('.overlay').removeClass('active');
    });

    $('#sidebarCollapse2').on('click', function () {
        $('#sidebar2').addClass('active');
        $('.overlay').addClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });
});

// DARK MODE
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);