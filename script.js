var reloadLogoElement = document.getElementById("reloadLogo");
if (reloadLogoElement) {
  reloadLogoElement.addEventListener("click", function () {
    location.reload();
  });
  reloadLogoElement.addEventListener("dragstart", function (event) {
    event.preventDefault();
  });
  reloadLogoElement.addEventListener("contextmenu", function (event) {
    event.preventDefault();
  });
}

var fontlogoElement = document.getElementById("fontlogo");
if (fontlogoElement) {
  fontlogoElement.addEventListener("dragstart", function (event) {
    event.preventDefault();
  });
  fontlogoElement.addEventListener("contextmenu", function (event) {
    event.preventDefault();
  });
}

var notWorkElement = document.getElementById("notWork");
if (notWorkElement) {
  notWorkElement.addEventListener("click", function (event) {
    event.preventDefault();
    alert("Actuellement indisponible");
  });
}
