/**
 * Modifiziert und angepasst durch Alexander Thofern
 * Aufgaben JSL 1+2
 */

/**
 * JSL 1
 * function to change active view by switching between the classes list-view and tile-view
 * changes button icons depending on activ view,
 * triggers fading out and in effect by using the button
 */

function handleSwitchView() {
  const viewSwitch = document.getElementById("view-switch");
  const iconSwitch = document.getElementById("switchButton");

  const isTileView = viewSwitch.classList.contains("main-list"); // gibt true oder false zurück

  viewSwitch.classList.add("fade-out");

  setTimeout(() => {
    // switching views
    viewSwitch.classList.toggle("main-list", !isTileView);
    viewSwitch.classList.toggle("main-tile", isTileView);

    iconSwitch.classList.toggle("icon-list", isTileView);
    iconSwitch.classList.toggle("icon-tiles", !isTileView);

    // fade-in
    viewSwitch.classList.remove("fade-out");
  }, 2000);
}

// JSL 2 alert functions are only functional without the in htm.html file integrated jsr.js file
/**
 * WICHTIGER HINWEIS!!!
 * Diese Funktionen funktionieren nur, wenn diese ohne die Datei JSR und den Lösungen ausgeführt werden.
 * Teile dieser Lösung für den die Teilaufgabe JSL2 wurden in der Aufgabe und Datei JSR verwendet.
 * Daher sind diese Funktionen auskommeniert.
 */

/**
 * JSL 2
 * Function to do an alert by clicking on a li element in both views
 *  alerts the title of the list element by using an eventlistener
 */
/*
var listItems = document.getElementsByClassName("list-items");
for(var i = 0; i < listItems.length; i++){
  listItems[i].addEventListener("click", function() { 
    alert("Title: " + this.getElementsByClassName("attribute-title")[0].innerHTML);
    });
}
/*

/**
 * JSL 2
 * Function to do an alert by clicking on the menu-button of a li element in both views
 *  alerts the title and URL of the list element by using an eventlistener
 */
/*
const liElementButton = document.getElementsByClassName("list-element-menu");
for(let i = 0; i < liElementButton.length; i++){
  liElementButton[i].addEventListener("click", function(event) {
    //stopPropagation function to prevent event bubbling of the eventlisteners on the li-elements 
    event.stopPropagation();  
    alert("Title: " + document.getElementsByClassName("attribute-title")[i].innerHTML
            +"\nURL: " + document.getElementsByClassName("attribute-origin")[i].innerHTML);
  }, true);
  
}
*/
