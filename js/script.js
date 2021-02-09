var btn = document.getElementById("btn-dropdown");
var list = document.getElementById("dropdown-list");
list.style.display = "none";
btn.addEventListener("click", (event) => {
    if (list.style.display == "none") {
      list.style.display = "block"
    } else {
      list.style.display = "none"
    }
  });
  

  