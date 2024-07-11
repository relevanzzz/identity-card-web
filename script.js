// Kontaktformular
// GitHub Pages kann kein PHP, deshalb öffne ich einfach das Mailprogramm
// mit den ausgefüllten Feldern (mailto-Link).

var formular = document.getElementById("kontaktformular");

formular.addEventListener("submit", function (event) {
  event.preventDefault(); // Seite nicht neu laden

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var betreff = document.getElementById("betreff").value;
  var nachricht = document.getElementById("nachricht").value;
  var fehler = document.getElementById("fehler");

  // prüfen ob alles ausgefüllt ist
  if (name == "" || email == "" || nachricht == "") {
    fehler.innerHTML = "Please fill in your name, email and message.";
    return;
  }

  fehler.innerHTML = "";

  if (betreff == "") {
    betreff = "Message from my website";
  }

  var text = nachricht + "\n\n" + name + " (" + email + ")";

  window.location.href = "mailto:stefan@wering.la"
    + "?subject=" + encodeURIComponent(betreff)
    + "&body=" + encodeURIComponent(text);
});
