

/**
 * Modifiziert und angepasst durch Alexander Thofern
 * Aufgaben JSR 1+2
 */


/**
 * Übung JSR 1
 * statische elemente list nicht mehr anzeigen
 * Struktur der objekte des JSON Array nicht verändern
 * zum testen dürfen weitere elemente hinzugefügt werden
 * 
 * Anforderung 1 Hierfür können Sie, wie in jsr.js gezeigt, die Funktion xhr() 
 * aus der Skriptdatei js/lib/xhr.js nutzen, die die Verwendung von XMLHttpRequest
 *  für den Zugriff auf denServer kapselt
 * 
 * Anforderung 3 das Dokument darf für diese Funktionen nicht neugeladen werden
 * bzw es gibt sonst 3p Abzug
 * 
 */




    

//todo
/**
 * Laden
 * funktion umittelbar nachdem laden des HTML docs mittels javascript auf die
 * Daten auf dem Server zugreifen 3p
 * 
 */
// function xhr(method, requestpath, obj, onsuccess, onerror) - http://127.0.0.1:5501/S10-IAM/IAM-ESA-1/JSR/htm.html
/**
 * 
 */

function handleOnSuccess(xmlHttp){
    console.log("handleOnSuccess", xmlHttp)
    const data = JSON.parse(xmlHttp.response);
    // todo load data to create
    createLiElements(data);
  }
  
  function handleOnError(xmlHttp){
      var error = xmlHttp;
      console.error("handleOnError:", error);
      if (error.response == "") {
        alert("Error Abfrage wurde verweigert");
      } else {
        alert(error.response);
      }
  }
  
  
//todo
/**
 * Abrufen
 * dynamsich für jedes Element des Arrays auf dem Server Listenelemente erzeugen
 * und in die vorhandene Struktur einfügen  2p
 */
  function createLiElements(items){
      const viewSwitch = document.getElementById("view-switch");
      //todo
        /**
         * Refreshen
         * beim click on refresh-Elemtns (button) die listenansicht
         * neu mit den Daten vom Server befüllen
         * ohne das dargestellte dokument neuzuladen 2p
         */
      viewSwitch.innerHTML = ""
  
          items.forEach(item => {
              var li = document.createElement("li");
              li.addEventListener("click", function() { 
              alert("Title: " + this.getElementsByClassName("attribute-title")[0].innerHTML);
              });

              li.classList.add("list-items");
  
              var div1 = document.createElement("div");
              div1.classList.add("list-element");
              li.appendChild(div1);
              
              var img = document.createElement("img");
              img.classList.add("list-element-image");
              img.setAttribute("src", item.src);  
              console.log(img);
              div1.appendChild(img);  
              
              var div2 = document.createElement("div");
              div2.classList.add("list-element-attributes");
              div1.appendChild(div2);
  
  
              var div3a = document.createElement("div");
              div2.appendChild(div3a);
              var textOrigin = document.createElement("p");
              div3a.appendChild(textOrigin);
              textOrigin.classList.add("attribute-origin");
              textOrigin.innerText = item.owner;
              var textDate = document.createElement("p");
              div3a.appendChild(textDate);
              textDate.classList.add("attribute-date");
              textDate.innerText = item.added;
  
              var div3b = document.createElement("div");
              div2.appendChild(div3b);
              var textTitle = document.createElement("p");
              div3b.appendChild(textTitle);
              textTitle.classList.add("attribute-title");
              textTitle.innerText = item.title;
  
              var div3c = document.createElement("div");
              div2.appendChild(div3c);
              var textNumOfTags = document.createElement("p");
              div3c.appendChild(textNumOfTags);
              textNumOfTags.classList.add("attribute-tag");
              textNumOfTags.innerText = item.numOfTags;  
  
              var menuButton = document.createElement("button");
              menuButton.addEventListener("click", function(event) {
                //stopPropagation function to prevent event bubbling of the eventlisteners on the li-elements 
                event.stopPropagation();  
                if(confirm("Soll dieser Eintrag gelöscht werden?" 
                +"\nTitle: " + textTitle.innerText
                +"\nURL: " + img.src)) {
                  li.remove()
                }
              });

              menuButton.classList.add("list-element-menu");
              div1.appendChild(menuButton);
  
              viewSwitch.appendChild(li);
          });
          
  }


