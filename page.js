// -----------------------------------------------------------------------------
// topPage.js menu

var theBar = 0;
function menuicon() {
    // logger("+ Clicked menuicon");
    document.getElementById("menuDropdownItems").classList.toggle("show");
}
function menubar() {
    theBar = 1;
    // logger("+ Clicked menubar");
}

// -----------------------------------------------------------------
// Page menu

var ptheBar = 0;
function pmenuicon() {
    logger("+ Clicked menuicon");
    document.getElementById("pmenuDropdownItems").classList.toggle("pshow");
}
function pmenubar() {
    ptheBar = 1;
    logger("+ Clicked menubar");
}
window.onclick = function (e) {
    logger("+ Clicked window 1");
    if (!e.target.matches('.pmenuicon') && !e.target.matches('.pmenubar')) {
        if (ptheBar === 0) {
            logger("+ Clicked window 2");
            var dropdowns = document.getElementsByClassName("pmenuDropdownList");
            for (var d = 0; d < dropdowns.length; d++) {
                var openDropdown = dropdowns[d];
                if (openDropdown.classList.contains('pshow')) {
                    openDropdown.classList.remove('pshow');
                }
            }
        }
    }
    if (!e.target.matches('.menuicon') && !e.target.matches('.menubar')) {
        if (theBar === 0) {
            logger("+ Clicked window 3");
            var dropdowns = document.getElementsByClassName("menuDropdownList");
            for (var d = 0; d < dropdowns.length; d++) {
                var openDropdown = dropdowns[d];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }
    theBar = 0;
    ptheBar = 0;
};

// -----------------------------------------------------------------------------
window.onload = function () {
    log.value = "+++ Start.";
    initializePage();
};

// -----------------------------------------------------------------------------
