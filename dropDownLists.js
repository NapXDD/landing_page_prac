/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    var element = document.getElementById("myDropDown")
    element.classList.toggle("show")
}

  
//Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.menu-button')) {
      var dropdowns = document.getElementsByClassName("nav-items");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        console.log(i)
        var openDropdown = dropdowns[i];
        console.log(openDropdown)
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
