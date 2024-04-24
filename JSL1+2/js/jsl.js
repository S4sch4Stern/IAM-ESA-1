

/**
 *  Function to change active view by switching between the classes list-view and tile-view
 *  changes button icons depending on activ view,
 *  triggers fading effect by using the button
 */
/*
function handleSwitchButton(){
  const viewSwitch = document.getElementById("view-switch");
  const iconSwitch = document.getElementById("switchButton");
  const fadeInOut = document.getElementById("fadeInOutSwitch");
  
  
  if (viewSwitch.classList.contains("main-list")) {

    fadeInOut.classList.add("view-shown");
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
*/

/**
 *  Function to change active view by switching between the classes list-view and tile-view
 *  changes button icons depending on activ view,
 *  triggers fading effect by using the button
 */
/*
function handleSwitchButton(){
  const viewSwitch = document.getElementById("view-switch");
  const iconSwitch = document.getElementById("switchButton");
  const fadeInOut = document.getElementById("fadeInOutSwitch");
  
  
  fadeInOut.classList.add("view-fadeout");
  
  setTimeout(() => {}, "2020"); 
    if (viewSwitch.classList.contains("main-list")) {
      viewSwitch.classList.remove("main-list");
      viewSwitch.classList.add("main-tile");
      iconSwitch.classList.remove("icon-tiles");
      iconSwitch.classList.add("icon-list");  
      fadeInOut.classList.add("view-fadein"); 
         
    }
    fadeInOut.classList.remove("view-fadeout");


};
*/








/**
 *  Function to change active view by switching between the classes list-view and tile-view
 *  changes button icons depending on activ view,
 *  triggers fading effect by using the button
 */
/*
function handleSwitchButton(){
  const viewSwitch = document.getElementById("view-switch");
  const iconSwitch = document.getElementById("switchButton");
   fadeout();
  function fadeout(){

    let interval=0;
    interval=setInterval(hide, 50);
    hide();
  
    function hide(){
      const fadeInOut = document.getElementById("fadeInOutSwitch");
      opacity = Number(window.getComputedStyle(fadeInOut).getPropertyValue("opacity"));
      console.log(opacity);
      if(opacity>0){    
        opacity = opacity -0.1;
        fadeInOut.style.opacity = opacity;
        console.log(opacity);
      }else{
        clearInterval(interval);
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
      
      } 
      fadeIn();
      function fadeIn(){

        let interval=0;
        interval=setInterval(hide, 50);
        show();
      
        function show(){
          const fadeInOut = document.getElementById("fadeInOutSwitch");
          opacity = Number(window.getComputedStyle(fadeInOut).getPropertyValue("opacity"));
          console.log(opacity);
          if(opacity<0){    
            opacity = opacity +0.1;
            fadeInOut.style.opacity = opacity;
            console.log(opacity);
          }else{
            clearInterval(interval);
            if (viewSwitch.classList.contains("main-list")) {
              viewSwitch.classList.remove("main-list");
              viewSwitch.classList.add("main-tile");
              iconSwitch.classList.remove("icon-tiles");
              iconSwitch.classList.add("icon-list"); 
    
            if (viewSwitch.classList.contains("main-tile")) {
              viewSwitch.classList.remove("main-tile");
              viewSwitch.classList.add("main-list");
              iconSwitch.classList.remove("icon-list");
              iconSwitch.classList.add("icon-tiles");
          } 
          }
  } 
      }
    }
};
}
    }

    */






    /**
 *  Function to change active view by switching between the classes list-view and tile-view
 *  changes button icons depending on activ view,
 *  triggers fading effect by using the button
 */

// function handleSwitchButton(){
//   const viewSwitch = document.getElementById("view-switch");
//   const iconSwitch = document.getElementById("switchButton");
//    fadeout();
//   function fadeout(){

//     let interval=0;
//     interval=setInterval(hide, 50);
//     hide();
  
//     function hide(){
//       const fadeInOut = document.getElementById("fadeInOutSwitch");
//       opacity = Number(window.getComputedStyle(fadeInOut).getPropertyValue("opacity"));
//       console.log(opacity);
//       if(opacity>0){    
//         opacity = opacity -0.1;
//         fadeInOut.style.opacity = opacity;
//         console.log(opacity);
//       }else{
//         clearInterval(interval);
//         if (viewSwitch.classList.contains("main-list")) {
//           viewSwitch.classList.remove("main-list");
//           viewSwitch.classList.add("main-tile");
//           iconSwitch.classList.remove("icon-tiles");
//           iconSwitch.classList.add("icon-list");
//         }
//         else{
//           viewSwitch.classList.remove("main-tile");
//           viewSwitch.classList.add("main-list");
//           iconSwitch.classList.remove("icon-list");
//           iconSwitch.classList.add("icon-tiles");
//         }
      
