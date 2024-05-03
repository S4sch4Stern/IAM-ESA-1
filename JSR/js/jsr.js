/**
 * Modifiziert und angepasst durch Alexander Thofern
 * Aufgaben JSR 1+2
 */

// JSR 1 Anforderung 1 Serverzugriff
/**
 * function to handle onSucces of the xhr function
 * get response (item) from xmlHttp and parse it into data for createLiElements function
 * @param xmlHttp object
 */
function handleOnSuccess(xmlHttp) {
  console.log("handleOnSuccess", xmlHttp);
  const data = JSON.parse(xmlHttp.response);
  // load data to create list items
  createLiElements(data);
}

// JSR 1 Anforderung 1 Serverzugriff
/**
 * function to handle onError
 * @param xmlHttp objekt
 */
function handleOnError(xmlHttp) {
  var error = xmlHttp;
  console.error("handleOnError:", error);
  if (error.response == "") {
    alert("Error Abfrage wurde verweigert");
  } else {
    alert(error.response);
  }
}

// HINWEIS AUSKOMMENTIEREN für die Funktionalität bis JRS 1 Anforderung 4
// ZUSÄTZLICH ENTKOMMENRIEREN der anderen createLiElements Funktion "nur" mit alerts ab Zeile 237
// JSR 1 Anforderung 2 Elemente vom Server in die Liste hinzufügen
// JSR 2 Anforderung 2 li-Element entfernen mittels comfirm über Options-Button (list-element-menu)
// JSR 2 Anforderung 3 (alert) für alle li-Elemente
/**
 * function to create li elements out of data from serverlist listitems.json
 * add li-elements dynamically to ul-elements
 * @param items array object
 */