const apiUrl = "http://127.0.0.1:5501/S10-IAM/IAM-ESA-1/JSR/data/listitems.json"

function loadData () {
  xhr("GET", apiUrl, null, handleOnSuccess, handleOnError)
}

loadData();





function refreshListElements(){
    loadData();
}



//todo
/**
 * Übergang der Ansichten und Alert
 * soll ebenfalls in den dynmaischen Aufbau der Listen implementiert sein
 * Die Reaktion auf die Bedienung des ‘Optionen’-Elements werden wir in der
 * folgenden Aufgabe neu umsetzen. (2 P.)
 */






/**
 * JSR 2
 * Listew modifizieren
 * 
 * Anforderung 1 Das aktuelle Datum wird Ihnen formatiert durch den Ausdruck
 * (new Date()).toLocaleDateString() geliefert.>
 * 
 * Anforderung 1 Die genannten Attribute src, owner und numOfTags
 *  werden auch in der durch den Server bereit gestellten Datei
 *  data/listitems.json verwendet
 */


//todo
/**
 * add
 * add Element in beiden Ansichten list and tile
 * + button neue Elemente hinzufügen
 * man darf hardcodierte werte title , src , owner und numoftag verwenden
 *  (für die JSR1 die entsprechenden Werte aus der JSON Datei übernimmt).
 *  JSON attribute added = aktuelles datum in tt.mm.jjjj format
 */

function addElement(){
    const viewSwitch = document.getElementById("view-switch");

    var li = document.createElement("li");
    li.addEventListener("click", function() { 
    alert("Title: " + this.getElementsByClassName("attribute-title")[0].innerHTML);
    });

    li.classList.add("list-items");

    var div1 = document.createElement("div");
    div1.classList.add("list-element");
    li.appendChild(div1);
    
    var img = document.createElement("img");
    img.classList.add("list-element-image");
    img.setAttribute("src", "https://via.placeholder.com/300x300");
    div1.appendChild(img);  
    
    var div2 = document.createElement("div");
    div2.classList.add("list-element-attributes");
    div1.appendChild(div2);


    var div3a = document.createElement("div");
    div2.appendChild(div3a);
    
    var textOrigin = document.createElement("p");
    div3a.appendChild(textOrigin);
    textOrigin.classList.add("attribute-origin");
    textOrigin.innerText = "Ownername.com";
    
    var textDate = document.createElement("p");
    div3a.appendChild(textDate);
    textDate.classList.add("attribute-date");
    textDate.innerText = new Date().toLocaleDateString();

    var div3b = document.createElement("div");
    div2.appendChild(div3b);
    var textTitle = document.createElement("p");
    div3b.appendChild(textTitle);
    textTitle.classList.add("attribute-title");
    textTitle.innerText = "Itemtitel";

    var div3c = document.createElement("div");
    div2.appendChild(div3c);
    var textNumOfTags = document.createElement("p");
    div3c.appendChild(textNumOfTags);
    textNumOfTags.classList.add("attribute-tag");
    textNumOfTags.innerText = 7;  

    var menuButton = document.createElement("button");
    
    menuButton.addEventListener("click", function(event) {
      //stopPropagation function to prevent event bubbling of the eventlisteners on the li-elements 
      event.stopPropagation();  
        if(confirm("Soll dieser Eintrag gelöscht werden?" 
        +"\nTitle: " + textTitle.innerText
              +"\nURL: " + img.src)) {
                li.remove()
              }
    });

    menuButton.classList.add("list-element-menu");
    div1.appendChild(menuButton);

    viewSwitch.appendChild(li);
}

// Initial Setup
//todo
/**
 * ersetze Dialog
 * alert ersetzten durch confirm dialog wie jsl2 anforderung
 * dialog soll eine Rückfrage erhalten
 * indem der Titel und URL des ausgewählten Elemnts genannt werden
 * Entferne bei Bestätigung der Rückfrage das Betreffende element aus der liste
 * 
 */



//todo
/**
 * delete
 * delete Element in beiden Ansichten list and tile
 * Rückbestätigung und Reaktion auf das Ausgewählt3 Element mittels alert dialog
 * auch für neu hinzugefügte Elemente
 */



