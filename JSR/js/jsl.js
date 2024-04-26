
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
 * JSL 2 
 * Function to do an alert by clicking on a li element in both views
 *  alerts the title of the list element
 */
/*
var listItems = document.getElementsByClassName("list-items");
for(var i = 0; i < listItems.length; i++){
  listItems[i].addEventListener("click", function() { 
    alert("Title: " + this.getElementsByClassName("attribute-title")[0].innerHTML);
    });
}


/**
 * JSL 2
 * Function to do an alert by clicking on the button of a li element in both views
 *  alerts the title and URL of the list element
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




// JSL 1 Alert function

/**
 * JSL 2 
 * Function to do an alert by clicking on a li element in both views
 *  alerts the title of the list element
 */

var listItems = document.getElementsByClassName("list-items");
for(var i = 0; i < listItems.length; i++){
  listItems[i].addEventListener("click", function() { 
    alert("Title: " + this.getElementsByClassName("attribute-title")[0].innerHTML);
    });
}


/**
 * JSL 2
 * Function to do an alert by clicking on the button of a li element in both views
 *  alerts the title and URL of the list element
 */

const liElementButton = document.getElementsByClassName("list-element-menu");
for(let i = 0; i < liElementButton.length; i++){
  liElementButton[i].addEventListener("click", function(event) {
    //stopPropagation function to prevent event bubbling of the eventlisteners on the li-elements 
    event.stopPropagation();  
    alert("Title: " + document.getElementsByClassName("attribute-title")[i].innerHTML
            +"\nURL: " + document.getElementsByClassName("attribute-origin")[i].innerHTML);
  }, true);
  
}




// Funktionen Verbesserung Alex
// FIRST TRY


/**
 * JSL 2 
 * function to add an eventListener to all List-elements and their menu bottons
 * displays the title of the li-element which ist clicked
 * displays the title and URL of the li-Element when the menu-button is clicked
 * the function can be used on both type of views
 */
/*
function initEventhandlerForListElements(){
  const listItems = document.getElementsByClassName("list-items");
  
  for(var i = 0; i < listItems.length; i++){
    listItems[i].addEventListener("click", displayElementTitle(listItems[i]));  
  }
  
  const liElementButton = document.getElementsByClassName("list-element-menu");

  for(let i = 0; i < liElementButton.length; i++){
    liElementButton[i].addEventListener("click", displayElementTitleUrl(event,listItems, liElementButton[i]));
      //stopPropagation function to prevent event bubbling of the eventlisteners on the li-elements 
    }
}

/**
 * function displays the title of an li-element by an alert
 * @param listItem 
 */
/*
function displayElementTitle(listItem){
  alert("Title: " + listItem.getElementsByClassName("attribute-title")[0].innerHTML);
}

/**
 * function displays the title of an li-element by an alert
 * @param listItem 
 */
/*
function displayElementTitleUrl(event,listItems, liElementButton) {
  event.stopPropagation();  
  //debugger;
  alert("Title: " + listItems.getElementsByClassName("attribute-title")[i].innerHTML
  +"\nURL: " + liElementButton.getElementsByClassName("attribute-origin")[i].innerHTML);
}






/**
/**
 * JSL 2
 * Function to do an alert by clicking on the button of a li element in both views
 *  alerts the title and URL of the list element
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




// code Verbesserung 25.04.24

/**
 * JSL 1 
 * Function to do an alert by clicking on a li element in both views
 *  alerts the title of the list element
 */
/*
var listItems = document.getElementsByClassName("list-items");
for(var i = 0; i < listItems.length; i++){
  listItems[i].addEventListener("click", function() { 
    alert("Title: " + this.getElementsByClassName("attribute-title")[0].innerHTML);
    });
}

const listItems = document.getElementsByClassName("list-items");
listItems.forEach((item) => item.addEventListener("click", function() {
})
*/
/*
function hallo() {
  console.log("hallo alex")
}

hallo()

function initApp () {
  console.log("a");
  var listItems = document.getElementsByClassName("list-items");
  for(var i = 0; i < listItems.length; i++){
    listItems[i].addEventListener("click", handleClick(listItems[i]));
  }  
}

function handleClick(item) {
  console.log("b");
  alert("Title: " + item.getElementsByClassName("attribute-title")[0].innerHTML);
  console.log(item)
}

function handleAppClick () {
  console.log("a");
  var listItems = document.getElementsByClassName("list-items");
  for(var i = 0; i < listItems.length; i++){
    listItems[i].addEventListener("click", function () {
      getTitle(item)
    });
  }  
}
initApp();


function() 


function getLand () {

}

function Castle () {
  // King
  // Queen
  // Knights
  // Walls
  // Chef
  // Beds
  // Living Rooms
  buildLivingRoom(4)
}

function buildLivingRoom (number) {
  ...
}



// Array.from(listItems).forEach((item) => item.addEventListener("click", handleClick));

function getTitle(item){
  alert("Title: " + item.getElementsByClassName("attribute-title")[0].innerHTML);
};



/**
 * JSL 1 
 * Function to do an alert by clicking on the button of a li element in both views
 *  alerts the title and URL of the list element
 *//*
const liElementButton = document.getElementsByClassName("list-element-menu");
for(let i = 0; i < liElementButton.length; i++){
  liElementButton[i].addEventListener("click", function(event) {
    //hack to stop first alert function 
    event.stopPropagation();  
    alert("Title: " + document.getElementsByClassName("attribute-title")[i].innerHTML
            +"\nURL: " + document.getElementsByClassName("attribute-origin")[i].innerHTML);
  }, true);
  
}
*/