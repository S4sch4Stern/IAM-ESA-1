document.addEventListener("DOMContentLoaded", function() {
    // Button auswählen
    var tilesButton = document.querySelector('.icon-tiles');

    // Eventlistener hinzufügen
    tilesButton.addEventListener('click', function() {
        // Hauptcontainer auswählen
        var mainContainer = document.querySelector('.view-switching');

        // Toggle-Klasse hinzufügen/entfernen, um zwischen Listen- und Kachelansicht zu wechseln
        mainContainer.classList.toggle('view-tiles');
    });
});
