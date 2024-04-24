
/**
 * Modifiziert und angepasst durch Alexander Thofern
 * Aufgaben JSL 1+2
 */



/**
 * JSL 1 
 * Function to change active view by switching between the classes list-view and tile-view
 *  changes button icons depending on activ view,
 *  triggers fading out and in effect by using the button
 */

function handleSwitchView() {
  const viewSwitch = document.getElementById("view-switch");
  const iconSwitch = document.getElementById("switchButton");

  const isTileView = viewSwitch.classList.contains("main-list") // gibt true oder false zurück
  
  viewSwitch.classList.add("fade-out")

  setTimeout(() => {
    // switching views
    viewSwitch.classList.toggle("main-list", !isTileView)
    viewSwitch.classList.toggle("main-tile", isTileView)
    
    iconSwitch.classList.toggle("icon-list", isTileView)
    iconSwitch.classList.toggle("icon-tiles", !isTileView)

    // fade-in
    viewSwitch.classList.remove("fade-out")
  }, 2000)
}




/**
 * JSL 1 
 * Function to do an alert by clicking on a li element in both views
 *  alerts the title of the list element
 */

var liItem = document.getElementsByClassName("list-items");
for(var i = 0; i < liItem.length; i++){
  liItem[i].addEventListener("click", function() { 
    alert("Title: " + this.getElementsByClassName("attribute-title")[0].innerHTML);
    });
}


/**
 * JSL 1 
 * Function to do an alert by clicking on the button of a li element in both views
 *  alerts the title and URL of the list element
 */
const liButton = document.getElementsByClassName("list-element-menu");
for(let i = 0; i < liButton.length; i++){
  liButton[i].addEventListener("click", function(event) {
    //hack to stop first alert function 
    event.stopPropagation();  
    alert("Title: " + document.getElementsByClassName("attribute-title")[i].innerHTML
            +"\nURL: " + document.getElementsByClassName("attribute-origin")[i].innerHTML);
  });
}