//       } 
//       fadeIn();
//       function fadeIn(){

//         let interval=0;
//         interval=setInterval(hide, 50);
//         show();
      
//         function show(){
//           const fadeInOut = document.getElementById("fadeInOutSwitch");
//           opacity = Number(window.getComputedStyle(fadeInOut).getPropertyValue("opacity"));
//           console.log(opacity);
//           if(opacity<0){    
//             opacity = opacity +0.1;
//             fadeInOut.style.opacity = opacity;
//             console.log(opacity);
//           }else{
//             clearInterval(interval);
//             if (viewSwitch.classList.contains("main-list")) {
//               viewSwitch.classList.remove("main-list");
//               viewSwitch.classList.add("main-tile");
//               iconSwitch.classList.remove("icon-tiles");
//               iconSwitch.classList.add("icon-list"); 
    
//             if (viewSwitch.classList.contains("main-tile")) {
//               viewSwitch.classList.remove("main-tile");
//               viewSwitch.classList.add("main-list");
//               iconSwitch.classList.remove("icon-list");
//               iconSwitch.classList.add("icon-tiles");
//           } 
//           }
//   } 
//       }
//     }
// };
// }
//     }

function show() {
    const fadeInOut = document.getElementById("fadeInOutSwitch");
    opacity = Number(window.getComputedStyle(fadeInOut).getPropertyValue("opacity"));
    if(opacity<0){    
      opacity = opacity +0.1;
      fadeInOut.style.opacity = opacity;
    } else {
      clearInterval(interval);
      if (viewSwitch.classList.contains("main-list")) {
        viewSwitch.classList.remove("main-list");
        viewSwitch.classList.add("main-tile");
        iconSwitch.classList.remove("icon-tiles");
        iconSwitch.classList.add("icon-list"); 
      }
      if (viewSwitch.classList.contains("main-tile")) {
        viewSwitch.classList.remove("main-tile");
        viewSwitch.classList.add("main-list");
        iconSwitch.classList.remove("icon-list");
        iconSwitch.classList.add("icon-tiles");
    } 
  }
}

function fadeIn() {
  let interval=0;
  interval=setInterval(hide, 50);
  show();
} 

function fadeout(){
  let interval=0;
  interval=setInterval(hide, 50);
  hide();

}

function hide(){
  const fadeInOut = document.getElementById("fadeInOutSwitch");
  opacity = Number(window.getComputedStyle(fadeInOut).getPropertyValue("opacity"));
  console.log(opacity);
  if(opacity>0){    
    opacity = opacity -0.1;
    fadeInOut.style.opacity = opacity;
    console.log(opacity);
  }else{
    clearInterval(interval);
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
  
  } 
};
    
function handleSwitchButton() {
  const viewSwitch = document.getElementById("view-switch");
  const iconSwitch = document.getElementById("switchButton");
}


{/* <div id="view-switch" class="main-list">
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
    </div> */}

{/* <button id="switchButton"> Change Me</button> */}

// 1. Wir brauchen eine Funktion, die die View von List zu Tile, Tile zu List ändert
function handleSwitchView1() {
  const viewSwitch = document.getElementById("view-switch");
  const iconSwitch = document.getElementById("switchButton");

  const isTileView = viewSwitch.classList.contains("main-list") // gibt true oder false zurück

  viewSwitch.classList.toggle("main-list", isTileView)
  viewSwitch.classList.toggle("main-tile", !isTileView)
  
  iconSwitch.classList.toggle("icon-list", isTileView)
  iconSwitch.classList.toggle("icon-tiles", !isTileView)
}

// 2. Wir brauchen eine Funktion, die beim wechsel der View einen Fade Out und Fade In erzeugt


{/* <div id="view-switch" class="main-list">
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
    </div> */}

    
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
 *  function displays alert with title of <li>-element
 *
 *  @param li element to show title from
 */
function showTitle(li){
  document.addEventListener()
  alert(li.querySelector(".attribute-title").innerHTML);
}

function handleAlert() {
const button = document.getElementsByClassName('myButton');

button.addEventListener('click', function() {
  // code to run when button is clicked
  alert('Your message here');

});

}

const alert =document.getElementsByClassName(".attribute-title");
  alert(alert.innertext("attribute-title"));