function createLiElements(items) {
  const viewSwitch = document.getElementById("view-switch");

  //JSR 1 Anforderung 3 Refresh der Liste
  viewSwitch.innerHTML = "";

  items.forEach((item) => {
    var li = document.createElement("li");
    // JSR 2 Anforderung 3 (alert) für alle li-Elemente
    li.addEventListener("click", function () {
      alert(
        "Title: " + this.getElementsByClassName("attribute-title")[0].innerHTML
      );
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
    var itemOrigin = document.createElement("p");
    div3a.appendChild(itemOrigin);
    itemOrigin.classList.add("attribute-origin");
    itemOrigin.innerText = item.owner;
    var itemDate = document.createElement("p");
    div3a.appendChild(itemDate);
    itemDate.classList.add("attribute-date");
    itemDate.innerText = item.added;

    var div3b = document.createElement("div");
    div2.appendChild(div3b);
    var itemTitle = document.createElement("p");
    div3b.appendChild(itemTitle);
    itemTitle.classList.add("attribute-title");
    itemTitle.innerText = item.title;

    var div3c = document.createElement("div");
    div2.appendChild(div3c);
    var itemNumOfTags = document.createElement("p");
    div3c.appendChild(itemNumOfTags);
    itemNumOfTags.classList.add("attribute-tag");
    itemNumOfTags.innerText = item.numOfTags;

    var menuButton = document.createElement("button");
    // JSR 2 Anforderung 2 (confirm) für alle list-elemente-menu (buttons)
    menuButton.addEventListener("click", function (event) {
      //stopPropagation function to prevent event bubbling of the eventlisteners on the li-elements
      event.stopPropagation();
      if (
        confirm(
          "Soll dieser Eintrag gelöscht werden?" +
            "\nTitle: " +
            itemTitle.innerText +
            "\nURL: " +
            img.src
        )
      ) {
        li.remove();
      }
    });

    menuButton.classList.add("list-element-menu");
    div1.appendChild(menuButton);

    viewSwitch.appendChild(li);
  });
}

// Übergabe der JSON Datei mittels Link des eigenen Live Servers
// Es wurde der Live Server "127.0.0.1:5501" von vscode verwendet
// folgender Pfad "http://127.0.0.1:5500/IAM-ESA-1/.../listitems.json" muss angepasst werden,
// sofern die Anwendung auf einem anderen Server gestartet werden soll
const apiUrl = "http://127.0.0.1:5500/IAM-ESA-1/JSR/data/listitems.json";

/**
 * function for loading data from server by start of the application
 */
// JSR1 Anforderung 1 Serverzugriff
function loadData() {
  xhr("GET", apiUrl, null, handleOnSuccess, handleOnError);
}
loadData();

// JSR 1 Anforderung 3 Refresh der Liste
/**
 * function to refresh the list items
 * loading the json file again by using loadData()
 */
function refreshListElements() {
  loadData();
}

// HINWEIS AUSKOMMENTIEREN für die Funktionalität bis JRS 1 Anforderung 4
// ZUSÄTZLICH ENTKOMMENRIEREN der createLiElements Funktion "nur" mit alerts ab Zeile 237
// JSR 2 Anforderung 1 li-Element zur view-switch (Liste) hinzufügen
// JSR 2 Anforderung 2 li-Element entfernen mittels comfirm über Options-Button (list-element-menu)
// JSR 2 Anforderung 3 (alert) für alle li-Elemente
/**
 * function to add a new element by clicking on the icon-plus button
 */

function addElement() {
  const viewSwitch = document.getElementById("view-switch");

  // JSR 2 Anforderung 3 (alert) für alle li-Elemente
  var li = document.createElement("li");
  li.addEventListener("click", function () {
    alert(
      "Title: " + this.getElementsByClassName("attribute-title")[0].innerHTML
    );
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

  var itemOrigin = document.createElement("p");
  div3a.appendChild(itemOrigin);
  itemOrigin.classList.add("attribute-origin");
  itemOrigin.innerText = "Ownername.com";

  var itemDate = document.createElement("p");
  div3a.appendChild(itemDate);
  itemDate.classList.add("attribute-date");
  // JSR2 - Anforderung 1 Datum
  itemDate.innerText = new Date().toLocaleDateString();

  var div3b = document.createElement("div");
  div2.appendChild(div3b);
  var itemTitle = document.createElement("p");
  div3b.appendChild(itemTitle);
  itemTitle.classList.add("attribute-title");
  itemTitle.innerText = "Itemtitel";

  var div3c = document.createElement("div");
  div2.appendChild(div3c);
  var itemNumOfTags = document.createElement("p");
  div3c.appendChild(itemNumOfTags);
  itemNumOfTags.classList.add("attribute-tag");
  itemNumOfTags.innerText = 7;

  var menuButton = document.createElement("button");
  // JSR 2 Anforderung 2 (confirm) für alle list-elemente-menu (buttons)
  menuButton.addEventListener("click", function (event) {
    //stopPropagation function to prevent event bubbling of the eventlisteners on the li-elements
    event.stopPropagation();
    if (
      confirm(
        "Soll dieser Eintrag gelöscht werden?" +
          "\nTitle: " +
          itemTitle.innerText +
          "\nURL: " +
          img.src
      )
    ) {
      li.remove();
    }
  });

  menuButton.classList.add("list-element-menu");
  div1.appendChild(menuButton);

  viewSwitch.appendChild(li);
}

// HINWEIS ENTKOMMENRIEREN für die Funktionalität bis JRS 1 Anforderung 4
// ZUSÄTZLICH AUSKOMMENTIEREN die andere createLiElements Funktion mit confirm ab Zeile 34
// JSR 1 Anforderung 2 Elemente vom Server in die Liste hinzufügen
// JSR 1 Anforderung 4 alert Dialog bei Listenelementen und Optionbuttons
/**
 * function to create li elements out of data from serverlist listitems.json
 * add li-elements dynamically to ul-elements
 * @param items array object
 */
/*
function createLiElements(items) {
  const viewSwitch = document.getElementById("view-switch");
  console.log(items);
  console.log(typeof items);

  //JSR 1 Anforderung 3
  viewSwitch.innerHTML = "";

  items.forEach((item) => {
    var li = document.createElement("li");
    // JSR 1 Anforderung 4
    // JSL 2 alert function for li-element changed to confirm function for JSR 2
    li.addEventListener("click", function () {
      alert(
        "Title: " + this.getElementsByClassName("attribute-title")[0].innerHTML
      );
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
    var itemOrigin = document.createElement("p");
    div3a.appendChild(itemOrigin);
    itemOrigin.classList.add("attribute-origin");
    itemOrigin.innerText = item.owner;
    var itemDate = document.createElement("p");
    div3a.appendChild(itemDate);
    itemDate.classList.add("attribute-date");
    itemDate.innerText = item.added;

    var div3b = document.createElement("div");
    div2.appendChild(div3b);
    var itemTitle = document.createElement("p");
    div3b.appendChild(itemTitle);
    itemTitle.classList.add("attribute-title");
    itemTitle.innerText = item.title;

    var div3c = document.createElement("div");
    div2.appendChild(div3c);
    var itemNumOfTags = document.createElement("p");
    div3c.appendChild(itemNumOfTags);
    itemNumOfTags.classList.add("attribute-tag");
    itemNumOfTags.innerText = item.numOfTags;

    var menuButton = document.createElement("button");
    // JSR 1 Anforderung 4 alert für alle li-Elemente
    menuButton.addEventListener("click", function (event) {
      //stopPropagation function to prevent event bubbling of the eventlisteners on the li-elements
      event.stopPropagation();
      alert("Title: " + itemTitle.innerText + "\nURL: " + img.src);
    });

    menuButton.classList.add("list-element-menu");
    div1.appendChild(menuButton);

    viewSwitch.appendChild(li);
  });
}
*/
