/**
 * Modifiziert und angepasst durch Alexander Thofern
 * Aufgabe CSS 2 - für die Funktion view-switch zwischen list- und tileview 
 * Aufgabe JSL 1+2 folgt in der Datei JSL
 */

"use strict";

/**
 * Funktion view-switch zwischen list- und tileview  
 * Function to change active view by switching between the classes list-view and tile-view
 *  changes button icons depending on activ view,
 *  triggers fading effect by using the button
 */
function handleSwitchButton(){
  var viewSwitch = document.getElementById("view-switch");
  var iconSwitch = document.getElementById("switchButton");

    if (viewSwitch.classList.contains("main-list")) {
      viewSwitch.classList.remove("main-list");
      viewSwitch.classList.add("main-tile");
      iconSwitch.classList.remove("icon-tiles");
      iconSwitch.classList.add("icon-list");  
    }
    else{
      viewSwitch.classList.remove("main-tile");
      viewSwitch.classList.add("main-list");
      iconSwitch.classList.remove("icon-list");
      iconSwitch.classList.add("icon-tiles");
    }
  
};


