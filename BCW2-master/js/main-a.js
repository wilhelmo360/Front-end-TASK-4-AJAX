// Create function 'showImages' which
// adds the loaded HTML content to <ul> element

function showImages() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("button").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "images.html", true);
  xhttp.send();
}