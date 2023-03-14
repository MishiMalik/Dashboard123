//* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "flex") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "flex";
    }
  });
}


// ===================================dataTables
// let table = new DataTable('#myTable');



// =============================================sidemenu
$('.side-menu').on("click",function(){
  $(".sidebar").css("left","0px");
  $(".backdrop").css("display","block")
})

$('.backdrop').on("click",function(){
  $(".sidebar").css("left","-300px");
  $(this).css("display","none")
})